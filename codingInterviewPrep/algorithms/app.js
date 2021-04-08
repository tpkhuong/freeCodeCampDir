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
