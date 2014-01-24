---
layout: post
title: Growing list of useful code snippets
categories: ['programming']
excerpt: a list of useful, short one or few lines of handy code
---



These are list of code snippets or command lines I've collected over a period of time and was maintaining in a text file in my local machine. I thought I would move it for easier access and share it with others to contribute most useful short code

**Disclaimer**: Some of the snippets are not originally mine or may be transformed to my use over a period of time. Credits goes to the original owner, unfortunately whom I didnt keep track :-(.

Date Handling | Unix Shell Commands | Short math formulas

### Check if a string is palindrome (regex/regular expression)

{% highlight javascript %}
	^([a-z0-9]).*\1$
{% endhighlight %}

### Validate a regular expression in shell

$ egrep "^([a-z0-9]).*\1$" <<< amma

### Sum of all numbers from 1 to N

Example: If N is 5, then sum all numbers from 1 to 5 i.e 1+2+3+4+5 => 15

long sum = N * (N+1) / 2

### Sum of all digits in a number

### Sums up all the digits. Example: 12345 => 1+2+3+4+5 => 15 => 1+5 => 6

For N > 0

sum=1+(N-1)%9;
For N < 0

sum=1+(-N-1)%9;
A Number if even

N % 2 == 0;
A Number if odd

N % 2 == 1;
Check if nth bit is set

Bit starts as 0. So to check 3rd bit, n should be '2'.

boolean isSet = (N & 1<<(n-1) != 0);
Find set of files and perform action (Shell)

find ~/folder/ -name "*.txt" -exec mv {} /temp/folder \;
Grep a pattern in set of files (Shell)

find -name "*.txt" | xargs -n1 grep -il WORD
find -name "*.txt" -exec grep -il WORD {} \;

### Check if a port is open (Shell)

#### With telnet

telnet 127.0.0.1 8080

#### Without telnet

$ nc -v 127.0.0.1 8080


### Check if a port is open (Shell)

With telnet

$ telnet 127.0.0.1 8080

#### Without telnet

$ nc -v 127.0.0.1 8080


### Redirect the console output to other stream(Shell)


#### Redirect stdout to a file named "a.txt" and all the stderr will be printed on the console

$ ./program  > a.txt

#### Redirect both stdout, stderr to the same file
$ ./program  > a.txt 2>&1

#### Redirect both stdout, stderr to seperate files
$ ./program  1>stdout.txt 2>stderr.txt

#### Seperate files for errors(stderr) and non errors(stdout)

$ ./program > file.txt

#### To a nowhere i.e loose it

$ ./program > /dev/null 2>&1

### Shell script to loop through files

for file in `ls`
do
    echo $file
done

### Calculate time taken for a program to execute

$ time ./program

### Format java date into string (Java)

new SimpleDateFormat("yyyy MMM dd HH:mm:ss").format(new Date())
Reference

### Date parsing (Python)


### Convert python object into json (python)

import json
json.dumps(obj,'utf8')


### Convert json into python object (python)

import json
obj = json.JSONDecoder('utf-8').decode(data)


### Remove microseconds from datetime object (python)

> datetime.datetime.now().replace(microsecond=0)

### Convert python localtime() or gmtime() i.e struct_time to datetime object (python)

> datetime.datetime.fromtimestamp(time.mktime(time.localtime()))

### Milliseconds passed since epoch (java)

Read more about Unix Epoch

System.currentTimeMillis()
System.nanoTime()

### Milliseconds passed since epoch (python)

Reference

>> time.time()

>>> time.mktime(time.localtime())


### Format time object to string (python)

import time
time.strftime("%Y-%m-%dT%H:%M:%S", time.localtime())
Format date object to string (python)

import datetime
>>> datetime.datetime.now().strftime("%Y-%m-%d")
'2013-12-25'

### Parse a date string into object (python)

import datetime

>>> datetime.datetime.strptime("2013-10-10","%Y-%m-%d")
datetime.datetime(2013, 10, 10, 0, 0)
