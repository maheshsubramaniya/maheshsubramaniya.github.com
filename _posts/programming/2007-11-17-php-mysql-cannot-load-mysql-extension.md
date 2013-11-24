---
layout: post
title: PHP MySQL – Cannot Load MySQL Extension
author: Mahesh Subramaniya
date: 2007-11-17 02:10:51
categories: ['programming']
---

I faced the problem of loading the MySQL Extentsion when I upgraded the PHP from 5.0 to 5.2.5.
I search for websites on HOW-TO load the PHP MySQL Extension.
All the websites quoted saying remove the semicolon ";" in the extensions section.
It was the same answer even in <a href="http://forums.mysql.com/read.php?52,64628,64628">MySQL forums</a>, which I already knew.

But that didn't fix the problem. The problem is, the PHP cannot find the extension directory.
Update the below line in your "php.ini" file.

<pre>
; Directory in which the loadable extensions (modules) reside.
extension_dir = "./ext"
</pre>