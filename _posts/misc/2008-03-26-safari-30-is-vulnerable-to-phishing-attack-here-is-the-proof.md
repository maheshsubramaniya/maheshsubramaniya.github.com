---
layout: post
title: Safari 3.0 is vulnerable to Phishing attack – Here is the proof
categories: ['misc']
---
Most of the online users would be aware of the <a href="http://en.wikipedia.org/wiki/Phishing">Phishing attack</a>. There are also various kind of attacks, but Phishing is most common attack happening in the Internet through mails.

Few days back I got a mail from titled 'Paypal' with Subject that "You Account access is limited. Remove this limitation". Obliviously, I opened it.

<img src="/images/2008/03/image45.png" alt="image" border="0" />

And the mail read like this

<img src="/images/2008/03/image46.png" alt="image" border="0" />

In the mail it has been stated that I've done some unusual online activity , so that they have put the account under control.

They want to verify my authentication. This mail alarmed me. Then immediately I opened up the header of the mail. The header is read as

<img src="/images/2008/03/image47.png" alt="image" border="0" />

And the mail is from "<strong>limitedpayapl.com</strong>". If you could note it, even the word "paypal" is not proper. It's "pay<strong>apl</strong>". Which is fake and Phishing domain.

So, I marked as spam. Now my big question is, If I haven't opened up the header and directly clicked the link they have provided, how does the browser effectively alert users about this phishing site.
<h4>How Internet Explorer 8 warns about a phishing site</h4>
Now I'm bit careful enough while launching the site and I'm sure that I don't type any extra information.

<img src="/images/2008/03/image48.png" alt="Internet Explorer 8 stops phising" border="0" />

You would see a red colour URL address bar and extra indicator "Unsafe Website".

<img src="/images/2008/03/image49.png" alt="image" border="0" />

Also, Internet Explorer 8 provides additional information regarding the type of attack. And in this it says that it's a "Phishing Threat".

<img src="/images/2008/03/image50.png" alt="image" border="0" />

These visuals are clear indicator that the user is going to visit a unsafe website.
<h4>How Mozilla Firefox 2.0 warns about a Phishing site</h4>
Firefox doesn't stops block loading of website and doesn't have any red alert URL title bar.

<img src="/images/2008/03/image51.png" alt="image" border="0" />

Firefox just popup a balloon alerting that you are going to visit a unsafe website. Also when you click on "Read More" you will be provided with more information about the kind of website you will be visiting.

<img src="/images/2008/03/image52.png" alt="image" border="0" />

Finally I was browsing in Safari 3.0, and see how safari reacts

<img src="/images/2008/03/image53.png" alt="image" border="0" />

Do you see any kind of alert in this browser? Anything? Yeah correct. Even I didn't see any small indicator!!

As apple claims, Safari might be a best browser in this contemporary, but I don't see a single sign of alert on such website.

This will sure lead to the unknown user to get into a Phishing website. Even I love to browse with Safari, but this one really makes me pissed off! Guess the developers of safari has to look something seriously into it.

I came across few sites which is reporting about this vulnerablity
<ul>
	<li><a rel="nofollow" href="http://tech.yahoo.com/blogs/hughes/24059">PayPal thinks Safari is too vulnerable to phishing scams</a></li>
	<li><a rel="nofollow" href="http://www.pcworld.in/india/news/Spyware_&amp;_Security/PayPal:_Apple_Safari_Vulnerable_To_Phishers/4259968/9">PayPal: Apple Safari Vulnerable To Phishers</a></li>
</ul>
