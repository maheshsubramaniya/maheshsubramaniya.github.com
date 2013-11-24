---
layout: post
title: Hack GMail Search - Part 1
categories: ['misc']
---

<p align="center"><img border="0" width="420" src="../images/2008/02/image-thumb.png" alt="image" height="236" /></p>
<p align="center" style="font-size: x-small"><em>Courtesy:</em><a href="http://www.flickr.com/photos/zackv/1057723987/"><em>zackv</em></a></p>
During my college days I was in lot of yahoo groups and my mailbox gets floated with pile of mails. GMail came as saviour for me by offering 1 GB of initial mail space. There started my curiosity for digging the Gmail features. One such great feature of Gmail would be it's search feature.

Almost 7/10 people would be using Gmail as their mailing client will be aware of the search facility, the labels and the filters. But I am doubtful that you won't be making the maximum use of the search facility. These facilities which are available only in Gmail are really makes the maintaining the mails easier than any other email client.

The most useful is the search facility. If one would have experienced the usage of Labels and filters, then the search operation makes the process easier. First let me say few descriptive words regarding the jargons I used.

<strong>Labels:</strong> A name, like a file folder given to some set of mails, automatically or manually either by filter or manual.

<strong>Filter:</strong> Set of rules used to filter out the incoming mails. Filters do serve the purpose of filtering and has some few operations that should be done after filtering , such as Forward to another mail id, Apply a label, Star the mail to display that the mail is important, Archive it, or even trash the mail if you think that some mails which matches the filter criteria.

<strong>Search: </strong>After one created the filters, labels etc. now you are ready to demystify the power of search.

Now let we see how to search mails that have only sent to you. There are two ways to input your search query, one is through the default search and the other is the simple search option.

Now for a beginner let we go for the simple search option, which by default has it's separate section of inputs.

<strong>From</strong>:

If you want to search your mailbox on the basis of from address i.e searching the specific mail sender.
<strong>
</strong>Example 1: Let we assume you have lot of mails from yahoo groups, from your friends, your boss, your love etc... Now you need to extract the mails which have arrived only from yahoo groups.
<blockquote>Here one thing you have to note, when a mail is sent your from group, the TO address of the mail is the yahoogroup address and the FROM is the one who sent you the mail. If the mail have been arrived from the group moderator, then the FROM address will contain the "yahoogroups.com" id.

Type in

<strong><em>TO: yahoogroups.com</em></strong></blockquote>
<strong>Example 2</strong>: Extract all the mails from friends, say <strong><em>abc,abc1,abc2</em></strong>. Then your query goes like this.
<blockquote><strong><em>FROM: abc@hotmail.com OR abc1@yahoo.com OR abc2@gmail.com</em></strong></blockquote>
<blockquote>If you are not concerned about the mail service i.e either yahoo or gmail etc. you may neglect the text after @. Let me assume that your friend has several mail accounts with different service providers, but uses the same username i.e abc( abc@hotmail.com , abc@gmail.com, abc@yahoo.com, abc@xyz.com etc)

<strong><em>FROM : abc OR abc1 OR <a href="mailto:abc2@yahoo.com">abc2@yahoo.com</a></em></strong>

The above query fetches all the mails which has the email id username in abc , abc1 irrespective of the mail service and mails from <a href="mailto:abc2@yahoo.com">abc2@yahoo.com</a>. It is really a cool feature.</blockquote>
<strong>
Example 3</strong>: Extract mails based on your subject. Say, if you have lot of mail with the subject names containing Chennai, Kolkatta, Mumbai etc. Now you are in need of mails which has the subject Chennai and Mumbai.
<blockquote><strong><em>SUBJECT : chennai OR kolkatta </em></strong>

<strong><em>or</em></strong>

<strong><em>SUBJECT: -mumbai</em></strong></blockquote>
<strong>Example 4</strong>: Extract all the mails which has a word or set of words. Say if your mailbox has lot of fresher job related matter which have arrived from groups, but now you are in need to extract mails which has the word "fresher" and not the word "experienced".
<blockquote><strong><em>HAS THE WORDS : FRESHER -EXPERIENCED</em></strong></blockquote>
<strong>Example 5</strong>: Extract all the mails which don't have the words you want. In the previous example we are not in need of mails contain the word "experienced".
<blockquote><strong><em>HAS THE WORDS : FRESHER</em></strong>

<strong><em>DOESN'T HAVE: EXPERIENCED</em></strong></blockquote>
<strong>Example<em> </em>6</strong>: Search the mail which has only the attachment. Now let me assume that you got lot of mail which would have arrived from your friends, groups etc. with pictures, documents etc. You are in need to extract mails only from your friends (i.e. considering mails not from yahoo groups) with attachments.
<blockquote><strong><em>TO: -yahoogroups.com</em></strong>

<strong><em>Has Attachment: Check box should be in CHECKED Status.</em></strong></blockquote>
Now in the above examples you have saw some example which would have made you feel comfortable in searching. Now we are going to explore another important feature of GMAIL search. The Search based on the Date.

In the simple search, GMAIL provides DATE search facility. In the textbox you have a provision for typing the months, year, date, day which ever you like to search based upon your wish.

<strong>Format</strong>:
<ol>
<li class="MsoNormal">September OR Sep</li>
<li class="MsoNormal">September 2005</li>
<li class="MsoNormal">2005</li>
<li class="MsoNormal">5th September</li>
<li class="MsoNormal">6th September 2005</li>
<li class="MsoNormal">09/6/2005, note it's in the format of MONTH/DATE/YEAR</li>
<li class="MsoNormal">today</li>
<li class="MsoNormal">yesterday</li>
<li class="MsoNormal">2005/09/25 ( YEAR/MONTH/DATE), this is the format that the search engine widely uses.</li>
</ol>
Then you have a dropdown list namely "DATE WITHIN". It is used to expand the range of date from the given date.

<strong>Example</strong>: Type “today” ( without quotes ) or Today’s date, then in the dropdown list select “1 day”, now the search returns the mails arrived in the one day span i.e yesterday and tomorrow ( and even day after tomorrow ). But tomorrow sounds absurd, but for the search engine, it considers in such a way, I hope these people has to improve more.
<blockquote>Some results of the date search
<table border="0" cellPadding="0" cellSpacing="0">
<tr>
<td width="151" vAlign="top">Today (2004/9/24)</td>
<td width="168">
<p align="center">1 day</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/9/23 <strong>before</strong>:2005/9/26</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">3 day</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/9/21 <strong>before</strong>:2005/9/28</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">1 week</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/9/17 <strong>before</strong>:2005/10/2 (note the month )</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">2 week</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/9/10 <strong>before</strong>:2005/10/9</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">1 month</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/8/24 <strong>before</strong>:2005/10/25</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">6 months</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2005/3/24 <strong>before</strong>:2006/3/25 ( expanded to next year, March )</td>
</tr>
<tr>
<td width="151" vAlign="top">Today</td>
<td width="168">
<p align="center">1 year</p>
</td>
<td width="271" vAlign="top"><strong>after</strong>:2004/9/24 ( last year ) <strong>before</strong>:2006/9/25 ( next year )</td>
</tr>
</table>
</blockquote>
This is the very basic search facility that one can make use of while searching. It would be easy for the novice and of course who feel boredom for tying the search query. But this feature lacks few important and cool search features. Let me explore that in my next blog. Please allow me for a break.

<a href="{{site.url}}/hacking-gmail-search-part-2/" title="Hack Gmail Search - Part 2"><strong>Continue Reading the Second Part Shortly...</strong></a>
