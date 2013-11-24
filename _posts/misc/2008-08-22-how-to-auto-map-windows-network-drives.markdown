---
layout: post
title: How to auto map Windows network drives
categories: ['misc']
---
Recently I had a strange problem. I've moved to a new PC in my office and the PC had all the stuffs installed which are needed for my work, but one. The one important stuff is all my Drive mappings to various network folders. I'm really irritated to map all the folders manually one by one, because I had about 9 drives of different folders from different server.<!--more-->

So, googled for some solution and found a great resource on <a title="Net command in windows" href="http://www.cezeo.com/tips-and-tricks/net-use-command/">'net' command in windows</a>. An idea struck me and, I immediately created a batch file which maps all the network folder to the corresponding network drive letter.

<code>Command Usage: net use [{DEVICE | *}] [\\COMPUTER\SHARE[\VOL]] [{PASSWORD | *}]] /PERSISTENT:{yes | no}}]</code>

I created a batch file as follows
<code>net use E: \\network\folder\to\connect /PERSISTENT:yes</code>

<code>
net use F: \\network\folder\to\connect /PERSISTENT:yes
</code>

<code>net use G: \\network\folder\to\connect /PERSISTENT:yes</code>

The <code>/PERSISTAENT</code> switch is the most important stuff to use. From the <em>cezeo.com</em>
<blockquote><strong>/PERSISTENT:{yes | no}</strong> : Controls the use of persistent network connections. The default is the setting used last. Deviceless connections are not persistent. Yes saves all connections as they are made, and restores them at next logon. No does not save the connection being made or subsequent connections. Existing connections are restored at the next logon. Use /DELETE to remove persistent connections.</blockquote>
Now this is a handy tool for anyone who wants to map all the missing network drives in their new PC in seconds.
