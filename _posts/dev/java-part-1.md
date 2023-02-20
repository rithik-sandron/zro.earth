---
title: 'Java - part 1'
date: 'Feb 14 2023'
list: dev
---

# Data types
Data types are basic building blocks of any programming language. In java there are basically 8 primitive data types. String is also a data but its non primitive since it is a class.
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
variables are attributes that can be changed over time. Whereas constants are attributes taht cannot be changed once initialized.
 variable
`<data type> <variable name> = <value>`
```
int i = 0;
char c = 'a';
```

## constants
To declare an attribute as a constant, include a ==final== keyword before a variable.
`final <data type> <variable name> = <value>`
```
final double pi = 3.14d;
```

# Conditional statements
statements are mosre concept specific and not lanuage specific. you can find statements similar to this across other programming languages too. Statements are used ti run a bunch of steps only when on a specific condition.

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

---

# Looping statements
Sometimes we want to run a set of instructions repeatedly until a condtion fails. In such cases we use looping statements.

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

# Arrays
Array is a collection of variables or constants of same data type. Somtimes we want to have a list of items say a checklist. In that scenario, creating an array would be more ideal that creating individual variables seperately. Arrays are declared in a similar way to that of other variables.

`<data_type>[] <array_name> = new <data_type>[array_size];`

```
String[] hero = String[5];
hero[0] = "archer";
hero[1] = "Brute";
```

we can also do this in one step

`String[] hero = {"archer", "Brute", "Ninja" };`

Array size if immutable. Means size once dclared cannot be decreased or increased.
here in this case, pushing elements more than declared size `5` would result in runtime error.
`hero[index]` can be to used access elements at a specific index. `hero[0] = "magitian"` is how you assign elements to the array. `hero.length` gives you the size of the array
lets discuss about array methids later on.

# Strings and arrays
## Reference type
Reference type is basically, the value is stored in 
==Heap memory==, instead of storing the value in stack memory like the primitive variables.

- primitives variables store values in ==Stack memory==.
- Reference variables store values in ==Heap Memory==.
- Reference variable is used to point object/values.

> Classes, interfaces, arrays, enumerations, and, annotations are reference types in Java. 

> Strings and Arrays are reference type.

When primitive data types are passed to a function, its value is passed and changing it will only reflect inside the block and not else where.
This behavior is called `pass by value`.

When a reference type variable is passed to functions,
the reference is passed, not the value itself.
so making changes in the variable will reflect in the main function where the variable was passed as asrgs to the function.
This behavior is called `pass by reference`.

## immutable
`String` is the most widely used data structure. Caching the String literals and reusing them saves a lot of ==heap space== because different String variables refer to the same object in the String pool.

Java String Pool is the special memory region where Strings are stored by the JVM. Since Strings are immutable in Java, the JVM optimizes the amount of memory allocated for them by storing only one copy of each literal String in the pool. This process is called interning.

Because of the presence of the String pool in the preceding example, two different variables are pointing to same String object from the pool, thus saving crucial memory resource.

`Arrays` are also similar. its elements can be reassigned to newer values, but ==array size== is immutable.
If the size of an array is declared as 10 you cannot increase the size.

## Synchronization
Being immutable automatically makes the String thread safe since they won't be changed when accessed from multiple threads.

Hence immutable objects, in general, can be shared across multiple threads running simultaneously. They're also thread-safe because if a thread changes the value, then instead of modifying the same, a new String would be created in the String pool. Hence, Strings are safe for multi-threading.

> immutable objects are thread safe.

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

# OOP
**Object Oriented Programming** is a whole concept itself. Here's a gist of it.
Why do we need OOP? ideally before OOP, we provide steps and those steps are executed sequentially. Lets say you want to restrict few sets of instruction only for a certain entity. For instance, In a car its engine, tyre, every other parts are specific to that car. Most times we want to replicate this real time entities in our code. In that sense how do we encapsulate things like a car? well we use Class. 

## Class
Classes encapsulates **attributes**(variables, constants and methods) and only the objects that are created from that class can have those attributes and not others.

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

## Object and its creation
Now that we declared a class, lets create an object from it.

`<Class name> <object name> = new <Class Name>();`

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

## Java Variable types
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