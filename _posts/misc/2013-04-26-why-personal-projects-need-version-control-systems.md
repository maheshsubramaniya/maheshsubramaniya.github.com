---
layout: post
title: Why personal projects may need version control system?
categories: ['misc']
tags: vcs,git,version control
excerpt: a thought on using version control for your personal projects
---

To be real, you do not. Unless some crazy thoughts running in your mind about your personal projects. You are going to read such a feeling happened to me recently.

I never used to version my code, for my personal projects. And I do not have to, because I know pretty well what stuff I code and I always maintain one version and it is **version 1.0**, also the need for backup is solved with the backup at the external hard drive, if I want to revert back, it is just a copy-paste from the backup. And there are plethora of source repos online for free, like **Sourceforge**. I've used Sourceforge for a long time, much like a hard-drive, *a web hard-drive*. 

One of the tool I built for myself, I'm using it for a while and keep improving it. So, I start to work on a bug, and all of sudden I see that I should add a feature and after a while, adding a feature I feel that I should re-factor the entire code to be more modular and makes it less work to add more features. For all these days I work mostly in a serial fashion in my personal projects.  Now something is making me to work in parallel. So, I started getting the strange mixed feelings about my code, personal project etc.,

I drew the following choices, clone my entire project folder manually into a new folder and start working or use a version control system like [Subversion or CVS](http://betterexplained.com/articles/a-visual-guide-to-version-control/). But this leaves me a situation of re-configuring the IDE and that sort of work. Luckily most of the IDEs have features that helps you to Export - Import your settings file. But still it is all a lot of time spent on doing something you shouldn't be doing and instead working on the fix you need to make. [Like Linus](http://www.youtube.com/watch?v=4XpnKHJAok8), I started to realize how CVS based system sucks and wanted someting I want to do. I read few articles on various takes of [CVS](https://news.ycombinator.com/item?id=1271888), [Git](http://stackoverflow.com/questions/802573/difference-between-git-and-cvs), [love](http://blog.cedarsoft.com/2010/01/top-10-why-subversion-is-better-than-git/) and [hates](http://stackoverflow.com/questions/871/why-is-git-better-than-subversion).

So anything that makes me to deal with folders, I hated it. I do not want the traditional folder-copy-setup-ide-thingy. Or which ever system made me to do it, I reject it first place.

I remembered that few years ago, when GitHub was getting popular, I registered myself in GitHub and pushed my code as a place to rest and not get lost, yet another web hard-drive for me. But the problem with GitHub is, I cannot have a ***free*** private repo. By the time, I was also ware of the fact that GitHub is run based on Git, and Git can also be run in local with minimal setup. This stuff wooed me. I gave a try. [As promised by Linus](http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git),  the setup was simple and quick. One or two config files and all set to go.

The most striking feature I loved and which also fitted my need is the easy way of [creating and managing branches](http://git-scm.com/book/en/Git-Branching) in git. Though most of the VCS systems has branches and merges, they are surely tedious. This concept exactly allows me to create multiple replica of the same codebase, work on it and merge to the main branch, without switching IDE.

Also, at the same time I figured out [BitBucket](http://www.bitbucket.org) offered private repos, which is what I want. Now all my code public code is at [GitHub](https://github.com/mymindleaks) and private code in BitBucket. And Thanks to Git being a common bridge as I have little hassle in doing separate setup, IDEs or understanding two different service provider on how they maintain the code in their system.

<figure class="image">
<img src="http://i.qkme.me/3u48x0.jpg" alt="Git meme">
</figure>
