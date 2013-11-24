---
layout: post
title: Microsoft OpenXML File format - docx, pptx, xlsx, A new family of file formats
categories: ['programming']
---
Microsoft Office 2007 has introduced new file format after several years of it's old traditional 'doc' file format. The new file format has a new character 'x' suffixed to it's existing name. But this small 'x' had improved a lot of features in the new file format. This new file system is known as <a href="http://filext.com/file-extension/DOCX">OpenXML format</a>.

The OpenXML format work in a similar way how a HTML document works. Prior to CSS, all the formatting is plugged inside the HTML document.
<blockquote><pre>&lt;p align="center" color="#CC0000"&gt;Some paragraph text&lt;/p&gt;</pre></blockquote>
The above text is stored a .HTML file. Similarly the old Microsoft office documents have both their styles and contents in one single document.

Similarly the legacy word document also stores both data &amp; it's formatting inside one single document. This feature gave the Microsoft a strong control over it's document format pertaining only to office software. Software other than Microsoft Office found very difficult to recognize the file format.

In this post I've taken <strong>.docx</strong> to deal with, and other formats like <strong>.pptx</strong>, <strong>.xlsx </strong>are more or less similar to <strong>docx</strong>. The new OpenXML <strong>.docx</strong> file format composes of the following file structure. A detailed file structure is given at the end of the post.
<p align="center"><a href="../images/2008/04/clip-image003.png"><img src="../images/2008/04/clip-image003-thumb.png" border="0" alt="clip_image003" width="408" height="312" /></a></p>

<h3>Features of OpenXML</h3>
<ol>
	<li>You can only read the document data, without having worrying about it's formatting, properties etc.</li>
	<li>Purely XML format oriented , hence can be compressed and reduced to a smaller size.</li>
	<li>Any 3rd party software can easily extract out the data without worrying of the document settings, formatting and properties.
Eg: Virus scanners and server applications can easily extract the document to view just the items affected directly, without the worry of corrupting the container or the contents inside.</li>
	<li>New file format cannot contain executable macro code. Hence the new file formats are safe and can be easily sent through emails and Internet, without the firewalls stopping the transfer without any security concerns.
Note: If a macro part is added to an Office XML Format document, Office prevents opening the document.</li>
	<li>If a part of document is corrupted, the remaining part of the document still continues to work properly.</li>
</ol>
<h3>Benefits of OpenXML</h3>
<ol>
	<li>Interoperable - Similar to previous versions of the format, the data can be interchanged between various office application. Also, writing a 3rd party software and processing the office data is very easy.</li>
	<li>The new format is based on XML &amp; ZIP , hence Microsoft can't sue you ;-)</li>
	<li>This format is more robust than older binary Office document format. Even if a part of the document gets corrupted in the Internet transfer, other part of the document remains to function properly.
Eg: If the macros gets corrupted , other other parts of document like data, formatting continues to work as each components is individually stored in the new format.</li>
	<li>Improved data recovery compared to the previous office versions.</li>
	<li>Efficient - Office 2007 ZIPs the document while storing, hence you will get all the features of ZIP compression and even the password protection.
<p align="center"><a href="../images/2008/04/clip-image001.png"><img src="../images/2008/04/clip-image001-thumb.png" border="0" alt="clip_image001" width="449" height="57" /></a></p>
</li>
	<li>The OpenXML document is secure as you can easily erase confidential information like your user name, bank details etc, as the data is stored as a plain text. Also, by default the Office 2007 doesn't execute the macros in the file. Hence very secure over Internet. The OpenXML format has a separate section where all the macros resides. Hence you can easily extract out or delete the macros.</li>
	<li>As like any other Microsoft office software, Office 2007 file formats are also backward compatible. This means, you can still have all details available for the older versions of the software, so that you can easily generate old document formats and operate in the older office software.
<p align="center"><img src="../images/2008/04/clip-image002.png" border="0" alt="clip_image002" width="346" height="290" /> </p>
</li>
</ol>
