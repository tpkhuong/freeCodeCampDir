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
          let lowerEqualToPrioritySide =
            copiedCollection.slice(indexOfPriorityInArr);
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
  constructor(arrInput) {
    //remove duplicates
    this.dictionary = {};
    var removeDuplicates = arrInput.reduce(function findUnique(
      buildingUp,
      currentValue
    ) {
      if (!cached[currentValue]) {
        cached[currentValue] = true;
        return [...buildingUp, currentValue];
      }
      return buildingUp;
    },
    []);

    console.log(removeDuplicates);
    var ourSet = removeDuplicates.reduce(function turnToObj(
      buildingUp,
      currentValue,
      currIndex
    ) {
      buildingUp[currIndex] = currentValue;
      return buildingUp;
    },
    {});
    this.dictionary = ourSet;
    return ourSet;
    // this.dictionary = { ...removeDuplicates };
    // console.log(this.dictionary);
    // console.log(Object.values(this.dictionary));
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    for (let eachKey in this.dictionary) {
      return this.dictionary[eachKey] == element ? true : false;
    }
  }
  // This method will return all the values in the set
  values() {
    // var justValues = Object.values(this.dictionary);
    return Object.values(this.dictionary);
  }
  /* Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise. */
  add(valueInput) {
    var ourValues = Object.values(this.dictionary);
    if (ourValues.includes(valueInput)) {
      return false;
    } else {
      // ourValues.push(valueInput);
      ourValues = [...ourValues, valueInput];
      this.dictionary = { ...ourValues };
      var arrToObj = ourValues.reduce(function makeArrIntoObj(
        buildingUp,
        currentValue,
        currIndex
      ) {
        buildingUp[currIndex] = currentValue;
        return buildingUp;
      },
      {});
      this.dictionary = arrToObj;
      return true;
    }
    /* convert array to object */
  }
  /* Create an add method that adds a unique value to the set collection and returns true if the value was successfully added and false otherwise. */

  /*   Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true.
Otherwise, it should return false. */
  remove(valueInput) {
    var ourValues = Object.values(this.dictionary);
    if (!ourValues.includes(valueInput)) {
      return false;
    } else {
      //if valueInput is in ourValues arr remove it
      ourValues.filter(function removeValue(eachElement) {
        return eachElement !== valueInput;
      });
    }
  }
  /*   Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should remove it from the set collection, and return true.
Otherwise, it should return false. */
  /* Create a size method that returns the size of the set collection. */
  size() {
    var makeLength = Object.entries(this.dictionary);
    return makeLength.length;
  }
  /* Create a size method that returns the size of the set collection. */
  /* 
  
  Perform a Union on Two Sets
  In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure called union.
  This method should take another Set as an argument and return the union of the two sets, excluding any duplicate values.
  
  For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].
  
  */
  union(setInput) {
    //setInput is an array?
    //merge both set
    var set1 = Object.values(this.dictionary);
    var set2 = [...setInput];
    var mergeBothSet = [...set1, ...set2];
    var uniqueValuesFromSets = [];

    mergeBothSet.reduce(function findUnqiue(buildingUp, currentValue) {
      if (!buildingUp[currentValue]) {
        buildingUp[currentValue] = true;
        uniqueValuesFromSets.push(currentValue);
        // uniqueValuesFromSets = [...uniqueValuesFromSets, currentValue];
        return buildingUp;
      }
      return buildingUp;
    }, {});
  }
  /*
  
  Perform an Intersection on Two Sets of Data
  In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set data structure called intersection.
  An intersection of sets represents all values that are common to two or more sets. This method should take another Set as an argument and return the intersection of the two sets.

  For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].

  */
  intersection(setInput) {
    // since our set will have unique values
    //merge both sets then use freqCounter
    var valuesSet1 = Object.values(this.dictionary);
    var copyOfSetInput = [...setInput];
    var mergeBothSets = [...valuesSet1, ...copyOfSetInput];

    var freqCounterObj = mergeBothSets.reduce(function countTheValues(
      buildingUp,
      currentValue
    ) {
      buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
      return buildingUp;
    },
    {});
    var keysValuesSubarray = Object.entries(freqCounterObj);

    var result = keysValuesSubarray.reduce(function matchTheLength(
      buildingUp,
      currentValue
    ) {
      var [ourKey, ourValue] = currentValue;
      if (ourValue == 2) {
        return [...buildingUp, ourKey];
        // buildingUp.push(ourKey);
        // return buildingUp;
      }
    },
    []);
    return result;
  }
  /*
  
  Perform a Difference on Two Sets of Data
  In this exercise we are going to perform a difference on 2 sets of data. We will create a method on our Set data structure called difference.
  A difference of sets should compare two sets and return the items present in the first set that are absent in the second.
  This method should take another Set as an argument and return the difference of the two sets.

  For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the difference of setA and setB is: setA.difference(setB) = ['c'].

  */
  difference(setInput) {
    var ourValuesArr = Object.values(this.dictionary);
    var copyOfSetInput = setInput.slice();

    var result = [];

    ourValuesArr.forEach(function notFoundInSecondSet(value) {
      if (copyOfSetInput.indexOf(value) === -1) {
        // use spread operator
        // result = [...result, value]
        result.push(value);
      }
      // if (!copyOfSetInput.includes(value)) {

      // }
    });

    // return result;
    /* different approach: use binary search nested inside a loop */

    ourValuesArr.forEach(function useBinarySearch(eachValue) {
      if (this.binarySearch(copyOfSetInput, eachValue) === -1) {
        // use spread operator
        // result = [...result, eachValue];
        result.push(eachValue);
      }
    });

    /* different approach: use binary search nested inside a loop */

    return result;
  }
  binarySearch(arrInput, valueInput) {
    var start = arrInput[0];
    var end = arrInput[arrInput.length - 1];
    var middle = Math.floor(start + end / 2);

    while (start < end && arrInput[middle] !== valueInput) {
      if (valueInput < arrInput[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor(start + end / 2);
    }

    if (arrInput[middle] === valueInput) {
      return middle;
    }
    return -1;
  }

  /*
  
  Perform a Subset Check on Two Sets of Data
  In this exercise, we are going to perform a subset test on 2 sets of data. We will create a method on our Set data structure called isSubsetOf.
  This will compare the first set against the second, and if the first set is fully contained within the second, it will return true.

  For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then setA is a subset of setB, so setA.isSubsetOf(setB) should return true.
  
  */
  isSubsetOf(setInput) {
    var copyOfSetInput = [...setInput];
    var ourValues = Object.values(this.dictionary);
    //assuming both data structures are sorted
    //loop through first array using every() inside every() use binarySearch to see if values of arr1 is in arr2
    var ourBoolean = ourValues.every(function valuesAreInArrTwo(element) {
      return this.binarySearch(copyOfSetInput, element);
    });

    // return ourBoolean ? true : false;
    //another approach, values in arr1 have to be found in arr2 in the same order is arr2

    var ourLengthSetA = ourValues.length;
    var strFormOfOurSetA = ourValues.join("");
    /***** get freqCount on setA  *****/
    var freqCountSetA = ourValues.reduce(function getFreqCount(
      buildingUp,
      currentValue
    ) {
      buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
      return buildingUp;
    },
    {});
    /***** get freqCount on setA  *****/

    /***** we dont want setB to be sorted *****/

    var firstValueOfSetA = ourValues[0];
    var lastVauleOfSetA = ourValues[ourLengthSetA - 1];
    var arrOfIndexFoundInSetB = [];
    var reversedOrderOfIndexArrOfSetB = [];
    for (let index = 0; index < copyOfSetInput.length; index++) {
      let element = copyOfSetInput[index];
      if (element === firstValueOfSetA) {
        arrOfIndexFoundInSetB.push(index);
      }
    }

    for (let index = arrOfIndexFoundInSetB.length - 1; index >= 0; index--) {
      let element = arrOfIndexFoundInSetB[index];
      reversedOrderOfIndexArrOfSetB.push(element);
    }

    /***** using while loop we will remove value at the end of reverseOrderOfIndexArrOfSetB, use the index in reverseOrderOfIndex and length of setA to copy
     * subarray of setB
     *  *****/
    var arrOfSubarrayBasedOnIndex = [];
    while (reversedOrderOfIndexArrOfSetB.length > 0) {
      let useIndexToCopySubarray = reverseOrderOfIndexArrOfSetB.pop();
      let pushCopiedSubarrayOfSetB = copyOfSetInput.push(
        useIndexToCopySubarray,
        useIndexToCopySubarray + ourLengthSetA
      );
      arrOfSubarrayBasedOnIndex.push(pushCopiedSubarrayOfSetB);
    }

    /***** using while loop we will remove value at the end of reverseOrderOfIndexArrOfSetB, use the index in reverseOrderOfIndex and length of setA to copy
     * subarray of setB
     *  *****/

    var arrOfSubarrayMatchFirstAndLastValue = arrOfSubarrayBasedOnIndex.filter(
      function arrMatchLastValue(subarray) {
        var lengthOfSubarray = subarray.length;
        var lastValueOfSubarray = subarray[lengthOfSubarray - 1];
        return lastValueOfSubarray === lastVauleOfSetA;
      }
    );

    /***** get the freqCounter of each subarray *****/
    var arrOfObjFreqCount = arrOfSubarrayMatchFirstAndLastValue.map(
      function makeFreqCountObj(subarray) {
        return subarray.reduce(function freqCounter(buildingUp, currentValue) {
          // currentValue will be each value of our subarray
          buildingUp[currentValue] = (building[currentValue] || 0) + 1;
          return buildingUp;
        }, {});
      }
    );
    /***** get the freqCounter of each subarray *****/

    /***** instead of using freq counter what if we turn our arr into a string then compare the str values *****/
    var arrOfStrValuesOfSetB = arrOfSubarrayMatchFirstAndLastValue.map(
      function joinValuesOfEachSubarray(subarray) {
        return subarray.join("");
      }
    );

    /***** use some() loop through each str in array and compare to the string of setA *****/

    var ourBoolean = arrOfStrValuesOfSetB.some(function matchesStrFormOfSetA(
      eachStr
    ) {
      return eachStr === strFormOfOurSetA;
    });

    return ourBoolean;
    /***** use some() loop through each str in array and compare to the string of setA *****/
    /***** instead of using freq counter what if we turn our arr into a string then compare the str values *****/

    /***** we dont want setB to be sorted *****/
    //sort our sets
    var sortedValues = ourValues.sort(function ascending(a, b) {
      if (a < b) return -1;
      if (b < 1) return 1;
      return 0;
    });

    var sortedSetInput = copyOfSetInput.sort(function ascending(a, b) {
      if (a < b) return -1;
      if (b < a) return 0;
      return 0;
    });

    //use recursion?
    function recursiveAttempt(arrInput, resultArr) {
      //make copy of arr from arrInput using length of setA
      //arr of index. loop through setB once the value in the setA once the value in setB matches the first value in setA, get the index of that value in setB
      /***** recursive approach *****/
      var arrOfIndex = [];
      var copyOfSortedValues = [...sortedValues];
      var copyOfResultArr = resultArr.slice();
      var result = false;
      if (arrInput.length > 0) {
        return arrInput;
      }
      /***** recursive approach *****/
      var firstValueOfSetA = sortedValues[0];
      // we want to compare the first value of setA to the first value of the copied arr of setB,the copies of each arr will start at the index where the value in setB matches the first value in setA
      //find the index where the value matches the first value in setA
      for (let index = 0; index < sortedSetInput.length; index++) {
        let element = sortedSetInput[index];
        if (element == firstValueOfSetA) {
          arrOfIndex.push(index);
        }
      }
      /***** loop through setB, use the index from arrOfIndex to make copies of arr we will compare to setA *****/
      /* reverse the order of the arrOfIndex so we can use pop */
      var reversedOrderOfArrIndex = [];
      for (let index = arrOfIndex.length - 1; index >= 0; index--) {
        let element = arrOfIndex[index];
        reversedOrderOfArrIndex.push(element);
      }
      /***** make copies of arr from setB *****/
      var copiesOfArrBasedOnIndex = [];
      while (reversedOrderOfArrIndex.length > 0) {
        var startCopyAtThisIndex = reversedOrderOfArrIndex.pop();
        var pushCopiedArrToArrBasedOnIndex = sortedSetInput.slice(
          startCopyAtThisIndex,
          startCopyAtThisIndex + ourLengthSetA
        );
        copiesOfArrBasedOnIndex.push(pushCopiedArrToArrBasedOnIndex);
      }
      /* sort our subbarray if we plan to use binary search */

      var sortedArrBasedOnIndex = copiesOfArrBasedOnIndex.map(
        function runSortOnEachArr(eachArray) {
          var sortedSubarray = eachArray.sort(function ascending(a, b) {
            if (a < b) return -1;
            if (b < a) return 1;
            return 0;
          });
          return sortedSubarray;
        }
      );

      /* sort our subbarray if we plan to use binary search */

      /***** make copies of arr from setB *****/

      // var copiedArrLengthOfSetA;
      // var firstValueOfSetB = arrInput[0];
      // if (firstValueOfSetA == firstValueOfSetB) {

      // }
      // compare values in set1 to values in set2 break from recursive call if order of values in set1 is matched with values in set2 in the same order
    }
    recursiveAttempt(sortedSetInput, []);
  }
  /***** checkSet *****/

  /***** checkSet *****/
}

function checkSet() {}

/***** create and add to Set *****/

/*

Problem Explanation
To solve this problem, you have to add an array of items to the set.

Hints
Hint 1
Use the add function to add an array of strings to the set.

Hint 2
Use the length attribute on the values of the Set.

*/

class Set {
  constructor(arrInput) {
    var copiedArrInput = [...arrInput];
    /* no duplicates*/

    var cached = {};
    var result = [];

    copiedArrInput.forEach(function onlyUnique(eachValue) {
      if (!cached[eachValue]) {
        cached[eachValue] = true;
        result.push(eachValue);
        // result = [...result, eachValue];
        // result = result.concat([eachValue])
      }
    });

    /* no duplicates*/
    this.collection = { ...copiedArrInput };
    var ourValues = Object.values(this.collection);
    this.collection = ourValues;
    // return ourValues;
    return result;
  }
  add(value) {
    var lengthOfSet = this.collection.length;
    if (lengthOfSet === 0) return undefined;
    var copyOfCollection = [...this.collection];
    /***** check if value input is already in the set *****/
    //some will break out of the loop once it returns true
    var setIncludesValueBoolean = copyOfCollection.some(
      function setIncludeValue(eachSetValue) {
        return eachSetValue === value;
      }
    );

    // if setIncludeValue is false then it means our set/collection does not include value we want to add to our set
    //we can add that value to the collection
    if (!setIncludesValueBoolean) {
      copyOfCollection.push(value);
    }
    /***** check if value input is already in the set *****/
    /***** we can sort our set *****/
    copyOfCollection.sort(function sortAscending(a, b) {
      if (a < b) return -1;
      if (b < a) return 1;
      return 0;
    });
    /***** we can sort our set *****/
    return copyOfCollection;
  }
  /***** create and add to Set *****/

  /***** remove value from set *****/
  /*
Remove items from a set in ES6
Let's practice removing items from an ES6 Set using the delete method.

First, create an ES6 Set:

var set = new Set([1,2,3]);
Now remove an item from your Set with the delete method.

set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
*/
  /***** remove value from set *****/

  remove(valueInput) {
    //copy of collection
    var copyOfCollection = [...this.collection];
    //find index of value we want to remove
    var indexOfValue;
    // forEach(function findIndexOfValue(element, index) {
    //   if (element === valueInput) {
    //     indexOfValue = index;
    //   }
    // })
    for (let index = 0; index < copyOfCollection.length; index++) {
      let element = copyOfCollection[index];
      if (element === valueInput) {
        indexOfValue = index;
      }
    }
    //copy left and right side of the index
    var leftSideOfValue = copyOfCollection.slice(0, indexOfValue);
    var rightSideOfValue = copyOfCollection.slice(indexOfValue + 1);
    //merge copied left and copied right of array
    var mergedArr = leftSideOfValue.concat(rightSideOfValue);
    var mergedArr = [...leftSideOfValue, ...rightSideOfValue];
    return mergedArr;
  }
  /* 
  Use .has and .size on an ES6 Set
Let's look at the .has and .size methods available on the ES6 Set object.

First, create an ES6 Set

var set = new Set([1,2,3]);
The .has method will check if the value is contained within the set.

var hasTwo = set.has(2);
The .size method will return an integer representing the size of the Set

var howBig = set.size;
  
  */
  has(valueInput) {
    var copyOfCollection = [...this.collection];
    // return copyOfCollection.includes(valueInput);
    // var ourBoolean = copyOfCollection.includes(valueInput);
    // if (ourBoolean) {
    //   return true;
    // }
    // return false;
    //use for loop
    // var result = false;
    // for (let index = 0; index < copyOfCollection.length; index++) {
    //   let element = copyOfCollection[index];
    //   if (element === valueInput) {
    //     return true;
    //   }
    // }
    // return result;
    //use foreach
    // var result = false;
    // copyOfCollection.forEach(function findValue(element) {
    //   if (element === valueInput) {
    //     return true;
    //   }
    // })
    // return result;
  }
  size() {
    return this.collection.length;
  }
  /*

  Data Structures
  Use Spread and Notes for ES5 Set() Integration
  Do you remember the ES6 spread operator ...?

  ... can take iterable objects in ES6 and turn them into arrays.

  Let's create a Set, and check out the spread function.

  var set = new Set([1,2,3]);
  var setToArr = [...set]
  console.log(setToArr) // returns [ 1, 2, 3 ]
  
  */
  spread(objInput) {
    var copyOfObj = Object.assign({}, objInput);
    var valuesOfObj = Object.values(copyOfObj);

    return valuesOfObj;
  }
}

/*

Create a Map Data Structure
The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. In JavaScript, these are available to us as objects.
Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.

Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here,
this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations?
Use the Map object provided here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:

add accepts a key, value pair to add to the map.
remove accepts a key and removes the associated key, value pair
get accepts a key and returns the stored value
has accepts a key and returns true if the key exists or false if it doesn't.
values returns an array of all the values in the map
size returns the number of items in the map
clear empties the map

*/

class Map {
  constructor(size) {
    this.collection = [];
    this.collectionSize = size;
  }
  //method goes here. these methods will be in an obj assigned to the prototype property of the obj part of the class Map which is a function/obj combo
  add(key, value) {
    //check size of collection, if size is 50% used up we want to increase the size
    //loop through collection, get the number of undefined and non undefined values in collection, check if non undefined takes up 50% of collection size
    //use the original size value that was passed in
    //loop starting from the end of our current collection up to (current collection size + size value passed in);
    /***** checking the size of our collection/hash table/map *****/
    alert(
      "when we use hash func it will give us a random index then we check if at the index is there an array or is it undefined"
    );
    alert("if it is undefined we assign an empty array at that index");
    alert(
      "if the index is 35, the length of the array will be 35 with 34 undefined and one empty array"
    );
    alert("make our algorithm better");
    /***** since our hash func will give us a random index then we will use that random index to check if at that index there is an array or it is undefined
     * our length will be based on that index.
     * we want to check how many undefined and values there are in our array before we increase the size of our array.
     * we shouldn't use the length of the array to check if 50% is used because our hash func will give us a random index. once we use that index to check if we should add an array at the index
     * not. the length of the array will be based our index
     * 
     * old code:
     * 
     * var sizeOfCollection = this.collection.length;
    //code below will give us a percentage
    var halfFullOfValues =
      (Math.floor(sizeOfCollection / 2) / sizeOfCollection) * 100;
     * 
     *  *****/

    var countNumOfNotUndefined = {};
    //using freqCount to count the num of undefined
    this.collection.forEach(function countUndefined(eachValue) {
      //use freqCount
      //check if the value is an array instead of if it is undefined because when we check if the value is undefined instead of an array our loop will loop once
      //
      // if (eachValue == undefined) {
      //   countNumOfUndefined[eachValue] =
      //     (countNumOfUndefined[eachValue] || 0) + 1;
      // }
      if (Array.isArray(eachValue)) {
        eachValue = "Array";
        countNumOfNotUndefined[eachValue] =
          (countNumOfNotUndefined[eachValue] || 0) + 1;
      }
    });
    var numOfArrInOurMap = countNumOfUndefined["Array"];

    //calculate the number of arr in our compared to the length of the map

    //get the number of "Array" in our map divide that number by length * 100
    var percentOfArrInOurMap = Math.floor(
      (numOfArrInOurMap / this.collection.length) * 100
    );

    //check if num of "Array" in countNumOfNotUndefined is >= 50%;
    if (percentOfArrInOurMap >= 50) {
      //once our map is 50% used up, our new size will be original size times 2
      let increaseCollectionSize = this.collectionSize * 2;
      let index = this.hash(key, increaseCollectionSize);

      if (!this.collection[index]) {
        this.collection[index] = [];
      }
    } else {
      //if our map size is not 50% used up, we will call hash with the key and current map size
      //index will be a number
      var index = this.hash(key, this.collectionSize);
      //check if at index in our this.collection there is an array or not
      //if its undefined we want an array there
      if (!this.collection[index]) {
        this.collection[index] = [];
      }
      //if array at index length is 0 we want to add an array with the key,value pair
      var arrayAtIndex = this.collection[index];
      if (arrayAtIndex.length === 0) {
        arrayAtIndex.push([key, value]);
      } else {
        //if our array at index length is greater than 0,loop through an update value
        alert(
          "find the index of the subarray that contains our key then mutate that subarray"
        );
        var indexOfSubarray;
        //for loop
        for (let index = 0; index < arrayAtIndex.length; index++) {
          //have a variable to store index
          //loop through collection find the subarray that contains the key
          let [ourKey] = arrayAtIndex[index];
          if (ourKey == key) {
            indexOfSubarray = index;
          }
          // let subarrayKey = arrayAtIndex[index][0];
          // let subarrayValue = arrayAtIndex[index][1];
          // if (subarrayKey === key) {
          //   subarrayValue = value;
          // }
        }
        //then mutate that subarray
        //arrayAtIndex is scoped to the else statement
        var mutateSubarray = arrayAtIndex[indexOfSubarray];
        mutateSubarray[1] = value;

        // var [, ourValue] = arrayAtIndex[indexOfSubarray];
        // ourValue = value;
        //for each
        arrayAtIndex.forEach(function findKey(subarray, index, collection) {
          //have a variable to store index
          var [ourKey] = subarray;
          if (ourKey == key) {
            indexOfSubarray = index;
          }

          //loop through collection find the subarray that contains the key
          //then mutate that subarray
          // var subarrayKey = subarray[0];
          // var subarrayValue = subarray[1];
          // if (subarrayKey === key) {
          //   subarrayValue = value;
          // }
        });
        //using destructuring will not work because ourValue will be the secondValue of the subarray
        //we want to mutate so use arr[index] = value
        var mutateSubarray = arrayAtIndex[indexOfSubarray];
        mutateSubarray[1] = value;
        // var [, ourValue] = arrayAtIndex[indexOfSubarray];
        // ourValue = value;
      }
    }

    //check if halfFullOfValues is >= 50
    /***** when our map/hash table is at 50% or greater we can call hash func pass in the key and new size of our map/hash table. new size should be the current size
     * plus size passed in
     *  *****/
    if (halfFullOfValues >= 50) {
      //if halfFullOfValues is 50 or greater we want to increase the size of our collection
      // let copyOfCollection = this.collection.slice();
      let copyOfCollection = [...this.collection];
      let lengthOfCopyOfCollection = copyOfCollection.length;
      // let copyOfCollection = [].concat(this.collection);
      //we want to add our loop length of current collection plus size passed in or size passed in times 2
      let stopAtThisLength = lengthOfCopyOfCollection + this.collectionSize;
      for (
        let index = lengthOfCopyOfCollection + 1;
        index < stopAtThisLength;
        index++
      ) {
        let element = copyOfCollection[index];
        element = 0;
      }
    }

    /***** checking the size of our collection/hash table/map *****/
  }
  remove(key) {
    //need to work with arrayAtIndex;
    var index = this.hash(key, this.collection);
    var arrayAtIndex = this.collection[index];
    //if it is 0 then return undefined
    //we could loop through our map if our map length is greater than 0
    if (arrayAtIndex.length > 0) {
      //removed value in subarray
      let removedValue;
      for (let index = 0; index < arrayAtIndex.length; index++) {
        let element = arrayAtIndex[index];
        let [ourKey] = element;
        if (ourKey === key) {
          removedValue = element.pop();
        }
      }
      // return removedValue;
      //remove subarray with key passed into remove()
      let indexOfSubarray;
      for (let index = 0; index < arrayAtIndex.length; index++) {
        let element = arrayAtIndex[index];
        let [ourKey] = element;
        if (ourKey == key) {
          indexOfSubarray = index;
        }
      }
      //use splice to remove subarray that contain our key passed into remove();
      var removeSubarray = arrayAtIndex.splice(indexOfSubarray, 1);
      return removeSubarray;
    } else {
      return null;
    }
  }
  // get accepts a key and returns the stored value
  // has accepts a key and returns true if the key exists or false if it doesn't.
  get(key) {
    //our hash func will return the same index/hash value for same key/str passed into the hash func
    var index = this.hash(key, this.collectionSize);
    var arrAtIndex = this.collection[index];

    if (!arrInput) {
      return -1;
    } else {
      //loop though arrAtIndex and find the key
      //then return value
      for (let index = 0; index < arrInput.length; index++) {
        let element = arrInput[index];
        let [ourKey, ourValue] = element;

        // if (ourKey == key) return ourValue;
        // break
        return ourKey == key ? ourValue : -1;
      }
      //forEach
      arrAtIndex.forEach(function findValue(eachSubarray, index) {
        var [ourKey, ourValue] = eachSubarray;

        // if(ourKey == key) return ourValue;
        return ourKey == key ? ourValue : -1;
      });
    }
  }
  has(key) {
    //our hash func will return the same index/hash value for same key/str passed into the hash func
    var index = this.hash(key, this.collectionSize);
    var arrAtIndex = this.collection[index];

    if (!arrAtIndex) {
      return -1;
    } else {
      //loop through arrAtIndex
      //for loop
      for (let index = 0; index < arrInput.length; index++) {
        let element = arrInput[index];
        let [ourKey, ourValue] = element;
        if (ourKey == key) return true;
        return -1;
      }
      //foreach
      arrAtIndex.forEach(function containKey(subarray, index) {
        var [ourKey, ourValue] = subarray;

        // if (ourKey == key) return true;
        // return -1;
        return ourKey == key ? true : -1;
      });
      //for of
      for (let element of arrayAtIndex) {
        let [ourKey, ourValue] = element;
        // return ourKey == key ? true : -1;
        if (ourKey == key) return true;
        return -1;
      }
    }
  }
  // values returns an array of all the values in the map
  // size returns the number of items in the map
  // clear empties the map
  values() {
    var result = [];
    var arrOfSubarrayInCollection = [];
    //have to loop through this.collection and get all the arr/[]
    this.collection.forEach(function addSubarray(subarray, index) {
      if (Array.isArray(subarray)) {
        //[[["1",0],["2",1]],0,0]: if our array is [["1",0],["2",1]] push will copy/add [["1",0],["2",1]] to the array we want
        arrOfSubarrayInCollection.push(subarray);
        // arrOfSubarrayInCollection = [...arrOfSubarrayInCollection, subarray]
      }
    });
    //our arrOfSubarrayInCollection will have [[subarray from this.collection]], there should be no undefined so when we pass the length of subarray into our recur we will break when the index
    //matches the length of arrOfSubarrayInCollection
    //we will use recursion to loop through our arrOfSubarrayInCollection, we want to use recursion because we will loop through the subarrays too and add the values to an array that we will return
    //we need to loop the subarrays and get values.
    recurHelper(arrOfSubarrayInCollection);
    function recurHelper(arrInput, index = 0) {
      //[[["1",0],["2",1]],0,0]
      let lengthOfArr = arrInput.length;
      if (index === lengthOfArr) {
        return;
      }

      //each time we call recurHelper we want to access the value at index then pass that subarray into loopThroughSubarrayRecur
      let passSubarrayToLoopThroughFunc = arrInput[index];
      loopThroughSubarrayRecur(passSubarrayToLoopThroughFunc);
      recurHelper(arrInput, index + 1);
    }

    //we want to loop through the subarray of our this.collection we do not know if the array at index, when we use the hash func which will give us a hash that we call index
    //then we use that index to check if there is an arr there if there is an array there we just add our arr [key,value] to the arrAtIndex
    function loopThroughSubarrayRecur(subarrayInput, secondLevelIndex = 0) {
      //[["1",0],["2",1]] we want to loop through this array and access these arrays ["1",0] then ["2", 1];
      var lengthOfSubarray = subarrayInput.length;

      if (index === lengthOfSubarray) {
        return;
      }

      var arrOfKeyValuePair = subarrayInput[index];
      result.push(arrOfKeyValuePair[1]);
      /***** using destructuring *****/
      // var [ourKey, ourValue]  = subarrayInput[index]
      // var [ourKey, ourValue] = arrOfKeyValuePair;
      // result.push(ourValue);
      loopThroughSubarrayRecur(subarrayInput, secondLevelIndex + 1);
    }
  }
  size() {
    //get the number of arrays in our collection.
    //use freqCounter
    var freqCounter = this.collection.reduce(function findArrInCollection(
      buildingUp,
      currentValue
    ) {
      //buildingUp is our {}
      //currentValue is each subarray
      if (Array.isArray(currentValue)) {
        buildingUp["array"] = (buildingUp["array"] || 0) + 1;
      }
      return buildingUp;
    },
    {});
    //freqCounter will have {"array": numOfTimesArrIsInOurCollection}
    return freqCounter["array"];
  }
  clear() {
    //set the collection length to 0
    this.collection.length = 0;
  }
  hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

/*

Create a Hash Table
In this challenge we will learn about hash tables. A Hash table is used to implement associative arrays, or mappings of key-value pairs, like the objects and Maps we have just been studying.
A JavaScript object could be implemented as a hash table, for instance (its actual implementation will depend on the environment it's running in).
The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value.
This numerical value is then used as the actual key the associated value is stored by. Then, if you try to access the same key again, the hashing function will process the key,
return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(1) lookup time on average.

Hash tables can be implemented as arrays with hash functions producing array indices within a specified range.
In this method, the choice of the array size is important, as is the hashing function. For instance, what if the hashing function produces the same value for two different keys?
This is called a collision. One way to handle collisions is to just store both key-value pairs at that index. Then, upon lookup of either, you would have to iterate through the bucket of items to find the key you are looking for.
A good hashing function will minimize collisions to maintain efficient search time.

Here, we won't be concerned with the details of hashing or hash table implementation, we will just try to get a general sense of how they work.

Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage.
Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. The first should accept a key value pair to add to the hash table.
The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or null if the key is not present.

*/

class HashTable {
  constructor(size) {
    this.collection = {};
    this.collectionSize = size;
  }
  /* The first should accept a key value pair to add to the hash table. */
  add(key, value) {
    var index = this.hash(key, this.collectionSize);

    //our this.collection is an obj instead of an array
    if (!this.collection[index]) {
      this.collection[index] = [];
    }
    var arrOfIndexInCollection = this.collection[index];
    //check size/length of the arr asign to this.collection[index];
    var lengthOfArrAtIndexOfCollection = arrOfIndexInCollection.length;

    if (lengthOfArrAtIndexOfCollection === 0) {
      let arrAssignedAtIndexOfCollection = this.collection[index];

      arrAssignedAtIndexOfCollection.push([key, value]);
    } else {
      //loop through subarray of arrAtIndexOfCollection
      let indexOfSubarray;
      //for loop
      for (let index = 0; index < lengthOfArrAtIndexOfCollection; index++) {
        let subarray = arrOfIndexOfCollection[index];
        // let ourKey = subarray[0]
        let [ourKey, ourValue] = subarray;
        if (ourKey === key) {
          indexOfSubarray = index;
        }
      }
      //for each
      arrOfIndexInCollection.forEach(function findIndex(subarray, index) {
        // var ourKey = subarray[0]
        var [ourKey, ourValue] = subarray;
        if (ourKey === key) {
          indexOfSubarray = index;
        }
      });

      let mutateSubarray = arrOfIndexOfCollection[indexOfSubarray];
      //if we used destructuring [ourKey,ourValue] = mutateSubarray;
      //ourvalue will be the second value in the mutateSubarray
      //if we want to reassign the value at index 1 we have to use array[index];
      mutateSubarray[1] = value;
    }
  }
  /*  The second should remove a key-value pair when passed a key. */
  remove(key) {
    //want to find/work with subarray with matching key
    var index = this.hash(key, this.collectionSize);
    //we want to use this index to access the subarray that has our key
    var indexOfArrayThatMatchesKey;
    //we can check if our arrayAtIndex is undefined or is an array
    var arrayAtIndex = this.collection[index];
    if (!arrayAtIndex) {
      return undefined;
    } else {
      //if there is an array at index then we will loop through it
      //for loop
      for (let index = 0; index < arrayAtIndex.length; index++) {
        let element = arrayAtIndex[index];
        // let [ourKey, ourValue] = arrayAtIndex[index];
        let [ourKey, ourValue] = element;
        if (ourKey == key) indexOfArrayThatMatchesKey = index;
      }
      //foreach
      arrayAtIndex.forEach(function findIndex(subarray, index) {
        var [ourKey, ourValue] = subarray;
        if (ourKey == key) indexOfArrayThatMatchesKey = index;
      });
      //use indexOfArrayThatMatchesKey with splice on arrayAtIndex to remove the key-value pair
      var removedKeyValuePairArr = arrayAtIndex.splice(
        indexOfArrayThatMatchesKey,
        1
      );
      return removedKeyValuePairArr;
    }
    //if there is no array at index return undefined
    // if (!this.collection[index]) {
    //   return undefined;
    // }
  }
  /* The third should accept a key and return the associated value or null if the key is not present. */
  lookup(key) {
    var index = this.hash(key, this.collectionSize);
    var arrayAtIndex = this.collection[index];

    if (!arrayAtIndex) {
      return undefined;
    }

    //loop through arrayAtIndex return the value that is in the same subarray as the key
    //for loop
    for (let index = 0; index < arrayAtIndex.length; index++) {
      let element = arrayAtIndex[index];
      // let [ourKey, ourValue] = arrayAtIndex[index];
      let [ourKey, ourValue] = element;
      if (ourKey == key) return ourValue;
    }
    //foreach
    arrayAtIndex.forEach(function getTheValue(subarray) {
      var [ourKey, ourValue] = subarray;

      if (ourKey == key) return ourValue;
    });
  }
  hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

/* linked list */

/*

Work with Nodes in a Linked List
Another common data structure you'll run into in computer science is the linked list. A linked list is a linear collection of data elements, called 'nodes',
each of which points to the next. Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node.

Imagine that you are in a conga line. You have your hands on the next person in the line, and the person behind you has their hands on you. You can see the person straight ahead of you,
but they are blocking the view of the other people ahead in line. A node is just like a person in a conga line: they know who they are and they can only see the next person in line,
but they are not aware of the other people ahead or behind them.

In our code editor, we've created two nodes, Kitten and Puppy, and we've manually connected the Kitten node to the Puppy node.

Create a Cat and Dog node and manually add them to the line.

*/

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    var newNode = Node(element);
    if (!head) {
      head = newNode;
    } else {
      //if there is a head. since we are not working with a tail. this add will be similar to unshift where the head will change
      //newNode will point to head then we update head
      newNode.next = head;
      head = newNode;
      length += 1;
    }
    // Only change code above this line
  };
}

/* create a linked list*/

/*

Create a Linked List Class
Let's create a linked list class. Every linked list should start out with a few basic properties: a head (the first item in your list) and a length (number of items in your list).
Sometimes you'll see implementations of linked lists that incorporate a tail for the last element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list,
our length property should be incremented by one.

We'll want to have a way to add items to our linked list, so the first method we'll want to create is the add method.

If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we assign that node to the head of our linked list.

But what if our list already has one or more members? How do we add an element to the list? Recall that each node in a linked list has a next property. To add a node to the list,
find the last node in the list, and point that last node's next property at our new node. (Hint: you know you've reached the end of a linked list when a node's next property is null.)

Write an add method that assigns the first node you push to the linked list to the head; after that, whenever adding a node, every node should be referenced by the previous node's next property.

Note

Your list's length should increase by one every time an element is added to the linked list.

*/

/* create a linked list*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  getSize() {
    return this.length;
  }
  prepend(value) {
    /* we are adding to the beginning of our linked list: the head is always changing */
    var newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      // this.tail = this.head;
    } else {
      // this means this.head is not null;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  append(value) {
    /* since we adding to the end of our linked list: the tail is alays changing */
    var newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      // or
      // this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /*
  
  Remove Elements from a Linked List
The next important method that any implementation of a linked list will need is a remove method. This method should take the element we want to remove as an argument,
and then search the list to find and remove the node that contains that element.

Whenever we remove a node from a linked list, it's important that we don't accidentally orphan the rest of the list in doing so. Recall that every node's next property points to the node that follows it in the list.
If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's next property to the middle element's next property (which is the next node in the list!)

This might sound really confusing, so let's return to the conga line example so we have a good conceptual model. Picture yourself in a conga line, and the person directly in front of you leaves the line.
The person who just left the line no longer has her hands on anyone in line--and you no longer have your hands on the person that left. You step forward and put your hands on next person you see.

If the element we wish to remove is the head element, we reassign the head to the second node of the linked list.

Write a remove method that takes an element and removes it from the linked list.

Note: The length of the list should decrease by one every time an element is removed from the linked list.


  
  */
  shift() {
    /* removing from the beginning */
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      //or
      // this.tail = null;
    } else if (this.length > 1) {
      var oldHead = this.head;
      this.head = oldHead.next;
      oldHead.next = null;
      return oldHead;
    } else {
      return undefined;
    }
    this.length--;
  }
  pop() {
    /* removing from the end */
    /* this is if this.length is 0 or this.head/this.tail is falsy */
    if (!this.head) return undefined;
    /* this is if our linked list length is greater than 1*/
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    /* this is if our linked list length is equal or less than 1*/
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  get(index) {
    /* ["linked", "linked", "linked"]. length will be 3 */
    /*      0         1         2     counter */

    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    var counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    var found = this.append(index);

    if (found) {
      found.value = value;
      return true;
    } else {
      return false;
    }
  }
}

/* linked list */

var arr = [1, 2, 3, 4, 5, 6];
var arrLength = arr.length;
var index = 3;
var leftSide = arr.slice(0, index);
var rightSide = arr.slice(index + 1);

var testArr = [1, 2, 3, 4, 5, 6];
var testObj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

var obj = testArr.reduce(function arrToObj(
  buildingUp,
  currentValue,
  currIndex
) {
  buildingUp[currIndex] = currentValue;
  return buildingUp;
},
{});

for (let index = 0; index < testArr.length; index++) {
  obj[index] = testArr[index];
}

/***** object.keys() *****/

var ourObj = { a: 1, b: 2, c: 3 };
function objectKeys(objInput) {
  var ourResult = [];

  for (let key in objInput) {
    ourResult.push(key);
    // ourResult = [...ourResult, key];
  }
  return ourResult;
}

/***** object.keys() *****/

/***** object.values() *****/

function objectValues(objInput) {
  var result = [];

  for (let key in objInput) {
    var eachValue = objInput[key];
    result.push(eachValue);
    // result = [...result, eachValue];
  }
  return result;
}

/***** object.values() *****/

/***** object.entries() *****/

function objectEntries(objInput) {
  var result = [];

  for (let key in objInput) {
    var eachValue = objInput[key];
    var arrOfKeyValuePairs = [key, eachValue];
    result.push(arrOfKeyValuePairs);
    // result = [...result, arrOfKeyValuePairs];
  }
  return result;
}

/***** object.entries() *****/

function testingIdea() {
  var arrOfSubarrays = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
  ];

  function turnIntoStr(arrInput) {
    var arrOfStrings = arrInput.map(function useJoinMethod(subarray) {
      return subarray.join("");
    });
    console.log(arrOfStrings);
  }
}

function findLengthOfArr() {
  var result = [];
  let index = Math.floor(Math.random() * 100);

  if (!result[index]) {
    result[index] = [];
  }

  console.log(result[0]);

  return result;
}

function freqCounter(arrInput) {
  var freqCountObj = {};

  // for (let index = 0; index < arrInput.length; index++) {
  //   console.log(arrInput[index]);
  // }
  arrInput.forEach(function countUndefined(eachValue) {
    if (Array.isArray(eachValue)) {
      eachValue = "Array";
      freqCountObj[eachValue] = (arrInput[eachValue] || 0) + 1;
    }
    /***** our for loop/for each loop will only loop once *****/
    // if (!freqCountObj[eachValue]) {
    //   freqCountObj[eachValue] = (freqCountObj[eachValue] || 0) + 1;
    // }
  });

  return freqCountObj;
}
