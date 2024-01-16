---
layout: static
title: All Posts
---
<p>
Hello, you will find all the posts that I've written in this page, which also includes some non-technical posts such as food and language ( tamil ).
</p>
<div id="archives">
{% for post in site.posts  %}

    {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
    {% capture this_month %}{{ post.date | date: "%B" }}{% endcapture %}
    {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
    {% capture next_month %}{{ post.previous.date | date: "%B" }}{% endcapture %}

    {% if forloop.first %}
	    <h3 id="{{ this_year }}-ref archive-year">{{this_year}}</h3>
	    <h4 id="{{ this_year }}-{{ this_month }}-ref archive-month">{{ this_month }}</h4>
	    <ul class="no-bullet">
    {% endif %}

    <li><h5><a href="{{ post.url }}">{{ post.title }}</a></h5></li>

	{% if forloop.last %}
		</ul>
    {% else %}
        {% if this_year != next_year %}
        </ul>
        <h3 id="{{ next_year }}-ref archive-year">{{next_year}}</h3>
        	<h4 id="{{ next_year }}-{{ next_month }}-ref archive-month">{{ next_month }}</h4>
        	<ul  class="no-bullet">
        {% else %}    

            {% if this_month != next_month %}
            </ul>
	            <h4 id="{{ this_year }}-{{ next_month }}-ref archive-month">{{ next_month }}</h4>
	            <ul  class="no-bullet">
            {% endif %}

        {% endif %}

	{% endif %}

{% endfor %}

</div>
