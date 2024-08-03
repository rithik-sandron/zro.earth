---
title: 'Java part-2 [OOP, stack, heap, gc..]'
publishedAt: 'Feb 20, 2023'
category: dev
decription: 'This is a 3 part article. This part covers - OOP, class, objects, inheritance, wrapper classes etc...'
author: Rithik
---

## This is a 3 part series
- Go to [Java Part-1](/blog/java-part-1)
- Go to [Java Part-2](/blog/java-part-2)
- Go to [Java Part-3](/blog/java-part-3)


# OOP
When it comes to **Object Oriented Programming**, it's a whole concept in itself. Here's a quick overview: Why do we need OOP? Before OOP, we used to provide instructions and they were executed sequentially. Let's consider a scenario where we want to restrict a few sets of instructions only for a specific entity. For example, in a car, its engine, tires, and every other part are specific to that car. Often, we want to replicate this real-time entity in our code. In that case, how do we encapsulate things like a car? We use a Class.

# Class
Classes encapsulates **attributes**(variables, constants and methods) together as one entity and only the objects that are created from that class can have those attributes.

> Classes are like blueprints (a car design) from which we create objects (cars) and all the attributes(body parts of the car) is unique to that object.

Let's consider an example to gain a clear understanding. Ideally, each class should be declared in its own separate file.
```java
public class Car {
  public String name;
  public boolean isOn;

  // This is a special method - constructor
  Car(String name) {
    this.name = name;
  }

  public static void switchOn() {
    this.isOn = true;
  }
}  
```

Here `Car.java` is the file name, `Car` is the class name and `name`, `isOn`, `swicthOn` are attributes of that class. Note that *the file name and class name should be the same.*

# Object and its creation
Now that we declared a class, let's create an object from it.
```java
Car audi = new Car("audi");
```

This single line does quite a lot of things. Firstly when **new** keyword is used, it means that it is creating a new object by calling its `constructor`.

## Constructors
Constructors are special methods inside a class that is used to create an object.
```java
Car(String name) {
  this.name = name;
}
```

- Constructors should have the same name as the class.
- It can have `default`, `public` access modifiers to make use of it inside other classes where we need this object.
- If access modifier is left undeclared, a default modifier is applied.
- It can also be `private`. If a constructor is private, that respective class cannot be inherited.

## Default constructor
Mostly developers would not declare a default constructor unless it is necessary in some cases. when a constructor is not provided for a class, JVM creates a **default constructor with a `default` access modifier**. Default constructor does not have parameters.

## Parameterised constructor
As the name suggests, it is a constructor with parameters. Sometimes we would want to pass some values during object creation and we would want some set of instructions to be executed. For that purpose, we can use parameterised constructors. The `Car` class we saw earlier had a parameterised constructor.

# Java Variable types
## Local Variables
Variables inside a block `{ }` is a local variable to that block. 

## Instance Variables
Variables inside a class that are non-static are called instance variables.

## Static Variables
Static variables are one true source variables. no matter how many instance of objects are created, all objects share one common `static` variable.
Changes made to a static variable by one instance object will reflect on other objects as well. Static variables can be used as a global variable.

```java
public class Car {
  public static int id; // static variable
  public String name; // instance variable
  public boolean isOn;

  // This is a special method - constructor
  Car(String name) {
    this.name = name; // name received as argument is a local variable
  }

  public static void switchOn() {
    this.isOn = true;
  }
}  
```

# Inheritance
In object-oriented programming, inheritance allows us to reuse features across different classes. Let's consider a scenario where we want to create classes for different shapes, such as squares and triangles(The same old example, do bear with me!). **These shapes share certain similarities, like their names and the number of edges**. Imagine having to make changes in all the classes created, this would be a nightmare! Instead of redundantly including the same set of attributes and instructions in each shape class, we can use inheritance to create a **Super Class** called `Shape` where all the common attributes are declared. Then, we can create a **Sub Class** for each specific shape that inherits from the `Shape` Super Class. This approach makes it easier to make changes and avoid redundant code across multiple classes. 

## Extending
```java
public class Shape {
  String name;
  int noOfEdges;
  void draw() {
  }
}

public class Triangle extends Shape {
    
}
```

When a class inherits a class with `extends` keyword, it means that all the attributes of the super class(Shape) is applicable to the sub class(Triangle). Hence, the attributes `name, noOfEdges, draw()` belongs to the sub class when we create an object from it.

> Classes in Java only supports single inheritance. multiple inheritance is not supported, meaning a class cannot extend more than one class.

# Types of classes
There are several types of classes that can be created in Java based on the inheritance we discussed.
1. Concrete class
2. Abstract class 
3. Interface

## Concrete class
Classes we normally declare are generally called as concrete classes in Java. In a concrete class, **all methods should be declared and should have a method body**.

## Abstract class
Class where we can have abstract methods are called abstract classes. **Abstract methods are normal methods that are declared as abstract. Abstract methods do not have a method body**. 
```java
void draw();
```

Generally, concrete classes that inherits the abstract class provides the method definition(body) to the abstract methods declared in the respective abstract class it inherited from.

> Concrete classes cannot have abstract methods. concrete class extending an abstract class should provide method definition for all abstract methods.

```java
pubic abstract class Shape {
  void draw();
}

public class Triangle extends Shape {
  void draw() {
    // method definition / body
  }
}
```

## Interface
Interface is similar to abstract classes. Interface came into the picture because multiple inheritance is not allowed in Java. Let's assume we want a class to inherit from multiple super classes using *extends* keyword. That is simply not possible. but a class can implement multiple interfaces using `implements` keyword.

## Implementing interfaces
```java
public class Triangle extends Shape 
    implements Clonable, Iteratable {

}
```

> The class that implements the interfaces should provide method definition to all abstract methods inside all the interfaces it implements.

Consider Interface and abstract class as a menu card in a restaurant. The menu has a basic list of all the food items the restaurant has. You can order food by looking at the menu. But food will arrive at your table only when the chef prepares the order. Likewise,interfaces and abstract classes have abstract attributes which a class can implement. however, when the class implements it, It should define all the methods.

# Wrapper classes
As the name suggests, **wrapper classes are classes encapsulating primitive Java data type from which objects can be created**. The first question that pops up in our heads is, why do we need to use wrappers when we already have primitives?

- **Generics** only work with objects and not with primitive types.
- Java **Collections** basically involves objects and generics.

All 8 primitive data types has its own wrapper classes. **Since String being a class and not a primitive, we can use String class directly.**

<Table>
| Primitive | Wrapper   |
| boolean   | Boolean   |
| byte      | Byte      |
| short     | Short     |
| int       | Integer   |
| long      | Long      |
| float     | Float     |
| double    | Double    |
| char      | Character |
</Table>

## Auto Boxing
**Automatic boxing** refers to the process in which the JVM automatically converts primitive values to their corresponding wrapper objects.

```java
Integer number = 12;
Character ch = 'a';
```
in the above example, 12 is a primitive literal that is converted automatically into an integer wrapper. Internally `Integer.valueOf(12)` is what JVM runs to autobox the value. **We do not need to manually convert but we could**.

## Unboxing
**Automatic unboxing** of wrapper classes to primitive values.

```java
Integer i = new Integer(10);
int number = i;
```
In this case, wrapper is converted automatically to a primitive. Internally
`i.intValue()` is what JVM runs to auto unbox.

## Wrappers are Immutable
When arithmetic operations are performed on primitive types, they yield a new value. By nature, primitive types are **Pass by value** and they are immutable. To replicate this behaviour, wrappers of the primitive are also immutable. Hence, when an arithmetic operation is performed on a wrapper, a new object is returned, existing objects are not modified. **Wrappers are also pass by value in nature**.

will cover
- static keyword
- this keyword
- super keyword
- final keyword in classes
- Memory - heap & stack
- gc
- destructor for class

<Br />
Head to [Java Part-3](/blog/java-part-3) of this series.
