---
layout: post
title: JUnit best practices - How to write good junit test cases?
categories: ['jee']
---
Writing unit test cases1 are the part of any development project process. But developers rarely follow process. For us, we wanted to code something and see it to work on what we have fixed and finally move it to production.When it works, we are happy with it. But wait, when it doesn't work? Then comes a lot of head ache for developer. Ok stories apart, lets get back to work. I'm not going to discuss about how to write unit testcases, but rather discuss how to write some better unit testcases using JUnit and avoid some of the pitfalls that we developers falls. Since JUnit is based on xUnit testing framework, any xUnit based testing framework for the language you use like NUnit, CppUnit, etc.,
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
	<li><a href="#sec-1">1 Write one test-condition per test method </a></li>
	<li><a href="#sec-2">2 When testing output of Collections(List, Set) test for Null and Emptiness </a></li>
	<li><a href="#sec-3">3 Use java reflection for adding new methods into test suites </a></li>
	<li><a href="#sec-4">4 Compare the objects after performing an operation </a></li>
	<li><a href="#sec-5">5 Test the exceptions </a></li>
	<li><a href="#sec-6">6 Group logical test cases into test suites </a></li>
	<li><a href="#sec-7">7 Check for order of execution of test cases </a></li>
	<li><a href="#sec-8">8 Always include a message to assertion </a></li>
	<li><a href="#sec-9">9 Know when to use assertEquals and assertSame </a></li>
</ul>
</div>
</div>
<div id="outline-container-1" class="outline-3">
<h3 id="sec-1"><span class="section-number-3">1</span> Write one test-condition per test method</h3>
<div id="text-1" class="outline-text-3">

This is first important point. Always, write only one test-condition3 in one test method. Do not group more than one test case in a single test-method.

Consider the following method.
<pre class="example">public boolean validateZipCode(String zipCode)
{
    Matcher m = Pattern.compile("\d{5}").matcher(zipCode);
    return m.matchers();
}
</pre>
You can think of following test cases
<ol>
	<li> Input is NULL</li>
	<li> Input is Blank</li>
	<li> Input is Alpha</li>
</ol>
and many other test cases etc.,
<pre class="example">public void testValidateZipCode()
{
    boolean output = validateZipCode(null);
    assertFalse(output);

    boolean output = validateZipCode("");
    assertFalse(output);

    boolean output = validateZipCode("    ");
    assertFalse(output);
}
</pre>
When you run the above test case, the JUnit will fail in the first assestion. And it will not proceed to next the next test case. So, only if you fix the 1st failure, you will know the 2nd failure (if any). This is bad, because as humans we try to figure out as much issues during every shot.
<pre class="example">public void testValidateZipCode1()
{
    boolean output = validateZipCode(null);
    assertFalse(output);
}

public void testValidateZipCode2()
{
    boolean output = validateZipCode("");
    assertFalse(output);
}

public void testValidateZipCode3()
{
    boolean output = validateZipCode("    ");
    assertFalse(output);
}
</pre>
Now this helps in identifying all the existing issue in single run. Next, you can measure how many test case you have executed, which helps in how many are success and failed.

</div>
</div>
<div id="outline-container-2" class="outline-3">
<h3 id="sec-2"><span class="section-number-3">2</span> When testing output of Collections(List, Set) test for Null and Emptiness</h3>
<div id="text-2" class="outline-text-3">

Methods returning collections should be tested for more conditions.
<ol>
	<li> Test for NULL</li>
	<li> Test for emptiness</li>
	<li> Test for list not returning null ( if requirements allow )</li>
	<li> Test for object are of same type, if your requirement is so ( applicable for Java 1.4 )</li>
</ol>
</div>
</div>
<div id="outline-container-3" class="outline-3">
<h3 id="sec-3"><span class="section-number-3">3</span> Use java reflection for adding new methods into test suites</h3>
<div id="text-3" class="outline-text-3">

When you write a separate suite to execute the test cases in order, you might feel pain in the neck when you try to add every testXXX() method to the suite, esp. when your Test has more than 10 test conditions for each method and you are testing a class which has more than 10 methods.

A better way to deal with this is to use Reflection.
<pre class="example">class ZipCodeTest extend TestSuite
{

    public void testSuite()
    {

    }

}
</pre>
I would recommend you to read the JUnit FAQ to good a good understanding of JUnit tool

</div>
</div>
<div id="outline-container-4" class="outline-3">
<h3 id="sec-4"><span class="section-number-3">4</span> Compare the objects after performing an operation</h3>
<div id="text-4" class="outline-text-3">

It is recommended to compare the objects after performing an operation.Consider this.
<pre class="example">class Engine
{

    int state, fuel = 100, timeToRun;

    public void run(int minutes)
    {
            this.timeToRun = minutes;
            this.start();
            this.fuel -= minutes * 1;
            this.stop();
    }

    public void start()
    {
            this.state = 1;
    }

    public void stop()
    {
            this.state = 0;
    }

    public boolean equals(Object o)
    {
            Engine e = (Engine) o;
            return this.state == e.state &amp;&amp; this.fuel == e.fuel;
    }

    public int hashCode()
    {
            return this.fuel;
    }

}

public void testEngineStatusAfterRun()
{
    Engine e = new Engine();
    e.run(5);

    /* less recommended */
    assertTrue(0 == e.state);

    /* recommended */
    Engine expected = new Engine();
    testCasse.state = 0;
    testCasse.fuel = 95;
    assertEquals( expected, e);

}
</pre>
Why testing the entire objecti is recommended? The main reason is, class methods have ability to modify the class variables internally without your knowdlege or you might miss to see it. So, always compare the entire object to what you expect.

</div>
</div>
<div id="outline-container-5" class="outline-3">
<h3 id="sec-5"><span class="section-number-3">5</span> Test the exceptions</h3>
<div id="text-5" class="outline-text-3">

Most of the developers who write JUnit will forget / fail to test the exceptions thrown from the methods. Right exceptions thrown always convey it's inherit information. Say you have a exception designed as below
<pre class="example">class CarEngineException extends Exception
{
    int engineErrorCode;
    String message;

    public void runEngine() throws CarEngineException
    {

        if(someCondition1)
        {
                List l = someOtherProcess();
                if(l.isEmpty())
                {
                    CarEngineException ex = new CarEngineStartException();
                    ex.setMessage("some message for failure");
                    ex.setEngineErrorCode(1);
                }
                else if(l.size() == 1)
                {
                    CarEngineException ex = new CarEngineStartException();
                    ex.setMessage("some message for failure");
                    ex.setEngineErrorCode(1);
                }
         }
    }
}
</pre>
In the above case, exceptions are vital part of the method's response. One should test the method's exception, else you are not performing complete testing.

</div>
</div>
<div id="outline-container-6" class="outline-3">
<h3 id="sec-6"><span class="section-number-3">6</span> Group logical test cases into test suites</h3>
<div id="text-6" class="outline-text-3">

Finally, once you have written as many test cases as possible, try to group them into logical collections. So that when you change a piece of code in a module, you would run only the logical test suite.
<pre class="example">public double power(double num, int exp)
{
    ...
}

public double sqr(double num)
{
    return pow(num,2);
}

public double cube(double num)
{
    return pow(num,3);
}

public double exp(double raise)
{
    ...
}
</pre>
Here are you test methods:
<pre class="example">class MathTest
{

    ...

    public void testPow()
    {
        ...
    }

    public void testSqr()
    {
        ...
    }

    public void testCube()
    {
        ...
    }

    public void testExp()
    {
        ...
    }

}
</pre>
Whenever you change something to exp() or pow() you might want to execute MathTest and which inturn will execute all the test cases, which are not necessary.

In this situation, you can create you own test suite, which will just execute the method you wanted to execute.
<pre class="example">class TestPowMethods
{

    public static Test powMethodSuite()
    {
        TestSuite suite = new TestSuite();
        suite.addTest(new FunctionsTest("testPow"));
        suite.addTest(new FunctionsTest("testSqr"));
        suite.addTest(new FunctionsTest("testCube"));

        return suite;
    }

    public static void main(String[] args)
    {
        /*this will execute just pow() dependent methods */
        TestRunner.run(powMethodSuite());
    }

}
</pre>
</div>
</div>
<div id="outline-container-7" class="outline-3">
<h3 id="sec-7"><span class="section-number-3">7</span> Check for order of execution of test cases</h3>
<div id="text-7" class="outline-text-3">

Always write a seperate test suite, when your module requires an order of execution of test cases, i.e run `test1..test5` before you start other tests, then you can write a seperate TestSuite in the same way as expalined in the above topic. This will give you a better hold of executing the test cases in order.

</div>
</div>
<div id="outline-container-8" class="outline-3">
<h3 id="sec-8"><span class="section-number-3">8</span> Always include a message to assertion</h3>
<div id="text-8" class="outline-text-3">

<strong>More the messages, less your debug time</strong>. Providing as many details as possbile is always good for debugging. All the assertXXXX() methods in JUnit framework has an optional parameter a `String message`. But just giving a message isnt a good thing.
<pre class="example">assertEquals("Error code should be 100", 100, e.getErrorCode() );
</pre>
When your above assertion fails, you will get a message Error code should be 100. From this you can conclude that you havent received error code 100. But you are not sure what code have you received. If, your method returns 4 to 5 error codes, you might need to know which conditional part have execute and what error code has been received. Hence write you message wisely.
<pre class="example">assertEquals("Error code should be 100. Received = " + e.getErrorCode(), 100, e.getErrorCode() );
</pre>
Now this will print the received errorCode and you have a better chance of understanding what have happened.

</div>
</div>
<div id="outline-container-9" class="outline-3">
<h3 id="sec-9"><span class="section-number-3">9</span> Know when to use assertEquals and assertSame</h3>
<div id="text-9" class="outline-text-3">

In JUnit package you might find few methods which sound similar. assertEquals and assertSame. Both have a subtle difference2.

<strong>assertSame(a,b)</strong>: does a == b. i.e compare both objects instances are same.

<strong>assertEquals(a,b)</strong>: does a.equals(b), if equals() method has been overriden. Else it invokes assertSame()

</div>
</div>
