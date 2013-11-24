---
layout: post
title: Aggregation vs Composition
categories: ['programming']
---
Aggregation and Composition are type of Association which explains how two elements are associated to each other in a class model. Sometime it very confusing to choose between  Aggregation &amp; Composition.
<h3 id="association">Association</h3>
In Object orientation, Association is an important relationship which explains how one element is related to another by type and instance(s) ( i.e multiplicity ). Almost most of the objects that you would model or work with will associate with something or other.

class Person
{
String firstName;
String lastName;
Integer age;
}

In the above example, the attribute <code>firstName</code> and <code>lastName</code> are associated to the <code>class Person</code>.

It is very easy to understand about the Association and it is straight forward. But the problem arises for most of the programmers during the UML modeling is, when they come across another type of association i.e <strong>Composition</strong>. Though they are very similar in the <strong>action</strong>, but they are applied for different purposes. Both are certainly an easy to understand concepts, but understanding them requires few insight / visualization of few real world things and correlation with the concepts.

<a title="Merriam-Webster Online" href="http://www.merriam-webster.com/">Merriam Webster
</a> definition for
<blockquote><strong><a href="http://www.merriam-webster.com/dictionary/aggregation">Aggregation</a></strong>:<em>the collecting of units or parts into a mass or whole</em>.

<strong><a href="http://www.merriam-webster.com/dictionary/composition">Composition</a></strong>:<em>product of mixing or combining various elements or ingredients</em>.</blockquote>
Does both sounds similar? No. There is a subtle difference. Lets look at those differences now.
<h3 id="aggregation">Aggregation</h3>
<blockquote>Aggregation is the process of grouping <strong>homogenous objects</strong>.</blockquote>
Notice the bold words <strong>homogenous objects</strong>. Yes, aggregation deals with same type of objects. Same type of object means? Let us see this example.

In Microsoft Excel, Aggregation is process of applying a specific function on set of similar object( Numbers, Text etc.,)

<img title="Microsoft Excel Aggregation example" src="../images/2010/11/aggregation-microsoft-excel.png" alt="Microsoft Excel Aggregation example" />

So, if you mix numbers along with text, the aggregation will not work. Same applies for Object Oriented Modelling too.

Another example is Book. A book is aggregation of pages, not anything else.

<code>
class Book
{
Page[] pages;
}</code>

<code> </code>

<code>class DuckPond
{
List ducks;
}
</code>

<img src="http://farm3.static.flickr.com/2645/4085456584_8b556c590a_m.jpg" alt="Ducks in Pond" />

<em>Courtesy by <a title="Courtesy by John Morgan" href="http://www.flickr.com/photos/aidanmorgan/4085456584/">John Morgan</a></em>

In the above example, the list will hold same <code>Address</code> object.

In Java Generics in the Collections are kind of Aggregation.

<code>
List&lt;Driver&gt; driversList = new ArrayList&lt;Driver&gt;();
</code>
<h3 id="composition">Composition</h3>
Composition on the other hand is again grouping of object but, <strong>dis-similar</strong> objects. Than Association you will model objects with composition more frequently. Composition reflects the objects in real world.

<code>
class Car
{
Wheel[] wheels;
BodyStyle body;
HeadLight[] headlights;
}
</code>

The code builds a Car object, where a Car is composed of heterogenous parts like Wheels, Headlights, Body metals etc., Here the appropriate method is <strong>Composition</strong>. Aggregation wont fit here.

Let us consider the book example. A book is aggregation of pages, but pages are not just made of text. They are made of tex and pictures.

<code>
class Page
{
List textblocks;
List imageblocks;
}
</code>

<img src="../images/2011/11/2073_idly_12898933201.jpg" alt="Example of Composition: Perfect South Indian Dish" />

<em>Composition of different and appropriate object makes things better</em>
