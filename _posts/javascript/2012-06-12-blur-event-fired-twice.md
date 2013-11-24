---
layout: post
title: Blur Event fired Twice - Javascript 
categories: ['javascript']
tags: javascript','blur','event'

---

If you are testing your javascript based web app in older browsers of **Chrome** ( may be in  **Safari**, **IE**) you will face this issue. When you use [blur event](http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html#event-type-blur) in the DOM, general assumption is that event will be fire exactly once when the input field is foccused out either by 'tab' or 'mouse click'. But in a very special scenario, i.e when the <kbd>Alt</kbd>+<kbd>Tab</kbd> is pressed, the same blur event will be fired twice.

The reason for firing twice is

1. One event fired when the field is focussed out
2. Another event fires when Window focusses 

The problem is the 2nd event, which cascades the window's `blur` event to all the input fields in the form.

Below code snippet will help you write the blur callback work only once per even when the <kbd>Alt</kbd>+<kbd>Tab</kbd> is pressed.

<pre>
	
	/* variable to track what kind of blur event is fired */
	var _isWindowBlurEvent = false;
	
	window.onblur = function(e)
	{
		_isWindowBlurEvent = true;
	}
	
	window.onfocus = function(e)
	{
		_isWindowBlurEvent = false;
	}
	
	element.onblur = function(e)
	{
		if(! _isWindowBlurEvent ) //if the event is Element.onBlur 
		{
			/* perform your logic here*/
		}
	}
	
</pre>

[Test it yourself](http://jsfiddle.net/maheshexp/UrXJS/).
