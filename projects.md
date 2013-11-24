---
layout: static
title: Projects
---


<ul id="archive">

{% for post in site.categories.projects %}
<li><a href="{{ post.url }}">{{ post.title }}</a><abbr>{{ post.date | date_to_string }}</abbr></li>
{% endfor %}
</ul>