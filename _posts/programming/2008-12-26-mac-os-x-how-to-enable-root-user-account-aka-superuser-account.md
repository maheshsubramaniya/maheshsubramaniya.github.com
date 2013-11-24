---
layout: post
title: ! 'Mac OS X How To: Enable root user account aka superuser account'
categories: ['programming']
---
By default, the "<strong>root</strong>" account aka "<strong>superuser</strong>" account is disabled in Apple Mac. This is because, for a normal user, such a full access control account is not necessary. But still, to fix something or for development purpose a <strong>root</strong> access is necessary.<!--more-->

"<strong>sudo</strong>" command can used to enable "<strong>root</strong>" user and execute any command via "root" account.
<pre>
$<strong>sudo</strong>
usage: sudo -K | -L | -V | -h | -k | -l | -v
usage: sudo [-HPSb] [-p prompt] [-u username|#uid]
{ -e file [...] | -i | -s | &lt;command&gt; }
</pre>

Here is how you enable the "root" account. You should need an Admin previledged account.
<ol>
	<li>Command + spacebar -&gt; typein  "Terminal" or Macintosh HD -&gt; Applications -&gt; Utilities -&gt; Terminal.</li>
	<li>Execute the following Command "sudo passwd root"</li>
</ol>
<pre>
<strong>$ sudo passwd root</strong>
Password:
Changing password for root.
New password:
Retype new password:
$</pre>
Once the command prompt is shown, you can now login using the "root" in the terminal or while your mac boots up ( if you have manual login ).
