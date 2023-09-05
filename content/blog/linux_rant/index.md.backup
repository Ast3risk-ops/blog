---
# type: docs 
title: Linux Is a Barrier for Developers.
date: 2023-08-27T20:32:18-04:00
featured: false
draft: true
comment: true
toc: true
reward: false
pinned: false
carousel: true
series: 
categories: ['Blog']
tags: ['Rant', 'Linux']
images: ['https://asterisk.is-from.space/r/sad-linux-tux-security.jpg']
---

Here's why.



<!--more-->
-------

Please don't rush in the comments and say "it's GNU+Linux by the way 🤓," **I KNOW**.

-----

# My rant

## The story

On the evening of August 27th, 2023, I was putting the final touches on my Chris Titus blog post. I started the hugo dev server to check the post over. I opened Dopamine 2 (my music player) at the same time. My PC (running Windows 11 pro, *ew*) did what Windows does best, and just froze. Of course this had to happen now.

After forcefully rebooting it, I wondered to myself why I hadn't gone back to Linux, which never had this issue. Why was I using an OS made by underpaid developers using nothing but duct tape and dreams and owned by a megacorp seeking nothing but dollar signs? The answer was, well, because everybody else did.

## The problem

Here's my problem. Time and time again, I see lackluster, even abysmal software support for Linux. Proton (well it was *made* for games, it gets a pass) and Wine focus too much on games that app support stagnates. Sure, I could *pay for Wine* (CrossOver) or use Bottles, but that just adds more layers of complexity or money I don't want to spend.

So, now I'm asking myself, *Why do developers not want to support Linux, the best kernel/OS/thing ever made?* Then, it dawned on me. Linux. Is. Too. Complex. Now, hold on, don't stop reading, let me explain. I realized a few key problems with Linux really stop developers from caring.

See, Linux is so custom that most support tickets for apps that support Linux *come from Linux* (data taken from BattlEye, an anticheat that supports Linux). This is a *huge* deterrent. See, users spend so much time squabbling over what distro is the best, and then making yet *another* Ubuntu derivative, they fail to see the real problem. They use different distros, kernels, package managers, libraries, desktops and configs.

When you have so many different setups, it's hard for developers to support them all. We see this with PC ports using DirectX 11 instead of 12, because 11 auto-magically handles different hardware specs and configs. However, centralization is also bad, choice is *good*.

These bigger companies want a stable platform to develop for, and with all this choice, that's difficult.

### The options

Linux has a lot of ways to package software for it. Every distro is different, and then you have the universal formats. I'll try and explain why each one is flawed and isn't exactly appealing to developers.

#### Native Packages

This can mean a lot of things, depending on your distro. It could be DEB files, RPM files, zst-compressed package tarballs (Arch btw), APK packages (not Android), NIX packages, building from source, or many others. All these formats are different, and while some can be converted (ex. RPM -> DEB, DEB -> ZST) they're all unique, and have to be compiled for individually. That's too much work for developers, so distro maintainers handle the compilation of packages. Some distros might keep older versions of packages for the sake of stability, others might always be on the bleeding edge. Then there's also issues with conflicting dependencies or overwritten ones (aka dependency hell). This is not appealing because there's too much choice.

#### Snaps

My only memory with snaps is Firefox on Ubuntu, and that was the worst version of Firefox ever made. It took what felt like ages to start. Anyway, snaps are unique here because snaps can also be deployed on the server-side (kinda like docker), but at that point, you could also use Podman and you'd get better preformance and more security. Apparently the reason they take so damn long to start is because they're extracting a `squashfs` image from disk. They clog up your mounts and lengthen your boot time (all snaps are mounted at boot). They also don't have a tool like Flatseal to mangage the security sandbox, and might give apps too many or too little permissions. These aren't great mainly with the slow start time, and low rates of adoption.

#### Flatpaks

I think Nicholas Fraser did a great job explaining some of the issues with Flatpak in this [blog post](https://ludocode.com/blog/flatpak-is-not-the-future). To summarize:

- Flatpaks are big because they depend on "shared runtimes" that are distro-specific (there's ubuntu 20.04 and 22.04 ones for example) and that anybody can make.

- Existing libraries post-2012 are quite backwards compatible, so this shared-runtime system isn't exactly the best one.

- All the downloads mean you're basically downloading another OS on top of your existing one.

- This is a problem as builtin disk space has been shrinking.

- The security sandbox does not have an API like on iOS or Android, as they want flatpak apps to not know they're flatpacked, and is generally not well-enforced or too-well enforced, requiring the use of commands or Flatseal. Apps cannot prompt the user to grant permissions they need, this is all manual.

- Other remotes can have packages with the same reverse DNS prefix, causing confusion.

- This is all so complex, nobody's going to be able to maintain this insanity.

#### Appimages

I mean, you still need [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) for desktop integration, so it's not exactly portable and convenient at the same time. They get to choose what runtimes are included at compile time, which just makes things confusing. They're also big, as they contain all the runtimes the app needs. You get them from AppImageHub (why are there 2 of them?) or a downloads page. On the AUR, these are commonly extracted and converted to ZST packages, and work just fine using the system libraries. These are just not as convenient, and just as big.

#### Binary Tarball

Seriously? Nobody would bother manually making appmenu entries for these. These aren't exactly apps that you install, and they still come with at least *some* libraries.

### Different display and app frameworks

So, let's say I want to make an app for desktop Linux. I have some choices. To make the app, I can make a site and use Electron or Tauri, or I can go ful native and use GTK3, GTK4, libadwaita, QT 5 or QT 6. Then the app might be running on either X11 (suuuper ancient, has less issues) or Wayland (more modern, but has issues). Compatibility layers like Xwayland help, but they aren't perfect.

This means it's difficult to fully support everything, and a lot of games don't work on Wayland for everybody, for example. X11 has horrible tearing for some people who use multiple monitors (ancient software moment).

### Users

So it seems that Linux users *love* to argue about their favorite distro, DE, display server, or app framework. Alongside that, developers love to make a new ubuntu-based distro every week, creating *more* useless choice.

The developers of these frameworks might not bicker, and might have gotten their act together, but users haven't. They think 2% is some kind of huge milestone. It's a great one no doubt, but the other 98% don't give a shit.

To prove my point further, here's a quote:

> Attracting \[big companies\] will only happen by empowering them with a stable platform, not locking them in a box.
>
> *- Nicholas Fraser ([ludocode.com](https://ludocode.com/blog/flatpak-is-not-the-future))*

This is *not* a stable platform. This is hell. Choice is good, but at what point does it become too much?

## The solution

This is hard to fix. Nobody is going to throw away all their hard work to come together. We can just hope that people realize that some form of consolidation is needed to compete with Windows, or to simply expand. We need to fix all these broken technologies for desktop Linux to truly shine as a beacon of freedom from Big Tech surveillance.

-------

![notbyai](https://asterisk.is-from.space/r/human.png)


*Cover image taken from FossBytes.*