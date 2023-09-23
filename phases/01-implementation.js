class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
    // Initialize your buckets here
    // Your code here
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const index = this.hashMod(key)
    let currNode = this.data[index]
    let kvPair = new KeyValuePair(key, value)
    this.count++

    if (!currNode) {
      this.data[index] = kvPair
      return
    }
    while (currNode) {
      if (currNode.key === key) {
        currNode.value = value
        return
      }
      currNode = currNode.next
    }
    kvPair.next = this.data[index]
    this.data[index] = kvPair
  }


  read(key) {
    // Your code here
  }


  resize() {
    // Your code here
  }


  delete(key) {
    // Your code here
  }
}

// let hashTable = new HashTable(2);

// console.log(hashTable.capacity)//.to.equal(2);

// hashTable.insert("key2", "value2");
// hashTable.insert("key4", "value4");

// console.log("line82",hashTable.data[1].next.key)//.to.equal("key2")
// console.log(hashTable.data[1].key)//.to.equal("key4")

// console.log(hashTable.data[1].next.value)//.to.equal("value2")
// console.log(hashTable.data[1].value)//.to.equal("value4")

module.exports = HashTable;
