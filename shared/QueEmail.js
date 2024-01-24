const db=require('../models/index')
const emailSend=require('../shared/email')
// program to implement queue data structure
class Queue {
  constructor() {
    this.items = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }

  //adds a new element
 async enqueue(element) {
  console.log('isData',element)
 const sendEmailResp= await emailSend.sendEmail('','dilip','test-send email','hell')
  if(!sendEmailResp){
    this.items[this.lastIndex] = element;
    this.lastIndex++;
    console.log('!sendStatus',sendEmailResp)
  }
  console.log('sendStatus',sendEmailResp)

  }

  //removes an element from head of the queue
 async dequeue() {
    let removedElement = this.items[this.firstIndex];
    delete this.items[this.firstIndex];
    this.firstIndex++;
    return removedElement;
  }

  //shows the head element of the  queue
  peek() {
    let peekElement = this.items[this.firstIndex];
    return peekElement;
  }

  //shows the number of items in queue
 async size() {
    return this.lastIndex - this.firstIndex;
  }

  //checks if queue is empty or not
async isEmpty() {
    if (this.lastIndex - this.firstIndex == 0) {
      return true;
    } else {
      return false;
    }
  }

  //empty the queue
 async clear() {
    this.items = {};
    this.firstIndex = 0;
    this.lastIndex = 0;
  }
}
module.exports = Queue;


