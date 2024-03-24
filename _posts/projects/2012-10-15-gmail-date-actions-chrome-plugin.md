---
layout: post
title: (Deprecated)-Gmail Date actions chrome plugin
categories: ["projects"]
tags: [plugin, chrome, gmail, date, actions]
excerpt: chome plugin to get today, yesterday, a week and last week email in one click
---

This is one of my personal plugin that I've used for months and I thought it would be useful to share for people who are in similar need. If you have used Outlook or any mail client, you would have used the feature "Group by date". I've used this feature a lot and I still use this in Outlook. This plugin is trying to do similar thing in Gmail, but does by search instead of grouping. Click on any label to filter mails that are received today or last week and so on. It helped me clean up most of the unwanted mails on daily or weekly basis.

Currently the plugin filter mails which are received

- Today
- Yesterday
- This Week
- Last Week

<figure class="image">
<figcaption>Date actions added to Gmail sidebar</figcaption>
<img src="../images/2012/google-chrome-date-actions-plugin-for-gmail.jpg" alt="Google Chrome Date actions plugin for gmail">
</figure>

All it does is create a search query and executes the search query.

<figure class="image">
<figcaption>Sample search query for Today's actions from Date actions plugin for gmail</figcaption>
<img src="../images/2012/search-query-for-today-date-actions.jpg" alt="search query for Today's actions from Date actions plugin for gmail">
</figure>

A sample query for Last Week's mail, assuming today is 10/16/2012:
after:2012/10/16 before:2012/10/17 in:anywhere -in:trash -label:spam

It does consider all mails except `trash` and `spam`.

<a style="float:left;" href="https://chrome.google.com/webstore/detail/date-filters-for-gmail/ingccfmdangdapfhfmnhicpmfbofhhlo?hl=en&gl=US"><img src="../images/chrome-web-store.jpg" ></a>

You can install the plugin from [Chrome Store](https://chrome.google.com/webstore/detail/date-filters-for-gmail/ingccfmdangdapfhfmnhicpmfbofhhlo?hl=en&gl=US)

If you think this is a cool feature, [please suggest](https://support.google.com/mail/bin/static.py?hl=en&page=suggestions.cs) this feature to be available in Gmail itself.

<strong>Note:</strong> This plugin should work in almost all version of google chrome browser. If you see the plugin hasn't loaded, then try to reload the page again. If problem persist please report and disable the plugin in your browser. I will try to fix it ASAP.

<em>Special thanks to the icon maker(Unknown). I just came across this simple icon and just used it. If anyone knows who is creator, I can add credits to their name.</em>
