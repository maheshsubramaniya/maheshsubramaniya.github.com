---
layout: post
title: BeanShell Java - Scripting
categories: ['jee']
tags: [java,jee,j2ee,beanshell,REPL]
---

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
	<li><a href="#sec-1">1 What is BeanShell? </a></li>
	<li><a href="#sec-2">2 BeanShell - Features </a>
<ul>
	<li><a href="#sec-2.1">2.1 General </a></li>
	<li><a href="#sec-2.2">2.2 Java Evaluation Features </a></li>
	<li><a href="#sec-2.3">2.3 Scripting Features </a></li>
	<li><a href="#sec-2.4">2.4 Download and Run BeanShell </a></li>
</ul>
</li>
	<li><a href="#sec-3">3 Examples </a>
<ul>
	<li><a href="#sec-3.1">3.1 Creating a JFrame both in BSH and Java </a></li>
	<li><a href="#sec-3.2">3.2 Script to create a JFrame in BSH </a></li>
	<li><a href="#sec-3.3">3.3 Script to create a JFrame in Java </a></li>
	<li><a href="#sec-3.4">3.4 Auto Boxing and Unboxing </a></li>
	<li><a href="#sec-3.5">3.5 Bean Commands </a></li>
	<li><a href="#sec-3.6">3.6 Scripted Methods </a></li>
	<li><a href="#sec-3.7">3.7 Calling BSH From Your Application </a></li>
</ul>
</li>
</ul>
</div>
</div>
<div id="outline-container-1" class="outline-3">
<h3 id="sec-1"><span class="section-number-3">1</span> What is BeanShell?</h3>
<div id="text-1" class="outline-text-3">

BeanShell is a small, free, embeddable, Java source interpreter with object scripting language features, written in Java. BeanShell executes standard Java statements and expressions directly without first compiling them. Also, with BeanShell the user can script object  as simple method closure like those in Perl and JavaScript(tm). It is based on the Sun Java grammar and built with Sun’s JavaCC. In short, BeanShell is not just dynamically interpreted Java, but also a simple scripting language.BeanShell is a new kind of scripting language. BeanShell begins with the standard Java language and bridges it into the scripting domain in a natural way, but allowing the developer to relaxing types where appropriate. It is possible to write BeanShell scripts that look exactly like Java method code. But it's also possible to write scripts that look more like a traditional scripting language, while still maintaining the framework of the Java syntax.

</div>
</div>
<div id="outline-container-2" class="outline-3">
<h3 id="sec-2"><span class="section-number-3">2</span> BeanShell - Features</h3>
<div id="outline-container-2.1" class="outline-4">
<h4 id="sec-2.1"><span class="section-number-4">2.1</span> General</h4>
<div id="text-2.1" class="outline-text-4">

The interpreter is small, 175K jar file approximately.
<ul>
	<li> Uses of the Java reflection API to provide runtime interpreted execution of Java statements and expressions.</li>
	<li> Transparent access to all Java objects and APIs.</li>
	<li> Runs in command line, console, applet and remote session server.</li>
	<li> Works in applets as well as application.</li>
</ul>
</div>
</div>
<div id="outline-container-2.2" class="outline-4">
<h4 id="sec-2.2"><span class="section-number-4">2.2</span> Java Evaluation Features</h4>
<div id="text-2.2" class="outline-text-4">
<ul>
	<li> Covers full Java statements &amp; expression syntax and full Java arithmetic, logical and bitwise operations.</li>
	<li> Emulation of strongly typed variables and methods.</li>
	<li> Loops and control structures with breaks and returns.</li>
	<li> Method invocations with polymorphic/overloaded method resolution.</li>
</ul>
</div>
</div>
<div id="outline-container-2.3" class="outline-4">
<h4 id="sec-2.3"><span class="section-number-4">2.3</span> Scripting Features</h4>
<div id="text-2.3" class="outline-text-4">
<ul>
	<li> Scripted methods with strong or loose typing of arguments and return values.</li>
	<li> Scripted objects with JavaScript-like method closures.</li>
	<li> Scripted AWT/Swing event handlers.</li>
	<li> Implementation of arbitrary Java interface</li>
	<li> Convenience syntax for working with JavaBean properties, hashtables and primitive wrapper types.</li>
</ul>
</div>
</div>
<div id="outline-container-2.4" class="outline-4">
<h4 id="sec-2.4"><span class="section-number-4">2.4</span> Download and Run BeanShell</h4>
<div id="text-2.4" class="outline-text-4">

Download the latest JAR file from <a href="http://www.beanshell.org">http://www.beanshell.org</a>. if you just want to start playing around you may be able to launch the BeanShell desktop by simply double clicking on the BeanShell JAR file. More generally however you'll want to add the jar to your classpath so that you can work with your own classes and applications easily.

To do this you can either drop the BeanShell JAR file into your Java extensions folder or add it to your classpath. (Important: If you put BeanShell in the extensions folder and wish to use it with BSF applications like Jakarta Ant you must install the bsf.jar in the same location).
<pre class="example">To install as an extension place the bsh.jar file in your

$JAVA_HOME/jre/lib/ext folder.

Or add BeanShell to your classpath like this:

Linux: export CLASSPATH=$CLASSPATH:bsh-xx.jar

Windows:  set classpath = %classpath%;bsh-xx.jar
</pre>
You can then run BeanShell in either a GUI or command line mode:
<table border="2" cellspacing="0" cellpadding="6" frame="hsides" rules="groups"><caption></caption> <colgroup> <col align="left"></col> <col align="left"></col> </colgroup>
<thead>
<tr>
<th scope="col">Command</th>
<th scope="col">Runs</th>
</tr>
</thead>
<tbody>
<tr>
<td>java bsh.Console</td>
<td>Runs the graphical desktop</td>
</tr>
<tr>
<td>java bash.Interpreter</td>
<td>Runs as text-only on the command line</td>
</tr>
<tr>
<td>java bsh.Interpreter filename [args]</td>
<td>Runs a script file name 'filename'</td>
</tr>
</tbody>
</table>
It's also possible to call BeanShell from within your own Java applications, to reach it in a remote server mode for debugging, to use it as a servlet, or even in an applet.

Example of BSH

BeanShell understands standard Java statements, expressions, and method declarations. Statements and expressions are all of the normal things that you'd say inside a Java method such as variable declarations and assignments, method calls, loops, and conditionals. You can use these exactly as they would appear in Java, however in BeanShell you also have the option of working with "loosely typed" variables. That is, you can simply omit the types of variables that you use (both primitives and objects). BeanShell will only signal an error if you attempt to misuse the actual type of the variable.

Here are some examples:
<pre class="example">bsh % print(a);

3
</pre>
<pre class="example">bsh % foo="Foo"

bsh % print(foo);

Foo
</pre>
<pre class="example">bsh % print(1+2);

3
</pre>
<pre class="example">bsh % for(i=0;i &lt; 10; i++)

print(i);

0

1

2

3

4

5

6

7

8

9
</pre>
</div>
</div>
</div>
<div id="outline-container-3" class="outline-3">
<h3 id="sec-3"><span class="section-number-3">3</span> Examples</h3>
<div id="outline-container-3.1" class="outline-4">
<h4 id="sec-3.1"><span class="section-number-4">3.1</span> Creating a JFrame both in BSH and Java</h4>
<div id="text-3.1" class="outline-text-4">
<pre class="example">Creating a window in BSH, done just in fly, as u compiled it. 

Script to create a JFrame in BSH

% frame(new JButton("Button"));
</pre>
</div>
</div>
<div id="outline-container-3.2" class="outline-4">
<h4 id="sec-3.2"><span class="section-number-4">3.2</span> Script to create a JFrame in BSH</h4>
<div id="text-3.2" class="outline-text-4">
<pre class="example">// Pop up a frame with a button in it

button = new JButton( "My Button" );

frame = new JFrame( "My Frame" );

frame.getContentPane().add( button, "Center" );

frame.pack();

frame.setVisible(true);
</pre>
</div>
</div>
<div id="outline-container-3.3" class="outline-4">
<h4 id="sec-3.3"><span class="section-number-4">3.3</span> Script to create a JFrame in Java</h4>
<div id="text-3.3" class="outline-text-4">
<pre class="example">import javax.swing.JFrame;

public class FrameDemo{

        public FrameDemo(){

               JButton button = new JButton( "My Button" );

               this.setTitle("My Frame");

               this.getContentPane().add( button, "Center" );

               this.pack();

               this.setVisible(true);

        }

        public static void main( String[] args ){

               new FrameDemo();

        }

}
</pre>
</div>
</div>
<div id="outline-container-3.4" class="outline-4">
<h4 id="sec-3.4"><span class="section-number-4">3.4</span> Auto Boxing and Unboxing</h4>
<div id="text-3.4" class="outline-text-4">

"Boxing" and "Unboxing" are the terms used to describe automatically wrapping a primitive type in a wrapper class and unwrapping it as necessary. Boxing is a feature of Java (SDK1.5) and has been supported in BeanShell for many years. BeanShell supports boxing and unboxing of primitive types.

int i=5;

Integer iw = new Integer(5);

print( i * iw );  // 25

Vector v = new Vector();

v.put(1);

int x = v.getFirstElement();

</div>
</div>
<div id="outline-container-3.5" class="outline-4">
<h4 id="sec-3.5"><span class="section-number-4">3.5</span> Bean Commands</h4>
<div id="text-3.5" class="outline-text-4">
<table border="2" cellspacing="0" cellpadding="6" frame="hsides" rules="groups"><caption></caption> <colgroup> <col align="left"></col> <col align="left"></col> </colgroup>
<thead>
<tr>
<th scope="col">Commands</th>
<th scope="col">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>source(), run()</td>
<td>Read a bsh script into this interpreter, or run it in a new interpreter</td>
</tr>
<tr>
<td>frame()</td>
<td>Display a GUI component in a Frame or JFrame.</td>
</tr>
<tr>
<td>load(), save()</td>
<td>Load or save serializable objects to a file.</td>
</tr>
<tr>
<td>cd(), cat(), dir(), pwd(), etc.</td>
<td>Unix-like shell commands</td>
</tr>
<tr>
<td>exec()</td>
<td>Run a native application</td>
</tr>
<tr>
<td>javap()</td>
<td>Print the methods and fields of an object, similar to the output of the Java javap command.</td>
</tr>
<tr>
<td>setAccessibility()</td>
<td>Turn on unrestricted access to private and protected components.</td>
</tr>
</tbody>
</table>
<strong>Tip</strong>: The BeanShell which() command will use the classpath mapping capability to tell you where exactly in your classpath a specified class is located:

<code>bsh % which( java.lang.String );</code>

<code>Jar: file:/usr/java/j2sdk1.4.0/jre/lib/rt.jar</code>

</div>
</div>
<div id="outline-container-3.6" class="outline-4">
<h4 id="sec-3.6"><span class="section-number-4">3.6</span> Scripted Methods</h4>
<div id="text-3.6" class="outline-text-4">

You can declare and use methods in BeanShell just as you would in a Java class.

int addTwoNumbers( int a, int b ) {

return a + b;

}

sum = addTwoNumbers( 5, 7 );  // 12

Bsh methods may also allow dynamic (loose) argument and return types.

add( a, b ) {

return a + b;

}

foo = add(1, 2);            // 3

foo = add("Bean", " Shell");   // "Bean Shell"

</div>
</div>
<div id="outline-container-3.7" class="outline-4">
<h4 id="sec-3.7"><span class="section-number-4">3.7</span> Calling BSH From Your Application</h4>
<div id="text-3.7" class="outline-text-4">

You can evaluate text and run scripts from within your application by creating an instance of the BeanShell interpreter and using the eval() or source() commands. You may pass in variable references to objects you wish to use in scripts via the set() method and retrieve results with the get() method.
<pre class="example">import bsh.Interpreter;

Interpreter i = new Interpreter();  // Construct an interpreter

i.set("foo", 5);                    // Set variables

i.set("date", new Date() ); 

Date date = (Date)i.get("date");    // retrieve a variable 

// Eval a statement and get the result

i.eval("bar = foo*10");             

System.out.println( i.get("bar") );

// Source an external script file

i.source("somefile.bsh");
</pre>
Tip:
In the above example the Interpreter's eval() method also returned the value of bar as the result of the evaluation. Hope this small tutorial helps the beginners to get start with Bean Shell for Java – Scripting.

</div>
</div>
</div>
