---
layout: post
title: IE 6 and IE 7 - Radio buttons doesn't select
excerpt: IE 6 and 7 goes crazy when you dynamically create radio elements in DOM and how to fix it.
categories: ['javascript']
tags: javascript','blur','event'
---



Recently I stumbled on a problem with radio buttons which doesn't get selected in IE 6 and 7 browsers and works with 8 and future browsers. Interesting the problem has been narrowed down to the way the DOM is built for radio buttons.

<legend> this piece of code makes IE 6 & IE 7 panic and doesn't allow mark the checkbox selected when clicked on it</legend>
<pre>

	var el1 = document.createElement("input");
	el1.type = "radio";
	el1.name = "gender";
	el1.id = "gender_m";
	el1.value = "M";

	var el2 = document.createElement("input");
	el2.type = "radio";
	el2.name = "gender";
	el2.id = "gender_f";
	el2.value = "F";

	var container = document.getElementById("container");
	container.appendChild(el1);
	container.appendChild(el2);

</pre>

Here is the fix. Once re-written like below, it worked well.

<pre>

	function createRadio(cfg)
	{
		var input = "input";
		var type = " type='radio' ";
		var name = " name='" + cfg.name + "' ";
		var value = " value='" + cfg.value + "' ";
		var id = " id='" + (cfg.name+"_"+cfg.value) + "' ";

		var domStr = "<" + input + type + name + value + id + ">";
		return document.createElement(domStr);
	}

	var el1 = createRadio({'name':'gender', 'value:'M' });
	var el2 = createRadio({'name':'gender', 'value:'M' });

	var container = document.getElementById("container");
	container.appendChild(el1);
	container.appendChild(el2);

</pre>

IE 6 and IE 7 browsers doesnt seems to handle the incremental building of element well. It needs all the data upfront to build the DOM element.

Happy Coding!