---
layout: post
title: Understanding how jars are loaded into JVM from a directory in Linux
excerpt: In contrary to common understanding of file ordering,understand how files are ordered in a directory.
categories: ['java']
tags: [java,jee,j2ee,linux,filesystem]
---

**Question**: If the `lib/` folder has `jar1.jar` and `jar2.jar`, what is the order of the jar loading into the JVM if you use Linux(EXT3 file system)?

**Short Answer**: One cannot say or technically, **Random**.

The order in which Jar files are loaded into JVM are **influenced by how the file system orders its file in the directory**. Since the `java.io.File` API depends on the native API, different platforms lists file in different order.

### EXT3 file system

EXT3 file system is [defacto file system in Linux kernel ](https://www.kernel.org/doc/Documentation/filesystems/ext3.txt) for over 15 years. There are [some extensive documentation ](https://en.wikipedia.org/wiki/Ext3#References) on what it is and how it works.

Lets see how the files are created and fetched in the ext3 file system.

Create 5 files

{% highlight sh %}
$ echo `seq 1 5` | xargs touch
{% endhighlight %}

List the file in alphabetical order. The `ls` command [without any argumentt](http://www.freebsd.org/cgi/man.cgi?ls) will list files in lexicographical order.

{% highlight sh %}
$ ls
1   2   3   4   5
{% endhighlight %}

List the files in the list order. Again these files are sorted by lexicographical order.

{% highlight sh %}
$ ls -l
total 0
-rw-rw-r-- 1 training training 0 Jul 10 02:04 1
-rw-rw-r-- 1 training training 0 Jul 10 02:04 2
-rw-rw-r-- 1 training training 0 Jul 10 02:04 3
-rw-rw-r-- 1 training training 0 Jul 10 02:04 4
-rw-rw-r-- 1 training training 0 Jul 10 02:04 5
{% endhighlight %}

List the files in **directory order** `-U` switch will list the file in **unordered** and which is the way files are arranged the file in the file system

{% highlight sh %}
$ ls -U
2  1  5  3  4
{% endhighlight %}

For more clarity, let us list the file in list order

{% highlight sh %}
$ ls -Ul
total 0
-rw-rw-r-- 1 training training 0 Jul 10 02:04 2
-rw-rw-r-- 1 training training 0 Jul 10 02:04 1
-rw-rw-r-- 1 training training 0 Jul 10 02:04 5
-rw-rw-r-- 1 training training 0 Jul 10 02:04 3
-rw-rw-r-- 1 training training 0 Jul 10 02:04 4
{% endhighlight %}

If you think the files are ordered by **inode** number, then you may be wrong again. Here is the listing of files with `inode` number in 1st column.

{% highlight sh %}
$ ls -Uli
total 0
671786 -rw-rw-r-- 1 training training 0 Jul 10 02:04 2
671780 -rw-rw-r-- 1 training training 0 Jul 10 02:04 1
671789 -rw-rw-r-- 1 training training 0 Jul 10 02:04 5
671787 -rw-rw-r-- 1 training training 0 Jul 10 02:04 3
671788 -rw-rw-r-- 1 training training 0 Jul 10 02:04 4
$ 
{% endhighlight %}

To add more interesting discussion, let us look across different machines with same Operating system and EXT3 file system. 

EXT3 file system [hash the filenames](https://www.kernel.org/doc/ols/2005/ols2005v1-pages-77-104.pdf) and places the entry in the directory level inode table.

> readdir() returning filenames in a hash-sorted order, so that reads from the inode table would be done in a random order.

So now you got an understanding of what directory ordering will look like.

So if your one machine load jars as `jar1.jar, jar2.jar`, another Linux machine with same OS release may load as `jar2.jar,jar1.jar` or may be same order as the other machine. **Random**.

Since it is **random**, you cannot expect the same ordering in another machine with EXT3 file system.

### Why is this important to understand?

With the usage of Maven, developers tend to miss to verify the list of jars gets packaged into a web application. When maven pulls the dependencies and the dependencies uses two different versions same component, say `javax.mail 1.3,1.4` then EXT3 file system doesn't guarantee the order of jar loaded.

So always exercise caution and do review your `lib/` folder to see what jars are pulled and packaged by your maven or any other packaging tool you use.

If you have tools like IDEs like [IntelliJ ](http://www.jetbrains.com/idea/), try to generate the POM diagram and review the jars and its transitive dependencies.