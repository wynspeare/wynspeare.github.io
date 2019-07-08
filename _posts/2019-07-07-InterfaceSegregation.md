---
layout: post
title: Interface Segregation 
subtitle:
date: 2019-07-07
author: Caroline
---
### 4 | The Interface Segregation Principle


The **Interface Segregation Principle** states the following:

>##### No client should be forced to depend on methods it does not use.

This can be explained to mean the following - do not add new methods, with additional functionality to an existing interface if they are not going to be used. Alternatively create a new interface and allow objects to implement multiple interfaces as needed.  Let's take a look at some code to understand this further:
<br/>
<br/>
{% highlight csharp %}

interface IPrinter
{
    void print(string text);
    string checkBlackInkLevels();
    string checkColorInkLevels();
}
{% endhighlight %}


Here we have an interface for a printer. It has 3 methods defined `print`, `checkBlackInkLevels` and `checkColorInkLevels`. But what if I have `BWLaserPrinter`, a laser printer that prints in grayscale and only has black ink? The method `checkColorInkLevels` would be completely redundant, yet the interface would have forced the `BWLaserPrinter` object to implement a method which it has no use of.  This would be in violation of the Interface Segregation Principle. Let's fix this problem!
<br/>
<br/>

{% highlight csharp %}

interface IPrinter
{
    void print(string text);
    string checkBlackInkLevels();
}

interface IColorPrinter
{
    string checkColorInkLevels();
}
{% endhighlight %}

The first step is to separate out the methods that do not apply to all implementations. Above I have created a new interface `IColorPrinter` which contains the `checkColorInkLevels` method signature. The original interface `IPrinter` now has two methods - `print` and `checkBlackInkLevels`, as all printers have these capabilities.  Now let's implement these interfaces:
<br/>
<br/>

{% highlight csharp %}

public class BWLaserPrinter : IPrinter
{
    void print(string text)
    {
        //Send to LASER printer
    }
    string checkBlackInkLevels()
    {
        //Check BLACK ink
    }
}
{% endhighlight %}

Above the `BWLaserPrinter` object implements just one interface -  `IPrinter`. It is a black and white printer, so only needs to have the two original methods. 
<br/>
<br/>
{% highlight csharp %}
public class InkJetColorPrinter : IPrinter, IColorPrinter
{
    void print(string text)
    {
        //Send to INKJET printer
    }
    string checkBlackInkLevels()
    {
        //Check BLACK ink
    }
    string checkColorInkLevels()
    {
        //Check COLOR ink
    }
}
{% endhighlight %}

Here is an example of using both interfaces. The `InkJetColorPrinter` object implements both `IPrinter` and `IColorPrinter`. It has the ability to check color *and* black ink levels. By creating a second interface, no methods are unused and the Interface Segregation Principle is followed!


