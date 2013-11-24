---
layout: post
title: Symbolic Computation - Differential Calculus using Prolog
categories: ['programming']
---

<blockquote><u><strong>Note:</strong></u> It seemed that there was some kind of publishing Error in this post. Few symbols were missing. Now things are rectified and post is clear.</blockquote>
<span>I write this after I got impressed with the Prolog's powerful pattern matching stuff. There should be a alternative to Prolog in the pattern matching stuff, RegEx sounds convincing, but not as much like prolog.</span>

<span>Symbolic Computation is one of the interesting fields of mathematical computation that is implemented in computer for performing the symbolic mathematical operations such as Algebra, Differentiation, Integration. Lot of computer software packages like MatLab, Mathematics supports symbolic computations.
</span>

<strong><span>So what is symbolic computation?</span></strong>

<span>          Symbolic Computation is just performing the mathematical computation on symbols like , "x", "y", "dx" etc. in computer using some computer programming languages.</span>

<span>          All the mathematical expression, including variable (with numeric sometime) based expression which are computed under certain mathematical rules are known as <strong>symbolic computation</strong>.</span><span> Integrations are computed by integral </span><span class="GramE">rules,</span> differentiation is differential calculus rules and so on.

<span>The above are some examples of symbolic computing. But in manual work this seems to be easier, because humans know how to perform a simple simplification, derivative and integral.</span>

<span>But for computers, it is not possible. It need to be teached by writing programs to perform these operations. But now the question </span><span class="GramE">is,</span> which programming language to use. Let’s have a brief discussion.

<strong><span></span></strong>

<strong><span>Which Programming Language?</span></strong>

<span>          Prolog was one of popular language used for Some of the AI stuffs . Since my problem is some what related to applying intelligence for a machine to perform symbolic computation, I choose <strong>Prolog</strong>. Since prolog language works on pattern matching, My symbolic computation also works in the same way i.e. pattern matching. </span><span class="GramE">if</span> I have two "x" ( say, "x + x") then I would add these two and write it as "x". The same applies to y, x, <span class="GramE">a and</span> any variable.

Prolog is easy to write and understand. I wrote all the things as Facts, as what we write in Java or C++ known as Methods encapsulated inside the Objects. All the function in prolog <span class="GramE">are</span> named as Facts.

<strong><span>Getting </span><span class="GramE">Prolog :</span></strong>

<span>Prolog is freely dustributed programming language, available for both windows and Linux platforms.</span>
<ul>
	<li><span>For Linux, gnu-prolog is available</span></li>
	<li><span>For windows Amzi Prolog - Students Version is one of the freely available </span><span class="GramE">prolog</span>.</li>
</ul>
<span>          Here in this article I take an example of Differential Calculus (derivative) i.e. how to differentiate a given expression with respect to a variable and produce the result.</span>
<table border="1" cellpadding="0" cellspacing="0">
<tr>
<td valign="top" width="590"><strong><em><span>First I need to know the basic rules for differentiation:</span></em></strong></td>
</tr>
<tr>
<td valign="top" width="590">
<ul>
	<li><span>d ( C , x ) = 0</span></li>
	<li><span>d ( x , x ) = 1</span></li>
	<li><span>d ( x^n , x ) = x * x ^ ( n - 1 )</span></li>
	<li><span>d </span><span class="GramE">( u</span> ± v , x ) = du/<span class="SpellE">dx</span> ± <span class="SpellE">dv</span>/<span class="SpellE">dx</span></li>
	<li><span>d </span><span class="GramE">( u</span> * v , x ) = u * <span class="SpellE">dv</span>/<span class="SpellE">dx</span> + v * du/<span class="SpellE">dx</span></li>
	<li><span>d ( sin(x) , x ) = cos (x)</span></li>
</ul>
</td>
</tr>
</table>
<span>          The above are some rules for basic differentiation. So the notation here I used are easily understandable, any way I explain them.</span>
<table border="1" cellpadding="0" cellspacing="0">
<tr>
<td valign="top" width="295">
<p align="center"><strong><span>Notation</span></strong></p>
</td>
<td valign="top" width="295"><strong><span>Meaning</span></strong></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>d</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Differentiation Function</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>1<sup>st</sup> argument</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Function to be differentiated</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>2<sup>nd</sup> argument</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>With respect to variable</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>^</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Raised to the </span><span class="SpellE">poIr</span> of</em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>*</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Multiplication</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>+</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Addition</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>-</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>Subtraction</span></em></td>
</tr>
<tr>
<td valign="top" width="295">
<p align="center"><strong><em><span>/</span></em></strong></p>
</td>
<td valign="top" width="295"><em><span>division</span></em></td>
</tr>
</table>
<span>Now let us define the above rules in the prolog as facts. I first describe a structure for the differentiation function. </span>

<span></span><span class="GramE"><strong><span>d</span></strong></span><strong><span> (</span></strong><span> <em>f(x) , x , R</em>  <strong>).</strong></span>

<span class="GramE"></span><span>f(</span><span>x) =&gt; function to be differentiated</span>

<span class="GramE"></span><span>x</span><span> =&gt; with respect to variable</span>

<span>R =&gt; Result
</span><span class="GramE">Now</span> let us define the facts in prolog.

<span>

<a href="symbolic-computation-differential-calculus-using-prolog-part-1.html">Symbolic Computation - Differential Calculus using Prolog - Part 1</a>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 1#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><span class="GramE"><strong><span>d</span></strong></span><strong><span> ( C, X, 0 ):- atomic(C). </span></strong></td>
</tr>
</table>
<span>The above rule states that, it can match any value passed as function, and checks whether it is atomic, i.e. a number or constant. It Yes then it will return </span><span class="GramE">0 ,</span> else it will return nothing and the interpreter fails.

<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( 5 , x , R ) =&gt; R = 0</span></td>
</tr>
</table>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 2#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><span class="GramE"><strong><span>d</span></strong></span><strong><span> ( X , X , 1 ).</span></strong></td>
</tr>
</table>
<span>If both function and "the with respect" to variable are equal then the derivative is 1. </span><span class="SpellE">i.e</span> if d( x ) / <span class="SpellE">dx</span> = 1

<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( x , x , R ) =&gt; R = 1</span></td>
</tr>
</table>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 3#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><strong><span>d </span><span class="GramE">( U</span> + V , X , A + B ):-</strong><strong><span>d </span><span class="GramE">( U</span> , X , A ), % du / <span class="SpellE">dx</span></strong><span class="GramE"><strong><span>d</span></strong></span><strong><span> ( V , X , B ). % </span><span class="SpellE">dv</span> / <span class="SpellE">dx</span></strong></td>
</tr>
</table>
<span>Note, the same rule of subtraction, but instead of plus, use minus sign</span>

<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( x + 1, x , R ) =&gt; R = 1 + 0</span></td>
</tr>
</table>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 4#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><strong><span>d ( U * V , X , U * B + V * A ):-</span></strong><strong><span>d( U, X, A ), % A = d(U)/</span><span class="SpellE">dX</span></strong><span class="GramE"><strong><span>d(</span></strong></span><strong><span> V, X, B ). % B = d (V)/</span><span class="SpellE">dX</span></strong></td>
</tr>
</table>
<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( x * sin(x), x , R ) =&gt; R = x*(1*cos(x)) + sin(x)*1</span></td>
</tr>
</table>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 5#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><strong><span>d ( U^N , X , R ):-</span></strong><strong><span>atomic( N ),</span></strong><strong><span>N \= X,</span></strong><strong><span>d( U, X, A ),</span></strong>

<strong><span>R = N * A * U ^ (N - 1).</span></strong></td>
</tr>
</table>
<ul>
	<li><span>atomic( N ) states that N should be a number</span></li>
	<li><span>N \= X, states that N should not equal to X i.e. not in the form sin(x) ^ x</span></li>
	<li><strong><span>d( U, X, A ), </span></strong><span>differentiates the function and then finally frame the result of the form N * X ^ ( N – 1 )</span></li>
</ul>
<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( x^3 , x , R ) =&gt; R = 3*1*x ^ (3 - 1)</span></td>
</tr>
</table>
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top">
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Rule 6#</span></strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><strong><span>d ( sin(W) , X , Z * cos ( W ) ):-</span></strong><span class="GramE"><strong><span>d</span></strong></span><strong><span> ( W , X , Z ).</span></strong></td>
</tr>
</table>
<span>Rule defines the sine function. The format is in general form as it can differentiate sin(x), sin(x^2), sin(x^2 + x) etc.</span>

<span>So similar function declaration for cos, tan, log etc.</span>

<span class="SpellE"><strong><u><span>Eg</span></u></strong></span><span>: d ( sin(x) , x , R ) =&gt; R = 1*cos(x)</span></td>
</tr>
</table>
<span>Here I give you the full </span>code for the differential calculus which covers the basic rules of differentiation.
<table border="1" cellPadding="0" cellSpacing="0">
<tr>
<td width="590" vAlign="top"><strong><span>Basic Rules for differential calculus ( full </span><span class="SpellE">sMyce</span> code )</strong></td>
</tr>
<tr>
<td width="590" vAlign="top"><span class="GramE"></span><span>d</span><span>( X, X, 1 ):- !. /* d(X) </span><span class="SpellE">w.r.t</span>. X is 1 */<span class="GramE"></span><span>d</span><span>( C, X, 0 ):- atomic(C). /* If C is a constant then */</span><span>/* d(C)/</span><span class="SpellE">dX</span> is 0 */<span>d( U+V, X, R ):- /* d(U+V)/</span><span class="SpellE">dX</span> = A+B where */

<span>d( U, X, A ), /* A = d(U)/</span><span class="SpellE">dX</span> and */

<span>d( V, X, B ),</span>

<span>R = A + B.</span>

<span>d( U-V, X, R ):-</span>

<span>d( U, X, A),</span>

<span>d( V, X, B),</span>

<span>R = A - B.</span>

<span>d( C*U, X, R ):-</span>

<span>atomic(C),</span>

<span>C \= X,</span>

<span>d( U, X, A ),</span>

<span>R = C * A,</span>

<span>!.</span>

<span>d( U*V, X, U*B+V*A ):- /* d(U*V)/</span><span class="SpellE">dX</span> = B*U+A*V where */

<span>d( U, X, A ), /* A = d(U)/</span><span class="SpellE">dX</span> and */

<span></span><span class="GramE">d(</span> V, X, B ). /* B = d(V)/<span class="SpellE">dX</span> */

<span>d( U/V, X, (A*V-B*U)/(V^2) ):- /* d(U/V)/</span><span class="SpellE">dX</span> = (A*V-B*U)/(V*V) */

<span>d( U, X, A), /* where A = d(U)/</span><span class="SpellE">dX</span> and */

<span></span><span class="GramE">d(</span> V, X, B). /* B = d(V)/<span class="SpellE">dX</span> */

<span>d( U^C, X, R ):- /* d(U^C)/</span><span class="SpellE">dX</span> = C*A*U^(C-1) */

<span>atomic(C), /* where C is a number or */</span>

<span>C\=X,</span>

<span>d( U, X, A ),</span>

<span>R = C * A * U ^ </span><span class="GramE">( C</span> - 1 ).

<span>d( sin(W), X, Z*cos(W) ):- /* d(sin(W))/</span><span class="SpellE">dX</span> = Z*cos(W) */

<span></span><span class="GramE">d(</span> W, X, Z). /* where Z = d(W)/<span class="SpellE">dX</span> */

<span>d( exp(W), X, Z*exp(W) ):- /* d(exp(W))/</span><span class="SpellE">dX</span> = Z*exp(W) */

<span></span><span class="GramE">d(</span> W, X, Z). /* where Z = d(W)/<span class="SpellE">dX</span> */

<span>d( log(W), X, Z/W ):- /* d(log(W))/</span><span class="SpellE">dX</span> = Z/W */

<span></span><span class="GramE">d(</span> W, X, Z). /* where Z = d(W)/<span class="SpellE">dX</span> */

<span>d( cos(W), X, -(Z*sin(W)) ):- /* d(cos(W))/</span><span class="SpellE">dX</span> = Z*sin(W) */

<span></span><span class="GramE">d(</span> W, X, Z). /* where Z = d(W)/<span class="SpellE">dX</span> */

<span>d( tan(W), X, (Z*sec(W)^2) ):- /* d(tan(W))/</span><span class="SpellE">dX</span> = Z*sec(W)^2 */

<span></span><span class="GramE">d(</span> W, X, Z). /* where Z = d(W)/<span class="SpellE">dX</span> */</td>
</tr>
</table>
<a href="https://c/Documents%20and%20Settings/Maheshwaran.S/Application%20Data/Windows%20Live%20Writer/PostSupportingFiles/d8fd7bc4-01e3-4df6-b5d0-b88800cd379a/clip_image002%5B6%5D.jpg"></a>

<span>To run the above </span><span class="GramE">program ,</span> save the file as “diff.pl”, start prolog interpreter and type “ [‘diff.pl’]. “<span class="GramE">( don’t</span> miss the “.” , it says the end of function ) and press enter.

<a href="https://c/Documents%20and%20Settings/Maheshwaran.S/Application%20Data/Windows%20Live%20Writer/PostSupportingFiles/d8fd7bc4-01e3-4df6-b5d0-b88800cd379a/clip_image0021%5B5%5D.jpg"></a>

<span>The above info would have given a breif idea to develope parsers that can be used in their programs. The prolog is more generalized language and the prolog code can be transformed into C,C++ or Java. </span>Tools for converting prolog to C, C++ or Java are available in the internet for free of cost. My favorite is Prolog Café, which converts prolog programs into Java <span class="SpellE">sMyce</span> code and gnuprolog jar file which is used to use the direct prolog program in a java code without conversion.
