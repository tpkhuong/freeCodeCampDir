/*

***** Typed Arrays *****
Arrays are JavaScript objects that can hold a lot of different elements.

var complexArr = [1, 5, "2", "Word", {"name": "James"}];
Basically what happens in the background is that your browser will automatically give the right amount of memory space for that array. It will also change as needed if you add or remove data.

However, in the world of high performance and different element types, sometimes you need to be more specific on how much memory is given to an array.

Typed arrays are the answer to this problem. You are now able to say how much memory you want to give an array.
Below is a basic overview of the different types of arrays available and the size in bytes for each element in that array.

Type	Each element size in bytes
Int8Array	1
Uint8Array	1
Uint8ClampedArray	1
Int16Array	2
Uint16Array	2
Int32Array	4
Uint32Array	4
Float32Array	4
Float64Array	8

There are two ways in creating these kind of arrays. One way is to create it directly. Below is how to create a 3 length Int16Array.

var i8 = new Int16Array(3);
console.log(i8);
// Returns [0, 0, 0]
You can also create a buffer to assign how much data (in bytes) you want the array to take up. Note
To create typed arrays using buffers, you need to assign the number of bytes to be a multiple of the bytes listed above.

// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]
Buffers are general purpose objects that just carry data. You cannot access them normally. To access them, you need to first create a view.

i8View[0] = 42;
console.log(i8View); // Returns [42, 0, 0]
Note
Typed arrays do not have some of the methods traditional arrays have such as .pop() or .push(). Typed arrays also fail Array.isArray() that checks if something is an array.
Although simpler, this can be an advantage for less-sophisticated JavaScript engines to implement them.

First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.
*/

class ArrayBuffer {
  /* 64 bytes */
  constructor(byteSize) {
    this.byteSize = byteSize;
    this.multipleOf = Math.floor(byteSize / 8);
    this.byteLength = byteSize;
    //make array based on multiple of bytes
  }
}

class Int32Array extends ArrayBuffer {
  constructor(byteSize) {
    super(byteSize);
    // console.log("hello");
    this.resultArr = [];
    for (let i = 0; i < this.multipleOf; i++) {
      this.resultArr = [...this.resultArr, 0];
    }
    return this.resultArr;
  }
}

/*

***** Stack *****

Learn how a Stack Works
You are probably familiar with stack of books on your table. You have likely used the undo feature of a text editor.
You are also probably used to hitting the back button on your phone to go back to the previous view in your app.

You know what they all have in common? They all store the data in a way so that you can traverse backwards.

The topmost book in the stack was the one that was put there last. If you remove that book from your stack's top,
you would expose the book that was put there before the last book and so on.

If you think about it, in all the above examples, you are getting Last-In-First-Out type of service. We will try to mimic this with our code.

This data storage scheme is called a Stack. In particular, we would have to implement the push() method that pushes
JavaScript objects at the top of the stack; and pop() method, that removes the JavaScript object that's at the top of the stack at the current moment.

Here we have a stack of homework assignments represented as an array: "BIO12" is at the base, and "PSY44" is at the top of the stack.

Modify the given array and treat it like a stack using the JavaScript methods mentioned above.
Remove the top element "PSY44" from the stack. Then add "CS50" to be the new top element of the stack.

***** Stack *****

*/

class Stack {
  constructor(arrInput) {
    this.ourArray = arrInput;
    this.copiedArr = [...arrInput];
  }
  push(valueInput) {
    this.copiedArr.push(valueInput);
  }
  pop() {
    var returnValue = this.copiedArr.pop();
    return returnValue;
  }
  view() {
    console.log(this.copiedArr);
  }
}

var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];

var newStack = new Stack(homeworkStack);

/*

***** Queue *****

Create a Queue Class
Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle.
Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.

The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue,
and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.

Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes and returns the front element,
a front method that lets us see the front element, a size method that shows the length, and an isEmpty method to check if the queue is empty.

***** Queue *****

*/

class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(valueInput) {
    this.collection.push(valueInput);
    return this.collection;
  }
  dequeue() {
    var removedValue = this.collection.shift();
    return removedValue;
  }
  front() {
    var firstValue = this.collection[0];
    return firstValue;
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length > 0 ? false : true;
  }
}

/*

***** Priority Queue *****

Create a Priority Queue Class
In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional
information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued.
If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

For instance, let’s imagine we have a priority queue with three items:

[['kitten', 2], ['dog', 2], ['rabbit', 2]]
Here the second value (an integer) represents item priority. If we enqueue ['human', 1] with a priority of 1 (assuming lower priorities are given precedence)
it would then be the first item to be dequeued. The collection would look like this:

[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
We’ve started writing a PriorityQueue in the code editor. You will need to add an enqueue method for adding items with a priority, a dequeue method for removing and returning items,
a size method to return the number of items in the queue, a front method to return the element at the front of the queue, and finally an isEmpty method that will return true if
the queue is empty or false if it is not.

The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority. dequeue and front should return only the item's name, not its priority.


***** Priority Queue *****

*/

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  enqueue(arrInput) {
    var copiedCollection = [...this.collection];
    if (arrInput.length < 2) {
      throw new error("Format have to be [strInput, priority]");
    } else {
      if (copiedCollection.length == 0) {
        copiedCollection = [...copiedCollection, arrInput];
      } else if (copiedCollection == 1) {
        var [firstSubarray] = copiedCollection;
        var [, priorityOfSubarray] = firstSubarray;
        var [, arrInputPriority] = arrInput;
        arrInputPriority < priorityOfSubarray
          ? (copiedCollection = [...copiedCollection, arrInput])
          : copiedCollection.push(arrInput);
      } else {
        //when our array/priorityqueue length is greater than 1 [[strInput,priority],[strInput,priority]]
        // copiedCollection.forEach(function checkPriority(
        //   eachSubarray,
        //   index,
        //   list
        // ) {
        //   var beforeSubarray = list[index - 1];
        //   var beforePriority = beforeSubarray[1];
        //   var afterSubarray = list[index + 1];
        //   var afterPriority = afterSubarray[1];
        //   var priorityOfArrInput = arrInput[1];
        // });
        /***** use for loop so we can break once we add the arr into the collection *****/
        for (let index = 0; index < copiedCollection.length; index++) {
          let beforeSubarray = copiedCollection[index - 1];
          let beforePriority = beforeSubarray[1];
          let afterSubarray = copiedCollection[index + 1];
          let afterPriority = afterSubarray[1];
          let priorityOfArrInput = arrInput[1];
          if (beforeSubarray != undefined && afterSubarray != undefined) {
          }
        }
        /***** use for loop so we can break once we add the arr into the collection *****/
      }
    }
    this.collection = [...copiedCollection];
  }
  dequeue() {}
  size() {}
  front() {}
  isEmpty() {}
  viewQueue() {
    return this.collection;
  }
}

function testingForLoop(arrInput) {
  var result = "hello";
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i] == 3) {
      result = "Done";
      break;
    }
  }
  return result;
}
