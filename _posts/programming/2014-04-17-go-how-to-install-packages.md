---
layout: post
title: Go lang - how to install packages
excerpt: Learn how to install packages in go language
categories: ['programming','go']
tags: ['go','install','packages']
---

#### Set GOPATH environment variable

Set the GOPATH variable which `go` compiler uses to search for packages along with `GOROOT` environment variable, which is generally the installation of `go`

{% highlight console %}
$ echo $GOROOT
/usr/local/go/

$ echo $GOPATH
/development/go/youtube
{% endhighlight %}

#### Install Mercurial client

[Download and install](http://mercurial.selenic.com/wiki/Download) the mercurial client in your machine and set the environment variables for PATH.

If you are running Mac, you can use [homebrew](http://brew.sh/) to install mercurial in seconds.

{% highlight console %}
$ brew install hg
{% endhighlight %}

#### Run the `go get` command

Lets install a package

{% highlight console %}
$ go get "code.google.com/p/google-api-go-client/youtube/v3"
{% endhighlight %}

This will create two packages

* src - contains the source files of the dependencies
* pkg - contains the compiled binary of the dependencies


{% highlight console %}
$ tree -d
.
├── pkg
│   └── darwin_amd64
│       └── code.google.com
│           └── p
│               └── google-api-go-client
│                   └── googleapi
└── src
    └── code.google.com
        └── p
            └── google-api-go-client
                ├── adexchangebuyer
                │   ├── v1
                │   ├── v1.1
                │   ├── v1.2
                │   └── v1.3
                │   ...
                │   ...
                ├── youtube
                │   ├── v3
                │   └── v3alpha
                └── youtubeanalytics
                    ├── v1
                    └── v1beta1
{% endhighlight %}

Now the dependencies are installed in the folder and you can continue to build the program by `go build`