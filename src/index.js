class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.compareFunction = (a, b) => a-b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    let tempArray = []; 
    indices.sort((a, b) => a-b); 
    for (var i = 0; i < indices.length; i++) {
      tempArray.push(this.array[indices[i]]);
      }
      tempArray.sort(this.compareFunction);
      for (var i = 0; i < tempArray.length; i++) {
        this.array[indices[i]] = tempArray[i];
    }
    }
  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction; 
  }
}

module.exports = Sorter;