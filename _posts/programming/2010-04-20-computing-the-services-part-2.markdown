---
layout: post
title: ! 'Computing the Services - Part 2: Characteristics'
categories: ['programming']
---
<p style="">Continuing with the <a title="Computing the Services - Part 1" href="{{site.url}}/blog/archives/computing-the-services-part-1.html" target="_self">Computing the Services Part - 1</a>, We shall take a look at what each characteristics of services means in the computer world. Defining characteristics is very important aspect in any design. You have to define your design, to work in the way you describe and you expect to it.</p>
<p style="">The characteristics can be further grouped into</p>

<ul style="">
	<li><strong>Structural</strong> characteristics allow you to make sure that you create services which are well maintainable and re-usable</li>
	<li><strong>Operational</strong> characteristics allow you to make sure that the services are quick, fail-proof and responsive.</li>
</ul>
<p style="">Our HiTech bank needs a enterprise application to be designed, which obviously requires a lot of design. But our HiTech bank will provide basic services like withdrawal and deposits, via various interfaces like Online, ATM and Card Readers.</p>
<p style=""></p>
<p style=""></p>

<h3>Granular</h3>
<p style=""></p>
<p style="">The services defined should be granular in nature. Granularity comes when comes the matter of re-usability and maintainability. More granular is the service, more the re-usability and maintainability.Consider the services which does the deposit &amp; withdraw transaction in our <strong>HiTech Bank</strong>.</p>

<pre class="brush:js" style="">Bank.deposit( username, password, PIN, deposit-amount, account# ):
   if PIN = BLANK  //Online mode
    Check if the username, password is valid
    Check if the username, password is valid for account#

  if PIN IS NOT BLANK
    Check if PIN is valid for the account
    Open #account
    Add deposit-amount to the existing amount in #account
    Close #account</pre>
<pre class="brush:js" style="">Bank.withdraw( username, password, PIN, withdraw-amount, account# ):
    if PIN = BLANK:  //Online mode
        Check if the username, password is valid
        Check if the username, password is valid for account#

    if PIN IS NOT BLANK:
        Check if PIN is valid for the account
        Open account#
        Reduce withdraw-amount to the existing amount in #account
        Close account#</pre>
<p style="">The above code is not granular and not re-usable. The reason is, lets assume that in future the HiTech bank is adding more user interface devices and has different authentication system, say biometrics. Now, you are ought to change the authentication code in your module. Now, you can feel the pain of modifying it.Also, the transaction are tied with the authentication process, which logically shouldn't be. Because, transaction is a separate Unit of Work. If you transaction fails, it's not necessary that your authentication also fails.</p>
<p style=" text-align: center;"><img style="display: block; margin: 0px auto 10px; text-align: center;" src="../images/2010/04/computing-the-services-class-restructure1-thumb21.png" alt="" width="600" height="162" />Fig 1. Decomposing the methods to create more granular methods.</p>

<pre class="brush:js" style="">Bank.authenticate( username, password, PIN, account#) :
    if PIN = BLANK :  //Online mode
        Check if the username, password is valid
        Check if the username, password is valid for account#
      if PIN IS NOT BLANK :
        Check if PIN is valid for the account

Bank.deposit( deposit-amount, account# ):
    Open account#
    Add deposit-amount to the existing amount in #account
    Close account#

Bank.withdraw(  withdraw-amount, account# ):
    Open account#
    Reduce withdraw-amount to the existing amount in #account
    Close account#

Bank.doTransaction( transaction, account, amount, username, password, PIN ):
    Bank.authenticate( username , password, PIN)
    if transaction = Deposit
        Bank.deposit( amount, account# )
    if transaction = Withdraw
        Bank.withdraw( amount, account# )</pre>
<p style="">This is the how you make granular services. The advantages of this is you have good maintainability, easy code modification and more re-usability. In future, you change the authentication code to authenticate with another device / interface, no matter what you change , your change is evenly applied across the service.</p>
<p style=""></p>
<p style=""></p>

<h3>Interface</h3>
<p style=""></p>
<p style="">An Interface will enable a device or program enabling a program to communicate with another program. In UNIX, one of the cool interface is the “|” pipe symbol. You can combine more than one UNIX command via the “|” ( pipe ). Pipe acts as an interface between two programs.</p>

<blockquote style="">cat *.java | grep “String.to”</blockquote>
<p style="">It is one of the most important characteristics to define. When a service is defined, make sure that it has proper interface to communicate to the business services. In our bank ( HiTech Bank) banking situation, you need services to authenticate the user / customer before accessing the account. You should at least define these service, which in turn does the appropriate authentication.</p>

<table border="0" cellspacing="2" cellpadding="2" width="100%">
<tbody>
<tr>
<td align="center" valign="top"><strong>Human Interface </strong></td>
<td align="center" valign="top"><strong>Services </strong></td>
<td align="center" valign="top"><strong>Interfaces </strong></td>
<td align="center" valign="top"><strong>Contract between Service &amp; Interface Matches? </strong></td>
</tr>
<tr>
<td valign="top">ATM Machine / Card Reader</td>
<td valign="top">Bank.authenticate ( PIN , account# )</td>
<td valign="top">BankInterface.authenticate ( PIN, Name )</td>
<td valign="top">The contract doesn't match</td>
</tr>
<tr>
<td valign="top">Online / Mobile app</td>
<td valign="top">Bank.authenticate ( username, password, account# )</td>
<td valign="top">BankInterface.authenticate( username,password, account#)</td>
<td valign="top">Contract matches</td>
</tr>
</tbody>
</table>
<p style="">If the HiTech Bank haven't defined a proper interface to read the card but just to type in the PIN, the customers will not be able to use the ATM machines / Card readers even if the service to authenticate is available.</p>
<p style=" text-align: center;"><img style="display: block; margin: 0px auto 10px; text-align: center;" src="../images/2010/04/computing-the-services-class-bank-interaction1-thumb12.png" alt="" width="600" height="236" />Fig 2. Bank implementing Bank Interface and other User Interfaces using the bank interface</p>
<p style="text-align: left; webkit-background-clip: initial; webkit-background-origin: initial;"></p>
<p style="text-align: left; webkit-background-clip: initial; webkit-background-origin: initial;">We shall continue with the remaining characteristics in the next post.</p>
