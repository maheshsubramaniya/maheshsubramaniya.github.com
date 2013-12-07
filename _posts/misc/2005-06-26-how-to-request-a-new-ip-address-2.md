---
layout: post
title: How to Request a New IP address?
categories: ['misc']
---

Request a new IP address from your ISP server.

Here’s how to do it in windows:
1. Click Start
2. Click run
3. In the run box type cmd.exe and click OK
4. When the command prompt opens type the following. ENTER after each new line.

<code>
<pre>
ipconfig /flushdns
ipconfig /release
ipconfig /renew
</pre>
</code>