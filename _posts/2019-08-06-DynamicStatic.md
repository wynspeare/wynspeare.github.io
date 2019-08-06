---
layout: post
title: Dynamic/Static & Interpreted/Compiled
subtitle:
date: 2019-08-06
author: Caroline
---
### What is a type?

Programming languages can be classified as dynamic or statically typed and interpreted or compiled. But first we need to fully understand **what is a type?**  

A type describes the kind of data that is stored in memory, and only **specific** operations (mathematical, relational, logical etc) are allowed to be performed on each type. For example, integers allow various mathematical operations - they can be added, minused, multiplied, divided and so on. Whereas minusing or dividing a string of text is not possible, resulting in a **type error**. 

Incidentally multiplying or adding strings *is* permitted in some languages. In the code block below you can see that python allows strings to be concatenated (added together) using the `+` and `*` operators, yet a **TypeError** occurs when trying to add a string to an integer.
<br/>
<br/>

{% highlight python %}
>>> print("red" + "yellow")
redyellow
>>> print("red" * 3)
redredred
>>> print("red" + 3)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> print("red" + "3")
red3
{% endhighlight %}
<br/>
#### Common data types available in most languages:
• **Boolean** - True or False
<br/>
• **Char** - A single character, letter, digit or symbol
<br/>
• **Date** - 08/06/2019
<br/>
• **Integer** - A whole number, usually each language has a maximum and minimum value
<br/>
• **Float** - A decimal point number
<br/>
• **String** - Any sequence of letters/numbers (or emojis!) that are contained within quotes
<br/>
• **Void** - No data
<br/>
• **List** or Array - An enumerable sequence of values or fixed or variable length
<br/>
• **Associative Array** or Dictionary - consisting of key, value pairs
<br/>

----
<br/>
### What is a **Statically Typed** Language?

Statically typed languages require that the type of a variable *must be known* at compile time. This means that everything must be specifically assigned to a designated type. C# and Java are commonly used statically typed languages.  Planning what type each variable is going to be and always considering the input/output for all methods is certainly restrictive and time consuming, yet it has significant benefits!
<br/>
<br/>
#### Why is static typing useful?
• **Easy to Understand** - Code is easier to understand as you can follow how it was *designed* to work.
<br/>
• **Maintainable** - By having code that is easy to comprehend, the maintainability greatly increases. Future developers working on legacy code, have to spend less time trying to discern what was the intended usage.
<br/>
• **IDE Support** - Many IDEs provide enhanced features e.g. hints when code is going to create an error. This allows developers to work more efficiently.
<br/>
• **Less unexpected errors** - Certain errors are greatly reduced - for example when sanitizing user input, numerical strings can never be mistaken for integers: `"10"` versus `10`, lessening any potential errors when code is being executed.

----
<br/>
### What is a **Dynamically Typed** Language?

A dynamic language allows variables to be discovered and *type checked* at run-time. Type checking is the process to ensure that the program is *"type safe"*. It verifies and enforces the constraints of each type by making sure that list of associated operations that can be performed on the data is possible - (mathematical/relational operations or built-in methods).  The most common dynamic languages are Javascript, Python and Ruby.
<br/>
<br/>
#### Benefits of dynamic typing

• **Clean** - Often dynamically typed languages are considered simpler as they are less verbose and have less "clutter".
<br/>
• **Faster to run** - Having no compile time means that code can be ran much more quickly, which is great when practicing TDD.
<br/>
• **Legibility** -  The elimination of needing to explicitly state each type means the code looks closer to pseudo-code and is easier for humans to read.
<br/>
• **More useful errors** - The less stringent nature of dynamic typing generally means there are fewer errors concerned with syntax, and instead more errors are generated purely from logic.
<br/>
• **Easy to learn** - These reasons mean that dynamically typed languages are often the first languages that new developers learn, particularly in coding bootcamps.  

---
<br/>

### Type Inference

Certain languages have the ability to use type inference - where the type of a value is **inferred** by what is detected at compile time, meaning you do not have to explicitly state the type.  C#, while being a statically typed language, also allows some flexibility with type inference by using the `var` keyword. Check out the two examples below:

Using specific assigned types - 
{% highlight csharp %}
List<string> myList = new List<string>();
{% endhighlight %}

Using the `var` keyword and type inference - 
{% highlight csharp %}
var myList = new List<string>();
{% endhighlight %}

This allows code to be written more quickly with additional flexibility for polymorphism.

---
<br/>

### Interpreted & Compiled Languages

Compiled languages require that code must first be converted from a *human-readable* format into machine code that a computer can natively run.  When code is compiled it is checked for any errors - this can prevent issues from arising when the code is eventually executed (although this doesn't mean it will be free from logical errors!)  This step is where the types are checked (see above). In general compiled languages will **run** faster as all of the type-checking has already happened.

Because compiled code is converted into machine code, it unfortunately has to be specifically created for the operating system it is designed for.  A program compiled for a Linux computer will not execute on Windows computer, therefore you would need to recompile the program on a Windows machine for it to run successfully.

Conversely interpreted languages do not need to be compiled before they are ran.  Python and Javascript are two of the commonly used interpreted languages. Being interpreted means that as long as the language is installed on a machine, the machine can run the script, regardless of what operating system it is.  Behind the scenes, the human-readable code is transformed on-the-fly to something the computer can read. Generally this means that interpreted languages are considered to be slower and certainly much less efficient, as more steps need to be performed when code is executed.  





