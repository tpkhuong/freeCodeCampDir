/*

Find the Symmetric Difference
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
you must complete one operation at a time.
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/

function symmetricDifference(...listOfArr) {
  //return array contain only unique values
  //always comparing two arrays
  listOfArr.reduce(function getUniqueFromTwoArrs(buildingUp, currentValue) {
    var checkValuesInThisArr = [];
    return filterArr(buildingUp, currentValue);
  });

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
}

/***** recursion *****/

/***** recursion *****/
