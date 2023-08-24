---
# type: docs 
title: Hosting
date: 2023-06-27T10:46:28-04:00
featured: false
draft: false
comment: true
toc: true
reward: false
pinned: false
carousel: false
series:
categories: ['Hosting', 'Blog', 'Hashnode Archive']
tags: ['rant']
images: ['https://cdn.hashnode.com/res/hashnode/image/upload/v1690292610011/85d67c29-eeb0-4449-a04c-30127dfed410.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp']
---

**THIS POST IS FROM MY HASHNODE BLOG, IT IS NOT FRESH AND I HAVE PUT THE ORIGINAL POST DATE AS THE DATE.**

<!--more-->

Please ignore the broken images.



This article doesn't have a cover image, and I think that fits well.

Also, I refuse to censor or edit any key info or ideas in this post, regardless of what anybody says. This is my piece, my part of the story, and nobody can change that.

Also, fuck Hashnode's built-in Grammarly thing. It's useful but also annoying.

All discord images link to their respective messages where possible.

Do not harass any individuals mentioned here.



Now, I *have* been messaging Rudra about stuff regarding Pluox and Zaicadia, which you guys do not need to know about, but it got me thinking. *Maybe I should write my stance regarding all this, could make a nice opinion piece...*

Well, here we are. This is a lot more impromptu and even less planned, so it'll bit a bit all over the place.

# Hosting companies

## Pluox, Zaicadia, and the others I've known

It started when I found Mineberg, a free host. I used them for a bit, but they closed down due to an inability to pay the bills. Manucrack YT, a former support worker, decided to remake it, calling his new host Pluox.

For a time, one Liam Dennison (LiamSystems) worked at Mineberg. Manu had worked under him before at Servacus (UK hosting company, still alive today, where Liam is now) and Liam didn't treat them well, which might have been the catalyst for Pluox's creation. I decided to look up Servacus on the UK's Companies House register, where all new companies *must* list in the UK. That's how I found his name. After Luca couldn't pay the bills for the host, he sold the Discord server (or at least tried to).

I honestly forget where it all began, and how I found Pluox. At some point, I applied for a staff position, which I did get. I began working more closely with the owner and tested their panel and dash at a `.gq` domain, which may have been claimed for free. It was run by Cream and Manu, with Manu doing most of the work and Cream owning everything besides the nodes.

There wasn't much to do as I wasn't granted much power, and Manu handled most of the support tickets as I was unable to do the things people requested due to my permission level. This went on for a while and Pluox grew somewhat. Then, Manu confided in me that Pluox was *losing* money. They never had any accounting or balance sheets, but it was clear they were not making much money, and their costs outpaced what they could earn.

They moved to a new domain and the panel and dash were DDOSed multiple times, due to the Pterodactyl SFTP server and the fact that Cream (more on him later) owned and paid for the domain. The attacks stopped, then Manu said they had been accused by a British kid (username: <s>Denis</s> d0aq) and his cronies kept saying Pluox was using free resources for their hosting. That group (dontabuse, spelt like what you see here) reports and took over 1 host (badsk), making their webpages redirect to their discord (I know a past free resource-based host was `instances.sh`). Using free resources for commercial purposes is against the TOSes of the big VPS providers.

We were fine. However, issues arose again recently. A while after I joined blendOS and made the chat server with Rudra, Cream accused Pluox of stealing data from his host, Zaicadia. Cream owned the Pluox domain (`pluoxhost.xyz`), a proxy used to access their services and prevent DDOS attacks, and had helped pay for the nodes Manu owned and owned 1 node. He then revoked access to all that. After the event, Manu had 1 node, and told me about it. I told him Rudra had a Proxmox server, and he immediately asked for a VPS from there, understandably.

At some point, Manu joined up with plex (aka Alvaro) and CR072, creator of HolaClient, to make a new host, Actium. Plex left (according to him he was kicked out, Manu says he left to make ChromaNodes) and later came back.

### Current Predicament

Actium needs more nodes and that's why it is closed at the time of writing. Manu has contacted me and I've sent messages to Rudra but he hasn't been able to add the public keys needed.

# My stance

## Hosting Companies

I feel that the current hosting market is oversaturated and is dominated by a bunch of big players in each subcategory as well as in terms of general-purpose hosting. The big providers like Hetzner, Oracle Cloud, AWS, Azure, Google Cloud, DigitalOcean, Linode and Vultr (and more) provide general-purpose VPSes and services used by other companies and even other hosts, there is no competing with them. There are free providers like InfinityFree for site hosting. For MC hosting, a bunch of bigger players dominate different sections. Aternos and some others dominate the free MC hosting market.

I just don't see any of the hosts mentioned in the previous section succeeding, they do not differentiate in any way, and even if they did, it's hard to get your brand out there in a crowded marketplace. I just don't see it and a sympathetic admin of dontabuse felt the same way.

## The market as a whole

It's fucked. There is no competition yet at the same time too much of it. A few hosts at the top get it all, while the rest squabble for the scraps of any consumers left over, while they themselves feed the big VPS providers by using them. It takes a certain kind of genius to find an unexploited niche in the market.

## The sponsorships

Goddamn. I mean, the bigger hosts score up sponsorships on YouTube and even with Minecraft mod and modpack creators. All the top modpacks on Modrinth have some kind of sponsor on their Modrinth pages (I don't use CurseForge). This just serves as another way to keep the market in a constant cycle, and could potentially show these companies are either desperate enough to hand out sponsorships to anyone, stupid, or still trying to fruitlessly capture more market share.

## Why this is bad for the consumer

As consumers, we are being cheated. People are overwhelmed with choice, with so many options to choose from, and no guarantee they'll still be around, you have to hope your chosen host doesn't die, get DDOSed, or suffer a data breach. Better hope your account doesn't get hacked either! The big hosts are "too big to fail," just like the big banks (hint hint). They also consume the entire market, somehow stifling competition while also creating too much of it, with all the smaller companies fighting over customers who are essentially table scraps from the bigger hosts, while being unable to secure a bigger piece of the hosting pie.

So, as the consumer, you are left to either pay too much to big hosts (or use free ones that give you either non-24/7 servers or shit 24/7 ones) or use smaller hosts with fewer resources and no guarantee of stability. So if you can, use your own pc, your own server, you can host anything; just pop your Linux distro of choice on that old pc, set up a DMZ, port forwarding or a VPN tunnel and start hosting whatever *you* want to host. And if you're non-technical, you can use something a bit simpler like [Yunohost](https://yunohost.org) (I've tried it, it's very good 👍) or [Cloudron](https://www.cloudron.io/) (uses docker, worse tbh and has fewer apps).

# The sinking ships

## Actium

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687912553357/a569de24-80ca-4da2-b0b9-91c9a7db722a.png align="center")](https://discord.com/channels/1096067899665424466/1096342350378324028/1122691864773001346)

(yes I joined the servers)

Yeeeaah, they're in desperate need of help from Rudra.

Also, at one point, they were taken over by Layer from LayerNodes and turned into `node.gd` for a very short time. How funny.

## Pluox

Doing good so far actually, they managed to secure some nodes, but I think they still have yet to break even.

I still have a support position there, and I still can't do jack shit to help people.

Also I seemed to miss this:

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687956011553/6678bd17-4724-476c-b7b1-32735394c6ae.png align="center")](https://discord.com/channels/1035977468856782908/1063212310602195117/1123565614733217823)

Transcript:

Manucrack YT: FUCK IT ALL PLUOX PEOPLE FELL

he's back xd small massive drop

ItzGeo — Today at 6:54 AM:

like that of pylex

💀 chalao

Manucrack YT — Today at 6:54 AM:

Pylex I think he is doing the attack It occurred to me to put a bot with ptero apikey there the status bot had hosted it there I think everything is on its feet but if it continues, I'll call cream.

ItzGeo — Today at 6:59 AM

will have access to your account because pylex doesn't touch anyone's files

Manucrack YT — Today at 7:00 AM:

Well, what a coincidence that right now that I have just put the status bot there everything falls I thought they had deleted the vps but no

## ChromaNodes

Quite new, destined to fail in my eyes.

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687912676922/dff2653c-2d32-43f2-bf9b-b00fa931a7e8.png align="center")](https://discord.com/channels/1119719952174305280/1119725331016843395/1122962035454521455)

![](https://cdn.discordapp.com/attachments/1119725331016843395/1123215976004067370/image.png align="left")

Also, I was timed out in ChromaNodes for pointing out its problems and my messages were deleted.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687912823605/3b4fd938-4e55-4acf-8446-c102859d4e4b.png align="center")

I also left plex a DM, to which he has yet to respond:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687912919049/8f44ad01-a86a-440f-a61a-1eab0fea36c6.png align="center")

# The Future

Rudra told me that he thought of starting a host back in 2020 (he would have been 10 at the time), but didn't want to do all the legal stuff. We still pass around that idea as something to pay the bills of running blendOS if we were ever to incur any.

I won't say much about our stupid-ass shitty idea that will never happen, but I do think it would be kinda cool, and Rudra said if it ever happened he'd make everything from scratch, no ptero or cpgg or plesk or cpanel.

# Closing

In closing, the hosting market is overcrowded and fucked, all the hosts I discussed will fail. I wish I never had to write this. This is sad. For the industry to have fallen so far. I wish we could turn back time but with such a low barrier for entry what could we have done? I'll leave you with some words from Rudra:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687915684256/40f99cf3-63f3-439f-b736-cf11f55c8934.png align="center")

Thanks for reading, hope to see you again in my next rant. 😉

# The current situation

This section will be updated as things develop.

So I got demoted to trial support on Pluox and kicked from Actium.

This is blatant censorship, and I bet Manu never read this post:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687952189991/cf3482ea-9e48-4257-806e-b95a73f50146.png align="center")

I'm not trying to start a boycott here, I just want to show you what's happened. Do not harass any individuals shown here.

Also, if I was downgraded and kicked for *advertising*, I would respect that. I *did* advertise this post. But no, I was kicked and demoted for *criticism*. What bullshit.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687953442098/b4930145-b78f-4c3a-8c8f-06fe61998ae2.png align="center")

Yes, it is. So why demote for something that is so vital to success? You can't begin to succeed without first understanding what you've done wrong. Yes, this is a rant and less-than-constructive, but I'm pointing out legitimate issues.

![](https://asterisk.is-from.space/r/a.png align="center")

I pointed that out, and you're right. Also, Rudra did not make these images, these messages were sent by someone else who I will keep anonymous.

Plex respected my right to criticize (but I'm still muted):

![](https://asterisk.is-from.space/r/ArmCord_LtKrF3gz1F.png align="center")

Manu read my article and liked it:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687956866483/000079db-f36b-4a67-ae0b-ac70cf6fcc01.png align="center")

That's all for now.

**EDIT:** Fixed some factual inaccuracies with Manu's help.

### Footnote: dontabuse

I was unbanned from their discord, so I've been able to see how things have changed.

They now have a site (https://dontabuse.co.uk, and `mc.dontabuse.co.uk`) (according to [this](https://find-and-update.company-information.service.gov.uk/search?q=dontabuse), they use `.co.uk` despite not being a registered corporation in the UK) and their DB bot is gone. They brand themselves as a protection service from scammers. I should point out they have 0 proof of any successful service to anybody and they're just some kids playing hosting police. You can submit a report if you see something shady, but it's not your job to act on it, leave that to the professionals and the hosting companies.

They "take down" legitimate bad actors now (used to be people selling VPSes on free resources being "taken down"), but they're on Discord for god's sake, they can't go pro, they're pretty low-down on the tree of enforcement. They also <s>shill</s> "freepromo" the services of hosts owned by the mods, like PrismaNoes or Pylex, so not unbiased. Their discord is `discord.gg/freemchost` for fuck's sake.

Currently they <s>stopped</s> called out "Phillip", a so-called DDOSer who appears to have taken down 1 small host for 10 minutes and claims to have OVH, Pterodactyl and CloudFlare exploits, among others.

Images:

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689797420012/c5ca3f90-6304-48e3-bfc8-789da4f11562.png align="center")](https://discord.com/channels/1063534303109189702/1113573533432430682/1129175134117310494)

These pictures are from Dennis:

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129175133534294067/IMG_0947.jpg align="center")

Reminds me of the guy who DDOSed my shitty webserver.

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129176231804424293/IMG_1440.jpg align="center")

Well if he has any real attacks (which I doubt, he's a shitty skiddie) he *could* do shit to Prisma or any other host.

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129176232148344963/IMG_1441.jpg align="center")

no, it's because you're a lying bastard :)

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129176232450342952/IMG_1439.jpg align="center")

*suuuuuuuure*

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129175131084828762/image.jpg align="center")

oooookaaay

![](https://cdn.discordapp.com/attachments/1113573533432430682/1129175132578009169/image.jpg align="center")

windows and opera GX user lmfaoooo go back to twitter you skiddie if you're gonna use windows use it right.

somone left this somewhere (doubt its authenticity): [https://shady.gg/dontabuse.html](https://shady.gg/dontabuse.html)

Another problem is I can go doctor some evidence and accuse whomever I want :)

So Dennis, how about you make an official host removal channel, not your fucking DMs, get off of discord and make a real site. Grow up if you really wanna take this turd to the next fucking level. Thanks a lot for us having to remove Pluox twice from your database. Also, require users to submit evidence and message links, and check them carefully, so people can't accuse anybody, <s>AND STOP SHILLING YOUR PARTNER SERVICES HOLY SHIT</s> (apparently they "stopped." and the <s>shilling</s> is "freepromo"), it makes you look less credible.

This'll be updated I guess.

lol stop please man (screenshot from me):

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689798224053/69e11b11-8e58-4463-b35b-64c0169c0877.png align="center")](https://discord.com/channels/1063534303109189702/1097973317920628808/1113822559146881146)

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689798748162/102cd6b2-af50-40d4-a8a7-be4564dc7b5f.png align="center")](https://discord.com/channels/1063534303109189702/1113573533432430682/1121509431717417081)

No they didn't, and if that was a joke it was a bad one.

All the server's hidden channels for your convenience (transparency is a must with this kinda stuff):

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689798399075/ba95c841-dcb5-4ccb-b219-a43bd41987fd.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689798445699/b25c92b2-5e8a-4f43-a4cd-9e6f44bb1902.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1689801762402/109a1477-3ea7-42ef-a61d-cb90e1c6b026.png align="center")

The forum channel where they privately discuss hosts. I believe it should be made public.

They had promise but they fucked it up. They <s>took down</s> called out mediocre skiddies targeting useless hosts, as well as hosts who would have been taken down by the big providers anyway and <s>sold the hosting services of</s> "freepromo'd" their partners.

---

As of the time of writing, Manu has not received a VPS.

Plex is still pursuing his deluded dreams.

Fuck Liam.

I'm still here, regretfully for some.

Note: He never brought this up at UbCon:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687915864748/c6e0f90a-22ac-4839-8779-087210e669cd.png align="center")
