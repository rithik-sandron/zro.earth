---
title: 'Java part-1 [Basics]'
publishedAt: 'Feb 14, 2023'
category: dev
description: 'This is a 3 part article. This part covers the basics - data types, variables, functions, statements etc...'
author: Rithik
---

## This is a 3 part series
- Go to [Java Part-1](/blog/java-part-1)
- Go to [Java Part-2](/blog/java-part-2)
- Go to [Java Part-3](/blog/java-part-3)

--- 

# Data types
Computers, similar to the human brain, utilize memory to store data based on its type. For example, "This car looks good" is a `String`, while "10" is a `number`. In Java, these data types are broadly classified into two categories.

- Primitive
- Non Primitive

Primitive types include letters, numbers, and so on. There are 8 primitive data types in Java. Non-primitive types include String, Arrays, and Classes.

## Primitives
- boolean
- char
- byte
- short
- int
- long
- float
- double

## Non-primitive
- Array
- Class
- String *(Also a class)*
  
## Data types and their memory allocation
> 1 bit of memory is like one word in a piece of paper. 8 bits combine to form 1 byte.


<Table>
| Type    | Size in memory | It stores               |
| boolean | 1 bit          | true or false (1 / 0)   |
| byte    | 1 byte         | 2^8 numbers             |
| short   | 2 byte         | 2^16 numbers            |
| int     | 4 byte         | 2^32 numbers            |
| long    | 8 byte         | 2^64 numbers            |
| float   | 4 byte         | 2^32 numbers            |
| double  | 8 byte         | 2^64 numbers            |
| char    | 2 byte         | 2^16 unicode characters |
</Table>


# Variables and Constants
It's important to remember that storing values in memory without using them doesn't result in any gain. To use these values, we need to assign them to a container. When we access this container, we retrieve the actual value stored in the memory. These containers are known as **variables and constants**.

## Variables
Variables are containers that can **change their values** over time.

```java
boolean flag = true;
byte b = 20;
short no = 10;
int age = 34; 
long l = 1234567;
float k = 11.5f;
double pi = 3.14d;
char c = 'V';
String name = "John";
```

> we add `f` and `d` at the end of float and double to denote them. We use `" "` to denote a String and `' '` to denote a char.

## Constants
Constants are containers whose values **remain constant** once initialised. To declare a constant, include `final` keyword before a variable.
```java
final double pi = 3.14d;
```

# Executing the code
Let's create a simple Java file and then run it. `File name -> Main.java`

```java
public class Main {
  public static void main(String [] args) {
    int number = 12;
    System.out.println(number);
  }
}
```

Now in terminal we can run this by typing the following command.

```bash
java -XX:+UseZGC Main.java

[terminal output]:
12
```

> Before Java version 9, we compiled the file and then ran it instead of directly running it as we do now. `-XX:+UseZGC` is an option to utilize the Java ZGC garbage collector, which is more efficient than the older GC.

# Conditional statements
Statements are more concept-specific and not language-specific. Similar statements can be found across all programming languages. Conditional statements are used to run a set of instructions only when a specific condition is met. The instructions or each line of code mentioned inside the block will not be executed otherwise.

## If
```java
if (20 > 18) {
  System.out.println("true");
}
```

here `20 > 18` is the condition. since 20 is greater than 18, so the instruction mentioned inside the block will be executed.

## If, Else
If condition is met, `if` block is executed, otherwise the `else` block.
```java
if (condition) {
  
} else {
  
}
```

## Else If, Else
```java
if (condition1) {
  
} else if (condition2) {
  
} else {
 
}
```

## Nested If Else
`if, else` blocks can also be nested inside other blocks.
```java
if (condition1) {
   if (condition2) {
     
   } else {
     
   }
}
```

## Switch
Switch statement contains several `case` conditions. Only a case block that meets the condition will be executed.
```java
switch(expression) {
  case 1:
    break;
  
  case 2:
    break;

  case 3:
    break;
  
  default:
}
```

# Looping statements
Sometimes, we may need to execute a set of instructions repeatedly until a certain condition is met or fails. In such cases, we use looping statements.

## For
```java
int[] numbers = {1, 2, 3, 4, 5};

for (int i = 0; i < numbers.length; i++) {  
	System.out.println(num);
}
```

## Enhanced for
```java
int[] numbers = {1, 2, 3, 4, 5};

for (int num : numbers) {  
  System.out.println(num);
}
```

## While
```java
int[] numbers = {1, 2, 3, 4, 5};
int count = 0;

while (numbers.length < 5) {  
	System.out.println(numbers[i++]);
}
```

## Do, while
```java
int[] numbers = {1, 2, 3, 4, 5};
int count = 0;

do {
  System.out.println(numbers[i++]);

} while (numbers.length < 5)
```

# Functions
Functions are essentially a block `{ }` of code that only runs when the function is called.

```java
String name(String arg1, int arg2) { 

}
```

here `String` is the return data type of the value the function returns by executing the instructions. `name` is the function name, `arg1` and `arg2` are arguments/parameters passed to the function. Now that we declared a function, It will not be executed until it is called upon. To call a function, we call the fucntion **name and pass the required arguments**.
```java
public void fight() {
  System.out.println("fight");
}

public static void main(int args[]) {
  fight();
}

[terminal output]:
fight
```

> Variables, constants, conditional, looping statements and functions are basic building blocks `{ }` with which we declare basic set of instructions to perform an action.

# Value and Reference
Memory can be classified into two types.
1. Heap
2. Stack

All primitive data types are stored in **stack**. Non-primitive data is stored in the **heap**, and only the address of the data in the heap is stored in the stack as a pointer. Memory & management itself is a whole concept which we will take about later.

## Pass by value
When primitive data types are passed to a function, the function receives a copy of the value. This behaviour is called **pass by value**.

## Pass by reference
**Java is strictly pass by value**. However, when non-primitive data such as String and Array are passed as an argument to a function, a copy of the reference(the address) is passed and not the actual value the variable holds. So there are two pointers pointing to the same data in the heap.

> Class, Interface, Array, Enumeration are reference types in Java. In that sense String(since it is a class) is also a reference type.

# String
String is the most widely used data type. When a String variable is initialised, its value is stored in **heap** and the variable holds the reference along with other meta values of that data in stack.
```java
String a = "hero";
String b = "hero"
```

Here both `a` and `b` are assigned the same string literal `"hero"`. In such cases, Java does not create separate memory boxes to store the values. Instead, it creates a single memory box in a special area called the **String pool** where the string `"hero"` is stored. Both variables `a` and `b` will point to this same memory box in the String pool. 
<br />
Caching and reusing string literals in the String pool saves a significant amount of heap space because different String variables can refer to the same object, rather than creating multiple copies of the same string value.

## String Immutability and Interning
Strings in Java are immutable, meaning their values cannot be changed once created. The Java Virtual Machine(JVM) optimizes the memory allocation for strings by storing only one copy of each literal string in the String pool. This process is known as **interning**.
<br />
If strings were mutable, multiple variables pointing to the same string value could potentially modify that value, leading to inconsistencies and unexpected behavior. To prevent this, Java enforces string immutability, ensuring that each string remains constant and unmodified throughout its lifetime.
<br />
When you pass a string to a function, only the reference to the memory box in the String pool is passed, not the actual value itself. If the string is reassigned within the function, JVM will create another memory box in the string pool and the string will point to this instead of the old memory box.

```java
String a = "ice cream";
a = "milk shake";
```

here `a` is reassigned to a different value. So `a` instead of pointing to *"ice cream"*, now points to *"milk shake"* in the string pool. *"ice cream"* if not used by any other string variable, will be garbage collected by JVM automatically.

# Array
An array is a collection of data of the same data type. It is useful when you want to have a list of items, such as a checklist, as it avoids creating individual variables separately and has consecutive memory allocation.

```java
String[] hero = new String[5]; // array initialisation
hero[0] = "archer"; // array value assign
hero[1] = "Brute";
``` 

You can also do this in one step. 

```java 
String[] hero = {"archer", "Brute", "Ninja" }; // array initialisation
hero[0] = "magician"; // reassign values
int length = hero.length; // get array length
 ```

Array **size is immutable**. Meaning the size once declared cannot be changed. Pushing elements more than declared size would result in runtime error. Similar to String, **Arrays also passes the reference of the starting value(element at index 0) it holds**.

For example:
```java
int[] num = {1, 2, 3 };
```

When this array is passed to a function, reference of `num[0]` is passed. Since array memory allocation is sequential, you can fetch the next element in the array with the first index reference.

> Both Array and String are immutable and passes only the reference.

# Synchronisation
**String eeing immutable automatically makes a variable thread safe**. Each thread operates on its own copy of the string, ensuring thread safety. Hence immutable objects in general, can be shared across multiple concurrent threads. Strings are safe for multi-threading and so are array of strings.

> Immutable objects are thread safe.

# Access Modifiers
Access Modifiers allows you to modify the access to a variable, function or even a class. There are 2 levels of modifiers.
- **Class level modifier** - modifiers added to a class.
- **Attribute level modifier** - modifiers added to attributes(variables and functions).

We can use four different types of modifiers:
1. public
2. protected
3. default (no need to declare explicitly; if left undeclared, the default modifier is applied)
4. private


## Class level modifier 
classes can have **only public or default** modifiers and not any other types. A class can be declared `final` which is not an access modifier but it retricts other classes from inheriting it. We can look at classes in detail later on. Nested classes declared inside another class can be declared as `private`.

## Attribute level modifier:
Functions, variables and constants can have all the above mentioned levels of access modifiers.

## Access modifiers cheat sheet

<Table>
| Modifier  | within Class | within Package | within Subclass | anyone can access |
| public    | Y            | Y              | Y               | Y                 |
| protected | Y            | Y              | Y               | N                 |
| default   | Y            | Y              | N               | N                 |
| private   | Y            | N              | N               | N                 |
</Table>

<Br />
goto [Java Part-2](/blog/java-part-2) of this series.