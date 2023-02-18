---
title: 'a java cheat sheet that covers important basics'
date: 'Feb 14 2023'
list: dev
---

# Primitive data types
- boolean
- byte
- short
- int
- long
- float
- double
- char

---

# Non-primitive data types
- String

---

## Examples for primitives and String
```
boolean flag = true;
byte val = 20;
short no = 10;
int age = 34; 
long longNumber = 1234567;
float k = 11.5f;
double pi = 3.14d;
char startsWith = 'V';
String name = "verghese"
```

---

# constants
final keyword declares a attribute as a constant.

```
final double pi = 3.14d;
```

---
# classes and objects
we ideally declare a class in its seperate file. 
here it is ==Hero.java==. The file name and class name should be the same.

```
public class Hero {
    public String type;

    // constructor:
    public Person(String type) {
      // this indicates the current class
      this.type = type;
  }
  
  // main method
  public static void main(String [] args) {
      // Here, we create a new instance of the Hero class
      // archer is a instance of a Hero
      Archer archer = new Archer("Archer");
      System.out.println("Hero is a " + archer.type);
  }
}
```

---

# Java Variable types
## Local Variables
Variables inside a block =={ }== is local variable to that block. 

## Instance Variables
Variables inside a class that are non-static are called instance variables.

## Static Variables
Static varibles are one true source variables. no matter how many instance of objects are created, all objects share one common static variable.
Changes made to a static variable by one instance object will reflect on other objects too. 

```
public class Hero {
    public static int strength = 100; // static variable
    public String type; // this is a instance variable

    // constructor
    // type is a local variable local to this method block.
    public Hero(String type) {
      // this indicates the current class
      this.type = type;
  }
  
  public static void main(String [] args) {
      // Here, we create a new instance of the Hero class
      // archer is a instance of a Hero
      Archer archer = new Archer("Archer");
      System.out.println("Hero is a " + archer.type); // Prints: Age is 20
  }
}
```

---

# Conditional 
## if
```
if (20 > 18) {
  // block of code to be executed if the condition is true
}
```

## if else
```
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

## else if else
```
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```

## nested if else
```
if (condition1) {
   if (condition2) {
     // block of code to be executed if the condition1 is false and condition2 is true
   } else {
     // block of code to be executed if the condition1 is false and condition2 is false
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

# Loops
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

---

# Functions
functions are basically blocks =={ }== of code that runs
only when function is called.

`String fight(String arg1, int arg2) { }`

here String is ==retrun type==
fight is the method name
==arg1== and ==arg2== are arguments passed to the function
=={ }== indicates its a code block

```
public class Hero {
  // these are called attributes
  public String type;

  public Person(String type) {
    this.type = type;
  }
  
  // here main is a function / method
  public static void main(String [] args) {
    // Here, we create a new instance of the Hero class
    // archer is a instance of a Hero
    Archer archer = new Archer("Archer");
    System.out.println("Hero is a " + archer.type);
  }
}
```

---

# Arrays
`String[] hero = {"archer", "Brute", "Ninja" };`

To declare and initialize an array
we do ==data type== followd by ==[]==
To initialize
`{ // declare values inside a block }`

we can do this in two steps

```
String[] hero = String[5];
hero = {"archer", "Brute", "Ninja" };
```

here we declare the ==size of the array String[5]==
which means that we require an array with a size of `5`.
pushing elements more than declared size `5` would result in runtime error.
`hero[index]` can be to access elements
`hero[0] = "magitian"` is how you reassign array elements.
`hero.length` gives you the size of the array
lets discuss about array methids later on.

---

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

> immutable objects are thred safe.

---