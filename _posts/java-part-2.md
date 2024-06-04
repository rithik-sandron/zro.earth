---
title: 'Java part-2 [OOP, stack, heap, gc..]'
publishedAt: 'Feb 20, 2023'
category: dev
decription: 'This is a 3 part article. This part covers - OOP, class, objects, inheritance, wrapper classes etc...'
author: Rithik
---

# This is a 3 part series
go to [Java Part-1](/dev/java-part-1)

go to [Java Part-2](/dev/java-part-2)

go to [Java Part-3](/dev/java-part-3)


# OOP
**Object Oriented Programming** is a whole concept itself. Here's a gist of it.
Why do we need OOP? ideally before OOP, we provide steps and those steps are executed sequentially. Lets say you want to restrict few sets of instruction only for a certain entity. For instance, In a car its engine, tyre, every other parts are specific to that car. Most times we want to replicate this real time entities in our code. In that sense how do we encapsulate things like a car? well we use Class. 

# Class
Classes encapsulates **attributes**(variables, constants and methods) together as one entity and only the objects that are created from that class can have those attributes.

> Classes are like blueprints (a car design) from which we create objects (cars) and all the attributes(body parts of the car) is unique to that object.

Lets look at an example to understand clearly. Ideally each class is declared in its separate file.

```
public class Hero {
  public String type;

  public Person(String type) {
    this.type = type;
  }
  
  public static void main(String [] args) {
      Archer archer = new Archer("Archer");
      System.out.println("Hero is a " + archer.type);
  }
}
```

Here `Hero.java` is the file name, `Hero` is the class name and `String type` and `main()` are attributes of that class. The file name and class name should be the same.

# Object and its creation
Now that we declared a class, lets create an object from it.

```
Hero object = new Hero();
```

This single line does quite a lot of things. Firstly when **new** keyword is used it means its creating a new object by calling its ==constructor==.

## Constructors
Constructors are special methods inside a class that is used to create an object.

```
public Hero() {

}
```

- Constructors have the same name as the class.
- It should be **public**, so that we can use it inside others classes where we need this object.
- It can also be **private**. If a constructor is private that respective class cannot be inherited.
- if access modifier is left undeclared, a default modifier is applied.

### Default constructor
Mostly developers wont declare a default constructor unless its necessary in some cases. when a constructor is not provided for a class, JVM creates a **default constructor with a default access modifier**. Default constructor does not have parameters.

### Parameterised constructor
A name suggests, it is a constructor with parameters. sometimes we want to pass some values during object creation and we want some set of instructions to be done. For that purpose, we can use parameterised constructors.

```
public Hero(int a, int b) {

}
```

# Java Variable types
### Local Variables
Variables inside a block =={ }== is local variable to that block. 

### Instance Variables
Variables inside a class that are non-static are called instance variables.

### Static Variables
Static variables are one true source variables. no matter how many instance of objects are created, all objects share one common static variable.
Changes made to a static variable by one instance object will reflect on other objects too. 

```
public class Hero {
  public static int strength = 100; // static variable
  public String type; // instance variable

  public Hero(String type) {
    this.type = type;
  }
  
  public static void main(String [] args) {
    Archer archer = new Archer("Archer");
    System.out.println("Hero is a " + archer.type);
  }
}
```

# Inheritance
We need inheritance to reuse some the features that comes with OOP. Lets say we want create some classes indicating different shapes. Yes the same old example, bare with me. Basic shapes like square, triangle have certain similarities like name of the shape, no of edges and so on. Since these **similarities apply to all basic shapes it would be redundant to include same set of attributes and instructions inside each Shape class we create**. And if there is a change we need to do we might have to do in all the classes we created. This would be a nightmare. In this scenario, we could use inheritance to create a ==Super class== called **Shape** and have all the common attributes declared here. All the other shapes we create can be a ==sub class== to this super class. 

## Extending
```
public class Shape {
  String name;
  int noOfEdges;
  
  void draw() {

  }
}

public class Triangle extends Shape {
    
}
```

When a class inherits a class with **extends keyword** it means that all the attributes of the super class(Shape) is applicable to the sub class(Triangle). so the attributes `name, noOfEdges, draw()` belongs to the sub class when we create an object from it.

> Classes in Java only supports single inheritance. multiple inheritance is not supported meaning a class cannot extend more than one class.

# Types of classes
There are several types of classes we can create in Java, which comes based on the inheritance we talked about.

- concrete class
- abstract class 
- interface

## Concrete class
classes we normally declare are generally called as concrete classes in Java. In a concrete class ==all methods should be declared and should have a method body==.

## Abstract class
Class where we can have abstract methods are called abstract classes. **Abstract methods are normal methods that are declared as abstract. Abstract methods do not have a method body**. 

`void draw();`

Generally concrete classes that inherits the abstract class provides the method definition(body) to the abstract methods declared in the respective abstract class it inherited from.

> concrete classes cannot have abstract methods. concrete class extending an abstract class should provide method definition for all abstract methods.

```
pubic abstract class Shape {
  void draw();
}

public class Triangle **extends Shape** {
  void draw() {
    // method definition / body
  }
}
```

## Interface
Interface is similar to abstract classes. Interface came into picture because multiple inheritance is not allowed in Java. Lets say we want a class to inherit from multiple super classes using *extends* keyword. That is simply not possible. but a class can implement multiple interfaces using ==implements keyword==.

## Implementing interfaces
```
public class Triangle extends Shape 
    implements Clonable, Iteratable {

}
```

> The class that implements the interfaces should provide method definition to all abstract methods inside all the interfaces it implements.

Consider Interface and abstract class as a menu card in a restaurant. The menu has a basic list of all food items the restaurant has. You can order food by looking at the menu. But food will arrive at your table only when chef completes the order. Likewise interfaces and abstract classes have abstract attributes which a class can implement. But when the class implements it, It should define all the methods.

# Wrapper classes
As the name suggests, **wrapper classes are classes encapsulating primitive Java data type from which objects can be created**. The first question that strikes us is that, why do we need to use Wrappers when we already have primitives?

- ==Generics== only work with objects and not with primitive types.
- Java ==Collections== basically involves objects and generics.

All 8 primitive data types have its own wrapper classes. **Since String being a class and not a primitive, we can use String class directly.**

| boolean | Boolean |
| byte | Byte |
| short | Short |
| int | Integer |
| long | Long |
| float | Float |
| double | Double |  
| char | Character |

## Auto Boxing
**Automatic boxing** refers to steps that JVM does to convert the primitive values automatically to Wrappers.

```
Integer number = 12;
Character ch = 'a';
```
Here 12 is a primitive literal, that is converted automatically into a n Integer wrapper. Internally `Integer.valueOf(12)` is what JVM runs to auto box the value. **We do not need to manually convert but we could**.

## Unboxing
**Automatic unboxing** of wrapper classes to primitive values.

```
Integer i = new Integer(10);
int number = i;
```
here wrapper is converting automatically to a primitive. Internally
`i.intValue()` is what JVM runs to auto unbox.

## Wrappers are Immutable
When arithmetic operations are performed on primitive types, they yield a new value. By Nature primitive types are **Pass by value** and they are immutable. To replicate the behaviour, Wrappers of the primitive are also immutable. So when an arithmetic operation is performed on a wrapper, a new object is returned, existing objects are not modified. **Wrappers are also pass by value in nature**.

will cover
- static keyword
- this keyword
- super keyword
- final keyword in classes
- Memory - heap & stack
- gc
- destructor for class

goto [Java Part-3](/dev/java-part-3) of this series.
