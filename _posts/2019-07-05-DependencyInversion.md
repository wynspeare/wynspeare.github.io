---
layout: post
title: Dependency Inversion 
subtitle:
date: 2019-07-05
author: Caroline
---
### 5 | The Dependency Inversion Principle
<br/>

#### To understand this principle, we first need to know  - *what is a dependency?* 

Consider two objects **A** and **B**. Let's say **A** is dependent on **B**. This means that in order for **A** to be successful and perform the job it is designed to do, **A** *needs* **B**. Let's think about this with real objects - if **A** is a pen, **B** would be the ink cartridge; a pen with no ink is completely useless and would fail at its task!  In coding terms, if **A** is dependent on **B**, **A** *must* have a copy/instance of **B**, otherwise **A** cannot function.
<br/>
<br/>


#### Why do I need to look out for dependencies?

When two objects have a direct reliance on each other, they become highly coupled. If I wanted to alter how **B** behaves, any changes will likely affect **A** and create unintended consequences. This would make code very difficult to manage in the future.  Let's go back to the pens - maybe I want to use a different color of ink in my pen (**A**). The color of new ink cartridge (**B**) would not match the exterior of my existing pen, so I would then need to change the cap color of my pen **A**, (or even worse the new ink cartridge might not even fit my pen!)
<br/>
<br/>


#### So how do we remove dependencies?

By following the **Dependency Inversion Principle** of course!  The DIP states:
<br/>
<br/>
>##### High level modules should not depend on low-level modules. Both should depend on abstractions.
>##### Abstractions should depend on details. Details should depend on abstractions.

This means that two objects that depend on each other should be separated by a third object; an abstraction (let's call this **C**).  When an abstraction is properly introduced the high-level module (object **A**) depends on the abstraction, and the low-level module (object **B**) also depends on the **same** abstraction. Thereby *changing* the direction of the dependency and removing the direct reference between **A** and **B**.  It isn't so much that the coupling between the two objects has been completely removed, moreover the coupling has shifted to a third intermediary component - the abstraction, **C**. To make any edits to object **B**, there is no longer any need to comb through **A**, you would only have to check and make any possible alterations in one place - **C**.
<br/>
<br/>


#### How do I implement abstractions?

Interfaces are commonly used to follow the Dependency Inversion Principle.  They allow for objects to be defined, yet not fully implemented - providing a *broad outline* for what each object, **A** and **B** expects. Using them between dependent objects allows for slightly different implementations of how each object will behave. Let's take a look at some code!
<br/>
<br/>
{% highlight csharp %}

class Post
{
    private LaserPrinter printer = new LaserPrinter();

    void PrintPost(string postMessage)
    {
        printer.print(postMessage);
    }
}

class LaserPrinter
{
    public print(string text)
    {
        // Send to LASER printer
    }
}
{% endhighlight %}

Here we have a `Post` object that can be printed via the `PrintPost` method. The `Post` class instantiates an instance of `LaserPrinter` - it is dependent on `LaserPrinter`. But what if we wanted to use a different type of printer!? Let's see if we can fix this:
<br/>
<br/>

{% highlight csharp %}
interface IPrinter
{
    void print(string text);
}

public class LaserPrinter : IPrinter
{
    void print(string text)
    {
        //Send to LASER printer
    }
}

public class InkJetPrinter : IPrinter
{
    void print(string text)
    {
        //Send to INKJET printer
    }
}
{% endhighlight %}

Above we have created an interface `IPrinter` with the method `print` defined. Next we have two implementations of the interface: `LaserPrinter` and `InkJetPrinter`. As the interface just *defines* the method `print`, we have the ability to create custom behaviour for each specific type of printer when they are implemented!  Now let's see our newly created interface used in the `Post` class:
<br/>
<br/>

{% highlight csharp %}
class Post
{
    public IPrinter printer;

    public Post(IPrinter injectedPrinter)
    {
        printer = injectedPrinter;
    }

    void PrintPost(string postMessage)
    {
        printer.print(postMessage);
    }
}
{% endhighlight %}

Here you can see the interface `IPrinter` is injected into the `Post` object when `Post` is instantiated! No more dependencies!
<br/>
<br/>


#### What is the difference between Dependency Inversion and Dependency Injection? 

Injection removes dependencies by supplying the dependent object **B** and passing it into **A**, rather than instantiating **B** within the higher-level, **A**. Conversely Dependency Inversion removes dependencies by separating **A** and **B** with an abstraction.  [Erik Dietrich](https://daedtech.com/about/) in his blog post ["Dependency Injection or Inversion?"](https://daedtech.com/dependency-injection-or-inversion/) came up with this great way to summarise the difference:
<br/>
<br/>

>##### Dependency Injection == “Gimme it”
>##### Dependency Inversion == “Someone take care of this for me, somehow.”  

With Injection, dependent objects are not instantiated, instead they are passed down as parameters. Dependency Inversion can be achieved by using Injection within the abstraction between objects **A** and **B**, which you can see in the code example above.

Lastly it's important to note - if you have successfully implemented the Open/Closed Principle and the Liskov Substitution Principle, you should have also followed the Dependency Inversion Principle, as all the SOLID Principles relate to each other!
