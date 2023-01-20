/***** Symmetric Difference *****/

/*

Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
you must complete one operation at a time.
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

// [1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]

function symmetricDifference(...listOfArr) {
  //return array contain only unique values
  //always comparing two arrays
  var results = listOfArr.reduce(function getUniqueFromTwoArrs(
    buildingUp,
    currentValue
  ) {
    return twoLoopsVersion(buildingUp, currentValue);
  });

  function symmetricDifferenceTwoLoopsVersion(list1, list2) {
    // var copiedList2 = [...list2];
    var findUniqueList1 = list1.reduce(function getUnique(
      buildingUp,
      currentValue
    ) {
      //buildingUp is an arr
      //currentValue is the values in list1 which is 1 if the array is [1,2,3]
      //check if list2 has currentValue
      if (
        list2.indexOf(currentValue) == -1 &&
        buildingUp.indexOf(currentValue) == -1
      ) {
        return [...buildingUp, currentValue];
      }
      return buildingUp;
    },
    []);
    var findUniqueList2 = list2.reduce(function uniqueValues(
      buildingUp,
      currentValue
    ) {
      if (
        list1.indexOf(currentValue) == -1 &&
        buildingUp.indexOf(currentValue) == -1
      ) {
        return [...buildingUp, currentValue];
      }
      return buildingUp;
    },
    []);
    return [...findUniqueList1, ...findUniqueList2];
  }
  return results;
}

function notes() {
  function filterArr(list1, list2) {
    var copiedList2 = [...list2];
    var findUnique = list1.reduce(function getUnique(buildingUp, currentValue) {
      //buildingUp is an arr
      //currentValue is the values in list1 which is 1 if the array is [1,2,3]
      //check if list2 has currentValue
      if (copiedList2.indexOf(currentValue) == -1) {
        return [...buildingUp, currentValue];
      } else {
        var removeValueAtIndex = copiedList2.indexOf(currentValue);
        copiedList2.splice(removeValueAtIndex, 1);
        return buildingUp;
      }
    }, []);
    return [...findUnique, ...copiedList2];
  }
  function twoLoopsVersion(list1, list2) {
    var copiedList2 = [...list2];
    var findUniqueList1 = list1.reduce(function getUnique(
      buildingUp,
      currentValue
    ) {
      //buildingUp is an arr
      //currentValue is the values in list1 which is 1 if the array is [1,2,3]
      //check if list2 has currentValue
      if (copiedList2.indexOf(currentValue) == -1) {
        return [...buildingUp, currentValue];
      }
    },
    []);

    var findUniqueList2 = list2.reduce(function uniqueValues(
      buildingUp,
      currentValue
    ) {
      if (list1.indexOf(currentValue) != -1) {
        return [...buildingUp, currentValue];
      }
    },
    []);
    return [...findUniqueList1, ...findUniqueList2];
  }
}

/***** recursion *****/

/***** recursion *****/

/***** Symmetric Difference *****/

/***** Inventory Update *****/

/*

Inventory Update: 

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

*/

function updateInventory(curInv, newInv) {
  //nested loop version
  var copiedCurInv = [...curInv];
  var copiedNewInv = newInv.slice();
  //since we want to add unique items from both curInv and newInv, in our reduce method we want to remove the item from curInv if we find that item in newInv.
  //we want to return an array without that item
  //then we can concat the two arr into one then sort it by name
  var updatedStorage = copiedCurInv.reduce(function updateAndSort(
    buildingUp,
    currentValue
  ) {
    //currentValue is eachSubarray
    var [quantityNum, itemStr] = currentValue;
    var itemStrIsInSecondArr;
    copiedNewInv.forEach(function findItemInSecondArr(eachSubarray) {
      var [innerQuantity, innerItemStr] = eachSubarray;
      if (itemStr == innerItemStr) {
        itemStrIsInSecondArr = true;
      }
    });
    if (itemStrIsInSecondArr) {
      return buildingUp;
    } else {
      return [...buildingUp, currentValue];
    }
  },
  []);

  var combineUpdatedStorageNewInv = [...updatedStorage, ...copiedNewInv];

  combineUpdatedStorageNewInv.sort(function sortByItemStr(
    firstSubarr,
    secondSubarr
  ) {
    var [firstSubarrQuanity, firstSubarrItemStr] = firstSubarr;
    var [secondSubarrQuanity, secondSubarrItemStr] = secondSubarr;

    if (firstSubarrItemStr < secondSubarrItemStr) {
      return -1;
    }
    if (secondSubarrItemStr < firstSubarrItemStr) {
      return 1;
    }
    return 0;
  });

  return combineUpdatedStorageNewInv;
}

/***** difference approach to updateInventory without nested loops *****/

function updateInventoryUsingObj(currentInv, newInv) {
  var copiedCurrInv = [...currentInv];
  var copiedNewInv = newInv.slice();

  var objCurrInv = copiedCurrInv.reduce(function currInvConvertSubarrToSubobj(
    buildingUp,
    currentValue
  ) {
    var [quantityNumCurrInv, itemStrCurrInv] = currentValue;
    var eachSubObjCurrInv = { [itemStrCurrInv]: quantityNumCurrInv };

    //   return Object.assign(buildingUp, eachSubObjCurrInv);
    return Object.assign(buildingUp, {
      [itemStrCurrInv]: quantityNumCurrInv,
    });
  },
  {});

  var objNewInv = copiedNewInv.reduce(function newInvConvertSubarrToSubobj(
    buildingUp,
    currentValue
  ) {
    var [quantityNumNewInv, itemStrNewInv] = currentValue;
    var eachSubObjNewInv = { [itemStrNewInv]: quantityNumNewInv };

    return Object.assign(buildingUp, eachSubObjNewInv);
  },
  {});

  var combineCurrInvAndNewInv = Object.assign(objCurrInv, objNewInv);

  var arrOfSubarrays = Object.entries(combineCurrInvAndNewInv);

  var swapPositionObjValueWithObjKey = arrOfSubarrays.reduce(
    function swapValueWithKey(buildingUp, currentValue) {
      var [itemStr, quantityNum] = currentValue;

      return [...buildingUp, [quantityNum, itemStr]];
    },
    []
  );

  var copiedSwapArr = [...swapPositionObjValueWithObjKey];

  copiedSwapArr.sort(function sortSubarrays(firstSubarr, secondSubarr) {
    var [firstSubarrQuanity, firstSubarrItemStr] = firstSubarr;
    var [secondSubarrQuanity, secondSubarrItemStr] = secondSubarr;
    if (firstSubarrItemStr < secondSubarrItemStr) {
      return -1;
    }
    if (secondSubarrItemStr < firstSubarrItemStr) {
      return 1;
    }
    return 0;
  });

  return copiedSwapArr;
}

/***** difference approach to updateInventory without nested loops *****/

/***** Inventory Update *****/

/***** No Repeats Please *****/

/*

No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

function singlePermutation(strInput) {
  function swap(list, index1, index2) {
    return ([list[index1], list[index2]] = [list[index2], list[index1]]);
  }
}

function permutations(strInput) {
  var arrOfResults = [];
  var arrOfCharValues = strInput.split("");
  var freqCount = arrOfCharValues.reduce(function getFreq(
    buildingUp,
    currentValue
  ) {
    buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
    return buildingUp;
  },
  {});
  var checkLengthToPushIntoArr = strInput.length;

  recursivePermutations(arrOfCharValues, [], 0);
  function recursivePermutations(arrOfStrChars, addCharValueArr, ourIndex) {
    // var arrOfCharValues = [...strInput];
    var decisionTree = arrOfStrChars.slice();
    var copiedArrOfValuesToAddToResultArr = [...addCharValueArr];

    if (ourIndex == decisionTree.length) {
      return;
    } else {
      //for each recurPermutations call the length of each loop is correct
      for (let loopIndex = 0; loopIndex < decisionTree.length; loopIndex++) {
        // we have to keep track of the used strChar
        //what about repeated chars
        //have to make sure we also keep track of the strChar we added to the result/answer arr
        // let addStrChar = decisionTree.slice(loopIndex, loopIndex + 1);
        // addCharValueArr = [...addCharValueArr, ...addStrChar];
        // let indexOfCopiedChar = decisionTree.indexOf(...addStrChar);
        // let arrOfStrPassedToRecursiveClass = decisionTree.slice(
        //   indexOfCopiedChar + 1
        // );
        recursivePermutations(
          arrOfStrPassedToRecursiveClass,
          addCharValueArr,
          loopIndex
        );
        /* when we go back up the recursive tree we have to remove the already used strChar from the arr we are building with each recursive call */
      }
    }
  }
  console.log(arrOfResults);
}

function permutations(strInput) {
  var result = [];
  var arrOfStrChar = strInput.split("");
  var getArrLength = arrOfStrChar.length;

  function swapHelper(arrInput, indexOne, indexTwo) {
    return ([arrInput[indexOne], arrInput[indexTwo]] = [
      arrInput[indexTwo],
      arrInput[indexOne],
    ]);
  }

  heapPermutations(arrOfStrChar, getArrLength);
  function heapPermutations(heapArrOfStr, lengthOfArr) {
    var copiedHeapArr = [...heapArrOfStr];
    if (lengthOfArr == 1) {
      if (result.length == 0) {
        result = [[...copiedHeapArr]];
        return;
      } else {
        result = [...result, [...copiedHeapArr]];
        return;
      }
    }
    heapPermutations(heapArrOfStr, lengthOfArr - 1);
    for (let i = 0; i < lengthOfArr - 1; i++) {
      if (lengthOfArr % 2 != 0) {
        swapHelper(heapArrOfStr, 0, lengthOfArr - 1);
      } else {
        swapHelper(heapArrOfStr, i, lengthOfArr - 1);
      }
      heapPermutations(heapArrOfStr, lengthOfArr - 1);
    }
  }
  /***** result is our array with all the permutations, next we will find the permuations that have repeated strChar *****/
  /***** filter method *****/
  // var noRepeatStrCharFilterMethod = result.filter(
  //   function countTheNonRepeatedStrChar(eachSubarray) {
  //     // we want to compare currentValue with next value
  //     var ourBoolean = eachSubarray.every(function containsNoRepeat(
  //       eachValue,
  //       currIndex,
  //       list
  //     ) {
  //       if (list[currIndex + 1] == undefined && typeof eachValue == "string") {
  //         return true;
  //       }
  //       return eachValue != list[currIndex + 1];
  //     });
  //     return ourBoolean;
  //   }
  // );
  /***** filter method *****/
  /***** reduce method *****/

  var noRepeatStrChar = result.reduce(function countTheNonRepeatedStrChar(
    buildingUp,
    currentValue
  ) {
    var reduceBoolean = currentValue.some(function containsRepeatStrChar(
      eachValue,
      currIndex,
      list
    ) {
      return eachValue == list[currIndex + 1];
    });
    if (reduceBoolean) {
      return buildingUp;
    }
    return buildingUp.concat([currentValue]);
  },
  []);

  /***** reduce method *****/
  return result;
}

var firstArr = [1, 2, 3, 4];
var secondArr = [4, 5, 6, 7];
var result = [[...firstArr], [...secondArr]];
var thirdArr = [6, 7, 8, 9];

restul = [...result, [...thirdArr]];
/***** No Repeats Please *****/

/***** Pairwise *****/
/*
Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices.
Once an element has been used it cannot be reused to pair with another element.
For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

pairwise([0, 0, 0, 0, 1, 1], 1)

*/

var storeInnerFunc;

function pairwise(arrInput, sumInput) {
  //for repeat value keep track of the lowest index
  //want to use an obj when adding two pairs give us the total of sumInput save the value and its index in the original array.
  //keep track of repeated value
  //using reduce
  // using the visited/cached so we don't calculate the same value, we also satisfy having the lowest index of the value that equal sumInput
  var visited = {};
  function helperFunc() {
    var arrOfObj = arrInput.reduce(function findPairEqualToSum(
      buildingUp,
      currentValue,
      currIndex,
      list
    ) {
      var lastIndex = list.length - 1;
      if (currIndex == lastIndex) {
        return buildingUp;
      } else {
        if (!visited[currentValue]) {
          for (
            let loopIndex = currIndex + 1;
            loopIndex < list.length;
            loopIndex++
          ) {
            let ourCalcOfTwoPairNums = currentValue + list[loopIndex];
            if (ourCalcOfTwoPairNums == sumInput) {
              buildingUp = [
                ...buildingUp,
                {
                  firstIndex: currIndex,
                  secondIndex: loopIndex,
                  firstValue: currentValue,
                  secondValue: list[loopIndex],
                },
              ];
            }
          }
          visited[currentValue] = true;
          return buildingUp;
        } else {
          return buildingUp;
        }
      }
    },
    []);
    /***** arrOfObj will have the values that add up to sumInput with its corresponding index *****/
    /***** we just have to add the index *****/
    var sumOfIndices = arrOfObj.reduce(function addUpIndices(
      buildingUp,
      currentValue
    ) {
      //each currentValue is our obj
      var { firstIndex, secondIndex } = currentValue;
      buildingUp = buildingUp + firstIndex + secondIndex;
      return buildingUp;
    },
    0);
  }

  storeInnerFunc = helperFunc;
}
/***** Pairwise *****/

/***** implement bubble sort *****/

/*
Implement Bubble Sort
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array.
We will see several different methods to do this and learn some tradeoffs between these different approaches.
While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.
It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
*/

/***** implement bubble sort *****/

function bubbleSort(arrInput) {
  var copiedArr = [...arrInput];
  let noswap;
  for (let outerIndex = copiedArr.length; 0 < outerIndex; outerIndex--) {
    noswap = true;
    for (let innerIndex = 0; innerIndex < outerIndex - 1; innerIndex++) {
      let firstValue = copiedArr[innerIndex];
      let secondValue = copiedArr[innerIndex + 1];
      if (firstValue > secondValue) {
        swapHelper(copiedArr, innerIndex, innerIndex + 1);
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return copiedArr;
}

function swapHelper(arr, index1, index2) {
  return ([arr[index2], arr[index1]] = [arr[index1], arr[index2]]);
}
var unsortedArr = [7, 1, 5, 2, 3, 6];

/*

Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element.
It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

*/

function selectionSort(arrInput) {
  var copiedArr = [...arrInput];
  //outer loop will increase by 1 each iteration
  //inner loop we want to keep track of the index of the lowest value
  for (let outerIndex = 0; outerIndex < copiedArr.length; outerIndex++) {
    let lowestMin = outerIndex;
    for (
      let innerIndex = outerIndex + 1;
      innerIndex < copiedArr.length;
      innerIndex++
    ) {
      let innerValue = copiedArr[innerIndex];
      if (innerValue < copiedArr[lowestMin]) {
        lowestMin = innerIndex;
      }
    }
    if (lowestMin != outerIndex) {
      swapHelper(copiedArr, copiedArr[lowestMin], copiedArr[outerIndex]);
    }
  }
}

/*

Implement Insertion Sort
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list.
It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position.
It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

*/

function insertionSort(arrInput) {
  for (let outerIndex = 1; outerIndex < arrInput.length; outerIndex++) {
    let currValue = arrInput[outerIndex];
    //inner loop goes backwards
    //starting index will be 1 less than outerIndex
    for (
      let innerIndex = outerIndex - 1;
      0 <= innerIndex && arrInput[innerIndex] > currValue;
      innerIndex--
    ) {
      let innerLoopCurrValue = arrInput[innerIndex];
      arrInput[innerIndex + 1] = arrInput[innerIndex];
    }
    arrInput[innerIndex + 1] = currValue;
  }
}

/*

Implement Quick Sort
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value.
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return.
The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

*/

function quickSort(arrInput) {
  var copiedArr = [...arrInput];
  //when our arr length is 1 or 0 we have a sorted array.
  if (copiedArr.length < 1) return copiedArr;
  var lessThanPivotArr = [];
  var greaterThanPivotArr = [];

  var pivotValue = copiedArr.pop();

  for (let i = 0; i < copiedArr.length - 1; i++) {
    let currValue = arrInput[i];
    if (currValue < pivotValue) {
      lessThanPivotArr.push(currValue);
    } else {
      greaterThanPivotArr.push(currValue);
    }
  }

  return [
    ...quickSort(lessThanPivotArr),
    pivotValue,
    ...quickSort(greaterThanPivotArr),
  ];
}

function pivot(arrInput, start = 0, end = arrInput.length + 1) {
  var pivotVal = arrInput[start];
  var swapIndex = start;

  for (let i = start + 1; i < arrInput.length; i++) {
    let currValue = arrInput[i];
    if (pivotVal > currValue) {
      swapIndex++;
      swapHelper(arrInput, swapIndex, i);
    }
  }
  swapHelper(arrInput, swapIndex, start);
  return swapIndex;
}

function quickSort(arrInput, left = 0, right = arrInput.length - 1) {
  if (left < right) {
    let pivotValue = pivot(arr, left, right);
    quickSort(arrInput, left, pivotValue - 1);
    quickSort(arrInput, pivotValue + 1, right);
  }
  return arrInput;
}

function thankYou(strInput) {
  for (let i = 1; i < 0; i++) {
    console.log(``);
  }
}

/***** intersection recursive *****/
// [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]

function intersection(arrInput) {
  var visited = {};
  if (arrInput.length == 1) return arrInput[0];

  var firstArr = arrInput.shift();
  var secondArr = arrInput[0];
  var lastArr = arrInput[0 + 1];

  var resultArr = firstArr.reduce(function findInSecondArr(
    buildingUp,
    currentValue
  ) {
    if (!visited[currentValue] && secondArr.includes(currentValue)) {
      visited[currentValue] = true;
      return [...buildingUp, currentValue];
    }
    return buildingUp;
  },
  []);

  if (lastArr == undefined) {
    return intersection([resultArr]);
  } else {
    return intersection([resultArr, lastArr]);
  }
}

/***** intersection recursive *****/

/***** intersection recursive: another approach *****/
// [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
alert(
  "secRecur if result is empty add all the value of first subarray to result. when we are working with second subarray we will compare result with second subarray"
);
function intersectionRecur(arrInput) {
  //
  var lengthToMatchFreq = arrInput.length;
  var result = [];
  var freqCounter = {};

  //call firstRecursive
  firstRecursive(arrInput);
  function firstRecursive(innerArrInput, index = 0) {
    // [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
    var lengthOfArr = innerArrInput.length;
    if (index === lengthOfArr) {
      return;
    }

    var subarray = innerArrInput[index]; // [5, 10, 15, 20]
    secondRecursive(subarray); // [5, 10, 15, 20]
    firstRecursive(innerArrInput, index + 1);
  }
  function secondRecursive(secArrInput, index = 0) {
    // [5, 10, 15, 20]
    var lengthOfSecArr = secArrInput.length;

    if (index === lengthOfSecArr) {
      return;
    }

    var valueOfSubarray = secArrInput[index]; //5
    //freqCounter[5] = freqCounter[5] will be undefined so it will be 0 + 1 working with first subarray [5,10,15,20]
    freqCounter[valueOfSubarray] = (freqCounter[valueOfSubarray] || 0) + 1;
    secondRecursive(secArrInput, index + 1);
  }
  //use for in loop through freqCounter add the value that === lengthToMatchFreq;
  for (let eachKey in freqCounter) {
    let eachValue = freqCounter[eachKey];
    if (eachValue == lengthToMatchFreq) result.push(eachKey);
  }
  return result;
}

/***** intersection recursive: another approach *****/

function intersectionRecurAnotherway(arrInput) {
  // [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
  var placeHolder = [];
  var appearInAllSubarrays = [];

  function firstRecursive(firstArrInput, firstIndex = 0) {
    // [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
    var firstArrLength = firstArrInput.length;

    if (firstIndex === firstArrLength) {
      return;
    }

    var subarray = firstArrInput[index];

    alert(
      "we want to compare each value in secondRecursive with an array that has all the value in the current length of the array"
    );
    alert(
      "first array we work with all the value will appear in the array because our length is 1"
    );
    if (firstIndex === 0) {
      placeHolder = subarray;
    }
    secondRecursive(subarray); //[5,10,15,20];
  }
  //when we pass
  function secondRecursive(secondArrInput, secondIndex = 0) {
    //[5,10,15,20];
    var secondArrLength = secondArrInput.length;

    if (secondIndex === secondArrLength) {
      return;
    }

    var valueOfSubarray = secondArrInput[secondIndex];
  }
}

/***** intersection non-recursive *****/

function intersectionNonRecursive(...arraysInput) {
  var result = arraysInput.reduce(function findValuesInAllArr(
    buildingUp,
    currentValue,
    currIndex,
    list
  ) {
    var firstArr = buildingUp.filter(function includeInSecondArr(eachValue) {
      return currentValue.includes(eachValue);
    });

    var secondArr = currentValue.filter(function includeInFirstArr(eachValue) {
      return buildingUp.includes(eachValue);
    });

    var valuesInBothArr = [...firstArr, ...secondArr];
    var visited = {};

    return valuesInBothArr.reduce(function nonDuplicates(
      buildingUp,
      currentValue
    ) {
      if (!visited[currentValue]) {
        visited[currentValue] = true;
        return [...buildingUp, currentValue];
      }
      return buildingUp;
    },
    []);
  });
  return result;
}

/***** intersection non-recursive *****/

/***** mergeSort *****/

/*

Implement Merge Sort
Another common intermediate sorting algorithm is merge sort. Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array.
It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. 
But we'll start with only one array as input, so how do we get to two sorted arrays from that? 
Well, we can recursively divide the original input in two until we reach the base case of an array with one item. 
A single-item array is naturally sorted, so then we can start combining. 
This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

As an aside, this will be the last sorting algorithm we cover here. However, later in the section on tree data structures we will describe heap sort,
another efficient sorting method that requires a binary heap in its implementation.

Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function,
for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge. Good luck!

[1,2,3,4,5] = 2.5 => 3
[1,2,3,4,5].slice(0, 3) => [1,2,3]
[1,2,3,4,5].slice(3) => [4,5]

*/
/***** mergeSort *****/

function mergeSort(arrInput) {
  if (arrInput.length < 1) {
    return arrInput;
  }

  var middleIndex = Math.floor(arrInput.length / 2);
  var leftSide = arrInput.slice(0, middleIndex);
  var rightSide = arrInput.slice(middleIndex);
  var sortedLeft = mergeSort(leftSide);
  var sortedRight = mergeSort(rightSide);
  merge(sortedLeft, sortedRight);

  function merge(list1, list2) {
    var resultArr = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftIndex < list1.length && rightIndex < list2.length) {
      if (list1[leftIndex] <= list2[rightIndex]) {
        let list1Value = list1[leftIndex];
        resultArr = [...resultArr, list1Value];
        leftIndex++;
      } else {
        let list2Value = list2[rightIndex];
        resultArr = [...resultArr, list2Value];
        rightIndex++;
      }
    }

    /***** add values left in either list1 or list2 *****/

    while (leftIndex < list1.length) {
      let list1Value = list1[leftIndex];
      resultArr = [...resultArr, list1Value];
      leftIndex++;
    }

    while (rightIndex < list2.length) {
      let list2Value = list2[rightIndex];
      resultArr = [...resultArr, list2Value];
      rightIndex++;
    }

    /***** add values left in either list1 or list2 *****/
  }
}

/***** includes *****/

function includes(arrInput, valueInput, fromIndex = 0) {
  var result = false;

  for (let loopIndex = fromIndex; loopIndex < arrInput.length; loopIndex++) {
    if (arrInput[loopIndex] == valueInput) {
      result = true;
    }
  }

  return result;
}

function includesWithReduce(arrInput, valueInput) {
  var result = false;
  return arrInput.reduce(function findValue(buildingUp, currentValue) {
    if (currentValue == valueInput) {
      result = true;
      return result;
    }
    return result;
  }, result);
}

var pets = ["dogs", "cats", "snakes"];

includesWithReduce(pets, "cats"); //true
includesWithReduce(pets, "mouse"); //false

/***** includes *****/

/***** some and every *****/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

const array = [1, 2, 3, 4, 5];

function some(arr, callback) {
  //implement me
  var copiedArr = [...arr];
  return copiedArr.reduce(function containOneTrue(
    buildingUp,
    currentValue,
    index,
    list
  ) {
    if (callback(currentValue)) {
      copiedArr.splice(index);
      return true;
    }
    return buildingUp;
  },
  false);
}

function some(arr, callback) {
  return arr.reduce(function untilTrue(buildingUp, currentValue) {
    return callback(currentValue) ? true : buildingUp;
  }, false);
}

function some(array, callback) {
  return array.reduce((p, c) => p || callback(c), false);
}
function every(array, callback) {
  return array.reduce((p, c) => !p || callback(c), true);
}

// checks whether an item is even
const even = (item) => item % 2 === 0;

// some(array,even)
// expected output: true

function every(arr, callback) {
  // implement me
  var copiedArr = [...arr];
  return copiedArr.reduce(function containAllTrue(
    buildingUp,
    currentValue,
    index,
    list
  ) {
    if (callback(currentValue)) {
      return buildingUp;
    }
    copiedArr.splice(index);

    return false;
  },
  true);
}

function every(arr, callback) {
  return arr.reduce(function untilFalse(buildingUp, currentValue) {
    return !callback(currentValue) ? false : buildingUp;
  }, true);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 41, 29, 10, 13];

console.log(every(array1, isBelowThreshold));
// expected output: true

/***** some and every *****/

function some(arrInput, callback) {
  var result = false;
  // for (let index = 0; index < arrInput.length; index++) {
  //   let loopValue = arrInput[index];
  //   if (callback(loopValue)) {
  //     return true;
  //   }
  // }
  var index = 0;
  while (index < arrInput.length) {
    let eachValue = arrInput[index];
    if (callback(eachValue)) {
      return true;
    }
    index++;
  }
  return result;
}

/***** some and every *****/

/***** intersection *****/

function intersection(arrInput) {
  var result = [];
  // var copiedArr = [].concat(arrInput);
  // var copiedArr = arrInput.slice();
  var copiedArr = [...arrInput];

  var subarrayWithValueAppearOnce = copiedArr.reduce(
    function makeSubarrayOfValueAppearingOnce(
      buildingUp,
      currentValue,
      index,
      list
    ) {
      // var afterCurrValueArr = list[index + 1];
      // //when index + 1 == arr.length that will make nextArr undefined. when nextArr is undefined we want to return the value we want to return.
      // if (!afterCurrValueArr) return buildingUp;
      // //work with an array where the value appear once
      // var visitedFirstArr = {};
      // var visitedSecondArr = {};
      // var filterFirstArr = currentValue.filter(function appearOnce(eachValue) {
      //   if (!visitedFirstArr[eachValue]) {
      //     visitedFirstArr[eachValue] = true;
      //     return eachValue;
      //   }
      // });

      // var filterSecondArr = afterCurrValueArr.filter(function appearOnce(eachValue) {
      //   if (!visitedSecondArr[eachValue]) {
      //     visitedSecondArr[eachValue] = true;
      //     return eachValue;
      //   }
      // })
      /***** take original array loop through it for each subarray we want to take that array and make an array where the value appear once *****/
      var visited = {};
      var appearOnceArr = [];

      currentValue.forEach(function findValueAppearingOnce(eachValue) {
        if (!visited[eachValue]) {
          appearOnceArr.push(eachValue);
          visited[eachValue] = true;
        }
      });
      return [...buildingUp, [...appearOnceArr]];
      /***** take original array loop through it for each subarray we want to take that array and make an array where the value appear once *****/
    },
    []
  );

  var lengthForCheck = subarrayWithValueAppearOnce.length;
  // flat our arrays;
  var flatOurArr = subarrayWithValueAppearOnce.flat();
  var freqCounter = flatOurArr.reduce(function getFreq(
    buildingUp,
    currentValue
  ) {
    buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
    return buildingUp;
  },
  {});
  for (let eachKey in freqCounter) {
    let freqOfNum = freqCounter[eachKey];
    if (freqOfNum == lengthForCheck) {
      result.push(Number(eachKey));
    }
  }
  return result;
}

function intersection(...array){
  const result = [];
  const length = array.length;
  const arrayOfValues = array.flat();

  const objOfFreq = arrayOfValues.reduce(function addFreq(buildingUp, currentValue){
      buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
      return buildingUp;
  },{});

  for(let key in objOfFreq){
    let value = objOfFreq[key];

    if(value === length){
      result.push(key);
    }
  }

  return result;
}

// [[5, 10, 15,5,15, 20],[15, 88, 1, 5, 7,15,5],[15,5,1, 10, 15, 5, 20,15]]
//after running our reduce [[5, 10, 15, 20],[15, 88, 1, 5, 7],[15, 5, 1, 10, 20]]

function intersection(...array){
  // const result = [];
  const length = array.length;
  // const arrayOfValues = array.flat();

  const arrayOfObjAndArr = array.reduce(function findValuesInAllArray(buildingUp,currentValue,index){
    const freqCountObj = buildingUp[0];
    const result = buildingUp[1];
    const indexPlusOne = index + 1;
    // const valuesAppearOnceArray = [];
    const visitedObj = {}
    // check if our algorithm have seen value
    currentValue.forEach((value)=>{
      if(!visitedObj[value]){
        visitedObj[value] = true;
        // valuesAppearOnceArray.push(value);
        // freq count value
        freqCountObj[value] = (freqCountObj[value] || 0) + 1;
        // add value to array
        if(indexPlusOne == length){
          freqCountObj[value] == length ? result.push(value) : null;
        }
      };
    });

    return buildingUp;
  },[{},[]])

  return arrayOfObjAndArr[1];
}


/***** intersection *****/

/***** union *****/

function union(arrInput) {
  var copiedArr = [...arrInput];
  // var copiedArr = [].concat(arrInput);
  // var copiedArr = arrInput.slice();
  var flattenArr = copiedArr.flat();
  var visited = {};
  var result = flattenArr.reduce(function findUniqueValueInOrder(
    buildingUp,
    currentValue,
    index,
    list
  ) {
    if (!visited[currentValue]) {
      visited[currentValue] = true;
      return [...buildingUp, currentValue];
    }
    return buildingUp;
  },
  []);
  return result;
}

union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]);
union([
  [5, 10, 15],
  [15, 88, 1, 5, 7],
  [100, 15, 10, 1, 5],
]);

/***** union *****/

/***** union recursive *****/

function unionRecursive(arrInput) {}

/***** union recursive *****/

/***** code and coffee *****/

const suspectNames = [
  "Mr. Green",
  "Mrs. Peacock",
  "Prof. Plum",
  "Mrs. White",
  "Miss Scarlet",
  "Col. Mustard",
];

const weapons = [
  "Revolver",
  "Knife",
  "Lead Pipe",
  "Candlestick",
  "Rope",
  "Wrench",
];

// const rooms = [
//   "Billiard Room",
//   "Kitchen",
//   "Library",
//   "Conservatory",
//   "Hall",
//   "Dining Room",
// ];

function solveMystery(suspects, weapons, rooms) {
  function getMurderer() {
    return filter(suspects, (suspect) => {
      return suspect[0] !== String.fromCharCode(616 >> 3);
    });
  }

  function getWeapon() {
    return head(
      partition(weapons, (weapon) => {
        return weapon.length === (5 << 1) + 1;
      })
    );
  }

  function getRoom() {
    const room = rooms.sort((a, b) => {
      return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
    });
    return nthValue(room, 10 >> 1);
  }

  function displayWinningGuess(suspect, weapon, room) {
    document.write(`It was ${suspect} in the ${room} with a ${weapon}`);
  }

  return {
    getMurderer,
    getRoom,
    getWeapon,
    displayWinningGuess,
  };
}

const mystery = solveMystery(suspectNames, weapons, rooms);
const curriedWinningGuess = callLater(mystery.displayWinningGuess);

const murderers = mystery.getMurderer();
const withMurderer = curriedWinningGuess(head(murderers));

const weapon = mystery.getWeapon();
const withMurdererAndWeapon = withMurderer(weapon);

const room = mystery.getRoom();

const SPOILER = withMurdererAndWeapon(room);

// endsWith

function endsWith(string, searchString) {}

endsWith("Cats are the best!", "best!"); // => true
endsWith("Cats are the best!", "worst!"); // => false

var str = "chesse,meat,potatoes, peppers,milk";

//Regular High Order Functions

element.addEventListener("click", function () {
  console.log("Our evidence is updated");
});

const newClue = function (name) {
  const length = name.length;

  return function (weapon) {
    const clue = length + weapon.length;
    return !!(clue % 1);
  };
};

var clue = () => {
  const msg = "Help! I think i found a clue!";

  const logger = () => {
    console.log(msg);
  };

  setTimeout(logger, 1000);
  console.log("what happens first? this log or the help above?"); //this first because msg is inside func expression logger. logger is called in setTimeout()
};

function head(array) {
  return array[0];
}

// Implement nthValue :
// Gets the element at index n of array. If n is negative, the nth element from the end is returned.

// Definition: nthValue(array, number)

function nthValue(array, index) {
  if (array.length > 0) {
    if (index > 0) {
      //positive index
      return array[index];
    } else {
      //negative index
      return array[array.length + index]
    }
  } else {
    console.log("Empty Array");
  }
}

function _forEach(collection, callback) {
  for (let index = 0; index < collection.length; index++){
    let element = collection[index]
    callback(element, index, collection);
  }
}

function _map(collection, callback) {}

function _filter(collection, callback) {}

function _reduce(list, howToCombine, initialValue){
  var momoValue = initialValue;

  _forEach(list, function loopThoughList(value,index,list){
    if(!momoValue && index === 0){
      momoValue = value;
    }else{
      momoValue = howToCombine(momoValue,value);
    }
  });

  return momoValue;
}

// Prompt
// Implement a method, partition that creates an array of elements split into two groups, the first of which contains elements callback returns truthy for, the second of which contains elements callback returns falsey for. The callback is invoked with one argument: (value).

// Definition: partition(collection, callback)

function partition(collection, callback) {}

// Implement , callLater that returns a function that can be called later up to three times, with three arguments.

// Definition: callLater(callback)

function callLater(func) {}

function reverseString(strInput) {
  var result = [];
  var arrOfChars = strInput.split("");

  for (let index = arrOfChars.length - 1; index >= 0; index--){
    let element = arrOfChars[index];
    result.push(element);
  }

  return result.join("");
}

forEach([1, 2, 3, 4, 5, 6], function logStuff(value, index, list) {
  console.log(value)
});


const who = {
  name: "Mrs. White"
}

who.name;

const suspect = who.name;//assigning the value of who.name which is "Mrs. White" to the variable suspect

who.name = "Mrs. Green";

suspect;//still the string "Mrs. White"

suspect = "Mr. Green";//cant do this

suspect //still the string "Mrs. White";

who.story; //undefined;

/***** Object memory *****/

### 1. What's the output?
```
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
```
- A: Hello
- B: Hey!
- C: undefined
- D: ReferenceError
- E: TypeError

[solution](https://github.com/lydiahallie/javascript-questions#6-whats-the-output)

### 2. What's the output?
```
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```
- A: {}
- B: ReferenceError: greetign is not - defined
- C: undefined

[solution](https://github.com/lydiahallie/javascript-questions#9-whats-the-output)

### 3. What's the output?

```
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: You are an adult!
- B: You are still an adult.
- C: Hmm.. You don't have an age I guess

[solution](https://github.com/lydiahallie/javascript-questions#18-whats-the-output)

### 4. What's the output?
```
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```
- A: { a: "one", b: "two" }
- B: { b: "two", a: "three" }
- C: { a: "three", b: "two" }
- D: SyntaxError

[solution](https://github.com/lydiahallie/javascript-questions#25-whats-the-output)


### 5. What's the output?
```
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: 123
- B: 456
- C: undefined
- D: ReferenceError

[solution](https://github.com/lydiahallie/javascript-questions#29-whats-the-output)

### 6. What's the output?
```
let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
```
- A: null
- B: [null]
- C: [{}]
- D: [{ name: "Lydia" }] 

[solution](https://github.com/lydiahallie/javascript-questions#46-whats-the-output)

### Other good ones on this topic:
https://github.com/lydiahallie/javascript-questions#47-whats-the-output

https://github.com/lydiahallie/javascript-questions#47-whats-the-output

https://github.com/lydiahallie/javascript-questions#47-whats-the-output

---

This exercise is part of **JS Fundamentals: Objects, Arrays, and Functions by Bianca Gandolfo**.

- Watch the workshop on [Frontend Masters](https://frontendmasters.com/workshops/fundamentals-functional-js/)
- Read through the [course notes](https://coda.io/d/JS-Fundamentals-Objects-Arrays-and-Functions_dbWVmy2v9xL)
- Ask questions by joining Bianca's private community, [Code and Coffee](https://andcoffee.io)

```

/***** object version of Array push and pop *****/

function createArray() {
  const storage = {};
  console.log(this == window);//true
  return {
    length: 0,
    push: function(valueInput) {
      /* TODO */
      console.log(this == window);//false. the this will be whatever calls push()
      const currentIndex = this.length;
      //since we are not returning anything we want to use if else
      if (currentIndex === 0) {
        this[currentIndex] = valueInput;
      } else {
        this[currentIndex] = valueInput;
      }
      this.length++;
      //ternary operator
      currentIndex === 0 ? this[currentIndex] = valueInput : this[currentIndex] = valueInput;
      this.length++;
    },
    pop: function() { 
      /* TODO */
      const currentIndex = this.length;
      //we want to remove the key value pair and decrement the length
      //every time we add to our obj length will be increment
      //the next time we call push or pop length will be +1 more than the highest property/key in the obj
      //length = 0 storage[0] = valueInput then we increment length, length will be 1
      //length = 1 storage[1] = valueInput then we increment length, length will be 2
      if (currentIndex > 0) {
        delete this[currentIndex - 1];
      this.length--;
      }
    }
  };
}

const myArray = createArray();

myArray.push(11);
console.log(myArray);// myArray contains {0: 11}

myArray.push(12); 
console.log(myArray); // => {0: 11, 1: 12}

console.log(myArray.length === 2); // => returns 2

console.log(myArray.pop() === 12); // => returns 12
console.log(myArray.length === 1); // => returns 1

/***** object getValue and setValue *****/

// Prompt 1
// Implement a method, getValue that takes an object and key name and returns the value associated with that key or a default value if supplied.

// Definition: getValue(object, key, [defaultValue]) 

// Example Usage:
let who = {name: "Colonel Mustard"};

getValue(who, "name");
// => "Colonel Mustard"

getValue(who, "story", "We don't know yet.");
// => "We don’t know yet";

function getValue(object, key, defaultValue) {
  if (object[key]) {
    return object[key];
  } else {
    if (defaultValue) {
      return defaultValue;
    }
  }
}

// Prompt 2
// Implement setValue :
// Sets the value at property of object. If the property doesn't exist, it's created.
// Note: This method mutates the original object.

// Definition: setValue(object, key, value) 

// Example Usage:
// const who = {name: "Colonel Mustard"};

setValue(who, "name", "Miss Scarlett");

console.log(who);
// => {name: "Miss Scarlett"}

function setValue(object, key, value) {
  if (object[key] == undefined) {
    object[key] = value;
    return object[key];
  }
  object[key] = value;
  return object[key];
}

// String Contains

// Prompt 
// Implement a method, contains that takes and our string data structure and a value and returns true if the data structure contains the value or false if it does not.

// Definition: contains(string, value) 

// Example Usage:

const rooms = 'Billiard Room,Kitchen,Conservatory,Hall,Dining Room';
contains(rooms, "Library"); // => false

contains(rooms, "Hall"); // => true

// function contains(string, value) {
//   return string.includes(value);
// }

function contains(string, value) {
  var arrOfStr = string.split(',');
  //loop through array of strings
  let reassigningIndex;
  arrOfStr.forEach(function findIndex(eachString, index, list) {
    if(eachString === value) reassigningIndex = index;
  });
  if (reassigningIndex != undefined) {
    return true;
  }
  return false;
}

/** 
 * get rid of trail zeros in array
 * **/

function splitStr(str) {
  const arrOfValues = str.split("");
  return arrOfValues;
}

let arrOfStrings = splitStr();

const lengthOfArr = arrOfStrings.length;

let useIndexOfNonZero;

function getRidOfTrailZerosRecursive(arrInput, index) {
  // we will send in the right side of the decimal
  //and the right side does not contain all zeros
  let currentValue = arrInput[index];
  if (currentValue !== "0") {
    // each time this return statement is called it will 
    //return the index of that function call
    //once currentValue is not "0" it will return that index then the index will increase for each function call return
    /** 
     * assign the index to an identifier outside this recursive func
     * **/
    useIndexOfNonZero = index;
    return
  }

  getRidOfTrailZerosRecursive(arrInput, index - 1);
}

function binarySearch(array,value){
  var start = 0;
  var end = array.length - 1
  var middle = Math.floor((start + end) / 2);
  var guess = array[middle];

  while(start <= end && value !== guess){
    if(value < guess){
      end = middle - 1;
    }
    if(value > guess){
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2)
    guess = array[middle]
  };

  if(guess === value){
    return middle;
  }else{
    return -1;
  }
}

/** 
 * JavaScript Array includes() 
 * The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found.
write a function that takes in an array and value, return true if the array contains the value else return false.
* **/ 

// includes([1,2,3,4,5],5) returns true
// includes(["apple","orange","melo"],berry) returns false
// includes(["red","blue","white"],blue) returns true

/** 
 * Write a function, reverseString,  that reverses a string and returns it. The string to reverse is given as an argument in the function.
 * **/ 

/** 
 * reverseString("hello") should return "olleh".
reverseString("Howdy") should return "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
* **/

/**
 * Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] and return the index of x in the array. Consider array is 0 base index. 
 * **/ 

/** 
 * 
 * Input: arr[] = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170], x = 110
Output: 6
Explanation: Element x is present at index 6. 

Input: arr[] = {10, 20, 30, 40, 60, 110, 120, 130, 170}, x = 175
Output: -1
Explanation: Element x is not present in arr[].
* binarySearch([10, 20, 30, 50, 60, 80, 110, 130, 140, 170], 110) returns 6
* binarySearch([10, 20, 30, 40, 60, 110, 120, 130, 170], 175) returns -1
 * **/ 

/** 
 * Construct a function intersection that take in arrays as values and compares the arrays and returns a new array with elements found in all of the arrays passed into the function call.
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 * **/ 

/** 
 * Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single-item arrays to feed into merge.
 * **/ 

function merge(firstArray,secondArray){
  const result = [];

  var leftIndex = 0;
  var rightIndex = 0;

  while(leftIndex < firstArray.length && rightIndex < secondArray.length){
    if(firstArray[leftIndex] < secondArray[rightIndex]){
      result.push(firstArray[leftIndex]);
      leftIndex+=1
    }else{
      result.push(secondArray[rightIndex]);
      rightIndex+=1
    }
  }

  while(leftIndex < firstArray.length){
    result.push(firstArray[leftIndex]);
    leftIndex+=1
  }

  while(rightIndex < secondArray.length){
    result.push(secondArray[rightIndex]);
    rightIndex+=1
  }

  return result;
}

function mergeSort(array){
  if(array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);

  const leftSide = array.slice(0,middle);
  const rightSide = array.slice(middle);

  const sortedLeftside = mergeSort(leftSide);
  const sortedRightside = mergeSort(rightSide);

  return merge(sortedLeftside,sortedRightside);
}

/** 
 * mergeSort([12, 34, 11, 1, 54, 25, 67, 45])
 * returns [1, 11, 12, 25, 34, 45, 54, 67]
 * **/ 