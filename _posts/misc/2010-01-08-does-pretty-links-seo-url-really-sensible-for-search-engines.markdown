---
layout: post
title: Does pretty links & SEO URL really sensible for search engines?
categories: ['misc']
---
After done with the moving to a hosting provider, next I was trying to overhaul my blog with the link structure. Puzzled on where to start from. People enter into my blog via URL. Hence decided to tweak the URL.  So, it's time to decide upon what link structure I should chose. And before that, is this link structure is really a necessary stuff to tweak up? If you ask with a SEO expert, he/she would pour a rain of tips, problems if you don't make the links looks SEO optimized. And mostly Google oriented optimizations. But sometimes, I used to think, Is Google going to rely-upon this tiny URL part in the entire web indexing operation. If you look into any of the blog which has a content juice, you wont find a proper URL structure. I will give you a lots of example.
<h3>Before that what is an URL, and why everyone in this world is so much bothered about it?</h3>
People who use web knows very well about URL. And there are quite lots of topic around how to build a better URL. CMS software provides plug-ins, tools to build good URLs.  So, why is that these folks worried much about building a great looking pretty URL? I don't want to talk much on what is <a href="http://en.wikipedia.org/wiki/Uniform_Resource_Locator">URL</a>, Wikip can give you enough information about URL. I will just quickly discuss about the part of URL and which one I'm speaking about. Consider this URL,
<blockquote><a href="{{site.url}}/blog/archives/object-oriented-programming-">{{site.url}}/blog/archives/object-oriented-programming-</a>–-encapsulation-is-not-just-hiding-data.html</blockquote>
An URL has the following parts.
<ol>
	<li><em>http</em> -&gt; <a href="http://en.wikipedia.org/wiki/Protocol_%28computing%29">protocol</a></li>
	<li><em>www</em> -&gt; <a href="http://en.wikipedia.org/wiki/Subdomain">subdomain</a></li>
	<li><em>mymindleaks</em> -&gt; <a href="http://en.wikipedia.org/wiki/Domain_name">domain name</a></li>
	<li><em>com</em> -&gt;  <a href="http://en.wikipedia.org/wiki/Top-level_domain">Top Level Domain ( TLD )</a></li>
	<li><em>blog/archives/object...data.html</em> -&gt; page / filename</li>
	<li><em>.html</em> -&gt; <a href="http://filext.com/">file extension</a></li>
	<li><em>And if you find anything after "?"</em> -&gt; CGI params</li>
</ol>
Check out here to  what I'm talking about in a <a href="http://www.seomoz.org/blog/seo-cheat-sheet-anatomy-of-a-url">visual stuff</a>.

Now, in this post, I'm talking about the 5th part, "<em>/blog/archives/object-oriented...data.html</em>". which is the page / filename part of the URL.
<h3>A quick research on URLs and Page rank.</h3>
Can anyone fool Google by writing an url as "10-tips-to-make-you-rich" and the entire content of the URL teaches you "10-tips-to-spend-a-lot"??? Will the Google still fetch the URL "10-tips-to-make-you-rich" when someone tries to search for "how to become rich" ?

When I tried checking the PageRank of the few famous blog over internet, via <a href="http://www.prchecker.info/check_page_rank.php">http://www.prchecker.info/check_page_rank.php</a> , I could infer the following.
<table style="font-size: 13px;" border="1" cellspacing="2" cellpadding="2" width="100%">
<tbody>
<tr>
<td style="font-family: arial, sans-serif;" align="center" valign="top"><strong>Site
</strong></td>
<td style="font-family: arial, sans-serif;" align="center" valign="top"><strong>Page Rank
</strong></td>
</tr>
<tr>
<td style="font-family: arial, sans-serif;" valign="top"><a href="http://norvig.com">Peter Norvig</a> - <a href="http://norvig.com">http://norvig.com</a></td>
<td style="font-family: arial, sans-serif;" valign="top">6 / 10</td>
</tr>
<tr>
<td style="font-family: arial, sans-serif;" valign="top"><a href="http://xahlee.org">Xahlee</a> - <a href="http://xahlee.org">http://xahlee.org</a></td>
<td style="font-family: arial, sans-serif;" valign="top">5 / 10</td>
</tr>
<tr>
<td style="font-family: arial, sans-serif;" valign="top"><a href="http://johnchow.com">John Chow</a> - <a href="http://johnchow.com">http://johnchow.com</a></td>
<td style="font-family: arial, sans-serif;" valign="top">5 / 10</td>
</tr>
<tr>
<td style="font-family: arial, sans-serif;" valign="top"><a href="http://problogger.net">Problogger</a> - <a href="http://problogger.net">http://problogger.net</a></td>
<td style="font-family: arial, sans-serif;" valign="top">5 / 10</td>
</tr>
</tbody>
</table>
This results makes you wonder? Even me. Professional bloggers like Darren Rowse's Problogger, John Chow, who have million of hits, lots of articles on tweaks, blogging, money making have a less PR rating compared to the simple-plain-old but content ful Norvig or Xahlee's blog. If you look at Norvig's blog, you might find URL which aren't descriptive like [ <a href="http://norvig.com/paip.html">http://norvig.com/paip.html</a> -&gt; Paradigms of AI Programming]. The Xahlee's blog have unicode chars in his blog and his blog topic is bit diversified ( computers, math, and little bit of decent porn, yeah ).  Google isn't that dumb folks.

Even my blog has pretty URLs, and I've spent relatively quite amount of time in thinking about URL for my blog., but that's all purely to give the reader a better idea of what a post is all about. To me, a URL is just a tiny part that makes the user understand what is all the content is about without reading through the content. Relying on this probably might give you a fraction of what SEO's call, <em><strong>the page rank juice</strong></em>.
