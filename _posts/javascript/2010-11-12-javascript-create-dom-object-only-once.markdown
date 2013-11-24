---
layout: post
title: ! 'Javascript: Create DOM object only once'
categories: ['javascript']
tags: javascript,dom,object
---
Browser [DOM](http://en.wikipedia.org/wiki/Document_Object_Model "Document Object Model")  is always created once and the same DOM is referred every time when used (like any other object model). It is not destroyed / deleted unless it is explicitly triggered.

But some aspects of browser would make the DOM object reset. For example, during the XHR based requests, more than one page might contain the same script to perform and you are not likely to put them as a common script in the parent. When the same script is loaded by more than one page ( a.html &amp; b.html), your DOM will likely to reset.

<pre class="brush:js">
YAHOO.namespace("mymindleaks.loadonce");

YAHOO.mymindleaks.loadonce = (function()
{
	var context;
	var _init = function()
	{
		if( !context )
		{
			context = createHTTPRequest("{{site.url}}/ping");
		}

		return context;
	};

	return{
		init: _init

	};
})();

YAHOO.mymindleaks.loadonce.init();
</pre>
When this code is embedded in a HTML file and when it is loaded more than one time in the same HTML session, everytime the page is loaded, the object YAHOO.mymindleaks.loadonce will be created new and the value will be initialized. Hence there will be more than one "ping" to the URL, which is not intented.

In order to make only one ping from the browser per session, you have to restrict the browser not to invoke the function again. This can be done simply by adding a <code>if-condition</code>

<pre class="brush:js">
YAHOO.namespace("mymindleaks.loadonce");

if( !YAHOO.mymindleaks.loadonce )
{
	YAHOO.mymindleaks.loadonce = (function()
	{
		var context;
		var _init = function()
		{
			if( !context )
			{
				context = createHTTPRequest("{{site.url}}/ping");
			}

			return context;
		};

		return{
			init: _init

		};
	})();

	YAHOO.mymindleaks.loadonce.init();
}
</pre>

by adding a <code>if-condition</code> the browser restricts the invocation of the anonymous function as the object <code>YAHOO.mymindleaks.loadonce</code> is already existing in the DOM.
