---
title: 'Java part-1 [Basics]'
date: 'Feb 14 2023'
list: dev
---

# This is a 3 part series
go to [[Java Part-1]](https://blog-six-rouge.vercel.app/dev/java-part-1)
go to [[Java Part-2]](https://blog-six-rouge.vercel.app/dev/java-part-2)
go to [[Java Part-3]](https://blog-six-rouge.vercel.app/dev/java-part-3)

# Data types
Data types are basic building blocks of any programming language. In java there are basically 8 primitive data types. String is also a data type but it is non-primitive since it is a class.

## Primitives
- boolean
- byte
- short
- int
- long
- float
- double
- char

## Non-primitive
- String

```
boolean flag = true;
byte val = 20;
short no = 10;
int age = 34; 
long longNumber = 1234567;
float k = 11.5f;
double pi = 3.14d;
char startsWith = 'V';
String name = "John"
```

# Variables and Constants
## Variables
variables are attributes that can be changed over time. Whereas constants are attributes that cannot be changed once initialized.

```
int i = 0;
char c = 'a';
```

## Constants
To declare an attribute as a constant, include a ==final== keyword before a variable.

```
final double pi = 3.14d;
```

# Conditional statements
statements are more concept specific and not lanuage specific. You can find statements similar across all programming languages. Conditional Statements are used to run a bunch of instructions only on a specific condition.

## if
```
if (20 > 18) {
 
}
```

## if else
```
if (condition) {
  
} else {
  
}
```

## else if else
```
if (condition1) {
  
} else if (condition2) {
  
} else {
 
}
```

## nested if else
```
if (condition1) {
   if (condition2) {
     
   } else {
     
   }
}
```

## switch
```
switch(expression) {
  case 1:
    // code block
    break;
  case 2:
    // code block
    break;
    case 3:
    // code block
    break;
  default:
    // code block
}
```

# Looping statements
Sometimes we want to run a set of instructions repeatedly until a condtion fails or passes. In such cases we use looping statements.

## For
```
int[] numbers = {1, 2, 3, 4, 5};

for (int i = 0; i < numbers.length; i++) {  
	System.out.println(num[i]);
}
```

## Enhanced for
```
int[] numbers = {1, 2, 3, 4, 5};

for (int num : numbers) {  
  System.out.println(num);
}
```

## while
```
int[] numbers = {1, 2, 3, 4, 5};
int count = 0;
while (numbers.length < 5) {  
	System.out.println(numbers[i++]);
}
```

## do while
```
int[] numbers = {1, 2, 3, 4, 5};
int count = 0;
do {  
	System.out.println(numbers[i++]);
} while (numbers.length < 5)
```

# Functions
Functions are basically a block =={ }== of code that runs
only when function is called.

`String fight(String arg1, int arg2) { }`

here String is ==retrun type== fight is the method name, ==arg1== and ==arg2== are arguments passed to the function and =={ }== indicates its a code block.

Now that we declared a function, It will not be executed until it is called upon. To cal a function:

`fight();`

```
public static void main(String [] args) {
  System.out.println("Hello");
}

main();
```

> variables, constants, condition statements, looping statements and functions are basic building blocks with which we declare basic set of instructions to perform an action.

# Value type and Reference type
Reference type is basically, the value is stored in 
==Heap memory==, instead of storing the value in stack memory like the primitive variables.

- primitives variables are stored in ==Stack memory==.
- Reference variables are stored in ==Heap Memory==.
- Reference variable is used to point object/values.

> Classes, interfaces, arrays, enumerations are reference types in Java. In that sense String(since it is a class) is also a reference type.

## Pass by value
When primitive data types are passed to a function, its value is passed and changing it will only reflect inside the block and not else where.
This behavior is called **pass by value**.

## Pass by reference
When a reference type variable is passed to functions,
the reference is passed, not the value itself.
so making changes in the variable will reflect in the main function where the variable was passed as asrgs to the function.
This behavior is called **pass by reference**.

# String
String is the most widely used data type. WHen a String is initialized its value is stored in **Heap memory**.
```
String a = "hero";
String b = "hero"
```

In the above example both `a` and `b` have the same value. In this case, Java does not create two seperate memory boxes to store the values. Instead it creates one memory box where `hero` is stored and variables `a` and `b` will point to that same memory box. This special string memory space is called **String pool**. Caching the String literals and reusing them saves a lot of ==heap space== because different String variables refer to the same object in the String pool.

Since **Strings are immutable in Java**, the JVM optimizes the amount of memory allocated for them by storing only one copy of each literal String in the pool. This process is called **interning**. If String was mutable, many variables would be pointing to that one value and changing that value would reflect in all other variables poiting to it. For this reason String are Immutable in Java.

So when you pass a String to a method/function, only the String reference it is pointing to in String pool is passed and not the value itself. When that reference is changed, the Sting would point to different memory box. Technically it is passing the reference of the value it has. So by default String is **pass by value but passes the reference(memory address) of the value**.

# Array
Array is a collection of variables or constants of same data type. Somtimes we want to have a list of items say a checklist. In that scenario, creating an array would be more ideal that creating individual variables seperately. Arrays are declared in a similar way to that of other variables. Arrays have consecutive memory allocation.

```
String[] hero = String[5];
hero[0] = "archer";
hero[1] = "Brute";
```

we can also do this in one step

```
String[] hero = {"archer", "Brute", "Ninja" };
```

Array size is immutable. Means size once declared cannot be decreased or increased. Here in this case, pushing elements more than declared size **5** would result in runtime error. 

- `hero[index]` can be to used access elements at a specific index. 
- `hero[0] = "magitian"` is how you assign elements to the array. 
- `hero.length` gives you the size of the array.

Similar to String, **Array is also pass by value, but passes the reference(memory address) of the starting index of the value it stores.** for example:

```
int[] numbers = new int[3];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
```

When this array is passed to a function/method, reference(the memory address)  of the `numbers[0]` is passed. Since array memory allocation is sequential, you can fetch the next element in the array with the first index reference.

> So this is why both Arrays and String are immutable and pass by value, but passes only the reference.(the memory address)

# Synchronization
**Being immutable automatically makes the String thread safe** since they won't be changed when accessed by multiple threads.

Hence immutable objects, in general, can be shared across multiple threads running simultaneously. They're also thread-safe because if a thread changes the value, then instead of modifying the same, a new String would be created in the String pool. Hence, Strings are safe for multi-threading and so are arrays.

> immutable objects are thread safe.

# Access Modifiers
Access Modifiers are used to allow or restrict attributes, functions and objects in java. **There are 2 levels and 4 types of access modifiers**.

- public
- protected
- default (no need to declare explicitly, if left undeclared: default modifier is applied)
- private

## class level modifier 
classes can have **only public or default type** and not any other types.
but a class can be declared final. when a class is declared final, it cannot be inherited.

## method & attribute level modifier:
Methods[functions] & attributes can have all four levels of access modifiers.

| Modifier  | w Class | w Package | w Subclass | all |
| public    | Y | Y | Y | Y |
| protected | Y | Y | Y | N |
| default   | Y | Y | N | N |
| private   | Y | N | N | N |

# OOP
**Object Oriented Programming** is a whole concept itself. Here's a gist of it.
Why do we need OOP? ideally before OOP, we provide steps and those steps are executed sequentially. Lets say you want to restrict few sets of instruction only for a certain entity. For instance, In a car its engine, tyre, every other parts are specific to that car. Most times we want to replicate this real time entities in our code. In that sense how do we encapsulate things like a car? well we use Class. 

# Class
Classes encapsulates **attributes**(variables, constants and methods) togher as one entity and only the objects that are created from that class can have those attributes.

> Classes are like blueprints (a car design) from which we create objects (cars) and all the attributes(boy parts of the car) is unique to that object.

Lets look at an example to understand clearly. Ideally each class is declared in its seperate file.

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
- It can aso be **private**. If a constructor is private that respective class cannot be inherited.
- if access modifier is left undeclared, a default modifier is applied.

### Default constructor
Mostly developers wont declare a default constructor unless its necessary in some cases. when a constructor is not provided for a class, JVM creates a **default constructor with a default access modifier**. Default constructor does not have parameters.

### Parameterized constructor
A name suggests, it is a constructor with parameters. sometimes we want to pass some values during object creation and we want some set of instructions to be done. FOr that purposes we can use parameterized constructors.

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
Static varibles are one true source variables. no matter how many instance of objects are created, all objects share one common static variable.
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
We need inheritance to reuse some the features that coes with OOP. Lets say we want create some classes indicating different shapes. Yes the same old example, bare with me. Basic shapes like square, triangle have certain similarities like name of the shape, no of edges and so on. Since these **similarities apply to all basic shapes it would be redundant to include same set of attributes and instructions inside each Shape class we create**. And if there is a change we need to do we might have to do in all the classes we created. This would be a nightmare. In this scenario, we could use inheritance to create a ==Super class== called **Shape** and have all the common attributes declared here. All the other shapes we create can be a ==sub class== to this super class. 

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
    // methid definition / body
  }
}
```

## Interface
Interface is similar to abstract classes. INterface came into picture because multiple inheritance is not allowed in Java. Lets say we want a class to inherit from multiple super classes using *extends* keyword. That is simply not possible. but a class can implement multiple interfaces using ==implements keyword==.

## Implementing interfaces
```
public class Triangle extends Shape 
    implements Clonable, Iteratable {

}
```

> The class that implements the interfaces should provide method definition to all abstract methods inside all the interfaces it implements.

Consider Interface and abstract class as a menu card in a restaurant. The menu has a basic list of all food items the restaurant has. You can order food by looking at the menu. But food will arrive at your table only when chef completes the order. Likewise interfaces and abstract classes have abstract attributes which a class can implement. But when the class implements it, It should define all the methods.

We will continue covering the basics about Java  in the [[Java Part-2]](https://blog-six-rouge.vercel.app/dev/java-part-2) of this series.