---
# type: docs 
title: BlendOS v4 Install Guide
date: 2023-11-27T15:08:40-05:00
featured: false
draft: false
comment: true
toc: true
reward: false
pinned: false
carousel: false
series:
categories: ['Blog']
tags: ['BlendOS', 'Linux']
images: ['https://cdn.hashnode.com/res/hashnode/image/upload/v1700846244037/cd2cc640-be3a-43af-99b9-a0d253cdf3bc.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp']
---

The BlendOS v4 alpha is now out! Here's how you can install and try it out.

<!--more-->
{{% alert info %}}
{{< alert-heading >}}Info about v4{{< /alert-heading >}}

I'm not going to go over the release details. For those, go to the [release blog post](https://blog.blendos.co/blendos-v4-alpha).
{{% /alert %}}


# Installing v4

BlendOS v4 is a lot more declarative than v3. The current beta must be installed on top of Arch.
## What you'll need

{{< alert danger >}}
{{< alert-heading >}}Do not install this on top of BlendOS v3!{{< /alert-heading >}}
There is no upgrade procedure <i>yet</i>, this will ruin your v3 install if you try to update from it.
{{< /alert >}}


- An Arch Linux VM (or real PC, if you dare) using `mkinitcpio` for the kernel image, **GRUB** as the bootloader, and no disk encryption[^1]. 
- An internet connection
- Time
- Basic YAML knowledge

[^1]: You can use encryption by moving the `akshara` hook after the `encrypt` one in your `mkinitcpio.conf`, but this has not been tested, and is not officially supported.

## Steps

{{< alert info >}}I'm assuming your Arch Linux system is already up and running. If it isn't, there's plenty of guides, and you can just use <code>archinstall</code>.{{< /alert >}}

### Add the `breakfast` repo

At the end of your `/etc/pacman.conf` add the following lines:

```ini
 [breakfast]
 SigLevel = Never
 Server = https://pkg-repo.blendos.co
```
\* Yes, I am aware this has a `SigLevel` of never, this is very insecure. I'm assuming this is just a testing thing and will be fixed.

If you'd like to browse our small repo, [feel free to do so](https://pkg-repo.blendos.co).

### Create your system config

Create a file in `/` named `system.yaml`.

{{% alert info %}}
**Avalible tracks on the [standard repo](https://github.com/blend-os/tracks)**:

- `plasma`
- `gnome`
- `xfce`
- `mate`
- `lxqt`
- `blendos-base` \* Kinda bloated for a base, if you want something stripped down, [see below](#configuration-customization). This track allows for custom desktops and more.
{{% /alert %}}

This is YAML so indentation is important. All indents are 2 *spaces* (no tabs).

{{% alert info %}}
Tip

Some codeblocks may require expanding.

![code](code.png)
{{% /alert %}}

Add the following to it (or something similar):

```yaml
 # /system.yaml

 repo: 'https://pkg-repo.blendos.co/'

 impl: 'https://github.com/blend-os/tracks/raw/main' # or an alternate track repo

 track: 'plasma' # or 'xfce' or 'mate'

                 # GNOME isn't recommended
                 # at the moment as it is
                 # known to be be buggy.

 packages: 
     - 'firefox' # stuff to install using pacman
 #   - 'nvidia-dkms' if you're using an NVIDIA GPU
```

You can add repos and things to this file, as documented [here](#systemyaml):

```yaml
repo: 'https://pkg-repo.blendos.co/'

impl: 'https://github.com/blend-os/tracks/raw/main'

track: 'gnome'

packages:
    - 'micro'
    - 'caddy'

services:
    - 'caddy' # what services to start

package-repos:
    - name: 'chaotic-aur' # the name as it would appear in pacman.conf
      repo-url: 'https://cdn-mirror.chaotic.cx/$repo/$arch' # the Server
```

## Configuration customization

{{< alert info >}}Scroll to the <a href="#steps-contd">next section</a> if you do not wish to customize your config further.{{< /alert >}}

### Track repo

{{< alert info >}}
{{< alert-heading >}}Want to add to this list?{{< /alert-heading >}}
Just make a <a href="#post-comments">comment</a>! I'll look at your repo if you <a href="#post-comments">comment it</a>.
{{< /alert >}}


Currently there are also alternate track repos:

[T2Linux track repo](https://github.com/NoaHimesaka1873/blendos-tracks-t2/):

For T2Linux users.

Avalible tracks:

- All tracks from the standard repo. modified for T2Linux
- `blendos-base` renamed to `blendos-base-t2`

```yaml
impl: 'https://github.com/NoaHimesaka1873/blendos-tracks-t2/raw/main'
```

[ico277 stripped base track repo](https://github.com/ico277/blendos-tracks):

This repo modifies `blendos-base` to be more stripped down, and creates a `blendos-dekstop` track.

Avalible tracks:

- All standard tracks are unmodified, except for `blendos-base`
- `blendos-desktop` added

```yaml
impl: 'https://github.com/ico277/blendos-tracks/raw/main'

track: 'blendos-base' # one of two tracks that differ from the standard repo
```
\* you can also use ico277's `blendos-desktop` track with this repo, which adds a very minimal (like just pipewire and xorg) desktop setup to `blendos-base`.

{{< alert info >}}Always run <code>sudo akshara update</code> after editing your <code>system.yaml</code>.{{< /alert >}}


## Steps (cont.d)

### Installing `akshara`

Run `sudo pacman -Sy akshara`.

### Adding `akshara` into `mkinitcpio`

Edit `/etc/mkinitcpio.conf` and add `akshara` after the `base udev` bit in the `HOOKS` part of the file.

Run `sudo mkinitcpio -P; sudo akshara update`.

Reboot your system.

{{< alert success >}}
{{< alert-heading >}}BlendOS v4 is now installed!{{< /alert-heading >}}
To update your Arch packages, just run <code>sudo akshara update</code>.
{{< /alert >}}

## Post-Install

### Adding repos


Add a line to the end of `system.yaml` like so (using the [`chaotic-aur`](https://aur.chaotic.cx) as an example):

```yaml
package-repos:
    - name: 'chaotic-aur' # repo name as it would appear in pacman.conf
      repo-url: 'https://cdn-mirror.chaotic.cx/$repo/$arch' # Repo URL as it would appear in pacman.conf
```

(the [Chaotic AUR's](https://aur.chaotic.cx) package list can be found [here](https://archlinux.pkgs.org/rolling/chaotic-aur-x86_64/), and packages can be manually downloaded from [here](https://builds.garudalinux.org/repos/chaotic-aur/x86_64/))

If you add repos, run `sudo akshara update` and reboot afterwards.

### Adding AUR packages

Add stuff under the `aur-packages` tag. They will be installed via `paru` automatically (paru is in our repo, don't add it as a package here). You will need to run `sudo akshara update` a lot more often.

```yaml
aur-packages:
  - '1'
  - '2'
```


## Reference

### `system.yaml`
{{% alert info %}}
Tip

Some codeblocks may require expanding.

![code](code.png)
{{% /alert %}}

`system.yaml` structure (preserve all single quotes):

```yaml
repo: 'https://pkg-repo.blendos.co' # Do not change this.

# the track repo
impl: 'https://github.com/USER/REPO/raw/BRANCH'

track: 'plasma' # The track you want

packages:       # Packages to install using pacman
  - 'package_1'
  - 'package_2'
  
aur-packages:   # AUR packages, installed via paru
  - 'package_1-git'
  - 'package_2-bin'

services:       # Enable these systemd services
  - 'service_1'

package-repos:
  - name: 'REPO_NAME' # as it appears in pacman.conf
    repo-url: 'REPO_URL' # the Server variable in pacman.conf for this repo


commands:       # List of commands to run at system build, will execute with root permissions, more file-related stuff like git is tricky
  - 'echo command_1'
  - 'echo command_2'

```

#### `repo`

{{< alert info >}}Default: <code>https://pkg-repo.blendos.co</code>{{< /alert >}}
{{< alert warning >}} This option must be set.{{< /alert >}}

**Type: string value**

Don't change this. Repo where the core blendOS packages (and `akshara`) are stored.



#### `impl`

{{< alert info >}}Default: <code>https://github.com/blend-os/tracks/raw/main</code>{{< /alert >}}
{{< alert warning >}} This option must be set.{{< /alert >}}

**Type: string value**

The repo where the tracks are.

**Adding custom track repos:**

Your repo must have a series of YAML files, look at the [main track repo](https://github.com/blend-os/tracks) for examples.

Your base track must have a `track:` of `custom`, as shown [here](https://github.com/blend-os/tracks/blob/main/blendos-base.yaml). Desktop tracks must have their track set to your base track.

Tracks are like mini `system.yaml` files, and have the same structure.

The easiest way to get started is to just fork the main repo, but `impl` URL structures for common Git forges are shown below:

{{% alert info %}}
**Common git forges:**

GitHub: `https://github.com/USER/REPO/raw/BRANCH`

GitLab: `https://GITLAB-SERVER/USER/REPO/-/raw/BRANCH`

Gitea/Forgejo (i.e. Codeberg): `https://GITEA-SERVER/USER/REPO/raw/branch/BRANCH`

BitBucket Cloud (Not Recommended): `https://bitbucket.org/USER/REPO/raw/FULL_COMMIT_HASH/`[^2]
{{% /alert %}}

#### `track`

{{< alert info >}}Default: <code>blendos-base</code>{{< /alert >}}
{{< alert warning >}} This option must be set.{{< /alert >}}

**Type: string value**

The track yaml file, without the extension (i.e. `blendos-base.yaml` -> `track: blendos-base`).

#### `packages`
{{< alert info >}}Default: none, can be provided by track.{{< /alert >}}

**Type: array**

Add packages to install from the repos (including set custom ones) via `pacman`, one per-line.

```yaml
packages:
  - '1'
  - '2'
```

#### `aur-packages`
{{< alert info >}}Default: none, can be provided by track.{{< /alert >}}

**Type: array**

Same as [`packages`](#packages), but for packages from the AUR.

```yaml
aur-packages:
  - '1-bin'
  - '2-git'
```

#### `services`
{{< alert info >}}Default: none, can be provided by track.{{< /alert >}}

**Type: array**

Services to start via `systemd`.

```yaml
services:
  - 'service-1'
  - 'socket-2.socket'
```

#### `custom-repos`
{{< alert info >}}Default: none, can be provided by track.{{< /alert >}}

**Type: object array**

Custom repos to add. Consists of their name and URL as they would appear in pacman.conf.

```yaml
custom-repos:
  - name: 'NAME'
    url: 'MAIN_REPO_URL'
```

Support for mirror*lists* is coming in the future. For now, you can just pick a mirror or use a geolocator URL if applicable.

#### `commands`
{{< alert info >}}Default: none, can be provided by track.{{< /alert >}}

**Type: array**

Commands to be run at system build, run as root.

```yaml
commands:
  - 'echo 1'
  - 'echo 2'
```



### `akshara`

#### Update system (new arch packages, edited config)

```bash
sudo akshara update
```
\* You will need to reboot after this.


#### Help menu

```bash
akshara help
```

#### Version

```bash
akshara version
```




------

[![notbyai](https://asterisk.is-from.space/r/human.png)](/about/#generative-ai-chatgpt)

-------

For copyright, please also see the [Licensing page](/about#license-exemptions).

[^2]: For BitBucket, you must add all the track files in ONE COMMIT, and use that commit's full hash.
