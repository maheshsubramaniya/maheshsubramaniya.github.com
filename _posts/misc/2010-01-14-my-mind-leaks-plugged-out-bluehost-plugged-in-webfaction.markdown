---
layout: post
title: My Mind Leaks plugged out Bluehost and plugged in Webfaction
categories: ['misc']
---

I wanted to write about my migration to new hosting. I write this post to say that why I'm leaving Bluehost and why did I chose Webfaction. Loyal Bluehost hosters dont get furious, this is my personal opinion on why I switched. Now, this blog is powered by <a href="http://www.webfaction.com/?affiliate=mymindleaks">Webfaction</a>. Moving a blog to a new hosting provider is  as exiting as moving to a new city.  Today I completely moved my blog from Bluehost to Webfaction. Believing <a href="http://en.wikiquote.org/wiki/Heraclitus">Change is always constant</a>, I keep on looking for some kind of change. Now, it's time to change my blog's hosting provider.

<h3>So, why did I change?</h3>


<p>There is a strong intention for moving out from Bluehost. Despite a fairly a good service and good customer support, <a href="http://www.bluehost.com">Bluehost</a> is still failed to cater my needs. Bluehost supports PHP, Ruby, Python, Rails etc., but not good enough web frameworks except Rails.
I wanted Python and Django web-framework. Though you can still build Django framework with some spoof [<a href="http://www.bluehostforum.com/showthread.php?t=715">http://www.bluehostforum.com/showthread.php?t=715</a>],  it's still makes you feel like you are doing the olden days "<a href="http://en.wikipedia.org/wiki/Data_scraping">Content-Scraping</a>", i.e you are forcing the system to get you what it is not supposed to give you. Also, the fcgi script which is inserted between the python process and web request is not sure how it can handle the loads.

Also, when I first took the Bluehost, I was impressed with the following items
<ul>
	<li>Unlimited Space</li>
	<li>Unlimited Bandwith</li>
	<li>Lots of tools, scripting language etc.,</li>
	<li>Wordpress</li>
</ul>
But, after a quite an amount of time, when I look back and see, I haven't used those features to full extend. So, I've jotted few questions.
<ul>
	<li>Am I really making use of the  'Unlimited' marketing terms?</li>
	<li>Does the hosting provider solve my programming needs? Am I using all the tools he gives?</li>
	<li>Will I be able to host self-developed apps?</li>
	<li>What about the system Performance? Am I compromising with Unlimited 'blah-blah'?</li>
	<li>Are the hosting service ready to setup the web framework I am asking for?</li>
	<li>At-last, am I happy with my current hosting provider?</li>
</ul>

<h3>Am I really making use of the  'Unlimited' marketing terms?</h3>
<p>To my perspective the Unlimited bandwidth and Unlimited disk space is kind of a marketing strategy compared to the real usability perspective. Its real hard for a single blog to fill a more than 200 GB if he writes 10 posts per day, 365 days for 50 years and each post is of size 1000 KiloBytes.

So, for a blog having a unlimited diskspace is just a too much. For bandwidth, a site with 200,000 hits per month viewing 1000 KiloBytes of data on an average would just occupy ~200 GB of bandwidth. Hence I'm satisfied with Webfaction, as my blog is not a top hit blog to get 200,000 hits per month.

So, Webfaction have given me a satisfiable and stomach full of disk-space and bandwidth to survive with.
<h3>Does the hosting provider solve my programming needs?</h3>
Yes and No. Yes Bluehost gives a set of tools like PHP, Python, Ruby, MySQL / PostgreSQL. Really appreciate it. Except rails, they aren't providing any web frameworks namely Django  or any other framework etc., Also, power programming includes, access to most of the tools via shell. Having access to most of the utils like gcc, emacs etc., provides a good interface to develop any utilities and use them as CGI service. Even though you have PHP, still I was not given access to configure the PHP to solve my programming needs.  And, I failed to love Bluehost for not providing one of my cool tool '<em>wget'</em>.

<h3>Will I be able to host self-developed apps?</h3>
<p>
Yes only if you have developed the application in PHP / Rails. No other programming language framework was supported by Bluehost. You can write script, but not a full scale application except PHP / Rails. Now, looking at Webfaction, I could host applications developed in the following <a href="http://docs.webfaction.com/user-guide/websites.html#creating-an-application">frameworks</a>.
<ul>
	<li>CherryPy</li>
	<li>Django</li>
	<li>Drupal</li>
	<li>Pylons</li>
	<li>Python (Apache with mod_python or WSGI)</li>
	<li>Ruby on Rails</li>
	<li>Static/CGI/PHP</li>
	<li>TurboGears</li>
	<li>WordPress</li>
	<li>Zope</li>
</ul>
So, I have enough framework on my plates to play with it. Bluehost again fails in this. They provide excellent blog support ( Wordpress, Drupal, Joomla, Wiki ), but no frameworks.
<h3>What about the system Performance? Am I compromising with Unlimited 'blah-blah'?</h3>
In the beginning, I was never worried about the performance of the system provided, due to the magic-sweet-googly-woogly word 'Unlimited blah-blah'. That magic word makes the customer, forget about few important aspects of the service, i.e PERFORMANCE. Bluehost provides a standard Quad-Core machine, on a sharing basis. Webfaction provides a slice of CPU &amp; Computing Memory whatever the load be. So, you always get that processing speed irrespective of your neighboring host apps processing in the same server.

Since, Bluehost aren't able to provide slices / VPS kind of service, I believe they are reluctant on providing web frameworks or application frameworks, which deeply affects the performance.
<h3>Are the hosting service ready to setup the web framework I am asking for?</h3>
Yes, Webfaction openly welcomes to ask for any specific tools which they can install and make their customer happy. Bluehost, has most of the tools already built in, but they should expand up their services to provide web frameworks.

With the above mentioned items, I'm satisfied with the Webfaction's service and happy to host with them. More over their monthly billing support was one of the good feature to attract customers. Their pricing is also very comfortable for people who have limited fund to run and still get good performance, disk space, band width and more. Webfaction, seems to be happy welcoming customers and make customers happy even when they leave Webfaction, which is most important. But, still Webfaction is still lacking few things, like Little Knowledge base, No UI for file manager, Cron Jobs etc.,

Some alternatives to Webfaction
<ol>
	<li><a href="http://www.slicehost.com/">Slicehost</a></li>
	<li><a href="http://www.rackspace.com">Rackspace</a></li>
	<li><a href="http://mediatemple.net/webhosting/gs/">Media Temple</a></li>
</ol>
</p>
<div>
<ol></ol>
</div>
