---
layout: post
title: A Firefox bug, prevailing more than 2.5 years
categories: ['misc']
---
[digg=http://digg.com/software/A_Firefox_bug_prevailing_more_than_2_5_years]Today  I noticed something fishy in the Google Reader while reading the Chennai MetBlog Post of <a href="http://chennai.metblogs.com/archives/2008/01/post_24.phtml">Iniya Pongal Nalvalthukkal</a>. I was viewing the post through Google Reader using Mozilla Firefox 2.0.0.11( Downloaded yesterday Jan-14-2008).

The fishy thing is Tamil Indic text rendered by Firefox was garbled. I checked quickly with other Indic language scripts( Hindi, Telugu, Kannada ). They seems to render properly.

The post which I was reading in Firefox , which renders Tamil Indic text.

<a href="../images/2008/01/image39.png"><img src="../images/2008/01/image-thumb26.png" style="border-width:0;" alt="image" height="158" width="446" /></a>

Same through the Microsoft Internet Explorer. I could see correct text rendered.

<a href="../images/2008/01/image40.png"><img src="../images/2008/01/image-thumb27.png" style="border-width:0;" alt="image" height="126" width="446" /></a>

I checked with one of the <a href="http://en.wikipedia.org/wiki/Wikipedia:Enabling_complex_text_support_for_Indic_scripts">Wikipedia article which runs test for rendering the Unicode Indic scripts</a>.

The 2nd Column shows the correct rendering, 3rd column displays the <b>Wrong</b> Indic rendering in the current browser ( Firefox )
<blockquote><a href="../images/2008/01/image42.png"><img src="../images/2008/01/image-thumb28.png" style="border-width:0;" alt="image" height="48" width="333" /></a></blockquote>
The 2nd Column shows the correct rendering, 3rd column displays the <b>Correct</b> Indic rendering in the current browser ( Internet Explorer )
<blockquote><a href="../images/2008/01/image43.png"><img src="../images/2008/01/image-thumb29.png" style="border-width:0;" alt="image" height="47" width="344" /></a></blockquote>
<b>Then I verified the rendering of Tamil Wikipedia in both the Browsers.</b>

<a href="../images/2008/01/image44.png"><img src="../images/2008/01/image-thumb30.png" style="border-width:0;" alt="image" height="391" width="519" /></a>

<b>Tamil Wikipedia rendered in Internet Explorer</b>

<a href="../images/2008/01/image45.png"><img src="../images/2008/01/image-thumb31.png" style="border-width:0;" alt="image" height="391" width="519" /></a>

IE rocks in rendering the Tamil Unicode pages properly.

I checked in the BlogoSphere to find any such blogs have already complained about this problem and found <a href="http://www.vasanth.in/2005/08/24/FirefoxMessesUpTamil.aspx">I found Vasanth Dharmaraj's  blog</a>. Surprising things is, he complained the problem on Aug, 2005.

Also I checked with <a href="http://blacksapphire.com/firefox-rtl/">another site which has the details of the bug and the fix</a>. The site says that the fix will be shipped in 2007. Also, it lists some trackbacks of the bug.

Immediately I did a search in <a href="https://bugzilla.mozilla.org">Bugzilla</a>. The bug has been reported more than twice to the developers.
<ul>
	<li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=292429">Bug 292429</a> – Tamil Unicode is not displayed properly</li>
	<li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=391805">Bug 391805</a> – Firefox 2.0.0.6 does not display proper Tamil,Telugu letters(Unicode)</li>
	<li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=333659">Bug 333659</a> – Move nsTextFrame over to Thebes APIs</li>
</ul>
It's about 2.5+ years and still the problem is in Firefox. I'm really surprised why Firefox developers hasn't fixed it until.
