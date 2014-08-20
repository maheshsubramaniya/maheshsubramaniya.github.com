---
layout: post
title: Running Apache Wicket in JBoss
tags: [wicket,jboss,j2ee,web application,presentation services]
exceprt: Learn how to write a Hello World Wicket app, understand the structure of Wicket app, configure the JBoss server in eclipse and run the wicket application in the JBoss server.
categories: ['jee']
tags: [java,jee,j2ee,jboss,apache,apache wicket,how-to]
---

There are several articles available seperately on writing wicket apps and configuring JBoss. But there aren't enough article which joins both the world. This article is an attempt to provide a tutorial to install, configure and run Wicket apps inside JBoss application server. I've used Eclipse as my IDE. 


### Initial Setup ###

* Get the latest version of [JBoss server][jboss-stable] , [eclipse][eclipse-stable] and latest stable [release of apache wicket][apache-wicket-stable].

* Unzip the JBoss server to a folder eg: `/servers/jboss`

* Unzip the apache library to a folder eg: `/lib/wicket`

* Install your eclipse in your application folder.


### Write the Hello World! app using wicket framework ###

Before getting to start with writing the app code, a breif intro about Wicket is necessary ( if you are not aware of it). [Apache Wicket team is have a great ](http://wicket.apache.org/meet/introduction.html)documentation, but to summarize long text short, Wicket is a presentation framework built on [Component based development model](http://en.wikipedia.org/wiki/Component-based_software_engineering), which helps to write the entire presentation layer as different components (eg: a `<span/>` tag is a label component in Wicket) and make it re-usable. Or in other words, it is an alternative framework for JSF, JSP in JEE architecture, which provides similar and additional features to develop the presenation layer.

There are following parts to write the Wicket web application contains following parts

1. Wicket Web Application
2. Wicket Web Page Component & Wicket components equivaluent to HTML components
3. Real HTML Page for Wicket Web Page
4. Configuring WicketFilter in web.xml
5. List of core wicket libraries.

This is how a wicket eclipse project should look like.

!["Wicket App Structure"](../images/2012/wicket-tutorial-folder-structure.png)

#### Create Wicket Web Application - HelloWorldApp.java ####

Creating a instance of [`WebApplication`](http://wicket.apache.org/apidocs/1.4/org/apache/wicket/protocol/http/WebApplication.html) class will lead to creation of WicketServlet i.e a Servlet which helps in receiving HTTP methods and respond accordingly. Think of this as the `HttpServlet` in other frameworks. Subclassing this class will help to configure your application instance settings like life-cycle settings etc.,

Create HelloWorldApp.java by extending the org.apache.wicket.protocol.http.WebApplication.

<pre>
package com.mymindleaks.learning.wicket.hello;

import org.apache.wicket.Page;
import org.apache.wicket.protocol.http.WebApplication;

public class HelloWicketApp extends WebApplication {

	@Override
	public Class<? extends Page> getHomePage() {
		return HomePage.class;
	}

}
</pre>


#### Create Wicket Web Page Component -  HomePage.java ####

HTML pages are defined as [`WebPage`](http://wicket.apache.org/apidocs/1.4/org/apache/wicket/markup/html/WebPage.html) in wicket. A WebPage defines a complete HTML page and it is the base class for HTML pages. You can derive your own WebPage class to define a standard of how the web page in your application should look like

<pre>

package com.mymindleaks.learning.wicket.hello;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.request.mapper.parameter.PageParameters;

public class HomePage extends WebPage {
	 
	private static final long serialVersionUID = 1L;

	public HomePage(final PageParameters parameters) {
        add(new Label("message", "Hello Wicket, Welcome to the World!"));
    }
    
}
</pre>

The above java code, define a HomePage with one label component with a text. This label component can be used with any valid HTML tag.

#### Creating a real web page - HomePage.html  ####

Now the java code for the web page is complete. But for browser to understand and render, it requires HTML page. So, create a HTML page with the same name as of Java class name.

In this code, I've applied the label component to the `h1` tag. 



<pre>
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;Learning - Wicket - Hello World&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1 wicket:id=&quot;message&quot;&gt;&lt;/h1&gt;

&lt;/body&gt;
&lt;/html&gt;

</pre>

In the code `<h1 wicket:id="message"></h1>`, tag `wicket:id` helps the wicket template compiler to apply the data appropriately.

#### Libraries required to run Wicket ####


You might have come across tutorials mentioning to use Maven to configure the wicket app. This is a cool way to configure the app, but if you are a geek, you need to see what are the real jars that a simple app like this require. 

All you need is these 3 jars.

* wicket-core-1.X.X.jar - *contains all classes required to write your application, pages and markups*
* wicket-request-1.X.X.jar - *contains classes that handles the request & response mechanisms*
* wicket-util-1.X.X.jar - *utilities that helps the above two jars works fine*

Add the above jars to your eclipse Build path. Make sure your app doesn't have compilation errors. 

### Configure the WicketFilter for your app ###

Open the web.xml and create an URL pattern and a filter for the url. So, this makes every HTTP Request go through the WicketFilter and the content is processed by WicketServlet (Sevlet? Yes,wicket infrastructure takes care of it).

<pre>

&lt;display-name&gt;HelloWicket&lt;/display-name&gt;<br/> &lt;filter&gt;<br/>  &lt;display-name&gt;WicketFilter&lt;/display-name&gt;<br/>  &lt;filter-name&gt;WicketFilter&lt;/filter-name&gt;<br/>  &lt;filter-class&gt;org.apache.wicket.protocol.http.WicketFilter&lt;/filter-class&gt;<br/>  <br/>  &lt;init-param&gt;<br/>   &lt;description/&gt;<br/>   &lt;param-name&gt;applicationClassName&lt;/param-name&gt;<br/>   &lt;param-value&gt;com.mymindleaks.learning.wicket.hello.HelloWicketApp&lt;/param-value&gt;<br/>  &lt;/init-param&gt;<br/> &lt;/filter&gt;<br/> &lt;filter-mapping&gt;<br/>  &lt;filter-name&gt;WicketFilter&lt;/filter-name&gt;<br/>  &lt;url-pattern&gt;/*&lt;/url-pattern&gt;<br/> &lt;/filter-mapping&gt;

</pre>

### Configure JBoss for Eclipse ##

I do not want to re-invent the wheel by writing my version of **JBoss eclipse** configuration. Read [here][jboss-configure] on how to configure JBoss in eclipse and [read this][jboss-configure-old] if you have old versions of JBoss. If you have latest version of Eclipse i.e Indigo, then you could use **Eclipse Marketplace** which helps to install jboss eclipse tools without hassel.

### Configuring JBoss to run the application ###

Open the Servers View in eclipse from `Window > Show View > Servers"

![Display Servers View](../images/2012/eclipse-show-servers-view.png)

Then right click to create a new eclipse server type with JBoss instance.

![Add new eclipse server type](../images/2012/eclipse-create-server-instance.png)

Select JBoss AS 7.X from the menu
![Select JBoss AS version](../images/2012/eclipse-list-servers.png)

If you are first time configuring the server, add the JBoss runtime from your box to eclipse.
![JBoss linking to eclipse](../images/2012/eclipse-configure-jboss-server.png)

Once you have added it server, you should see an eclipse instance of server created in the view. 
![Eclipse instance of JBoss server](../images/2012/eclipse-servers-after-added.png)

Now start the server and you should see server started successful message in the Server view as well as in the Console view.

<pre>
23:56:35,966 INFO  [org.jboss.as.remoting] (MSC service thread 1-4) JBAS017100: Listening on localhost/127.0.0.1:4447
23:56:35,970 INFO  [org.jboss.as.remoting] (MSC service thread 1-1) JBAS017100: Listening on /127.0.0.1:9999
23:56:36,301 INFO  [org.jboss.as] (Controller Boot Thread) JBAS015951: Admin console listening on http://127.0.0.1:9990
23:56:36,301 INFO  [org.jboss.as] (Controller Boot Thread) JBAS015874: JBoss AS 7.1.1.Final "Brontes" started in 15171ms - Started 134 of 209 services
</pre>

Server console logs will help to know in which ports app and admin console is running or double click on the "JBoss instance" in the servers window and you will see the server property page.

![Server Property page](../images/2012/eclipse-server-property-pages.png)

Launch the app at `http://localhost:808/<your-url-pattern>`

[jboss-configure]: https://docs.jboss.org/author/display/AS7/Starting+JBoss+AS+from+Eclipse+with+JBoss+Tools "JBoss AS7 Configuration with Eclipse"
[jboss-configure-old]: http://ist.berkeley.edu/as-ag/tools/howto/jboss-eclipse.html "JBoss Old versions configuration with eclipse"
[jboss-stable]: http://www.jboss.org/jbossas "JBoss download"
[eclipse-stable]: http://www.eclipse.org/downloads/ "Eclipse Download"
[apache-wicket-stable]: http://wicket.apache.org/start/download.html "Apache Wicket Download"
