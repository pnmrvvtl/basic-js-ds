const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.data = [];
  }
  root() {
    return this.data[0] ? { data:this.data[0]} : null;
  }

  add(data) {
    this.data.push(data);
  }

  has(data) {
    if (this.data.find(el => el === data) !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    if (this.data.find(el => el === data) !== undefined) {
      return { data: data};
    } else return null;
  }


  remove(data) {
    if (this.data.find(el => el === data) !== undefined) {
      this.data.splice(this.data.findIndex(el => el === data), 1)
    }
  }

  min() {
    const sorted = [...this.data].sort((a, b) => a - b);
    return sorted[0];
  }

  max() {
    const sorted = [...this.data].sort((a, b) => a - b);
    return sorted[sorted.length - 1];
  }
}

module.exports = {
  BinarySearchTree
};