---
layout: post
title: Big Code, Good Code!
categories: ['programming']
---
<em>Coding is an art</em>! Anyone can draw, but only those who draw with the elegant have their paintings valued. Similarly any programmer can code, but a Good Program is an artistic job. I see lot of people do code, but only few actually write Good code. This means they have understood the elegance of the language and knows how to use it.
<h3>Big Code - Good Code</h3>
Big Code, a Good Code? Sounds awkward? A Good code I mean here is a code which runs quicker than other solutions for the same problem.
<blockquote><strong>if T(Sol1) &lt; T(Sol2) Then, Solution 1 is a Good code</strong>., Where T is Time function , measures Time Taken</blockquote>
<em>( though there are various other constraints involved, for time being let not discuss them )</em>

Hardcore programmers are always tries to write short programs. They couple few lines of code into one and show that they have done a great coding.  But, things are not always the way it looks. <strong><em>Short is sweet, but not always !</em></strong>

<!--more-->
Look into this code, 3 solutions for one simple problem.

<em><strong>Problem</strong>: Find the greatest of two numbers a, b</em>
<p style="text-align: center"><a href="../images/2008/05/code-table1.png"><img src="../images/2008/05/code-table-thumb.png" border="0" alt="code-table" width="640" height="158" /></a></p>

<h3>Million Dollar Question</h3>
Which code runs faster? If you have chosen the A's code as faster. You have correctly made a <strong>wrong decision</strong>.

The fastest program is the B's program. So, 3 lines of code, still fastest code? Ok.

In the A's code,  consider if a &lt; b, two operations should be performed.
<ul>
	<li>Compare 'a' , 'b'</li>
	<li>Branch to Else if 'a' &lt; 'b'</li>
	<li>Return the expression 'b'</li>
</ul>
But in B's solution, we have already assigned a value to 'x'. Only job is to compare and Assign. <strong>So the second operation is saved.</strong>

In such a small code, you won't find a big difference. But think of a macro system with MLOC ( Million Lines of Code ).

I will explain you by solving a bit complex problem, come on join me.

<strong>Problem</strong>: <em>Given number 'N' , split into 'k' integers, such that N = k1 + k2 + k3 +...kn and k1 * k2 * k3 is maximum</em>.

You can try various solutions. One simple solution is
<p style="text-align: center"><img src="../images/2008/05/image-thumb.png" border="0" alt="image" width="640" height="69" /></p>
Great code, you would be proud to write one line solution of such great problem. But wait, is your code is faster to run for N &gt; 10^10, K &gt; 10^5?

Consider the optimize solution
<p style="text-align: center"><a href="../images/2008/05/image1.png"><img src="../images/2008/05/image-thumb1.png" border="0" alt="image" width="640" height="125" /></a></p>
More optimised
<p style="text-align: center"><a href="../images/2008/05/image5.png"><img src="../images/2008/05/image-thumb5.png" border="0" alt="image" width="640" height="200" /></a></p>
The last code works much faster than any other. Try looping it for million times with various values of 'N &amp; k '. and measure the time it takes to complete the million time execution.
<h3>How to write a speedy code?</h3>
So, this is yet another million dollar question. Take a look at the above three solutions. You will find a resemblance.

<strong>Solution - 1 </strong>is a generalized form of other two. <strong>Solution - 3 </strong>is more detailed form of Solution - 1.

So, what is been detailed in the Solution 3. If you look at more closely, you will find that Solution-3 has checks for 'Boundary Conditions'.

Boundary Conditions are very important scenarios in any Logical System. You prove that system works perfect for boundary conditions, you prove the system to work for any values between it. <strong>Similar to Mathematical Induction</strong>. So, this applies for programming too.

If you are able to identify the boundary conditions, and make the appropriate formula for those conditions, then you will skip unnecessary computations.

We will look what have save the computational cycles.

Lets assume, the Input are N=10, K = 2

<strong>Using Solution-1:</strong>

residue = 0, mid = 5

maxProduct = Math.pow(5+1,0) * Math.pow( 5 ,(2-0) ) = 25

<strong>Operations performed:</strong>

<em>Note: costs are just for calculation, not exact one</em>

<a href="../images/2008/05/image3.png"><img src="../images/2008/05/image-thumb3.png" border="0" alt="image" width="270" height="322" /></a>
<ul>
	<li>Math.pow</li>
	<li>Addition - (5+1)</li>
	<li>Math.pow</li>
	<li>Subtraction - ( 2-0 )</li>
	<li>Multiplication</li>
</ul>
lets assume the cost for each operation is

<strong>Using Solution-3:</strong>

The code will branch out to the 1st if condition ( residue == 0 )

maxProduct = Math.pow( 5, 2) = 25

<strong>Operations performed</strong>

<a href="../images/2008/05/image4.png"><img src="../images/2008/05/image-thumb4.png" border="0" alt="image" width="270" height="166" /></a>

So, you have saved more than 55% of the computational cycles by covering up the boundary conditions.

<strong>So, Why you need a Speedy code?</strong>

Everyone in life loves speed. Speed bike, Speed cars ( that's why you would love F1 ), A speedy 2 GB - Core 2 Duo Powered Machine.

<strong>Because Speed makes you feel Good !! So does a Speedy Code will be a Good code.</strong>

But, to achieve something you have to compromise with other factors, like I mentioned earlier.

If you need a 2 GB - Core 2 Duo Powered Machine, you should not consider the Money factor.

Similarly while you code, there are lot of other factors like
<ul>
	<li>Memory Management</li>
	<li>Security</li>
	<li>Transaction Isolations etc.,</li>
</ul>
This is just a introduction, will start covering up other topics soon.
