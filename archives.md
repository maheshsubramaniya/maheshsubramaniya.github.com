---
layout: static
title: Archives
---

<h3>Categories</h3>
<ul id="archive">
	{% for cat in site.categories %}
		<li><a href="{{cat[0]}}.html">{{ cat[0] }}</a></li>
	{% endfor %}
</ul>

<h3>Posts</h3>
<ul id="archive">
	{% for post in site.posts %}
	<li><a href="{{ post.url }}">{{ post.title }}</a>(<abbr>{{ post.date | date_to_string }}</abbr>)</li>
	{% endfor %}
</ul>
