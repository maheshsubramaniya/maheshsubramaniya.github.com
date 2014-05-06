Circa 2009, when I was testing the mobile webapp in cross platform, IE is especially a [pain in the neck](http://www.maheshsubramaniya.com/article/ie-6-and-ie-7-radio-buttons-doesnt-select.html). One such pain is a [Heisenbug](http://www.catb.org/jargon/html/H/heisenbug.html) that I came across.

<pre>

<html>
    <head>
        <script>
			console.log('heisenbug');
			alert('if you see this, then no heisenbug');
		</script>

    </head>

	<body>
	</body>

</html>

</pre>

This bug was so irritating that I couldnt figure out easily why this code is breaking. And the developer tool didnt have the proper debug message to show (press <kbd>F12</kbd> to open Developer tools ). 

Easy fix? Just  redefine the <code>console</code> object to use alert

<pre>
<script>
console.log = function(o){ alert(o); }
</script>
</pre>
