---
layout: post
title: How to build symbolic  differential & integral calculus engine in Prolog
excerpt: Writing prolog rules for differential and integral calculus symbolic calculation
categories: ['programming']
tags: ['prolog','java','math','integral calculus','differential calculus']
---

<figure>
	<img src="/images/2013/prolog-math-banner.svg" alt="\int e^{x} = d(e^{x}) = e^{x}"> 
</figure>

Math is all about symbolic calculation and there are only [handful of programming languages](https://en.wikipedia.org/wiki/List_of_computer_algebra_systems) to do the symbolic math. But when need arises, you can write your own symbolic math processing engine easily and I will show you how you can use Prolog to do it and integrate into any java application.

[Prolog](http://en.wikipedia.org/wiki/Prolog) a well known language in the academia areas of computer science such as Artificial Intelligence and related studies. Prolog is a logic programming and  pattern matching language. It is a first-order programming model and helps you to build code in a mathematical or inference based approach. Prolog is a simple language to learn and yet powerful to use ( just for fun, try to convert the rules listed in here into Java code ). It is pretty easy to get start with it in matter of hours. 

This article shows you how to use Prolog to write Differential and Integral calculus rules. I've coded few modules for some of my bachelors projects such as [MinT](https://github.com/mymindleaks/Mint) and [jLogics](https://github.com/mymindleaks/jLogics).

If you are new to prolog, I would recommend to get some [basics of Prolog](https://en.wikibooks.org/wiki/Prolog) before diving in here. Do not worry you are not learning anything [weird like this](http://net.tutsplus.com/articles/roundups-articles/top-10-most-bizarre-programming-languages/). 

In nutshell, just understand that

1. It can be used a Compiled or Interpreted language and works based on the pattern matching.
2. You start with simple facts &amp; relations and extend those as rules.
3. Expressions are separated by COMMA(,) and the function is terminated by a DOT(.)
4. Just build the foundations correct and rest everything would fit ( just like the axioms in Math )
7. Prolog is good at [backtracking](http://ww2.cs.mu.oz.au/482/lectures/Prolog_How_Works.pdf). i.e if one of the input couldn't derive to a 'Truth' value, it would try with nex set of values until it finds 'Truth'.

Here is an example of backtracking. Prolog, will match for truth always and until it matches, it will backtrack and keep looking.

In this program, when you ask for `good_menu_in(thai)`, it will find two matches `restaurant4` and `restaurant1` and then for each match, it will try to find the matching `good()` menu item. When it checks for `restaurant4`, it doesn't match any `good()` item. So it will backtrack to `restaurant1`.

{% highlight prolog %}

good(restaurant1,ginger_chicken)
good(restaurant1,fried_noodles)
good(restaurant2,chicken_curry)
good(restaurant2,kung_pao_chicken)

restaurant(thai,restaurant4)
restaurant(thai,restaurant1)
restaurant(chinese,restaurant2)
restaurant(indian,restaurant3)

good_menu_in(X):- restaurant(X,R), good(R,M)

> good_menu_in(thai)

{% endhighlight %}

when `restaurant1()` rule is executed, it would fetch `restaurant4` and `restaurant1`. When it tries to match `good(restaurant4)`, it wont find any, hence it will backtrack to `good(restaurant1)`.

Result:
`ginger_chicken`, `fried_noodles`

Here is another [example](http://en.wikipedia.org/wiki/Prolog#Evaluation)

Now, let us get started.

## Differential rules

### Define the basic axioms
{% highlight prolog %}

d( X, X, 1 ):- !.                  /* d(X) w.r.t. X is 1      */
 
d( C, X, 0 ):- atomic(C).          /* If C is a constant then */
                                   /* d(C)/dX is 0            */
 
d( U+V, X, R ):-                 /* d(U+V)/dX = A+B where   */
   d( U, X, A ),                   /* A = d(U)/dX and         */
   d( V, X, B ),
   R = A + B.
 
d( U-V, X, R ):-
   d( U, X, A ),
   d( V, X, B ),
   R = A - B.

/* constant multiplied to variable d(C*X)/d(x) */ 
d( C*U, X, R ):-
   atomic(C),
   C \= X,
   d( U, X, A ),
   R = C * A,
   !.
 
d( U*V, X, U*B+V*A ):-           /* d(U*V)/dX = B*U+A*V where */
   d( U, X, A ),                 /* A = d(U)/dX and           */
   d( V, X, B ).                 /* B = d(V)/dX               */
 
d( U/V, X, (A*V-B*U)/(V^2) ):- /* d(U/V)/dX = (A*V-B*U)/(V*V) */
   d( U, X, A),                /* where A = d(U)/dX and       */
   d( V, X, B).                /*       B = d(V)/dX           */
 
d( U^C, X, R ):-       /* d(U^C)/dX = C*A*U^(C-1)   */
   atomic(C),                    /* where C is a number or    */
   C\=X,
   d( U, X, A ),
   R = C * A * U ^ ( C - 1 ).
{% endhighlight %}


### Now little complex pattern.

As prolog is good at pattern matching, you can define rules with complex inputs. When you invoke `d(sin(X))` or `d(sin(sin(X)))`,it will match the rule. And then it will still track for `d(X)`. In the first case it is just `X` and in 2nd case it is `sin(X)` and see if anything matches up.


{% highlight prolog %}

d( sin(W), X, Z*cos(W) ):-       /* d(sin(W))/dX = Z*cos(W)   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */

{% endhighlight %}

### List of basic trigonometric rules

{% highlight prolog %}

d( sin(W), X, Z*cos(W) ):-       /* d(sin(W))/dX = Z*cos(W)   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( exp(W), X, Z*exp(W) ):-       /* d(exp(W))/dX = Z*exp(W)   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( log(W), X, Z/W ):-            /* d(log(W))/dX = Z/W        */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( cos(W), X, -(Z*sin(W)) ):-    /* d(cos(W))/dX = Z*sin(W)   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( tan(W), X, (Z*sec(W)^2) ):-    /* d(tan(W))/dX = Z*sec(W)^2   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( cot(W), X, -(Z*cosec(W)^2) ):-    /* d(cot(W))/dX = -Z*cosec(W)^2   */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( sec(W), X, (Z*sec(W)*tan(W)) ):-    /* d(sec(W))/dX = sec(W)*tan(W)  */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( cosec(W), X, -(Z*cosec(W)*cot(W)) ):-    /* d(cosec(W))/dX = -cosec(W)*cot(W)  */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arcsin(W), X, Z/sqrt(1-W^2) ):-    /* d(arcsin(W))/dX = Z/sqrt(1-W^2) */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arccos(W), X, -(Z/sqrt(1-W^2)) ):-    /* d(arccos(W))/dX = -(Z/sqrt(1-W^2) )*/
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arctan(W), X, Z/(1+W^2) ):-    /* d(arctan(W))/dX = Z/(1+W^2) */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arccot(W), X, -(Z/(1+W^2)) ):-    /* d(arccot(W))/dX = -(Z/(1+W^2)) */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arcsec(W), X, (Z/(W*sqrt(W^2-1))) ):-    /* d(arcsec(W))/dX = (Z/(W*sqrt(W^2-1))) */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
d( arccosec(W), X, -(Z/(W*sqrt(W^2-1))) ):-    /* d(arccosec(W))/dX = -(Z/(W*sqrt(W^2-1))) */
   d( W, X, Z).                  /* where Z = d(W)/dX         */
 
{% endhighlight %}

[Full Gist](https://gist.github.com/mymindleaks/8126309)

## Integral rules

Similar to Differential, Integral rules are defined. Start with the basic axioms and expand.

{% highlight prolog %}
int( 0 , X , 0).

int( C , X , C * X ):-
        atomic(C),
        C \= X,  !.

int( X , X , 0.5 * X^2 ):- !.

int( 1 / X , X , ln(X) ):- !.

int( C * X , X , C * R):-
        atomic(C),
        int(X , X , R).

int( X * C , X , R):-
        atomic(C),
        int(C * X , X , R).

int( U + V , X , A + B ):-
        int( U , X , A ),
        int( V , X , B ).

int( U - V , X , A - B):-
        int( U , X , A ),
        int( V , X , B ).

int( U * V , X , U * R):-
        atomic(U),
        U \= X,
        int(V , X , R).

int( A^X , X , A^X / ln(A) ):-
        atomic(A),
        A \= X,
        !.

int( X^N , X , W1 * (X ^ W ) ):-
        numeric(N),
        W is N + 1,
        W1 is 1 / W,
        !.

int( X^N , X , (1 / (N + 1) ) * X ^ (N + 1) ):-
        atomic(N),
        !.

int( Z / X , X , Z * ln(X) ):-
        atomic(Z),
        Z \= X, !.

int( ( (A*X+B)^(-1) ) * X , X , inf ).

int( ( (A*X+B)^N ) * X , X , R):-
        A1 = ( A*X + B) ^ ( N + 1),
        A2 = ( A * ( N + 1 ) ),
        R = A1 / A2.

int( sin(A*X+B) , X , -(1/A) * cos(A*X+B) ):- !.

int( cos(A*X+B) , X , (1/A) * sin(A*X+B) ):- !.

% integration of functions
int( sin(X) , X , -cos(X) ):- !.

int( cos(X) , X , sin(X) ):- !.

int( tan(X) , X , ln(cos(X)) ):- !.

int( sec(X) , X , ln( sec(X) + tan(X) ) ):- !.

int( cosec(X) , X , ln( cosec(X) - cot(X) ) ):-        !.

int( cot(X) , X , ln(sin(X)) ):- !.

int( exp(X) , X , exp(X) ):- !.

int( sec(X)^2 , X , tan(X) ):- !.

int( cosec(X)^2 , X , -cot(X) ):- !.

int( sec(X) * tan(X) , X , sec(X) ):- !.

int( cosec(X) * cot(X) , X , -cosec(X) ):- !.

int( 1/(A*X+B) , X , (1/A) * ln(A*X+B) ):- !.

int( exp(A*X+B) , X , (1/A) * exp(A*X+B) ):- !.

int( 1/sqrt(1-X^2) , X , arcsin(X) ):- !.

int( 1/sqrt(1+X^2) , X , arctan(X) ):- !.

int( 1/(X*sqrt(X^2-1)) , X , arcsec(X) ):- !.

int( 1/(X^2-A^2) , X , (1/2*A) * ln( (X-A) / (X+A) ) ):- !.

int( 1/(A^2-X^2) , X , (1/2*A) * ln( (A+X) / (A-X) ) ):- !.

int( 1/(X^2+A^2) , X , (1/A)* arctan(X/A) ):- !.

int( 1/sqrt(X^2-A^2) , X , ln( X+sqrt(X^2-A^2) ) ):- !.

int( 1/sqrt(A^2-X^2) , X , arcsin(X/A) ):- !.

int( 1/sqrt(A^2+X^2) , X , ln(X+sqrt(X^2+A^2)) ):- !.

% integration of functions
% using substitutions

int( sin(X)*cos(X), X , (1/2)*R):-
        int(sin(2*X),X,R).

%if all fails

int(W,X,W).

{% endhighlight %}

[Full Gist](https://gist.github.com/mymindleaks/8126305)

[Complete Source](https://github.com/mymindleaks/jCalculus/blob/master/lib/calculus.pl)

## Java Integration
You can use [GnuProlog](http://www.gnu.org/software/gnuprologjava/manual/index.html) for java to integrate your prolog program into your java app. Build the basic prolog engine using the gnuprolog APIs and you should be set.



[Source](https://raw.github.com/mymindleaks/jCalculus/master/src/calculus/PrologEngine.java)

{% highlight java %}
public class PrologEngine implements Serializable{

  private HashMap variableResult;
  private StringReader sr;
  private TermReader tr;
  private ReadOptions rd_ops;
  private Environment env;
  private Interpreter interpreter;
  private WriteOptions wr_ops, options;
  private Term goalTerm;
  private Interpreter.Goal goal;
  private String response, fileName, goalToExecute;
  private TermWriter out;

  public PrologEngine(String fileName) throws ParseException {

    this.fileName = fileName;

    /* initialize the prolog environment */
    env = new Environment();
    env.ensureLoaded(AtomTerm.get(fileName));
    interpreter = env.createInterpreter();
    env.runIntialization(interpreter);

    /* show any error occured */
    for (Iterator iter = env.getLoadingErrors().iterator(); iter.hasNext(); ) {
      PrologTextLoaderError err = (PrologTextLoaderError) iter.next();
      System.err.println(err);
    }

    rd_ops = new ReadOptions();
    rd_ops.operatorSet = env.getOperatorSet();

    wr_ops = new WriteOptions();
    wr_ops.operatorSet = env.getOperatorSet();

    out = new TermWriter(new StringWriter());
  }

  public String getResult(String variable) throws Exception {
    Object obj = variableResult.get(variable);

    if (obj == null) {
      throw new Exception("No Such Variable : " + variable);
    }
    else {
      Term res = ( (Term) obj).dereference();
      String output = out.toString(res);
      return output;
    }
  }

  public void exec(String goalToExecute) {
    try {
      this.goalToExecute = goalToExecute;
      sr = new StringReader(goalToExecute);
      tr = new TermReader(sr);

      goalTerm = tr.readTermEof(rd_ops);
      goal = interpreter.prepareGoal(goalTerm);

      int flag = interpreter.execute(goal);

      switch (flag) {
        case PrologCode.SUCCESS:
        case PrologCode.SUCCESS_LAST:
          variableResult = (HashMap) rd_ops.variableNames;
          break;
        case PrologCode.FAIL:
          throw new Exception("Cannot Execute for : " + goalToExecute);
      }
    }
    catch (Exception e) {
      System.err.println(e);
    }
  }
}

{% endhighlight %}

### jCalculus - java library

I've built this as part of my final year project and it is available over [github](https://github.com/mymindleaks/jCalculus) for anyone to use.

_**Note**: I'm not maintaining this anymore_

### Usage

{% highlight java %}

System.setProperty("jcalculus",path);

Integral d = new Integral();
String s = d.eval(expression,withRespectToVariable);

{% endhighlight %}


### Test code

{% highlight java %}
import java.io.*;
import calculus.PrologEngine;
import javax.swing.*;
import calculus.*;


public class test {
  static void dx(String goalToRun) throws Exception{
    Derivative d = new Derivative();
    String s = d.eval(goalToRun,"x");
    System.out.println("Differential of " + goalToRun + " : " + s);
  }

  static void in(String goalToRun) throws Exception{
    Integral d = new Integral();
    String s = d.eval(goalToRun,"x");
    System.out.println("Integral of " + goalToRun + " : " + s);
  }

  public static void main(String args[]) throws Exception {
    
    String path ="path/to/script";
    System.setProperty("jcalculus",path);

    String goalToRun ="sin(x^3)";
    dx(goalToRun);
    in(goalToRun);
  }
}
{% endhighlight %}

[Source](https://github.com/mymindleaks/jCalculus/blob/master/test/test.java~1~)
