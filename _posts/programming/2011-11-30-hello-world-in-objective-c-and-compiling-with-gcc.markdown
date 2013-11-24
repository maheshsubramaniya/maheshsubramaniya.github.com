---
layout: post
title: Hello World in Objective C and Compiling with GCC
categories: ['programming']
---
<h2 id="contents">Contents</h2>
<ul>
	<li><a href="#overview">Overview</a>
<ul>
	<li><a href="#hello-world-object-version">Hello World - Using Object</a></li>
	<li><a href="#helloworld-with-interfaces">Hello World - Using Interface</a></li>
	<li><a href="#hello-world-modularized">Hello World - Modularized</a></li>
	<li><a href="#understanding-the-program">Understanding the program</a>
<ul>
	<li><a href="#write-your-interfaces">Write the inteface</a></li>
	<li><a href="#write-your-implementation">Write the implementation</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="overview">Overview</h3>
There are a lot of articles in Introduction of Objective-C and explaining basic concepts. But this article attempts to explain the basics of Objective-C without the influence of any framework  i.e without the influence of the <strong>GNUStep</strong> or <strong>NextStep</strong> or<strong> Cocoa framekwork</strong>. So, I  have used the primitive types and the basic object from Objective-C base framework and complied with <code>GCC</code> compiler. Also I did not want to use <strong>Apple's XCode</strong> editor to write an objective-c program, instead I used <strong>Emacs</strong> and  <strong>Terminal</strong> to write, build and run the code. After all it s again a C-programming language. This makes the language learning more fun. So this article goes little in-depth to explain the semantics of each element in the Objective-C. If you need a jump start in learning the language you can refer to the <a href="http://google-styleguide.googlecode.com/svn/trunk/objcguide.xml">Google's style guide</a> to get an overview about the language. Also try reading the <a href="http://www.faqs.org/faqs/computer-lang/Objective-C/faq/">FAQs</a> about the language and you will get more insights.

So, before start learning this here are my two cents:
<ol>
	<li>Think Objects &amp; Intefaces. Though you write the program in a C like language, do not think procedurally.</li>
	<li>You might want to write comparitively more number of lines than you think.</li>
	<li>Have patience in using brackets.</li>
	<li>You might have to learn few other object-oriented mechanism and implementation other than Inheritance, Polymorphism etc.,</li>
</ol>
<h3 id="hello-world-object-version">Hello World - Object Version</h3>
Here is the hello world progarm.
<pre>
#import &lt;objc/Object.h&gt;

#import &lt;stdio.h&gt;
/** Write your Interface extending Object **/

@implementation HelloWorld:Object
-(void) hello
{
    printf("Hello World");
}
@end

/** Main program for the program execution entry **/
int main(int argv, char* argc[])
{

/* Create an object */
    id o = [HelloWorld new];

/* Pass the message 'hello' to object in the reference variable 'o' */
    [o hello];
}</pre>
You should notice the below things in the above program
<ol>
	<li><code>HelloWorld</code> is extending <code>Object</code> class, which provides the basic features for objects like <code>new, free, alloc</code> etc.,</li>
	<li>Used <code>#import</code> instead of the regular <code>#include</code>. The advantage in using <code>#import</code> is, the compiler will make sure that it includes the header file <strong>only once</strong> during compilation irrespective of how many modules is importing ( i.e including ) the same header file repeatedly. So you can avoid boiler-plate code like this.</li>
</ol>
<pre>#ifndef _INC_HEADER1

#define _INC_HEADER1
#include "header1.h"

#endif</pre>
3.The method definition of <code>hello</code> is quite understandable. I'm not going to explain much of it now here. The object created from this class is capable of receiving the message named <code>hello</code> and invoke the method <code>hello</code> defined in the class <code>HelloWorld</code>.

<strong>Compile</strong>

To compile this program in your terminal either in Linux / Mac use this command.
<blockquote><code>% gcc -arch i386 -o hello -l objc helloworld.m</code></blockquote>
<strong><code>gcc</code></strong> is the <a href="http://gcc.gnu.org/">GNU compiler suite</a>, which you will get by default in your mac / linux machines or you can download it.

<strong><code>-o</code></strong> is to mention that you create an executable with name <code>hello</code>

<strong><code>-lobjc</code></strong> is to make the compiler aware that you are trying to <a href="http://gcc.gnu.org/onlinedocs/gcc-4.6.2/gcc/Link-Options.html#Link-Options">compile &amp; link</a> <strong>Object-C</strong> language.

<strong><code>helloworld.m</code></strong> is the file which contains the objective-c program.

<strong>Output</strong>
<blockquote><code>Hello World</code></blockquote>
<h3 id="helloworld-with-interfaces">HelloWorld - with Interfaces</h3>
Lets add some some salt to it. An another version of the same program can be written like this.

<code>#import &lt;objc/Object.h&gt;</code>

<code>#import &lt;stdio.h&gt;</code>
<div class="code">
<pre>
@interface HelloWorld:Object
{
}
-(void) hello;
@end

@implementation HelloWorld
-(void) hello
{
    printf("Hello World");
}

@end

int main(int argv, char* argc[])
{
    id o = [HelloWorld new];

    [o hello];
}
</pre>
</div>
You will note two differences in this version of the program.
<ol>
	<li>There is an interface class extending <code>Object</code> class</li>
	<li>The implementation class doesn't inherit the class <code>Object</code></li>
</ol>
Now, you have to play by rules, the rules of the ObjC compiler.
<ol>
	<li>You should name your <code>@interface</code> as same as the <code>@implementation</code> class and you should not inherit any other object for the <code>@implementation</code> class.</li>
	<li>Every <code>@interface</code> you write, should extend the <code>Object</code> class, so that you will be able to use the messages (or method) like <code>new, alloc,free</code> etc.,</li>
</ol>
In above program, after declaring the interface you <strong>do not link the interface</strong> to the HelloWorld class, but the ObjC compiler will look for that any interface with the same name as the implementation class.

If you do not provide an interface class name, the compiler will throw out this error.
<pre>helloworld.m:13: warning: cannot find interface declaration for 'HelloWorld'</pre>
<h3 id="hello-world-modularized">Hello World - Modularized</h3>
Adding more spice to the program. The third variation to the program is below. I create three different files to split and hold the logical group of code into it's individual file, i.e basically modularizing the code. You should be known of the advantages of modularizing the code. So, in here I create the below files
<ol>
	<li>HelloWorld.h - Has the interface definition</li>
	<li>HelloWorld.m - Has the implementation details</li>
	<li>main.m - Has code to instantiate and execute the objects</li>
</ol>
<strong>HelloWorld.h</strong>
<pre>
#import &lt;objc/Object.h&gt;

#import &lt;stdio.h&gt;
@interface HelloWorld:Object
{
-(void) hello;
}</pre>
<strong>HelloWorld.m</strong>
<pre>
#import "helloworld.h"
@implementation HelloWorld
-(void) hello
{
    printf("Hello World");
}

@end</pre>
<strong>main.m</strong>
<pre>
#import &lt;objc/Object.h&gt;

#import "helloworld.m"
int main(int argv, char* argc[])
{
    id o = [HelloWorld new];
[o hello];

}
</pre>
This version of the program is what you will be writing in Realtime. Now let us try to understand the parts of the Objective-C language.

<strong>Compile</strong>

Since you have two module ( ending with <code>.m</code> ) to compile you might need to mention both of them, so that the <code>gcc</code> compiles all the required modules and then links them to create the executable.
<blockquote>gcc -lobjc -arch i386 -o main main.m helloworld.m</blockquote>
If you have more objective-c implementation files i.e <code>.m</code> files, then you can save the time and pain by including all the files with just using <code>*.m</code>
<blockquote>gcc -lobjc -arch i386 -o main *.m</blockquote>
<h3 id="understanding-the-program">Understanding the program</h3>
Let us spend some time to understand the paradigm of the Objective-C program. The objective-c language, which has a strong influence of <a href="http://www.gnu.org/software/smalltalk/manual/gst.html">SmallTalk</a> based "message" passing mechanism and <a href="http://stackoverflow.com/questions/1413543/what-does-it-mean-to-program-to-a-interface">interface-based-programming</a>, makes you think and write the programs in terms of <strong>messages</strong> and <strong>interfaces</strong>.

If you look at the above program, you would notice a pattern which is pretty much as same as a C++ program, except the interfaces and the naming conventions used. Basically the program is of 3 sections:
<ol>
	<li>Headers - Common for any programming language ( C, C++,Java etc., )</li>
	<li>Interface &amp; Implementation Classes</li>
	<li>And a main program - which runs the code.</li>
</ol>
<em>Note: If you wanted to write a procedural program, then you don't have to write a ObjC program</em>

And if you are not familiar with the interface based program and if ObjC is going to be the 1st programming language learning <a href="http://stackoverflow.com/questions/1413543/what-does-it-mean-to-program-to-a-interface">interface-based programming</a>, then I strongly recommend to gain some basic knowledge of what does interfaces means and how they are used and useful to the software construction.
<h4 id="write-your-interfaces">Write your interfaces</h4>
Every class you wanted to create i.e the real concrete class which does some logic, you ought to tell the objective-c compiler, something about the class.Thats why you create <code>@interface</code>. <code>@interface</code> create a template of how your object is going to look like, what data it can hold and what messages it can receive to process ( also can receive messages that it cannot support, but you can handle it accordingly)  and then you write the <code>@implementation</code> class to say what does you object is going to do. So, it is two piece of work you have to do.

And remember that, when you are modelling your classes, it always becomes your <code>@interface</code> class not <code>@implementation</code> class.

The interface should extend a class which is of type <code>Object</code> or it should be from the family of the type <code>Object</code> to provide the basic operations like <code>new, free, alloc</code> etc., Again <code>Object</code> is an both <a href="http://www.opensource.apple.com/source/objc4/objc4-222/runtime/Object.h">interface</a> and has an <a href="http://opensource.apple.com/source/objc4/objc4-371/runtime/Object.m">implementation</a>, i.e type <code>Object</code> is a concrete class that you can use as below

<pre>id o = [Object new];
@interface HelloWorld:Object
{
    /* data */
}

/* messages */
    -(void) hello;
@end</pre>
<h4 id="write-your-implementation">Write your implementation</h4>
The implementation class is going to hold the logic what needs to be performed when a defined message by interface is sent to the object. In this case when a <code>hello</code> message is sent to the object, the implementation defines what needs to be done. Interface class starts with <code>@interface &lt;ClassName&gt;</code> and ends with <code>@end</code>.
<pre>@implementation HelloWorld
-(void) hello
{
   ....
   ....
   ....
}

@end</pre>
