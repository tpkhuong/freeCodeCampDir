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

  if (text.length === 0) return 0;

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
  //check if the string passed in has numbers
  if (!arrOfNumbers) {
    recursiveHelper(arrOfLowerCaseLetters);
  } else {
    //if we get here it means there is number in our string
    let arrOfLowerCaseLetterAndNums;
    arrOfLowerCaseLetters
      ? ((arrOfLowerCaseLetterAndNums = [
          ...arrOfLowerCaseLetters,
          ...arrOfNumbers,
        ]),
        recursiveHelper(arrOfLowerCaseLetterAndNums))
      : recursiveHelper(arrOfNumbers);
  }

  function recursiveHelper(arrInput, index = 0) {
    var lengthOfArr = arrInput.length;
    if (lengthOfArr === index) {
      return;
    }

    var strChar = arrInput[index];
    //might not have to loop through freqCounter if we push any strChar that has a freqCounter[strChar] value greater than 1
    //we will add it to the result arr
    // if (freqCounter[strChar] > 1) {
    //   result.push(strChar);
    // }
    //ternary opeartor
    freqCounter[strChar] = (freqCounter[strChar] || 0) + 1;
    freqCounter[strChar] > 1 ? result.push(strChar) : null;
    recursiveHelper(arrInput, index + 1);
  }

  //return the char in the array that are duplicates
  // for (let eachKey in freqCounter) {
  //   var valueInCounter = freqCounter[eachKey];
  //   valueInCounter > 1 ? result.push(eachKey) : null;
  // }
  return result.length;
}

// const duplicateCount = (text) => {};
"aA11".match(/\d/gi);

/* Reversed Strings */

/* 
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  

*/

function reversedStr(text) {
  //iterative
  var arrOfStrings = text.split("");
  var arrOfReversedStr = [];
  var lengthOfStr = text.length;

  if (lengthOfStr <= 1) {
    return text;
  }

  for (let index = arrOfStrings.length - 1; index >= 0; index--) {
    var element = arrOfStrings[index];
    arrOfReversedStr.push(element);
  }

  return arrOfReversedStr.join("");
  // recursive
  function recursiveHelper(arrInput, index = lengthOfStr - 1) {
    if (0 > index) {
      return;
    }

    var charOfStr = arrInput[index];
    arrOfReversedStr.push(charOfStr);
    recursiveHelper(arrOfStrings, index - 1);
  }

  recursiveHelper(arrOfStrings);
  return arrOfReversedStr.join("");
}

/* 

Convert a Number to a String!

We need a function that can transform a number into a string.

What ways of achieving this do you know?
*/

function numberToString(num) {
  return typeof num === "number" ? num + "" : console.log("Not a number");
  return typeof num === "number" ? String(num) : console.log("Not a number");
}

/*

Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Even or Odd

*/

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/*
Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countingSheep(arrayOfSheep) {}
