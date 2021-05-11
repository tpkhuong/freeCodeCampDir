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
      throw new Error("Format have to be [strInput, priority]");
    } else {
      if (copiedCollection.length == 0) {
        copiedCollection = [...copiedCollection, arrInput];
      } else if (copiedCollection.length == 1) {
        var [firstSubarray] = copiedCollection;
        var [, priorityOfSubarray] = firstSubarray;
        var [, arrInputPriority] = arrInput;
        // if (arrInputPriority < priorityOfSubarray) {
        //   copiedCollection = [...copiedCollection, arrInput];
        // } else {
        //   copiedCollection.push(arrInput);
        // }
        arrInputPriority < priorityOfSubarray
          ? (copiedCollection = [arrInput, ...copiedCollection])
          : copiedCollection.push(arrInput);
      } else if (copiedCollection.length == 2) {
        let [beforeSubarray] = copiedCollection;
        let [, afterSubarray] = copiedCollection;
        let [, beforePriority] = beforeSubarray;
        let [, afterPriority] = afterSubarray;
        let [, arrInputPriority] = arrInput;

        if (arrInputPriority <= beforePriority) {
          copiedCollection = [arrInput, ...copiedCollection];
        } else if (
          arrInputPriority > beforePriority &&
          arrInputPriority <= afterPriority
        ) {
          copiedCollection = [beforeSubarray, arrInput, afterSubarray];
        } else {
          copiedCollection = [...copiedCollection, arrInput];
        }
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
        /***** use for loop so we can break once we add the arr into the collection *****/
      } else {
        //[[1],[2],[3]], our loopIndex will be 1. loop until index is < length - 1 which will be 2. when our loop get to index 2 it will break
        //

        let [, firstPriority] = copiedCollection[0];
        let [, lastPriority] = copiedCollection[copiedCollection.length - 1];
        let [, arrPriority] = arrInput;

        if (arrPriority < firstPriority) {
          copiedCollection = [arrInput, ...copiedCollection];
        } else if (arrPriority > lastPriority) {
          copiedCollection = [...copiedCollection, arrInput];
        } else {
          //find index of matching priority.
          let indexOfPriorityInArr;
          for (let index = 1; index < copiedCollection.length; index++) {
            let eachSubarray = copiedCollection[index];
            let [, subarrayPriority] = eachSubarray;

            if (arrPriority == subarrayPriority) {
              indexOfPriorityInArr = index;
            }
          }
          //once we get the index of matching priority. we want to copy left side of index of the priority and the right side of index of the priority.
          //the arrInput will go between leftside of the copied array and the rightside of the copied array. the leftside array will have a higher priority than the arrinput
          //the rightside array will have a lower equal priority than the arrInput.
          let higherPrioritySide = copiedCollection.slice(
            0,
            indexOfPriorityInArr
          );
          let lowerEqualToPrioritySide = copiedCollection.slice(
            indexOfPriorityInArr
          );
          copiedCollection = [
            ...higherPrioritySide,
            arrInput,
            ...lowerEqualToPrioritySide,
          ];
        }
      }
    }
    this.collection = [...copiedCollection];
  }
  dequeue(valueInput) {
    //remove the subarray but just return the value not the priorty
    //loop through array when we find the value remove that subarray
    var copiedList = [...this.collection];
    // var copiedArr = [].concat(this.collection);
    // var copiedCollection = this.collection.slice()
    // var [findSubarrayWithThisValue] = copiedList;

    var removedValue;
    var removedSubarray;
    for (let index = 0; index < copiedList.length; index++) {
      let eachSubarray = copiedList[index];
      let [valueFoundInSubarray] = eachSubarray;
      if (eachSubarray.includes(valueInput)) {
        // removedValue = valueFoundInSubarray;
        removedSubarray = copiedList.splice(index, 1)[0];
      }
    }
    removedValue = removedSubarray.shift();
    this.collection = [...copiedList];
    return removedValue ? removedValue : `${valueInput} not in this queue`;
  }
  size() {
    return this.collection.length;
  }
  front() {
    var [firstSubarray] = this.collection;
    var [firstValue] = firstSubarray;
    return firstValue;
  }
  isEmpty() {
    return this.collection == 0 ? true : false;
  }
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

var heroes = ["batman", "superman", "captain america"];

var copiedArr = [].concat(heroes);

function extraCode() {
  let beforeSubarray = copiedCollection[index - 1];
  let afterSubarray = copiedCollection[index + 1];
  // if (beforeSubarray == undefined) continue;
  // if (afterSubarray == undefined) break;
  if (beforeSubarray != undefined && afterSubarray != undefined) {
    let beforePriority = beforeSubarray[1];
    let afterPriority = afterSubarray[1];
    let priorityOfArrInput = arrInput[1];
    if (
      priorityOfArrInput < afterPriority &&
      priorityOfArrInput == beforePriority
    ) {
      copiedCollection = [arrInput, ...copiedCollection];
    } else if (
      priorityOfArrInput == afterPriority &&
      priorityOfArrInput > beforePriority
    ) {
      let leftOfArrInput = copiedCollection.slice(0, index);
      let rightOfArrInput = copiedCollection.slice(index);
      copiedCollection = [...leftOfArrInput, arrInput, ...rightOfArrInput];
    } else if (priorityOfArrInput < beforePriority) {
      copiedCollection = [arrInput, ...copiedCollection];
    } else if (priorityOfArrInput > afterPriority) {
      copiedCollection = [...copiedCollection, arrInput];
    }
  }
}

// var students = [
//   { id: 14, name: "Kyle" },
//   { id: 73, name: "Suzy" },
//   { id: 112, name: "Frank" },
//   { id: 6, name: "Sarah" },
// ];

// function getStudentName(studentID) {
//   // function scope: BLUE

//   console.log(student);
//   for (let student of students) {
//     // loop scope: GREEN

//     if (student.id === studentID) {
//       return student.name;
//     }
//   }
// }

// var arrTest = [1, 2, 3, 4, 5];

// var leftSide = arrTest.slice(0, 4);
// var rightSide = arrTest.slice(4)

/*

Create a Circular Queue
In this challenge you will be creating a Circular Queue. A circular queue is a queue that writes to the end of a collection then begins 
overwriting itself at the beginning of the collection. This type of data structure is useful in certain situations. For example, a circular queue can be used for streaming media.
Once the queue is full, new media data will overwrite old data.

A good way to illustrate this concept is with an array of length 5:

[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
Here the read and write are both at position 0. Now the queue gets 3 new records a, b, and c. Our queue now looks like:

[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
As the read head reads, it can remove values or keep them:

[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
Now we write the values d, e, and f to the queue. Once the write reaches the end of the array it loops back to the beginning:

[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
This approach requires a constant amount of memory but allows files of a much larger size to be processed.

In this challenge we will implement a circular queue. The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue.
The class itself should also accept an integer argument which you can use to specify the size of the queue when created. We've written the starting version of this class for you in the code editor.

When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue.
The enqueue method should return the item you enqueued if it is successful; otherwise it will return null.

Likewise, the read pointer should advance forward as you dequeue items. When you dequeue an item, that item should be returned.
If you cannot dequeue an item, you should return null.

The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer
should not be able to advance past data you have written.

Example:

First, we create an array of length 5:
  [null, null, null, null, null]
   ^Read @ 0
   ^Write @ 0
Then we enqueue a, b, and c:
enqueue(a)
enqueue(b)
enqueue(c)
  [a, b, c, null, null]
   ^Read @ 0
            ^Write @ 3
Now we dequeue all the enqueued items:
dequeue()
dequeue()
dequeue()
  [null, null, null, null, null]
                     ^Read @ 3
                     ^Write @ 3
Finally, we enqueue d, e and f:
enqueue(d)
enqueue(e)
enqueue(f)

we can enqueue() three more times before we can't passed the read pointer

  [f, null, null, d, e]
                  ^Read @ 3
      ^Write @ 1

*/

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.enqueueNumOfLoopAround = 0;
    this.dequeueNumOfLoopAround = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return {
      queue: this.queue,
      write: this.write,
      read: this.read,
      enqueueLoop: this.enqueueNumOfLoopAround,
      dequeueLoop: this.dequeueNumOfLoopAround,
    };
  }
  // how do we check that this.write does not passed this.read and this.read does not pass this.write
  enqueue(item) {
    //write pointer should not move passed the read pointer
    this.arr = [...this.queue];
    this.valueAtCurrPosition = this.queue[this.write];
    console.log(this.write);
    if (this.enqueueNumOfLoopAround == this.dequeueNumOfLoopAround) {
      //algorithm to handle writing data
      if (this.write == this.max) {
        this.queue[this.write] = item;
        this.write = 0;
        this.enqueueNumOfLoopAround++;
        return item;
      } else {
        //algorithm to handle writing data
        this.queue[this.write] = item;
        this.write++;
        return item;
      }
    } else if (this.enqueueNumOfLoopAround - this.dequeueNumOfLoopAround == 1) {
      if (this.write === this.read) {
        return null;
      } else {
        this.queue[this.write] = item;
        this.write++;
        return item;
      }
    }
  }

  dequeue() {
    //read pointer should not move passed the write pointer
    this.arr = [...this.queue];
    this.valueAtCurrPosition = this.queue[this.read];
    console.log(this.read);
    if (this.dequeueNumOfLoopAround == this.enqueueNumOfLoopAround) {
      if (this.read < this.write) {
        let dequeuedItem = this.queue[this.read];
        this.queue[this.read] = null;
        this.read++;
        return dequeuedItem;
      } else if (this.read == this.write && this.queue[this.read] !== null) {
        let anotherDequeuedItem = this.queue[this.read];
        this.queue[this.read] = null;
        return anotherDequeuedItem;
      } else if (this.read == this.write && this.queue[this.read] === null) {
        return null;
      }

      if (
        this.read == this.max &&
        this.read == this.write &&
        this.queue[this.read] === null
      ) {
        return null;
      }

      // } else {
      //   return null;
      // }
    } else if (this.dequeueNumOfLoopAround < this.enqueueNumOfLoopAround) {
      if (this.read == this.max && this.queue[this.read] !== null) {
        let dequeuedItem = this.queue[this.read];
        this.queue[this.read] = null;
        this.read = 0;
        this.dequeueNumOfLoopAround++;
        return dequeuedItem;
      } else {
        //   else if (this.read == this.max && this.queue[this.read] === null) {
        //   //this will run and return null when this.read == this.max and its null`
        //   return null;
        // }
        let dequeuedItem = this.queue[this.read];
        this.queue[this.read] = null;
        this.read++;
        return dequeuedItem;
      }
    }
  }
}

// var logger = function (strInput) {
//   console.log("hello");
//   var innerLogger = () => {
//     console.log(strInput);
//   };
// };

// setTimeout(function () {
//   console.log("what is this");
// }, 1000);

// const myAlert = () => {
//   const x = "Help! I think I found a clue!";
//   const alerter = () => {
//     alert(x);
//   };
//   setTimeout(alerter, 1000);
//   console.log("what happens first? this log or the alert?");
// };

/*

Create a Set Class
In this exercise we are going to create a class named Set to emulate an abstract data structure called "set". A set is like an array, but it cannot contain duplicate values.
The typical use for a set is to simply check for the presence of an item.
We can see how the ES6 Set object works in the example below:

const set1 = new Set([1, 2, 3, 5, 5, 2, 0]);
console.log(set1);
// output: {1, 2, 3, 5, 0}
console.log(set1.has(1));
// output: true
console.log(set1.has(6));
// output: false
First, we will create an add method that adds a value to our set collection as long as the value does not already exist in the set.
Then we will create a remove method that removes a value from the set collection if it already exists.
And finally, we will create a size method that returns the number of elements inside the set collection.

Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise.

Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true.
Otherwise, it should return false. Create a size method that returns the size of the set collection.

*/

class Set {
  constructor() {
    this.dictionary = {};
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined
      ? this.dictionary[element]
      : undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  /* Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise. */
  add(valueInput) {}
  /* Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise. */

  /*   Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true.
Otherwise, it should return false. Create a size method that returns the size of the set collection. */
  remove(valueInput) {}
  /*   Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true.
Otherwise, it should return false. Create a size method that returns the size of the set collection. */
  size() {
    var makeLength = Object.entries(this.dictionary);
    return makeLength.length;
  }
}
