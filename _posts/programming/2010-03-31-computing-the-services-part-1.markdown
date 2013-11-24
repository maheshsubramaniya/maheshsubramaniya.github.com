---
layout: post
title: ! 'Computing the Services – Part 1: Introduction'
categories: ['programming']
---
<p style="">In my team we were talking about services and then the web services, and when I was talking to a friend of mine about the services stuff, he posted a blank question. "What is a service? and how different is that from a method”. His question is correct, I feel that most of the people who design services in this complex computing world are not still clear what is a service and not sure of how different is a programming language methods from the service and what it is intent to do?</p>
<p style=""></p>

<h3>What is a service?</h3>
<p style=""></p>
<p style=""></p>

<div><img style="text-align: center; display: block; margin: 0 auto 10px;" src="../images/2010/03/interaction-client-service.png" alt="" width="451" height="295" /> Lets start exploring the service. Let me take you to the understanding of what does a service means in the real world and how is that transformed into the computing world. Consider a simple banking situation, where the customer is willing to get some service to fulfil his / her needs. interaction between a customer and the service provider A person needs to deposit some money into the account of the person. Hence , deposit is a service provided by the bank to make customer safe guard the money into the bank’s vault. Similarly, withdrawal, money transfers etc., are some of the service provided by a service provider i.e bank.</div>
<p style=""></p>

<blockquote style="">In layman's term , A service is "an act of assistance".</blockquote>
<p style=""></p>
<p style="">But some service oriented company, does exactly same job as this.</p>
<p style=""></p>
<p style=" text-align: center;"><img style="display: inline;" src="../images/2010/03/dealer.jpg" border="1" alt="" width="166" height="166" align="middle" /><br style="" /><br style="" /><a href="http://www.dealerrefresh.com/5-steps-to-better-customer-service/">source: dealer refresh</a></p>
<p style=""></p>
<p style="">So, you place computers in the place of humans. But still, how do you make sure that the computers perform the same task as of humans ( of-course, not the one like above ) and deliver the expected service as good as a human ( is it?? ). Hence this will lead to define some of the characteristics of good service.</p>
<p style=""></p>
<p style=""></p>

<h3>Characteristics of a good service.</h3>
<p style=""></p>
<p style="">This table give you an complete idea on how a delivered service should be. Just gathering together.</p>

<table border="1" cellspacing="0" cellpadding="5" width="100%" bordercolor="#000000">
<tbody>
<tr>
<td width="62%" valign="top" bgcolor="#E6E9E9">
<p style=" text-align: center;"><strong>What do the customer expect</strong></p>
</td>
<td width="38%" valign="top" bgcolor="#E6E9E9">
<p style=" text-align: center;"><strong>What does it mean in the computer world</strong></p>
</td>
</tr>
<tr>
<td width="62%" valign="top">Provide a well defined mode / way to receive the data to start the service</td>
<td width="38%" valign="top">Interface</td>
</tr>
<tr>
<td width="62%" valign="top" bgcolor="#EBEBEB">Information collected to process the request should be minimal</td>
<td width="38%" valign="top" bgcolor="#EBEBEB">Granular</td>
</tr>
<tr>
<td width="62%" valign="top">Ability to process information without asking too much questions</td>
<td width="38%" valign="top">Mostly stateful &amp; sometimes stateless</td>
</tr>
<tr>
<td width="62%" valign="top" bgcolor="#EBEBEB">Ability to finish the process as quick as possible and respond back to customer</td>
<td width="38%" valign="top" bgcolor="#EBEBEB">Speed</td>
</tr>
<tr>
<td width="62%" valign="top">Should finish the requested transaction flawless</td>
<td width="38%" valign="top">Correct</td>
</tr>
<tr>
<td width="62%" valign="top" bgcolor="#EBEBEB">Should finish the requested transaction without any interruption</td>
<td width="38%" valign="top" bgcolor="#EBEBEB">Robust</td>
</tr>
<tr>
<td width="62%" valign="top">Should finish the transaction successfully and completely</td>
<td width="38%" valign="top">Complete</td>
</tr>
</tbody>
</table>
<p style=""></p>
<p style="">I will detail out the each of the characteristics in the next article.</p>
<p style="">[ Updated: Updated the description of the “State” of the service ]</p>
<br class="final-break" style="" />
