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

  function twoLoopsVersion(list1, list2) {
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
  //   var freqCount = arrOfCharValues.reduce(function getFreq(
  //     buildingUp,
  //     currentValue
  //   ) {
  //     buildingUp[currentValue] = (buildingUp[currentValue] || 0) + 1;
  //     return buildingUp;
  //   },
  //   {});
  var checkLengthToPushIntoArr = strInput.length;

  recursivePermutations(arrOfCharValues, [], 0);
  function recursivePermutations(arrOfStrChars, addCharValueArr, ourIndex) {
    // var arrOfCharValues = [...strInput];
    var decisionTree = arrOfStrChars.slice();
    var copiedArrOfValuesToAddToResultArr = [...addCharValueArr];

    if (ourIndex == decisionTree.length) {
      return;
    } else {
      for (let loopIndex = 0; loopIndex < decisionTree.length; loopIndex++) {
        // we have to keep track of the used strChar
        let addStrChar = decisionTree.slice(loopIndex, loopIndex + 1);
        addCharValueArr = [...addCharValueArr, ...addStrChar];
        let indexOfCopiedChar = decisionTree.indexOf(...addStrChar);
        let arrOfStrPassedToRecursiveClass = decisionTree.slice(
          indexOfCopiedChar + 1
        );
        recursivePermutations(
          arrOfStrPassedToRecursiveClass,
          addCharValueArr,
          loopIndex
        );
        let whatCharIsThis = copiedArrOfValuesToAddToResultArr.pop();
        /* when we go back up the recursive tree we have to remove the already used strChar from the arr we are building with each recursive call */
      }
    }
  }
  console.log(arrOfResults);
}

/***** No Repeats Please *****/
