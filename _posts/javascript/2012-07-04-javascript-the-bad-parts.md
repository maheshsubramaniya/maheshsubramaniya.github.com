---
layout: post
title: Javascript - Bad parts
excerpt: Understand what are the bad parts of javascript and how you wanted to avoid it
categories: ['javascript']
tags: [javascript,bad parts,best practices]
---

> When you know what is the right thing to, you cannot do the other way.
>    - [Harry Fertig, The Confessions](http://www.imdb.com/title/tt0128137/)


Well, the above quote fits very well for what I'm going to write here. After reading through [Douglas Crockford's](https://plus.google.com/118095276221607585885/posts) [Javascript - The Good part](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742), it was so evident that how much of bad javascript we coding in the projects. Learing the bad parts is as equlally important as to learn the good parts. 

I'm trying to summarize the javascript semantics used in [bad way due to misunderstanding](http://www.crockford.com/javascript/javascript.html). Some of them has been learnt from Doug's book and some from my experience.


###	Make educated decision on using eval()
Most of them who uses javascript argues `eval()` is evil but not everyone has an understanding of why it is evil and how much evil it is and there is another school of thought that `eval()` is required. So it is very important to make a learned decission to use or not-use `eval()` function.

### Why is it so?

Consider this example.

    var Namespace = ... //create a namespace Namespace.module.class
    	
    Namespace.module.class.x = 1;
	
Now if you want to set a value to new variable `y` to the `class` object

    eval('Namespace.module.class.y = 2')
	
So what is wrong in this?

#### First and foremost issue is security and correctness of your application.

Let us look how it affects the security.

Say you have a webpage which uses the url param values in it.
eg: http://example.org?name=Mahesh&page=2

and in your webpage you are using the params like this

	var paramName = "page"
	eval("Namespace.module.class" + paramName + "=" + value)

Now, if instead of `page=2`, if someone passes `alert(1)`, then the script will get executed. No harm in simple script, but think of a malicious code gets injected. This is a good example [eval() bug in firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=87980)

some ways to avoid is to use `()` while executing to keep the scope limited to the `()`. Curry the javascript function.

#### Your script execution becomes slow

Browser has to instantiate a new Javascript interpreter environment to compile the string program you have just passed in.

#### debugging of scripts executed via eval is difficult.

You cannot expect browser to provide debug mechanism for scripts executed via eval. Incase

thought eval() based attacks are old fashioned, but it still exploitable. So make sure to use appropriate measures to stop exploiting.

### cautious usage of equality == , === & inequality  !=, !== ###

`==` operator works in different ways based on the type.

	> x = undefined
	> x == null
		true
	> x === null
		false

Another common issue everyone knows is how javascript works while comparing string to numbers.
	> 1 == '1'
		true
	> 1 === '1'
		false

	> 0 == '0' //quite interesting
		true

So, what do you think when you use

	> 0 ? "true" : "false"
		false
	> "0" ? "true" : "false"
		true
		
Isnt it quite messy? we just observed above that `0 == '0'`, but the ternary operator says other wise. Hence while using the `==` operator be cautious of what you are comparing.


	> [ ] == [ ]
		false //correct as two instance of array objects are created
	>[].toString() == [].toString()
		true //because value of the arrays are converted into comma seperated value and compared


### Unary + & -	###

Unary operator helps in converting a string to number( integer or float ). But this is not a good choice to convert it.

	> +'0'
		0
	> +"123.123"
		123.123
		
#### Why? ####

First of all it is not a good standard to use. Secondly, consider this scenario which gives inconsistent behaviour. A function (in this case to convert string to number) should be used only if it is consistent in providing output. hence `unary +` & `unary -` cannot be used as function to convert string to number. 

	> a="-123.123"
	> -a
		123.123
	> +a
		-123.123


### scope of `this` ###

`this` should be used with caution. Why? Because in the scrpting language, the reference of this may go wierd. This like.

<pre>

function f()
{
    var val = 10;
    $.on("click",function(e){
        console.log(this.val);
    });
}

</pre>

If you think it is 10, then I would recommend you to read [about _this_](http://stackoverflow.com/questions/3127429/javascript-this-keyword)


Also I recommend reading what Nils Jünemann findings on [Gmail XSS bugs](http://www.nilsjuenemann.de/2012/06/cross-site-scripting-in-google-mail.html). This is an eye opener for anyone who doesn't want to write bad javascripts.

Let me know what was the bad part of javascript that you have used and how did you fix it?