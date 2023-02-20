---
title: 'Java - part 2'
date: 'Feb 20 2023'
list: dev
---

static keyword
this keyword
super keyword
final keyword in classes

# Wrapper classes
As the name suggests, **wrapper classes are classes encapsulating primitive Java data type from which objcts can be created**. The first question that strikes us is that, why do we need to use Wrappers when we already have primitives?

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
| char | CHaracter |

## Auto Boxing
**Automatic boxing** refers to steps that JVM does to convert the primitive values automatically to Wrappers.

```
Integer number = 12;
Character ch = 'a';
```
Here 12 is a primitive literal, that is converted automatically into a n Integer wrapper. Internally `Integer.valueOf(12)` is what JVM runs to auto box the value. **We do not need to manually convert but we could**.

## Unboxing
**automatic unboxing** of wrapper classes to primitive values.

```
Integer i = new Integer(10);
int number = i;
```

here wrapper is converting automativally to a primitive. Internally
`i.intValue()` is what JVM runs to auto unbox.

## Wrappers are Immutable
When arithmetic operations are performed on primitive types, they yield a new value. By Nature primitive types are **Pass by value** and they are immutable. To replicate the behavior, Wrappers of the primitive are also immutable. So when an arithmetic operation is performed on a wrapper, a new object is returned, existing objects are not modified. **Wrappers are also pass by value in nature**.

Memory - heap & stack
gc
destructor for class








 
  