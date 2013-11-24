---
layout: post
title: Hack GMail Search – Part 2
categories: ['misc']
---

<p align="center" style="font-size: xx-small"><img border="0" width="420" src="../images/2008/02/image6.png" alt="image" height="236" /></p>
<p align="center" style="font-size: xx-small"><em>Courtesy:</em><a href="http://www.flickr.com/photos/zackv/1057723987/"><em>zackv</em></a></p>
You would have explored the features of GMail Search in my previous post <a href="{{site.url}}/demystifying-gmail-search-part-1/">Hack GMail - Part 1</a>

In my <a href="{{site.url}}/demystifying-gmail-search-part-1/">previous post of hacking the search</a>, you  would have explored the features on Labels, filters etc. On continuing the exploration, I came with my second post. This post lists down the features which are not available in the simple search facility. Come one, lets explore the the advanced search features.

<!--more-->

For typing the query, you need not open the simple search view, just directly type the query in the default query box.

In order to be a master in searching, you have to know the operators used for searching. To know brief about the operators have a visit to

<a href="https://gmail.google.com/support/bin/answer.py?answer=7190">https://gmail.google.com/support/bin/answer.py?answer=7190</a>

Also have a look on how to create filters and labels. This is a must use tool in Gmail, who fail to use these features, so pity on them. Please don’t miss it out.

<a href="https://gmail.google.com/support/bin/answer.py?answer=6579">https://gmail.google.com/support/bin/answer.py?answer=6579</a>

In the rest of this blog, you could find the functions of the operators in elaborate.

<strong>from</strong>: used to specify the sender and fetches all the mails from the same

It is the same as the from in the simple search.

<strong>Example 1</strong>: Extract all the mails from friends, say <strong><em>abc,abc1,abc2</em></strong>. Then your query goes like this.

<strong></strong>
<blockquote><strong><em>from: abc@hotmail.com OR abc1@yahoo.com OR abc2@gmail.com</em></strong></blockquote>
<strong>Example 2</strong>: Extract all the mails from friends, say <strong><em>abc,abc1 </em></strong><em>and not from<strong> abc2</strong></em>. Then your query goes like this.

<strong><em>
</em></strong><strong></strong>
<blockquote><strong><em>from: abc@hotmail.com OR abc1@yahoo.com -abc2@gmail.com</em></strong></blockquote>
<strong><em>Example 3: Extract all the mails from except from <strong><em>abc</em></strong></em></strong>

<strong></strong>
<blockquote><strong><em>from: -abc</em></strong></blockquote>
<strong>Example 3</strong>: Extract all the mails from except from <strong><em>yahoo or gmail</em></strong>

<strong></strong>
<blockquote><strong><em>from: -yahoo.com </em></strong><em>–<strong>gmail.com</strong></em></blockquote>
<strong>to

: used to specify the recipient and fetches all the mails from the same. It is the same to the </strong><strong>TO </strong>in the simple search.

<strong>Example 4</strong>: Extract all the mails sent to friends, say <strong><em>abc,abc1,abc2</em></strong>. Then your query goes like this.
<blockquote><strong><em>to: abc@hotmail.com OR abc1@yahoo.com OR abc2@gmail.com</em></strong></blockquote>
<strong></strong>

<strong>Example 5</strong>: Extract all the mails sent to groups i.e mails your received from groups.

<strong><em>
</em></strong><strong></strong>
<blockquote><strong><em>to: yahoogroups.com</em></strong></blockquote>
<strong><em>Example 6: Similarly exclude the mails from yahoogrou</em><em>ps</em></strong>

<strong></strong>
<blockquote><strong><em>to: -yahoogroups.com</em></strong></blockquote>
<strong>subject: </strong>Search<strong> </strong>for the subject words

<strong>Example 7</strong>: Search for a single word

<strong></strong>
<blockquote><strong><em>subject: Chennai</em></strong></blockquote>
<strong>Example 8</strong>: Search for more than one word. In this example to include all mails with subject Chennai and Mumbai and reject mails with subject kolkatta

<strong></strong>
<blockquote><strong><em>Subject: ( Chennai OR Mumbai ) subject: –kolkatta</em></strong></blockquote>
<strong>cc and bcc: </strong>This operator function similar to the <strong><em>to:</em></strong> and <strong><em>from:</em></strong> operator. It is used to give the email address or just the account name or just the service provider address to fetch the mails.

<strong>Example 9</strong>: Fetch all the mails which you had CCed or BCCed
<blockquote><strong><em>cc:abc@yahoo.com
bcc:abc1@yahoo.com</em></strong></blockquote>
<strong></strong>

<strong>label: </strong>Search the mails which holds a label.

<strong>Example 10</strong>: Let me assume that you have labels and have applied to some mails. Let me say you have label called “<em>Family</em>” for the mails which you receive from your family members. Now you are to search for the mails where only your mom had sent. Here I am considering that both dad and mom uses the same mail id.
<blockquote><strong><em>label:family from:familyhead@gmail.com mom OR dad</em></strong></blockquote>
<strong></strong>

<strong>Example 11</strong>: Another example to show is from my inbox. I have grouped all the fun related mails from various groups such as Nidokidos, myWorldPals etc. under the label named “<strong><em>Others</em></strong>”. Now all the mails arriving from that group would be fixed with the label “<strong><em>Others</em></strong>”. Now I need to search the mails from this label, which has photos regarding “<em>Katrina</em>”.

<strong></strong>
<blockquote><strong><em>label:Others (subject:nidokidos OR myworldpals)</em></strong></blockquote>
Another example which rejects all mails with subject beautifulIndia.

<strong></strong>
<blockquote><strong><em>label:Others subject:-BeautifulIndia</em></strong></blockquote>
<strong>Note: </strong>If you have label names separated with spaces, then use hyphen(-) while using in searches. The Hyphen, i.e the negation operator is different from this hyphen used in the label names.

E.g.: If you have a label called “<em>Fun Mails</em>”, then while searching use as <strong><em>label:Fun-Mails.</em></strong> Here note that there is no space in between Fun &amp; Mails. If you introduce a space, then the query will search for the mails with label Fun and rejects all mails with words Mails.

i.e. <strong><em>label:Fun –Mails</em></strong>

It is possible to apply one or more label name to a single mail. Example, if you have received a mail from your friend relating to a job matter, then you would apply labels both Friend and Jobs. In such cases, most of the mails may posses more than one label. Now in such cases to search mails pertaining to particular label and rejecting the mails the label you are not in need. The simple figments is to use Negate Operator i.e Hypen.

<strong>Example 12</strong>: You need to extract all mails from your friend which don’t have job information i.e don’t have label named JOBS.

<strong></strong>
<blockquote><strong><em>label:friend –label:JOBS</em></strong></blockquote>
<strong>Example 13:</strong> Search all the mails from your friend with attachment, which has only Word document or PDF files as the attachments.
<strong></strong>
<blockquote><strong><em>label:Friend has:attachment filename:(pdf OR doc)</em></strong></blockquote>
<strong>in: </strong>used to search mail in the specific location i.e Inbox, Archives, Trash, Sent Items etc. If you are in need to search locations except Inbox, you could use this operator.

This operator had really helped me to search in my case, as I had about 30,000+ mails in my trash.

<strong>Example 14</strong>: Searching your trash box for a which you have deleted it unknowingly. All mails from your friend that had moved to trash.
<blockquote><strong><em>in:trash label:friend</em></strong></blockquote>
<strong></strong>

Now you can combine all the above said operators to search the mail.

<strong>Example 15</strong>: Search your trash and archives which you are not confident about it’s location which has an attachment of pdf file from your company.
<blockquote><strong><em>in:anywhere has:attachment filename:pdf</em></strong></blockquote>
<strong></strong>

<strong>is: </strong>Is operator is helps you to fetch mails that have read, unread , starred etc.

<strong>Example 16:</strong> To fetch all mails that you haven’t read that your friend had sent.

<strong></strong>
<blockquote><strong><em>label:friend is:unread</em></strong></blockquote>
Try with <strong><em>is:read is:unread</em></strong>, yeah you can guess what would be the result.

<strong></strong>
<blockquote><strong><em>is:read</em></strong> – gives all the mails that have read

<strong><em>is:unread</em></strong> – gives all the mails that haven’t read

<strong><em>is:starred</em></strong> – gives all the mails that have been starred in spite you read or not.</blockquote>
<strong>after:, before: </strong>These operators are date operators which are used to input the query based on date values. The date format which I have aforesaid in the first part as YYYY/MM/DD is used.

<strong>Example 17: </strong>To search all the mails which have arrived after June 4<sup>th</sup> 2005. <strong>to till date</strong>.<strong></strong>

<strong></strong>
<blockquote><strong><em>after:2005/06/05</em></strong></blockquote>
<strong>Example 18:</strong> To search all the mails arrived on particular date, use both the operators

<strong><em>
</em></strong><strong></strong>
<blockquote><strong><em>after:2005/09/10 before:2005/09/11</em></strong></blockquote>
<strong><em>If you use <strong><em>after:2005/09/10 before:2005/09/10</em></strong>, will gives you all the mails.</em></strong>
