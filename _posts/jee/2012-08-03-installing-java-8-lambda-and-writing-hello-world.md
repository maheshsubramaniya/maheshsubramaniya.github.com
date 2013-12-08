---
layout: post
title: Java 8 for Mac OS and writing a Hello World using Lambda
tags: [java,java-8,lambda,functional programming,closure]
meta-description: Learn how to install Java 8 Lambda extension and run a sample program in 3 different ways
excerpt: Learn how to install Java 8 Lambda extension and run a sample program in 3 different ways
categories: ['jee']
---

Follow the instruction to download java-8 lambda featured JDK & JRE.

1. Get the [java 8 lambda](http://download.java.net/lambda/b56/macosx-x86_64/lambda-8-b56-macosx-x86_64-11_sep_2012.tar.gz) package

2. Unzip and put it in some folder that you wanted or preferably at <code>/System/Library/Java/java-8-lambda</code>

3. Open terminal and set your <code>JAVA_HOME</code> to point to your path and now execute the `java` & `javac` commands to see if the libraries are good.

{% highlight console %}
$export JAVA_HOME=/System/Library/Java/java-8-lambda
$java -version
	openjdk version "1.8.0-ea"
	OpenJDK Runtime Environment (build 1.8.0-ea-lambda-nightly-h1171-20120911-b56-b00)
	OpenJDK 64-Bit Server VM (build 24.0-b21, mixed mode)

$javac -version
	javac 1.8.0-ea
{% endhighlight %}

If you see the above versions, then you have set the path right and got the libraries working. Write any java 8 lambda program ( <a href="#helloworldjava8">click here for sample</a> ) and compile in the same "Terminal" session.

To set the JAVA_HOME permanently, create/open the `~/.bashrc` or `~/.bash_profile` and set the JAVA_HOME path in it.

## Compiling & Running Java 8 program ##

I've considered 3 choices here

* Using Terminal
* Using the Eclipse - External Tools features
* Using Apache Ant - Either in Eclipse or Terminal. I prefer Eclipse for a quick start.


### Using Terminal ###

Whatever you did above, are all is what you need to do to run it in terminal. And preferably have it in a shell script.

### Using Eclipse - External Tools ###

All you have to setup is these two items:

#### javac ####

<figure class="image">
<figcaption>Eclipse external tools setup for javac java-8 lambda</figcaption>
<img src="../images/2012/java-8-javac-eclipse-external-tool-setup.jpg" alt="Eclipse external tools setup for javac java-8 lambda">
</figure>


#### java ####

<figure class="image">
<figcaption>Eclipse external tools setup for java java-8 lambda</figcaption>
<img src="../images/2012/java-8-eclipse-external-tool-setup.jpg" alt="Eclipse external tools setup for java java-8 lambda">
</figure>

Now run javac and then followed by java.

### Using Apache Ant ###

This is much more customizable and easier to run. Something similar to a Terminal approach, but much nicer.

Here is my an ant script - combines <code>java</code> & <code>javac</code>

{% highlight xml %}
<project name="HelloJava8" default="Main" basedir=".">

	<property name="src.dir" location="src" />
	<property name="build.dir" location="bin" />
	<property name="build.compiler" value="modern" />
	<property name="main.class" value="HelloJava8" />

	<!-- set java8 as jre -->
	<path id="build.classpath"></path>

	<!-- Deletes the existing build directory-->
	<target name="clean">
		<delete dir="${build.dir}" />
	</target>

	<!-- Creates the  build  directory-->
	<target name="makedir">
		<mkdir dir="${build.dir}" />
	</target>

	<!-- Compiles the java code -->
	<target name="compile" depends="clean, makedir">
		<javac  srcdir="${src.dir}" destdir="${build.dir}" classpathref="build.classpath" />
	</target>

	<target name="Main" depends="compile">
		<description>Main target</description>
		<java classname="${main.class}" classpath="${classes.dir};${build.dir}" fork="yes"/>
	</target>


</project>
{% endhighlight %}

If you are running this in a terminal, create a shell script to export the `ANT_HOME` variable to the ANT path.

#### Running Ant in Eclipse ####

Make sure to update some settings in Eclipse preferences for Ant and configure the .

<figure class="image">
<figcaption>Eclipse Project Build settings for Java 8 Lambda JRE</figcaption>
<img src="../images/2012/java-8-lambda-jre-eclipse-project-build-settings.jpg" alt="ava 8 Lambda JRE - Project Build settings">
</figure>

<figure class="image">
<figcaption>Configuring JRE for Java 8 Lambda JRE</figcaption>
<img src="../images/2012/java-8-lambda-jre-eclipse-settings.jpg" alt="Java 8 Lambda - Configuring JRE in Eclipse">
</figure>


<figure class="image">
<figcaption>Ant Configuration for Eclipse</figcaption>
<img src="../images/2012/eclipse-ant-settings.jpg" alt="Ant Configuration for Eclipse">
</figure>

<figure class="image">
<figcaption>JRE - Configuration for Ant for Eclipse</figcaption>
<img src="../images/2012/eclipse-ant-java-8-jre-settings.jpg" alt="JRE - Configuration for Ant for Eclipse">
</figure>


<div id="helloworldjava8"></div>
### Hello World ###

And here is a _Hello world_ using a `lambda function`  to test.

{% highlight java %}

import java.util.Arrays;
import java.util.List;
public class HelloJava8 {

	public static void main(String[] args) {
		System.out.println("Welcome to Java8! First lambda in java");
		List<String> msg = Arrays.asList("So","Nice","that","lambda","works","in", "java");

		msg.forEach( e-> { System.out.println(e); } );

	}

}

{% endhighlight %}