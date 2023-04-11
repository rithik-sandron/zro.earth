---
title: 'Java part-1 [Basics]'
date: 'Feb 14, 2023'
list: dev
gist: 'This is a 3 part article. This part covers the basics - data types, variables, functions, statements etc...'
---
# This is a 3 part series
go to [[Java Part-1]](https://zro.earth/dev/java-part-1)
go to [[Java Part-2]](https://zro.earth/dev/java-part-2)
go to [[Java Part-3]](https://zro.earth/dev/java-part-3)

# Data types
According to Wikipedia - *"In the pursuit of knowledge, data is a collection of discrete values that convey information, describing quantity, quality, fact, statistics, other basic units of meaning, or simply sequences of symbols that may be further interpreted"*

Like we store data in our brain or write it down ad a note, *computers use memory*. This Meory stores the data based on its type. for example, *"This car looks good"* is a String. *"10"* is a number. Basically in Java these data types are classified into two primary types. 

- Primitive
- Non Primitive

Primitive types are basic types which covers **characters, numbers and so on**. In java there are basically 8 primitive data types. String, Arrays and classes are non-primitive types.

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
- String [Also a class]
- Array
- Classes

- 1 bit of memory is like a one word of space in a paper.
- 1 byte = 8 bits
- 2 byte = 16 bits and so on
  
| Type    | Size in memory | It stores                                                            |
| :------ | :------------- | :------------------------------------------------------------------- |
| boolean | 1 bit          | true or false [1 / 0]                                                |
| byte    | 1 byte         | numbers from -128 to 127                                             |
| short   | 2 byte         | numbers from -32,768 to 32,767                                       |
| int     | 4 byte         | numbers from -2,147,483,648 to 2,147,483,647                         |
| long    | 8 byte         | numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float   | 4 byte         | decimal numbers. Can use to store 6-7 decimal digits                 |
| double  | 8 byte         | decimal numbers. Can use to store 10-12 decimal digits               |
| char    | 2 byte         | a single character/letter or ASCII values                            |

# Variables and Constants
Its no use if we store values in memory and dont use them anywhere. To use them we assign these values to a container. When this container is accessed, we get the actual value we stored in the memory. These containers are known variables and constants.

## Variables
variables are containers that can change the values they hold over time. Whereas constants cannot their values once initialized.

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

## Constants
To declare an attribute as a constant, include a ==final== keyword before a variable.

```
final double pi = 3.14d;
```

# Executing the code
Lets create a simple main method inside a class to run a set of instructions. Dont get confused by classes and main method later.

File name -> Main.java
```
public class Main {
  public static void main(String [] args) {
    int number = 12;
    System.out.println(number);
  }
}
```

now in terminal we can run this by typing

```
javac Main.java
java Main

[terminal output]:
12
```

> From Java version 9 we can directly run the file without the need to compile it.

# Conditional statements
statements are more concept specific and not lanuage specific. You can find statements similar across all programming languages. Conditional Statements are used to run a bunch of instructions only on a specific condition.

Following is the syntax for to declare a statement. The instructions or each line of code mentioned inside the **block { }** will only be executed if the mentioned condition returns true.

## if
```
if (20 > 18) {
 
}
```

here `20 > 18` is the condition. since 20 is greater than 18, the sinstructions mentioned inside that block.

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
Sometimes we want to run a set of instructions repeatedly until a condition fails or passes. In such cases we use looping statements.

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

```
String fight(String arg1, int arg2) { 

}
```

here `String` is the return data type of the value it returns by excuting the instructions. `fight` is the method name, `arg1` and `arg2` are arguments/inputs passed to the function and `{ }` indicates its a code block.

Now that we declared a function, It will not be executed until it is called upon. To cal a function:

`fight();`

Example

```
public static void main(String [] args) {
  System.out.println("Hello");
}

main();

[terminal output]:
Hello
```

> variables, constants, condition statements, looping statements and functions are basic building blocks with which we declare basic set of instructions to perform an action.

# Value and Reference type
## Memory is of two types
- Heap Memory
- Stack Memory

All primitive data types are stored in **Stack memory**. These are basically **Value type**. **Reference type** is a type of data that is basically stored in the **Heap memory**, instead of storing the value in stack memory like the primitive variables. Non primitive data types are stored in Heap Memory. Memory itself is a whole concept which we will take about later.

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

Array size is immutable. Means size once declared cannot be decreased or increased. Here in this case, pushing elements more than declared size **5** would result in runtime error. `hero[index]` can be to used access elements at a specific index. `hero[0] = "magitian"` is how you assign elements to the array. `hero.length` gives you the size of the array.

Similar to String, **Array is also pass by value, but passes the reference(memory address) of the starting index of the value it stores.** 

for example:

```
int[] numbers = new int[3];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
```

When this array is passed to a function/method, reference(the memory address)  of the `numbers[0]` is passed. Since array memory allocation is sequential, you can fetch the next element in the array with the first index reference.

> So this is why both Arrays and String are immutable and pass by value, but passes only the reference.(the memory address)

## Synchronization
**Being immutable automatically makes the String thread safe** since they won't be changed when accessed by multiple threads.

Hence immutable objects, in general, can be shared across multiple threads running simultaneously. They're also thread-safe because if a thread changes the value, then instead of modifying the same, a new String would be created in the String pool. Hence, Strings are safe for multi-threading and so are arrays.

> immutable objects are thread safe.

# Access Modifiers
Access Modifiers are used to allow or restrict attributes, functions and objects in java. **There are 2 levels and 4 types of access modifiers**.

- public
- protected
- default (no need to declare explicitly, if left undeclared: default modifier is applied)
- private

## Class level modifier 
classes can have **only public or default type** and not any other types.
but a class can be declared final. when a class is declared final, it cannot be inherited.

## Attribute level modifier:
Methods[functions] & attributes can have all four levels of access modifiers.

| Modifier  | w Class | w Package | w Subclass | all |
| public    | Y | Y | Y | Y |
| protected | Y | Y | Y | N |
| default   | Y | Y | N | N |
| private   | Y | N | N | N |

We will continue covering the basics about Java  in the [[Java Part-2]](https://blog-six-rouge.vercel.app/dev/java-part-2) of this series.