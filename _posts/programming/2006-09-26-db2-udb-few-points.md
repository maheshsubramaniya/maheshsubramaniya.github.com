---
layout: post
title: DB2 UDB - Few Points
categories: ['programming']
---


<p></p> <blockquote> <p><strong><u>Disclaimer : </u></strong> </p><p>Nothing serious fellas...This is just a 10% of your study material. I thought of sharing it out.</p></blockquote> <p><strong><u>Varities of DB2</u></strong>  <ol> <li>DB2 Everywhere - Mobile DB application&nbsp;</li> <li>DB2 PE - Personal Edition, for storing large amount of personal data i.e single user environment</li> <li>DB2 Workgroup Server Edition ( WSE ) - Fit for SMEs. It is scalable to LAN and WAN.</li> <li>DB2 Workgroup Unlimited Server Edition ( WUSE ) - Fit for SMEs. Can be scaled to Internet appliaction of the corporate.</li> <li>DB2 Enterprise Server Edition ( ESE ) - Has all functionality of WUSE, with added features such as Connector.Has DPF </li></ol> </p><p><strong><u>Some Terms Used </u></strong></p> <p><strong>Not all the terms gonna be used in exam. But learning new things is no harm</strong></p> <ul> <li>SMP - Symmetric Multi Processor</li> <li>DPF - Database Partioning Feature, i.e split up DB into multipel machines and finally act as an single DB instance</li> <li>Control Center - Maintains DB Server</li> <li>Configuration Assistant - Configures / Manages Client - Server Data</li> <li>SMART - Self Managing And Resource Tuning</li> <li>Tools are different from Add-Ons</li> <li>Satellites : DB2 Servers, which host the same application program in all the servers with similar DB2 Configurations</li> <li>Task - Task is a script, with associated sucess, failure conditionals with notification and schedules. </li></ul> <p><strong><u>DB2 Clients</u></strong></p> <ol> <li>DB2 Runtime Client - Basic Connection</li> <li>DB2 Administrator Client - Has all features of DB2 Runtime Client with Admin functionalities</li> <li>DB2 Application Development Client - Has tools and facilities to develop applications using DB2. </li></ol> <p><strong>Note</strong>: The last 2 Client has Runtime Client with them by default.  </p><p><strong><u>DB2 Extenders</u></strong></p> <ol> <li>XML extender</li> <li>Spatial Information Extender</li> <li>TAIV - Text, Audio, Image and Video Extender</li> <li>DB2 Net Search Extender - Tool used for applications in Internet for searching the DB2 quick and fast. </li></ol> <p><strong>Data Links File Manager</strong></p> <ol> <li>IBM technology that is used to link the files outside the DB in a relational way. <br />- It maintains referential integrity within the file<br />- Automatic Backup and restore<br />- Enchanced Access Control </li></ol> <p><strong><u>Tools</u></strong></p> <ol> <li>Wizards - Used for easy use purpose instead of working with complex queries.<br />Type of Wizards<br />- Advisors , used for tuning performance, gathering info and recommending options that one maynot have considered.<br />- Notebook </li></ol> <p><strong>Control Center: <em>db2cc</em></strong></p> <ul> <li>It's a DB administration server. (DAS)</li> <li>Helps schedule jobs, control jobs, control database and lot more. </li></ul> <p><strong><u>Replication Center : </u><em>db2rc</em></strong></p> <ol> <li>Used to replicate the DB across DB2 and non DB2 Database</li> <li>Control Tables</li> <li>Capture Control Tables </li></ol> <p><strong>DB2 Satellite Administration Center : </strong>Control several Db2 servers, which hosts the same appliction.  </p><p><strong><u>DB2 Command Center : </u><em>db2cctr</em></strong>  <ol> <li>Helps to execute SQL statements, view the result set and store them. </li></ol> </p><p><strong>DB2 Task Center : <u>db2tc</u></strong></p> <ol> <li>Helps creating , scheduling task for various operations</li> <li>Helps grouping of tasks</li> <li>Tasks are notified though e-mail if any mentioned. </li></ol> <p>These are only few, Infuture might add...In mean time know a little bit about <a href="http://maheshexp.wordpress.com/2006/09/26/db2-certification-700-db2-udb-v81-family-fundamentals/">DB2 UDB Fundamental Examination</a>, incase if you wanna write for one.</p>