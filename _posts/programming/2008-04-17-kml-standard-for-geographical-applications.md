---
layout: post
title: KML – Standard for Geographical applications
categories: ['programming']
---
<img class="alignright" style="float: right;" src="http://farm1.static.flickr.com/214/470294116_747ef1e785_m.jpg" alt="" width="180" height="240" />KML is named as HTML of geographic contents. KML is originally created in the Google labs for rendering the Google Earth and Google Maps application is now been apporoved as International Standards for developing the Geospatial application. <a href="http://www.opengeospatial.org/">Open Geospatial Consortium ( OGC )</a> will now take control over the KML standards.
<h3>How a KML structure will look like?</h3>
<pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;kml xmlns="http://earth.google.com/kml/2.2"&gt;
&lt;Placemark&gt;
&lt;name&gt;Simple placemark&lt;/name&gt;
&lt;description&gt;Attached to the ground. Intelligently places itself
at the height of the underlying terrain.&lt;/description&gt;
&lt;Point&gt;
&lt;coordinates&gt;-122.0822035425683,37.42228990140251,0&lt;/coordinates&gt;
&lt;/Point&gt;
&lt;/Placemark&gt;
&lt;/kml&gt;</pre>
<h3>Where to get the KML parsers?</h3>
Google code provides the <a href="http://code.google.com/apis/kml/">APIs for the KML</a>. Also you can find the basic <a href="http://code.google.com/apis/kml/documentation/kml_tut.html">tutorial on KML</a>.
<h3>Features of KML?</h3>
KML with it's parser allows the following features to be used.
<ul>
	<li>Time and Animation</li>
	<li>Cameras</li>
	<li>Photo Overlays</li>
	<li>Polygons, Icons etc</li>
	<li>Creating Models, Regions and more.</li>
</ul>
