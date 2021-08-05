/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
  //
  var result = [];
  // var arrOfStrChar = [...text]
  var freqCounter = {};

  var arrOfStrChar = text.split("");
  //lets make sure the array we pass into our recursive Func is working with lowerCase letters
  //using regex make two arrays. one with just letters and one with just numbers
  var arrOfLetters = text.match(/[a-zA-Z]/gi);
  var arrOfNumbers = text.match(/\d/gi);
  var arrOfLowerCaseLetters = arrOfLetters.map(function makeToLowerCase(
    eachChar
  ) {
    return eachChar.toLowerCase();
  });
  var arrOfLowerCaseLetterAndNums = [...arrOfLowerCaseLetters, ...arrOfNumbers];
  function recursiveHelper(arrInput, index = 0) {
    var lengthOfArr = arrInput.length;
    if (lengthOfArr === index) {
      return;
    }

    var strChar = arrInput[index];

    freqCounter[strChar] = (freqCounter[strChar] || 0) + 1;
    recursiveHelper(arrInput, index + 1);
  }
  recursiveHelper(arrOfLowerCaseLetterAndNums);
  //return the char in the array that are duplicates
  for (let eachKey in freqCounter) {
    var valueInCounter = freqCounter[eachKey];
    valueInCounter > 1 ? result.push(eachKey) : null;
  }
  return result.length;
}

// const duplicateCount = (text) => {};
"aA11".match(/\d/gi);
