---
title: 'Java part-3'
date: 'Feb 20 2023'
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

- Not thread safe (unsynchronized).
- Allows null as an element.
- size, isEmpty, get, set, iterator, and listIterator operations runs in constant.

## To make ArrayList thread safe:
```
List list = Collections.synchronizedList(new ArrayList(...));
```

## Time Complexity
| List                 | Add  | Remove | Get  | Contains | Next | Data Structure |
| ArrayList            | O(1) |  O(n)  | O(1) |   O(n)   | O(1) | Array          |


## Difference between vector and ArrayList
When we take about ArrayList, there is a legacy class ==Vector<E>== which is similar to arrayList. 

### ArrayList 
1. Not Thread safe a.k.a. Unsynchronized.
2. Thread safe a.k.a. Synchronized.

### Vectors
1. ArrayList increases its size based on capacity factor.
2. Vector doubles the current size, which is inefficient is most cases.

# ArrayDeque
```
public class ArrayDeque<E>
extends **AbstractCollection<E>**
implements **Deque<E>, Cloneable, Serializable**
```

## Most used methods:
| E	pop() |
| void push(E e) |
| E peek() |
| int size() |
| void clear() |
| boolean isEmpty() |

Hands down the most used data structure for me atleast, is ==Stack==. But in Java stacks are extended from ==Vectors<E>==. The common alternative to a Stack is ==Deque==. Similar to stacks Deque is also a FIFO data structure.

- Deque is an interface, the concrete is ==ArrayDeque==
- Array deques have no capacity restrictions; they grow as necessary to support usage.
- Not thread safe.
- If the deque is modified at any time after the iterator is created, in any way except through the iterator's own remove method, the iterator will generally throw a ==ConcurrentModificationException==. (fail-fast)

## To Synchronize ArrayDeque:
```
Collections.synchronizedCollections(new ArrayDeque(...));
``` 

Most ArrayDeque operations run in amortized constant time. Exceptions include remove, removeFirstOccurrence, removeLastOccurrence, contains, iterator.remove(), and the bulk operations, all of which run in linear time.

## Time Complexity
| Queue                   |  push    | pop  |   peek   | Remove | Size | Data Structure |
| ArrayDeque              | O(1)     | O(1) | O(1)     |  O(n)  | O(1) | Linked List    |

# LinkedList
```
public class LinkedList<E>
extends **AbstractSequentialList<E>**
implements **List<E>, Deque<E>, Cloneable, Serializable**
```

Linked List in Java is a doubly LinkedList implementation of List and Deque. so it can traverse from the beginning or from the end in both ways based on the index (whichever is closer to the index).

- Not thread safe (unsynchronized).
- Allows null as an element.
- fail-fast similar to Deque mentioned above.
- size, isEmpty, get, set, iterator, and listIterator operations runs in constant.

## To make LinkedList thread safe:
```
List list = Collections.synchronizedList(new LinkedList(...));
```

## Time Complexity
| List                 | Add  | Remove | Get  | Contains | Next | Data Structure |
| LinkedList           | O(1) |  O(1)  | O(n) |   O(n)   | O(1) | Linked List    |

# HashMap
[HashMap Java docs](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)

```
public class HashMap<K,V>
extends **AbstractMap<K,V>**
implements **Map<K,V>, Cloneable, Serializable**
```

A map is a key-value mapping, which means that every key is mapped to one value and that we can use the key to retrieve the corresponding value from a map. Why do we need a HashMap? **The simple reason is performance**. If we want to find a specific element in a list, the time complexity is O(n) and if the list is sorted, it will be O(log n) using, for example, a binary search.

How does HashMap takes constant time for lookup? Its because HashMap hashes its key to generate a unique value.

## Hashing
Hashing is the mechanism to convert an arbitrary string to a numeric value with a hash function. hash function returns a hash value in constant time which makes it the ideal choice for storing and retrieving values in constant time.

## Collisions
When you provide same keys for different values, HashMap generates same hash from that key and stores all the values to that particular bucket.
These values are stored ideally in a LinkedList and reference is attached as a value to that particular key. so avoid using same keys to get a better performance. In some cases you would need HashMap and dictionaries working together in a big chunk of key value items.

Hash table based implementation of the Map interface. The HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls.

This implementation provides constant-time performance for the basic operations (get and put), assuming the hash function disperses the elements properly among the buckets.

Iteration over collection views requires time proportional to the "**capacity**" of the HashMap instance (the number of buckets) plus its size (the number of key-value mappings). Thus, it's very important not to set the initial capacity too high (or the load factor too low) if iteration performance is important.


## Load Factor and Capacity
An instance of HashMap has two parameters that affect its performance: ==initial capacity== and ==load factor==. The capacity is the number of buckets in the hash table, and the initial capacity is simply the capacity at the time the hash table is created.

The **load factor is a measure of how full the hash table is allowed to get before its capacity is automatically increased**. When the number of entries in the hash table exceeds the ==product of the load factor and the current capacity==, the hash table is rehashed (that is, internal data structures are rebuilt) so that the hash table has approximately twice the number of buckets. 


> *no of entries < load factor x current capacity*


## Rehashing
Once the capacity of the hashmap is increased, It brings the overhead of rearranging all the key-value pairs in the hash table. It is because we use the modulo of map capacity to get the proper bucket index from the hash, but by the change in capacity, most of earlier stored pair locations will not be accessible and changed.

As a general rule, the default load factor ==(.75)== offers a good tradeoff between time and space costs. Higher values decrease the space overhead but increase the lookup cost (reflected in most of the operations of the HashMap class, including get and put). The expected number of entries in the map and its load factor should be taken into account when setting its initial capacity, so as to minimize the number of rehash operations. If the initial capacity is greater than the maximum number of entries divided by the load factor, no rehash operations will ever occur.

- The default initial capacity of HashMap is 16
- This class permits null element.
- HashMap also allows us to have null as a key.
- **Not thread safe** (unsynchronized)
- **fail-fast** behavior is not guaranteed.

## To make HashMap thread safe
```
Map m = Collections.synchronizedMap(new HashMap(...))
```

## Time Complexity
| Map                   |   Get    | ContainsKey |   Next   | Data Structure |
| HashMap               | O(1)     |   O(1)      | O(h / n) | Hash Table     |



# HashSet
[HashSet Java docs](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)

```
public class HashSet<E>
extends **AbstractSet<E>**
implements **Set<E>, Cloneable, Serializable**
```

This class implements the Set interface, backed by a hash table (actually a HashMap instance). This class offers constant time performance for the basic operations (add, remove, contains and size), assuming the hash function disperses the elements properly among the buckets. Thus, it's very important not to set the initial capacity too high (or the load factor too low) if iteration performance is important.

- This class permits null element.
- **Not thread safe** (unsynchronized)
- The iterators returned by this class's iterator method are **fail-fast** like other collections.

## To make Hashset thread safe
Set s = Collections.synchronizedSet(new HashSet(...));

## Time complexity
| Set       |    Add   |  Remove  | Contains |   Next   | Size | Data Structure |
| HashSet   |    O(1)  | O(1)     | O(1)     | O(h/n)   | O(1) | Hash Table     |

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
