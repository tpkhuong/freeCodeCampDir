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

function countingSheep(arrayOfSheep) {
  var result = arrayOfSheep.filter(function getPresentSheeps(eachValue) {
    if (typeof eachValue === "boolean") {
      return eachValue === true;
    }
  });

  return result.length;
}

/*
Convert number to reversed array of digits

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(numInput) {
  var result = [];
  var convertToStr = String(numInput);
  var arrOfNumInStrForm = convertToStr.split("");
  var lengthOfArr = arrOfNumInStrForm.length;

  // function recursiveLooping(arrInput, index = lengthOfArr - 1) {
  //   if (index < 0) {
  //     return;
  //   }
  //   var convertNumInStrBackToNumForm = Number(arrInput[index]);
  //   result.push(convertNumInStrBackToNumForm);
  //   recursiveLooping(arrInput, index - 1);
  // }
  function recursiveLooping(arrInput, index = 0) {
    if (index === lengthOfArr) {
      return [];
    }
    var convertedNumInStrBackToNumForm = Number(arrInput[index]);

    return recursiveLooping(arrInput, index + 1).concat([
      convertedNumInStrBackToNumForm,
    ]);
    //will return [7,9,5,8,4,3]
    // return [convertNumInStrBackToNumForm].concat(
    //   recursiveLooping(arrInput, index + 1)
    // );
    // will return [3, 4, 8, 5, 9, 7]
  }
  var ourResultArr = recursiveLooping(arrOfNumInStrForm);
  return ourResultArr;
}

/*
Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/

function zero(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 0;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 0, Number(valueInput)));
}

function one(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 1;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 1, Number(valueInput)));
}

function two(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 2;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 2, Number(valueInput)));
}

function three(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 3;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 3, Number(valueInput)));
}

function four(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 4;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 4, Number(valueInput)));
}

function five(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 5;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 5, Number(valueInput)));
}

function six(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 6;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 6, Number(valueInput)));
}

function seven(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 7;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 7, Number(valueInput)));
}

function eight(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 8;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 8, Number(valueInput)));
}

function nine(operatorAndInput) {
  if (operatorAndInput == undefined) {
    return 9;
  }

  const [arithmeticOperator, valueInput] = operatorAndInput.split(" ");

  return Math.floor(calculationFunc(arithmeticOperator, 9, Number(valueInput)));
}

// operations

function plus(input) {
  return `+ ${input}`;
}

function minus(input) {
  return `- ${input}`;
}

function times(input) {
  return `* ${input}`;
}

function dividedBy(input) {
  return `/ ${input}`;
}

function calculationFunc(arithmeticOperator, value1, value2) {
  // value1 will be based on the func number
  const operations = {
    "*": function () {
      return value1 * value2;
    },
    "/": function () {
      return value1 / value2;
    },
    "+": function () {
      return value1 + value2;
    },
    "-": function () {
      return value1 - value2;
    },
  };

  return operations[arithmeticOperator]();
}

// one solution

var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}

//seven(times(five()))

/*

var five = n(5);

five will be a func ref

function (op) {
    return op ? op(5) : 5;
  };

when we call it five() the parameter op will be undefined which is falsy so func will return 5

times(five()) will return a func ref

r parameter will be 5

function (l) {
    return l * 5;
  };

function times(r) {
  return function (l) {
    return l * 5;
  };
}

the outer seven(times(five()));

var seven = n(7);

seven(function (7) {
    return 7 * 5;
  };)

  this time op will be truthy

function (op) {
    return op ? op(5) : 5;
  };

  op parameter will be 

  function (7) {
    return 7 * 5;
  };


*/
