---
layout: post
title: Object Oriented Programming – Encapsulation is not just hiding data!
categories: ['programming']
---
Continuing the <a href="{{site.url}}/tag/object-oriented-programming/">Object Oriented Programming</a> series, after writing about <a href="{{site.url}}/programming/object-oriented-programming-abstraction/">Abstraction</a>, it's time to educate about Encapsulation.

Let's first look at what is generally believed as Encapsulation? Ask your teacher, "What is Encapsulation?" You teacher would promptly say "<strong>Hiding data</strong>". Try googling, you find just 10% of the sites will be giving you right information about Encapsulation where most of them tends to miss out the important glitch. When one of my friends was speaking about Encapsulation, he was right in quoting the proper definition i.e. "Hiding Information", but his understanding was not correct. If you are one of them who doesn't understand about Encapsulation, then this article is for you.<!--more-->

So, what exactly the encapsulation means bro? Ok. Let we have some coffee, and we continue discuss about Encapsulation.

<img src="../images/2008/06/060908-0915-objectorien12.jpg" alt="" />

Cool, the coffee vending machine has given tasty brewed coffees. Nice coffee! Back to our discussion, here is a simple question I'd like to ask you. Why don't you give a thought on how did this coffee vending machine worked?

You dropped in the coin, and the coffee came out of the machine in a beautiful coffee cup. So, why didn't you see how the where the coffee beans, how it is prepared? You really don't know (unless you are the one who designed the machine ;-)) how things are made inside the machine, but finally you get a coffee!! Yeah don't you see a sense of Encapsulation? So, here what is actually hidden? The Coffee beans? <strong><em>No, the way how the coffee prepared is hidden</em></strong>.

<strong>So, Encapsulation is hiding of process; hence you hide the data. Not the vice versa.
</strong>

From the definition, <strong>Encapsulation is "Information Hiding"</strong>, the information is how <strong>something is happening</strong> inside an object? It's just a mere <strong>data hiding concept </strong>(though it includes data hiding).

So, when you model this coffee vending machine, you don't want to show out the way how a coffee is made. Isn't it? So, you don't want to show where the coffee beans, milk and the sugar are. Right?

<img src="../images/2008/06/060908-0915-objectorien22.png" alt="" />

So, in the CofeeVendingMachine class, prepareCoffee() is hidden and getCoffee() is made public, so that you will be able to send a request to the machine.

Since you have hidden the process, you don't have any need to show how the coffee &amp; milk are mixed and how it's been brewed. If you need a stylish design, even you can show that.

<img src="../images/2008/06/060908-0915-objectorien32.png" alt="" />

The Coffee Vending Machine encapsulates the internal process and the ingredients (data) used in the process.

Object Oriented Languages provides encapsulation via modifiers such as "private", "protected". Sometimes, volatile and transient also acts as encapsulating modifiers, but they are language specifics.

Encapsulation doesn't stop just with OOP languages. The concept extends itself to the latest technology such as Webservices, Service Oriented Architecture. If you closely watch, any real world object has encapsulation in it, which the Object Oriented Programming tries to model.
