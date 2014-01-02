---
layout: post
title: How to setup Markdown Mode for Emacs.
author: Mahesh Subramaniya
meta-description: Learn how to install the markdown mode for the Emacs editor
excerpt: Learn how to install the markdown mode for the Emacs editor
tags: markdown,emacs
categories: ['programming']
---

Follow these simple steps to install the markdown mode for your emacs.

* First of all, if you dont have Emacs, get it from here for [mac GUI](http://emacsformacosx.com/) (*default for terminal*), [windows](http://ftp.gnu.org/gnu/emacs/windows/) and [for linux](http://www.gnu.org/software/emacs/) and you will also have it default in terminal.

* Get the [Markdown package by Json Blevins](http://jblevins.org/git/markdown-mode.git/plain/markdown-mode.el) for emacs and read the instruction of how to use the [customization of the mode](http://jblevins.org/projects/markdown-mode/).

* Extract the package and place it at `~./.emacs.d/` or at default path (*if you are aware of it*) to place your modules. For Windows put them under `C:\` 

* Create a `.emacs` file in your home folder `~/` (for windows `C:\`)

* Add the following lines to the `.emacs` file. This helps to setup the markdown mode.
   
   <script src="https://gist.github.com/2864590.js?file=gistfile1.el"></script>
   
   Here make a note that I'm using the extension `.md` to tell the plugin to treat all the files ending with `.md` as markdown files. If you want, you can use any extension you prefer.
   
* Get the [markdown parser](http://daringfireball.net/projects/markdown/) script or if you like to use some enhanced features of markdown, get [multi-markdown](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/MultiMarkdown%20User's%20Guide.md)

>If you have downloaded the multi-markdown installer, the scripts will be installed at `/usr/local/bin/multimarkdown`. Or if you cant find where it is located, open your Terminal and type this command

> `$ which multimarkdown` 

> You will get the path and note it somewhere.

* Reload the settings by the command `M-x load-file ~/.emacs`. This command will load the new settings.

* Open a new markdown file `C-x C-f test.md`. Tada. you will find the mode to be `(Markdown)`.

> So far so good, you now need to configure the plugin to use the appropraite markdown script to convert the markdown code to XHTML.

* Type `M-x customize-mode` to open the customization settings for the Markdown Mode. You should be in the same mode when you type the command.


* The first customization option is to put your version of markdown program. Since you have already noted the path, put the path into it.

> ![Markdown Command](../images/2012/markdown-settings.png)

* Second, the option `markdown-command-needs-filename` , keep this 'nil', as your purpose of setting this mode is to feed the content from your editor to the markdown program.

> ![Markdown Buffer / Filename Settings](../images/2012/markdown-settings-stdin-buffer.png)

* Save your settings by click on **Set for Current Session**, then **Save for future session** and then **Exit**

> ![Emacs Customization settings save](../images/2012/emacs-customization-save-settings.png)

If you have done with all these settings, you are good to go. And if you are lazy to work with emacs or do all these settings, you can grab GUI live editors like [MarkdownLive for mac](https://github.com/downloads/rentzsch/markdownlive/MarkdownLive-1.7.1.zip) or [MarkdownPad for Windows](http://markdownpad.com/). Or if you need more choice, [here it is](http://superuser.com/questions/174976/markdown-live-preview-editor).
