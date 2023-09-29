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
    const index = this.hashMod(key);
    let currNode = this.data[index];
    while (currNode) {
      if (currNode.key === key) return currNode.value;
      currNode = currNode.next
    }
    return undefined;
  }


  resize() {
    const newCapacity = this.capacity * 2;
    const oldData = this.data;
    // this.data = new Array(newCapacity).fill(null);
    this.capacity = newCapacity;
    this.data = new Array(newCapacity).fill(null);
    this.count = 0;

    oldData.forEach(ele => {
      let currNode = ele;
      while (currNode) {
        this.insert(currNode.key, currNode.value);
        currNode = currNode.next
      }
    })
  }


  delete(key) {
    const index = this.hashMod(key);
    let currNode = this.data[index];
    let prevNode = null;

    while (currNode) {
      if (currNode.key === key) {
        this.count--
       if(prevNode) {
        prevNode.next = currNode.next;
       } else {
        this.data[index] = currNode.next
      } return
       }
      prevNode = currNode
      currNode = currNode.next;
    }
    
    return "Key not found";
  }
}

module.exports = HashTable;
