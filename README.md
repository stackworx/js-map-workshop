## Read Me

This is a workshop for implementing a hash map in pure javascript.
In the interests of simplicty it will only allow string keys

### Algorithmic Complexity

An important feature of a map is that it usually has an `O(1)` get and `O(k)` get and deletes where `k` is the number of buckets\*.

(This is not entirely true, its actually only `O(1)` in the average case, aka amortized `O(1)`)

Briefly discuss, linked list as it is used in map

### Hashing

Most map implementations rely on hashing to get good performance.

## Getting Started

```
yarn install
yarn test
```

## Psuedo Code

### 1. Hashing

```
hashCode(s: string): number {
  hash = 0

  for c in string s:
    char = s[i]
    hash = (hash << 5) - hash + char
    hash |= 0

  return hash
}
```

### 2. Get Bucket Index

```
getBucketIndex(key: string): number {
  hash = hashCode(key)
  return hash % this.numBuckets
}
```

### 3. Set - Part 1

```
set(key: string, value: any) {
  bucketIndex = this.getBucketIndex(key)
  let head = this.buckets[bucketIndex]

  Loop through the bucket
  If a matching key is found, exit

  If key is not found, increment the size
  And create a new HashNode.
  Prepend this to the start of the linked list
}
```

### 4. Get

```
get(key: string) {
  bucketIndex = this.getBucketIndex(key)
  let head = this.buckets[bucketIndex]

  Loop through the bucket
  If a matching key is found return it

  If key is not found, return undefined
}
```

### 5. Clear

```
clear() {
  set size to zero
  reset buckets array
  reset num buckets
}
```

### 6. Delete

```
delete(key: string) {
  bucketIndex = this.getBucketIndex(key)
  let head = this.buckets[bucketIndex]

  Loop through the bucket and try to find key

  if Key not found, exit

  Decrement size
  Remove key but cutting it out of the linked list
}
```

### 7. Set Part 2 (Expand buckets)

```
After set is complete, check if we need to increase the number of buckets

if (size / numBuckets >= THRESHOLD) {
  temp = buckets
  buckets = []
  numBuckets = numbuckets * 2
  size = 0

  for (node in temp) {

  }
  Loop over every node in the temp list and invoke set with the values
}
```

## References

- https://en.wikipedia.org/wiki/Hash_table#Choosing_a_hash_function

* https://en.wikipedia.org/wiki/Big_O_notation
