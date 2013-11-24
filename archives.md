---
layout: static
title: Archives
---

<h3>Posts</h3>
<ul id="archive">
	{% for post in site.posts %}
	<li><a href="{{ post.url }}">{{ post.title }}</a>(<abbr>{{ post.date | date_to_string }}</abbr>)</li>
	{% endfor %}
</ul>
