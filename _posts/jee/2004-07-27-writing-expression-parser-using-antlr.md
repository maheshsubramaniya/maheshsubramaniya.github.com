---
layout: post
title: Writing expression parser using ANTLR
author: Mahesh Subramaniya
date: 2004-07-27 17:04:22
categories: ['jee']
tags: [java,jee,j2ee,antlr,parser]
---

<p>This article is to write simple expression parser using ANTLR. I consider the reader of this article is well build of JAVA. Also I consider that the reader knows, clearly what is expression, expression parser and grammar.
</p>

<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#sec-1">1 What is ANTLR? </a>
<ul>
<li><a href="#sec-1.1">1.1 Install ANTLR </a></li>
<li><a href="#sec-1.2">1.2 Run ANTLR </a></li>
</ul>
</li>
<li><a href="#sec-2">2 Building an expression Parser </a>
<ul>
<li><a href="#sec-2.1">2.1 Framing the Syntax </a></li>
<li><a href="#sec-2.2">2.2 Backus Naur Form </a></li>
<li><a href="#sec-2.3">2.3 Lexical syntax &amp; rules </a></li>
<li><a href="#sec-2.4">2.4 Parser synatax &amp; rules </a></li>
</ul>
</li>
</ul>
</div>
</div>

<div class="outline-3" id="outline-container-1">
<h3 id="sec-1"><span class="section-number-3">1</span> What is ANTLR? </h3>
<div id="text-1" class="outline-text-3">


<p>
<a href="http://www.antlr.org">ANTLR</a>, is a second generation parser generator<sup><a href="#fn.1" name="fnr.1" class="footref">1</a></sup>.Both parsers were designed and implemented by Terence Parr. It is a language tool that provides a framework for constructing recognizers, compilers, and translators from grammatical descriptions containing C++ or Java actions (You can use PCCTS 1.xx to generate C-based parsers). The latest version of ANTLR 2.7.2 is now available at <a href="http://www.antlr.org/">http://www.antlr.org/</a>. We use ANTLR to produce Java code for our expression. It is released under GNU licesnse.
</p>

</div>

<div class="outline-4" id="outline-container-1.1">
<h4 id="sec-1.1"><span class="section-number-4">1.1</span> Install ANTLR </h4>
<div id="text-1.1" class="outline-text-4">

<p>Download the compressed tar or zip file from the ANTLR site. Then unzip all to a folder and set the classpath variable to the folder location. If jar files are not available in the folder antlr-2.7.2a2, then run two batch files, located in the directory antlr-2.7.2a2, they will create jar files.
</p>
</div>

</div>

<div class="outline-4" id="outline-container-1.2">
<h4 id="sec-1.2"><span class="section-number-4">1.2</span> Run ANTLR </h4>
<div id="text-1.2" class="outline-text-4">

<p>ANTLR grammar files should have with extentions <code>“.g”</code>, to mean that they are grammer file. Example <code>“Parser1.g”</code>.
</p>
<p>
To run ANTLR,
=java antlr.Tool   =.
Now let us disscuss how to evaluvate a basic mathematical expression, without variables support.
</p>
</div>
</div>

</div>

<div class="outline-3" id="outline-container-2">
<h3 id="sec-2"><span class="section-number-3">2</span> Building an expression Parser </h3>
<div id="text-2" class="outline-text-3">



</div>

<div class="outline-4" id="outline-container-2.1">
<h4 id="sec-2.1"><span class="section-number-4">2.1</span> Framing the Syntax </h4>
<div id="text-2.1" class="outline-text-4">

<p>Now we start our hunt..
</p>
<p>
We should analyze how our expression will look like. Some of our example expressions are, <code>1 + 2 , 1 * 2, 1 * 2 / 3, 1 + 2 * 3 / 4, 1 + 2 ^ 3, ( 1 +  2 ) * 3, ( 2 * 3 ) ^ 4</code>. in the expression, we use numbers and symbols.
</p>
<p>
The meaning for the symbols are.
</p>

<table rules="groups" frame="hsides" cellspacing="0" cellpadding="6" border="2">
<caption></caption>
<colgroup><col align="left"></col>
</colgroup>
<thead>
<tr><th scope="col">Symbols</th><th scope="col">Meaning</th></tr>
</thead>
<tbody>
<tr><td>()</td><td>Paranthesis</td></tr>
<tr><td>*</td><td>Multiplication</td></tr>
<tr><td>+</td><td>Addition</td></tr>
</tbody>
</table>


</div>

</div>

<div class="outline-4" id="outline-container-2.2">
<h4 id="sec-2.2"><span class="section-number-4">2.2</span> Backus Naur Form </h4>
<div id="text-2.2" class="outline-text-4">





<pre class="example">&lt;expression&gt; ::= &lt;expr&gt; ‘;’

&lt;expr&gt;      ::=   &lt;term&gt;

&lt;term&gt;      ::=   &lt;factor&gt; [ + &lt;factor&gt; ] [ - &lt;factor&gt; ]

&lt;factor&gt;    ::=   &lt;power&gt; [ * &lt;power&gt; ] [ / &lt;power&gt; ]

&lt;power&gt;     ::=   &lt;neg_num&gt; [ ^ &lt;neg_num&gt; ]

&lt;neg_num&gt;   ::=   &lt;number&gt; [ - &lt;number&gt; ]

&lt;number&gt;    ::=   &lt;digit&gt; [ . &lt;digit&gt; ]

&lt;digit&gt;     ::=   0..9
</pre>




</div>

</div>

<div class="outline-4" id="outline-container-2.3">
<h4 id="sec-2.3"><span class="section-number-4">2.3</span> Lexical syntax &amp; rules </h4>
<div id="text-2.3" class="outline-text-4">

<p>Symbols we use in ANTLR, we only see some of the basic rule what we use in our program. There are some more rules other than this.
</p>
<table rules="groups" frame="hsides" cellspacing="0" cellpadding="6" border="2">
<caption></caption>
<colgroup><col align="left"></col>
</colgroup>
<thead>
<tr><th scope="col">Symbol</th><th scope="col">Meaning</th></tr>
</thead>
<tbody>
<tr><td>(…)</td><td>Sub rule</td></tr>
<tr><td>(…)*</td><td>Match may occur zero times, one ime or more than one time.</td></tr>
<tr><td>(…)+</td><td>Positive closure sub rule, occur atleast one time.</td></tr>
<tr><td>(…)?</td><td>Optional</td></tr>
<tr><td>[…]</td><td>Rule arguments</td></tr>
<tr><td>\</td><td>Alternative operator</td></tr>
<tr><td>..</td><td>Range operator</td></tr>
<tr><td>~</td><td>Not operator</td></tr>
<tr><td>=</td><td>Assignment operator</td></tr>
<tr><td>:</td><td>Lable operator, rule start</td></tr>
<tr><td>;</td><td>Rule end operator</td></tr>
<tr><td>class</td><td>Grammar class</td></tr>
<tr><td>extends</td><td>Specifies grammar base class</td></tr>
<tr><td>returns</td><td>Specify the return type of rule</td></tr>
<tr><td>options</td><td>Options section</td></tr>
<tr><td>tokens</td><td>Tokens section</td></tr>
<tr><td>header</td><td>Header section,defn of packages and import items.</td></tr>
<tr><td>#</td><td>Root node operator</td></tr>
</tbody>
</table>


<p>
<b>Range operator</b> : The range binary operator implies a range of atoms may be matched.
</p>
<p>
Example :
</p>
<p>
'A' .. 'Z'-  All the letters between 'A' to 'Z'
0 .. 9 - All the numbers between 0 to 9
'a' .. 'z' - All the letters between 'a' to 'z'
</p>
<p>
<b>Alternative operator :</b>
</p>


<pre class="example">rulename
    :   alternative_1
    |   alternative_2
   ...
    |   alternative_n
    ;
</pre>




<p>
First alternative<sub>1</sub> is matched, if it fails it comes to alternative<sub>2</sub>, and so on until alternative<sub>n</sub>.
</p>
<p>
<b>Not operator(Complement operator):</b> The "~" not unary operator must be applied to an atomic element such as a token identifier. For some token atom A, ~A matches any token other than A except end-of-file. Within lexer rules, ~'a' matches any character other than character 'a'.
</p>
<p>
<b>Rule for single line comment :</b> it will match all the characters, but not the newline and carriage return character, and the rule will end with a newline or a carriage return character. It is a rule for single line comment.
</p>



<pre class="example">SL_COMMENT : "//" (~('\n'|'\r'))* ('\n'|'\r);=
</pre>





<p>
<b>Rule for String :</b> A string should first start with double quotes(“) then may or may not contain any characters, including the escape character, but not the double quotes(“) or “’” in between and finally end with a double quote(“).
</p>


<pre class="example">STRING : '"' (ESC | ~('\\'|'"'))* '"';=
Protected ESC : '\\' ('n' | 'r');
</pre>





<p>
<b>AST root operator ( ^ ) :</b> When generating abstract syntax trees (ASTs), token references suffixed with the "^" root operator force AST nodes to be created and added as the root of the current tree. This symbol is only effective when the buildAST option is set.
</p>
<p>
<b>AST exclude operator ( ! ) :</b> When generating abstract syntax trees, token references suffixed with the "!" exclude operator are not included in the AST constructed for that rule. This symbol is only effective when the buildAST option is set.
</p>
<p>
<b>Example:</b>
</p>
<p>
1 + 2 * 3; in this 1, +, 2, * , 3 should be in  the tree since they should be evaluvated , can suffixed with ^ operator, and ';' semi colon is not necessary, we don’t do anything with ';', so we can exclude that with a '!' operator, it is just simply to say the end of expression.
</p>
<p>
<b>Closure rule (…)**</b>: This rule specifies, that the matching character may occur zero times, one time or more than one time.
</p>
<p>
*<sub>See</sub> rule for String_
</p>
<p>
<b>Rule for Variable:</b> a variable should start with a capital letter, may contain another capital letter or number in it.
</p>



<pre class="example">VARIABLE :   'A'..'Z' ('A'..'Z' | '0'..'9')*
         ;
</pre>




<p>
<b>Positive closure rule (..)+:</b> This rule will say that, the matching item should atleast occur one time and may occur more than one time.
</p>
<p>
<b>Rule for a Integer :</b> should atleast contain one digit
</p>
<p>
<code>INT : ('0'..'9')+ ;</code>
</p>
<p>
<b>Optional closure rule (..)? :</b> This rule will say that, the matching item , may present or may not present, i.e it is optional.
</p>
<p>
Rule for both Integer and Real number :
</p>



<pre class="example">NUMBER      :   INT ( '.' (INT)? )?  ;

INT : ('0'..'9')+ ;

</pre>




<p>
<b>Skipping characters :</b> To have the characters matched by a rule ignored, set the token type to Token.SKIP.
</p>
<p>
Rule for skipping white spaces:
</p>



<pre class="example">WS : ( ' ' | '\t' | '\n' { newline(); } | '\r' )+

{ $setType(Token.SKIP); }

;
</pre>




<p>
these are whitespaces, not necessary for processing in some situations.
</p>
<p>
<b>Lexer rules :</b>  Rules defined within a lexer grammar must have a name beginning with an uppercase letter. These rules implicitly match characters on the input stream instead of tokens on the token stream.. further, lexer rules can also have local variables and use recursion.
</p>
<p>
<b>Parser rules:</b> Parser rules apply structure to a stream of tokens whereas lexer rules apply structure to a stream of characters. Parser rules, must not reference character literals. Double-quoted strings in parser rules are considered token references. Note: All parser rules must begin with lowercase letters.
</p>
<p>
<b>Tree-parser rules :</b> In a tree-parser, an additional special syntax is allowed to specify the match of a two-dimensional structure.
</p>
<p>
= rule : #(A B C); =
</p>
<p>
which means "match a node of type A, and then descend into its list of children and match B and C".
</p>
<p>
<b>Example: Lexical parser</b>
</p>



<pre class="example">class MyLexer extends Lexer;

WS    : (    ' ' | '\t' | '\n' | '\r' )

            { _ttype = Token.SKIP; }

      ;

// OPERATORS

LPAREN      :     '('   ;     RPAREN            :     ')'         ;

SEMI        :     ';'   ;     DOT               :     '.'         ;

DIV         :     '/'   ;     PLUS              :     '+'         ;

MINUS       :     '-'   ;     STAR              :     '*'         ;

POWER       :     '^'   ;    

//for both integer and real number

NUMBER

      :     (DIGIT)+ ( '.' (DIGIT)+ )?

      ;

//for numbers

protected

DIGIT

      :     '0'..'9'

      ;

</pre>




</div>

</div>

<div class="outline-4" id="outline-container-2.4">
<h4 id="sec-2.4"><span class="section-number-4">2.4</span> Parser synatax &amp; rules </h4>
<div id="text-2.4" class="outline-text-4">





<pre class="example">class MyParser extends Parser;

options {

      buildAST = true;  // uses CommonAST by default

}

statement

      :     expression SEMI!

      ;

expression

      :     additiveExpression

      ;

// addition/subtraction

additiveExpression

      :     multiplicativeExpression((PLUS^ | MINUS^) multiplicativeExpression)*

      ;

// multiplication/division   

multiplicativeExpression

      :     powerExpression ( (STAR^ | DIV^ ) powerExpression )*

      ;

powerExpression  

      :     unaryExpression ( POWER^ unaryExpression)*

      ;

unaryExpression

      :     MINUS^ {#MINUS.setType(UNARY_MINUS);} unaryExpression

      |     primaryExpression

      ;

primaryExpression

      :     NUMBER

      |     LPAREN! additiveExpression RPAREN!

      ;

</pre>




<p>
So now we can easily identify these rules. #MINUS.setType(UNARY<sub>MINUS</sub>),used to specify that it is not ordinary minus, it is unary minus.
</p>
<p>
Now TREE PARSER… part
</p>

<p>
Expression Tree Evaluation part
</p>



<pre class="example">class MyTree extends TreeParser;

expression returns [double r = 0]

{

      double a,b;

}

:     #(PLUS      a=expression b=expression)    { r = a+b; }

|     #(MINUS     a=expression b=expression)    { r = a-b; }

|     #(STAR      a=expression b=expression)    { r = a*b; }

|     #(DIV      a=expression b=expression)    { r = a/b; }

|     #(POWER     a=expression b=expression)    { r = Math.pow(a,b); }

|     #(UNARY_MINUS     a = expression)         { r = -a; }

|     i:DOUBLE    { r = Double.valueOf(i.getText()).doubleValue(); }

;

</pre>




<p>
The tree parser is used to evaluvate , i.e walking in the tree. It visits each node and identifies them as we specify. It is recursive, so, the expression is evaluvated recursive and the value is obtained.
</p>
<p>
Example woking of tree parser:
</p>



<pre class="example"># (PLUS      a=expression b=expression)    { r = a+b; }
</pre>




<p>
Finds PLUS in the node, then descends to it's child. Statements in { } are pure java statements, to say what could the operation is performed, when the above rule is satisfied.
</p>
<p>
Save the file in some name, there's no rule for file saving as in java. Let us say the file is MyCalc.g. Now we finished constructed the grammar. Now we need to generate Java source file. = java antlr.Tool MyCalc.g=
</p>



<pre class="example">Calc.java

import java.io.*;

import antlr.*;

import antlr.collections.*;

class Calc {

      public static void main(String[] args) {

            try {

            MyLexer lexer = new MyLexer(new DataInputStream(System.in));

                  MyParser parser = new MyParser(lexer);

                  // Parse the input expression

                  parser.statement();

                  CommonAST t = (CommonAST)parser.getAST();

                  // Print the resulting tree out in LISP notation

                  System.out.println(“Tree :” + t.toStringTree());

                  MyTree tree = new MyTree();

                  System.out.println(“Value:” + tree.expression(t));

            }

            catch(TokenStreamException e) {

                  System.err.println("exception: "+e);

            }

            catch(RecognitionException e) {

                  System.err.println("exception: "+e);

            }

      }

}

</pre>




<p>
<b>Some example expressions:</b>
</p>
<p>
Expression : <code>(1 + 2) * 3 - ( 4 / 5 * 6 ) ^ 2;</code>
</p>
<p>
Tree : <code>( - ( * ( + 1 2 ) 3 ) ( ^ ( * ( / 4 5 ) 6 ) 2 ) )</code>
</p>
<p>
Value : <code>-14.040000000000006</code>
</p>
<p>
Expression : <code>1 + 2 * 1000 / 4 ^ 2 * ( 5 + 20 );</code>
</p>
<p>
Tree : <code>( + 1 ( * ( / ( * 2 1000 ) ( ^ 4 2 ) ) ( + 5 20 ) ) )</code>
</p>
<p>
Value <code>:3126.0</code>
</p>

</div>
</div>
</div>
<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">
<p class="footnote"><sup><a href="#fnr.1" name="fn.1" class="footnum">1</a></sup> ANTLR is <i>Another tool for Language Recoginition</i>
</p>
</div>
</div>