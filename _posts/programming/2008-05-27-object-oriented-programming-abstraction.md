---
layout: post
title: Object Oriented Programming - Abstraction
categories: ['programming']
---
<p style="margin-left: 1pt">Abstraction is a concept which facilitates to extract out the essential information of an object.</p>
<p style="margin-left: 1pt">In OOP ( Object Oriented Programming ) , Abstraction facilitates the easy conceptualization of real world objects into the software program.</p>
<p style="margin-left: 1pt">Abstraction lies everywhere! What ever you see, do and live are all full of abstraction.</p>

<p style="margin-left: 1pt">In mathematics, <strong>multiplication </strong>is a kind of abstraction. The symbol "<span style="font-size:16pt"><strong>x</strong></span>" is an abstract symbol that can do multiplication of any two elements.<span style="font-size:12pt">
</span>


<blockquote>2 <strong>x</strong> 3 = 6</blockquote>


<blockquote>3.5 <span style="font-size:16pt"><strong>x</strong></span> 3.7 = 12.95</blockquote>
<blockquote>(a + b) <span style="font-size:16pt"><strong>x</strong></span> ( a - b) = a^2 - b^2</blockquote>
</p><p style="margin-left: 1pt"><!--more--></p>
<p style="margin-left: 1pt">In Art, Abstract Art is a kind of art, which depicts the distilled form of the world.</p>

<p style="margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction1.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt"></p>
<p style="margin-left: 1pt"><em>Courtesy: <a href="http://www.flickr.com/photos/regiaart/">RegiaArt</a></em></p>

<strong>So, what exactly an Abstraction is?</strong>

Abstraction facilitates the easy conceptualization of real world objects, by eliminating the unnecessary details of the object. Unnecessary details? Yes, all the similar objects when you generalize, you will drop the uncommon details about the objects.

E.g., when you model a generic prototype for CRT Television &amp; a Plasma Television, you look for details like Type of screen, Height, Width, thickness etc.; these are necessary details for a Television. But a Television object doesn't need to have details of what kind of Electron it will bean to power the CRT, what kind of liquid plasmas it will use to power the Plasma TVs. These kinds of details are unnecessary details.

Let's take mobile phone as the real world example. Look at the below mobile phones.
<p style="margin-left: 1pt"></p>

<p style="text-align: center; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction2.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">What do you feel about them?</p>

<ul style="margin-left: 37pt">
	<li>Firstly, everything is Nokia Mobiles</li>
	<li>You could see Slide, Flip and Bar models</li>
	<li>You could see Music, Business &amp; 3G Mobiles</li>
	<li>You could see QWERTY , Basic and No keypads</li>
	<li>You could extra music player button on music edition.</li>
	<li>The Color, Size, Weight, Look etc...</li>
	<li>And even more…</li>
</ul>
<p style="margin-left: 1pt">So, for better understanding I organize the mobile phones in the below format.</p>

<p style="text-align: center; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction3.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">Basically, all the mobiles belong to Nokia.</p>
<p style="margin-left: 1pt">Still need a better classification, I drill down to its features and conceptualize the mobiles in more general way. So, you could categorize the mobiles as</p>

<ul style="margin-left: 37pt">
	<li>Music</li>
	<li>Business</li>
	<li>Gaming</li>
	<li>Normal</li>
	<li>3G</li>
</ul>
<p style="margin-left: 1pt">As a layman user, you will feel its weight, color, style. As a music lover, you will check for the memory, type of media files it supports, and type of communication between devices (Bluetooth, Wi-Fi etc). As a business person, you will check for the memory, type of business application etc.</p>

<p style="text-align: center; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction4.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">Now, you have got the details of the each and every mobile. It's time to extract the most essential details of these mobile categories. Here I use an Abstraction filter, which abstracts out the essential details. So, essential details, here I mean is the most common properties of the mobiles.</p>
<p style="margin-left: 1pt">So, now the conceptualization of mobile has still got finer. Now you can still go deep and get a finer concept to model a generic / abstract mobile, which can be turned into a beautiful mobile of your kind.</p>
<p style="margin-left: 1pt"></p>

<p style="text-align: center; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction5.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">Now, you have extracted out the necessary details for each category of mobile. You still fine grain it to get a mobile phone's basic property with the Abstraction filter.</p>

<p style="text-align: center; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction6.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">Now, here comes your basic design of the Nokia mobile phone. You have learnt how you will abstract properties from the real world objects. Now the question is how you do it in the programming language. In the Object oriented principles, abstraction is achieved via Inheritance (a widely used design pattern)</p>
<p style="margin-left: 1pt">The class diagram for the Nokia mobile using Inheritance look like below</p>

<p style="text-align: center; background: white; margin-left: 1pt"><img src="../images/2008/05/051808-0406-abstraction7.png" alt="" /><span style="font-size: 12pt; font-family: Times New Roman;">
</span>
</p><p style="margin-left: 1pt">You would have missed to understand the abstraction in the computer science. Here are few places where you could see how the abstraction works</p>

<ul style="margin-left: 37pt">
	<li>Network Layers – OSI Model</li>
	<li>Database Architecture – Data Abstraction ( Physical, Logical , View )</li>
	<li>Polymorphism – Abstraction of Actions / Methods</li>
	<li>Templates in C++ or Java – Abstraction of Common Objects</li>
	<li>Data Structures – Abstract way to store &amp; retrieve the data</li>
	<li>Many more…</li>
</ul>
One important thing you need to remember is 'Abstract objects' never exists in real world. It is just the concept that we build to understand the working of real world objects.

E.g., There is nothing is called a Television, you have CRT Television (this is known commonly as TV), Plasma TV or LCD TV.
