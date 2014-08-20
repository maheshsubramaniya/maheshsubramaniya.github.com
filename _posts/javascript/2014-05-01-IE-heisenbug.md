---
layout: post
title: IE Heisenbug
excerpt: IE historically has an useless debugger and how this elusive heisenbug acts with it
categories: ['javascript']
tags: [javascript,bug]
---

Circa 2009, when I was testing the mobile webapp in cross platform, Internet Explorer is especially a [pain in the neck](http://www.maheshsubramaniya.com/article/ie-6-and-ie-7-radio-buttons-doesnt-select.html). One such pain is a [Heisenbug](http://www.catb.org/jargon/html/H/heisenbug.html) that I came across.

<pre>
console.log('heisenbug');
alert('if you see this, then no heisenbug');
</pre>

[Fiddle here](http://jsfiddle.net/maheshexp/SJV2j/)

This bug was so irritating that I couldnt figure out easily why this code is breaking. And screw the IE developer tool.

Easy fix? Just redefine the <code>console</code> object to use alert, as 1st line of the code.

<pre>
console.log = function(o){ alert(o); }
</pre>
