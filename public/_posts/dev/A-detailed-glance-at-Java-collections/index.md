---
title: 'A detailed glance at Java collections'
date: 'Feb 15 2023'
list: dev
---

# ArrayList
```
public class ArrayList<E>
extends **AbstractList<E>**
implements 
**List<E>, RandomAccess, Cloneable, Serializable**
```

ArrayList is a RandomAccess collection often known as ==Resizable-array==. ArrayList is one of the List implementations built atop an array. Unlike arrays, ArrayList can grow and shrink in size dynamically.
Size is increased automatically based on the capacity of the array. but to encure a minimum size user can define the size beforehand.

```
List<String> heroes = new ArrayList<>();
heroes.add("Archer");
heroes.ensureCapacity(50);
```

- Not thread safe [unsynchronized].
- Allows null as an element.
- size, isEmpty, get, set, iterator, and listIterator operations runs in constant.

### To make ArrayList thread safe:
```
List list = Collections.synchronizedList(new ArrayList(...));
```

### Time Complexity
| List                 | Add  | Remove | Get  | Contains | Next | Data Structure |
| ArrayList            | O(1) |  O(n)  | O(1) |   O(n)   | O(1) | Array          |


### Difference between vector and ArrayList
When we take about ArrayList, there is a legacy class ==Vector<E>== which is similar to arrayList. 

| ArrayList | Vectors |
| Not Thread safe a.k.a. Unsynchronized | Thread safe a.k.a. Synchronized |
| ArrayList increases its size based on capacity factor | Vector doubles the current size, which is inefficient is most cases |

# ArrayDeque
```
public class ArrayDeque<E>
extends **AbstractCollection<E>**
implements **Deque<E>, Cloneable, Serializable**
```

### Most used methods:
| E	pop() |
| void push(E e) |
| E peek() |
| int size() |
| void clear() |
| boolean isEmpty() |
| <T> T[] toArray(T[] a) |

Hands down the most used data structure for me atleast, is ==Stack==. But in Java stacks are extended from ==Vectors<E>==. The common alternative to a Stack is ==Deque==. Similar to stacks Deque is also a FIFO data structure.

- Deque is an interface, the concrete is ==ArrayDeque==
- Array deques have no capacity restrictions; they grow as necessary to support usage.
- Not thread safe.
- If the deque is modified at any time after the iterator is created, in any way except through the iterator's own remove method, the iterator will generally throw a ==ConcurrentModificationException==. [fail-fast]

### To Synchronize ArrayDeque:
```
Collections.synchronizedCollections(new ArrayDeque(...));
``` 

Most ArrayDeque operations run in amortized constant time. Exceptions include remove, removeFirstOccurrence, removeLastOccurrence, contains, iterator.remove(), and the bulk operations, all of which run in linear time.

### Time Complexity
| Queue                   |  push    | pop  |   peek   | Remove | Size | Data Structure |
| ArrayDeque              | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List    |

# LinkedList
```
public class LinkedList<E>
extends **AbstractSequentialList<E>**
implements **List<E>, Deque<E>, Cloneable, Serializable**
```

Linked List in Java is a doubly LinkedList implementation of List and Deque. so it can traverse from the beginning or from the end in both ways based on the index [whichever is closer to the index].

- Not thread safe [unsynchronized].
- Allows null as an element.
- fail-fast similar to Deque mentioned above.
- size, isEmpty, get, set, iterator, and listIterator operations runs in constant.

### To make LinkedList thread safe:
```
List list = Collections.synchronizedList(new LinkedList(...));
```

### Time Complexity
| List                 | Add  | Remove | Get  | Contains | Next | Data Structure |
| LinkedList           | O(1) |  O(1)  | O(n) |   O(n)   | O(1) | Linked List    |

# Time complexity of collections @ a glance.
## List
| List                 | Add  | Remove | Get  | Contains | Next | Data Structure |
| ArrayList            | O(1) |  O(n)  | O(1) |   O(n)   | O(1) | Array          |
| LinkedList           | O(1) |  O(1)  | O(n) |   O(n)   | O(1) | Linked List    |
| CopyOnWriteArrayList | O(n) |  O(n)  | O(1) |   O(n)   | O(1) | Array          |

## Set
| Set                   |    Add   |  Remove  | Contains |   Next   | Size | Data Structure           |
| HashSet               | O(1)     | O(1)     | O(1)     | O(h/n)   | O(1) | Hash Table               |
| LinkedHashSet         | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Hash Table + Linked List |
| EnumSet               | O(1)     | O(1)     | O(1)     | O(1)     | O(1) | Bit Vector               |
| TreeSet               | O(log n) | O(log n) | O(log n) | O(log n) | O(1) | Red-black tree           |
| CopyOnWriteArraySet   | O(n)     | O(n)     | O(n)     | O(1)     | O(1) | Array                    |
| ConcurrentSkipListSet | O(log n) | O(log n) | O(log n) | O(1)     | O(n) | Skip List                |

## Queue
| Queue                   |  Offer   | Peak |   Poll   | Remove | Size | Data Structure   |
| ArrayDeque              | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List      |
| PriorityQueue           | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap    |
| ConcurrentLinkedQueue   | O(1)     | O(1) | O(1)     |  O(n)  | O(n) | Linked List      |
| ArrayBlockingQueue      | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Array            |
| PriorirityBlockingQueue | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap    |
| SynchronousQueue        | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | None!            |
| DelayQueue              | O(log n) | O(1) | O(log n) |  O(n)  | O(1) | Priority Heap    |
| LinkedBlockingQueue     | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List      |

## Map
| Map                   |   Get    | ContainsKey |   Next   | Data Structure           |
| HashMap               | O(1)     |   O(1)      | O(h / n) | Hash Table               |
| LinkedHashMap         | O(1)     |   O(1)      | O(1)     | Hash Table + Linked List |
| IdentityHashMap       | O(1)     |   O(1)      | O(h / n) | Array                    |
| WeakHashMap           | O(1)     |   O(1)      | O(h / n) | Hash Table               |
| EnumMap               | O(1)     |   O(1)      | O(1)     | Array                    | 
| TreeMap               | O(log n) |   O(log n)  | O(log n) | Red-black tree           |
| ConcurrentHashMap     | O(1)     |   O(1)      | O(h / n) | Hash Tables              |
| ConcurrentSkipListMap | O(log n) |   O(log n)  | O(1)     | Skip List                |
