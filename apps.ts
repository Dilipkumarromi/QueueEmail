import express from'express'
const app=express()
const EmailQueue =require('./shared/QueEmail')
const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser
require("dotenv").config();

console.log('test')
  const queue = new EmailQueue();
 
 
  // add items to queue
  

   
  let x:number=2
  
   for (let index = 0; index < x; index++) {
       
    queue.enqueue(index);
   }
  
  console.log("Queue after adding items: ");
  console.log(queue.items);
  
  // remove the first item
  queue.dequeue();
 
  console.log("Queue after deleting the first item:");
  console.log(queue.items);
  
  // show the first item
  console.log("First item of the queue = " + queue.peek());
  
  // empty the queue
  queue.clear();
  
  console.log("After clearing the queue: ");
  console.log(queue.items);
  
const PORT=81
app.listen(PORT, () => {
    console.info(`Ready on port ${PORT}`);
  });