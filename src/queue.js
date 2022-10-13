const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.data = [];
  }
  getUnderlyingList() {
    let curr = {
      value: this.data[this.data.length - 1],
      next: null
    }

    for (let i = this.data.length - 2; i >= 0; i--) {
      let next = {
        value: this.data[i],
        next: curr
      }
      curr = next;
    }
    return curr;
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    if(this.data[0]) {
      let res = this.data[0];
      this.data.splice(0, 1);
      return res;
    } else return null;
  }
}

module.exports = {
  Queue
};
