/*
If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.
 Remember that everything to the right of the equals sign is evaluated first
*/
/*
String values are immutable:
cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed,
just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string
*/
/*
 scope refers to the visibility of variables.
 comparison operators in JavaScript. All of these operators return a boolean true or false value.
*/
/*
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first
*/
/*
switch statement:
case values are tested with strict equality (===)

*/
var header = document.querySelector("#header");
var navBar = document.querySelector(".nav-bar");
var skipLink = document.querySelector(".skip-link");
var openBurger = document.querySelector(".burger-open");
var h2Title = document.querySelector(".hero-title");
var headerElement = document.querySelector("#header");

function showNavBar(header, navBar, { classList, className, hostname, style }) {
  header.addEventListener("click", (event) => {
    navBar.classList.toggle("open");
    // navBar.style.left = 0;
    console.log(this);
  });
  console.log(
    `destructuring, ${classList}, ${className}, ${hostname}, ${style}`
  );
}

showNavBar(header, navBar, skipLink);

// btn.addEventListener("click", function slideRight(event) {
//   divAnimate.classList.toggle("slide");
// });
console.log(h2Title.classList[0], skipLink.classList[1], typeof h2Title);
console.dir(headerElement);
console.dir(skipLink);
console.log(openBurger, typeof openBurger);

// var btn = document.querySelector("button");
// var divEle = document.querySelector(".testing");

// function transRotate(btn, element) {
//   btn.addEventListener("click", function rotateLine(event) {
//     element.classList.toggle("rotate");
//   });
// }

// transRotate(btn, divEle);

var toggleBtn = document.querySelector(".toggle-btn");
var divToggle = document.querySelector(".toggle");

function moveHamburger(clickElement, animateElement) {
  clickElement.addEventListener("click", function animateBurger(event) {
    animateElement.classList.toggle("open");
  });
}

moveHamburger(toggleBtn, divToggle);

var btnElement = document.querySelector(".click");
var containerElement = document.querySelector(".container");

function learningStuff(btn, targetElement) {
  btn.addEventListener("click", function addClass(event) {
    targetElement.classList.toggle("active");
  });
}

learningStuff(btnElement, containerElement);

var myList = [];
function addToArray(ourString, ourNumber) {
  myList.push([ourString, ourNumber]);
  return myList;
}

function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();
  return item;
}

/* golf score */
/* prettier-ignore */
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if ((par == 1 && strokes == 1) || strokes == 1) {
    return names[0];
  }
  var sum;
  if (strokes > par) {
    sum = strokes - par;
    console.log(sum);
    if (par + 1 == strokes) {
      return names[4];
    } else if (par + 2 == strokes) {
      return names[5];
    } else {
      return names[6];
    }
  } else {
    sum = par - strokes;
    console.log(sum);
    /* prettier-ignore */
    if ((par > 1 && strokes > 1) && sum == 0) {
      return names[3];
    } else if (par - 1 == strokes) {
      return names[2];
    } else if (par - 2 == strokes || par - 3 == strokes) {
      return names[1];
    }
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
/*

multiple identical options in switch statements:
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output.

switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
*/

/*
When a return statement is reached, the execution of the current function stops and control returns to the calling location.
*/

/* ternary opeartor */

/*if (count <= 0) {
  return "" + count + "Hold"
} else {
  return "" + count + "Bet"
}*/

/*
condition ? expression-if-true : expression-if-false;
count <= 0 ? `- ${count} Hold` : `${count} Bet`;
*/
/*
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

ternary operator
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
}
*/
var count = 0;
var str = "";
function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
  }

  if (count == 0) {
    return count + " " + "Hold";
  } else if (count < 0) {
    return count + " " + "Hold";
  } else if (count > 0) {
    return count + " " + "Bet";
  }
}
/*
object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation
*/

/*
 check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine
 if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
*/

/*
The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing.
This means if condition starts as false, your loop will never execute.

The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.
*/
function sum(arr, n) {
  // Only change code below this line

  if (n <= 0) {
    return 0;
  }

  return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}

sum([2, 3, 4, 5], 3);
/*
sum([2,3,4,5], 3)
sum([2,3,4,5], 2) + arr[2];
sum([2,3,4,5], 1) + arr[1] => 3
sum([2,3,4,5], 0): this will return 0 then we + arr[0] which will be 2;

*/
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    let ourObj = contacts[i];
    if (ourObj.firstName == name && ourObj.hasOwnProperty(prop)) {
      return ourObj[prop];
    } else if (ourObj.firstName == name && !ourObj.hasOwnProperty(prop)) {
      return "No such property";
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

randomRange(2, 5);

/*
Math.floor(Math.random() * (5 - 2 + 1) + 2);
max number we can get is 5 because Math.random() will go from 0 to 4 (5(myMax)-2(myMin) + 1) but it won't include 4. just how Math.random() works. max we could get 3 then we + 2 giving us 5.
min number we can get is 2 because Math.random() we could get 0 to 4 but Math.random() won't include 4 so if we get 0 we will add 2 to that and that is our myMin.
*/

/* prettier-ignore */
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

/*
recursion array countdown
*/
function countdown(numInput) {
  //base case
  if (numInput < 1) return [];

  var result = countdown(numInput - 1);
  result.unshift(numInput);
  return result;
}

/*function countdown(5) {
  //base case
  if (5 < 1) return [];

  var result = countdown(5 - 1);
  result.unshift(5);
  return
}

function countdown(4) {
  //base case
  if (4 < 1) return [];

  var result = countdown(4 - 1);
  result.unshift(4);
  return
}

function countdown(3) {
  //base case
  if (3 < 1) return [];

  var result = countdown(3 - 1);
  result.unshift(3);
  return
}

function countdown(2) {
  //base case
  if (2 < 1) return [];

  var result = countdown(2 - 1);
  result.unshift(2);
  return
}

function countdown(1) {
  //base case
  if (1 < 1) return [];

  var result = countdown(1 - 1);
  result.unshift(1);
  return
}

function countdown(0) {
  //base case
  if (0 < 1) return [];

  var result = countdown(0 - 1);
  result.unshift(0);
  return
}*/

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) return [startNum];

  var result = rangeOfNumbers(startNum, endNum - 1);
  result.push(endNum);
  return result;
}

/*
developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
*/
/*
The default parameter kicks in when the argument is not specified (it is undefined)
*/

/*
spread operator: returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spreaded = ...arr; // will throw a syntax error
*/
/*
Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { age, email }} = user;
And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
*/

/*
const profileUpdate = ({ name, age, nationality, location }) => {
  do something with these fields 
}
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
*/

/*
It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
*/

/*
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.
This change could involve calculations, or even overwriting the previous value completely.
*/

/*
This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
*/

/*
import * as myMathModule from "./math_functions.js";
The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything.
The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property.
*/

/*
 export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
 Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const
*/

/*
Import a Default Export:
 The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.
*/

/*
When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one.
It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise
*/

/*
 promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise.
 The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail.
 These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
*/

/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request.
When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve
*/

/*
myPromise.then(result => {
  // do something with the result.
});
result comes from the argument given to the resolve method.
*/

/*** Regular Expressions ***/

/*
This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want is /yes|no/.
*/

/*
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "A", "B", and "C". Examples of lowercase are "a", "b", and "c".

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag
*/
/*
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');
*/
/*
To search or extract a pattern more than once, you can use the g flag.
*/
/*
Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex.
For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
*/
/*
search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
*/
/*
need to match a large range of characters (for example, every letter in the alphabet)
Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].
*/
/*
 These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/

/*
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row -
there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match
*/
/*
Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note
Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine
*/
/* 
^ match beginning of a string
$ match at the end of a string
closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].
This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

\W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
*/
/*
 digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine
 non-digits using a similar shortcut that uses an uppercase D instead.
*/
/*
Restrict Possible Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numeric characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3) Username letters can be lowercase and uppercase.

4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

/*
use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }).
You put two numbers between the curly brackets - for the lower and upper number of patterns
*/
/*
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element.
You can think of this symbol as saying the previous element is optional.
*/

/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ...
is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
*/
/*
Reuse Patterns Using Capture Groups
Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
*/
/*
search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.
*/
/*
Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters.
*/
/*
These issues generally come in three forms:

syntax errors that prevent a program from running
runtime errors when code fails to execute or has unexpected behavior
semantic (or logical) errors when code doesn't do what it's meant to.
*/
/*
debugging is a learnable skill that just requires a little patience and practice to master.
*/
/*
 if function A works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half.
 A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.
*/
/*
JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6), BigInt and one type for mutable items: Object.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them and continue coding.
*/
/*
Prevent Infinite Loops with a Valid Terminal Condition.
 programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached.
 One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition.
 Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    if (!subArray.includes(elem)) {
      newArr.push(subArray);
    }
    // if (subArray.indexOf(elem) == -1) {
    //   newArr.push(subArray);
    // }
  }
  // Only change code above this line
  return newArr;
}

/*** Access value in object dynamically ***/
/*
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

This code will evaluate the value stored in the selectedFood variable and return the value of that key in the foods object, or undefined if it is not present.
Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.
*/

function countOnline(userObj) {
  debugger;
  var countObj = {};
  for (let eachKey in userObj) {
    if (userObj[eachKey].online == true) {
      countObj.countFreq = (countObj.countFreq || 0) + 1;
    }
  }
  if (countObj.countFreq == undefined) return 0;
  return countObj.countFreq;
}

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};
user.data.hasOwnProperty(friends); //true
function addFriend(userObj, friend) {
  // Only change code below this line
  var addToArray = userObj.data.friends;
  addToArray.push(friend);
  return addToArray;
  // Only change code above this line
}
/*
computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks. Then, each chunk can be solved one by one.
For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results
*/
function reverseString(str) {
  var eachChar = [...str];
  // var reverseOrder = [];
  // for (let i = eachChar.length - 1; 0 <= i; i--){
  //   reverseOrder.push(eachChar[i]);
  // }
  var reverseOrder = eachChar.reverse();
  return reverseOrder.join("");
}

function memoize(func) {
  var cache = {};
  return function calcCacheValue(numInput) {
    if (cache[numInput]) {
      return cache[numInput];
    } else {
      var result = func(numInput);
      cache[numInput] = result;
      return cache[numInput];
    }
  };
}

var factorialize = memoize(function calcNum(numInput) {
  if (numInput < 2) return 1;

  return numInput * factorialize(numInput - 1);
});

function factorialize(num) {
  // if (num < 2) return 1;

  var total = 1;

  for (let i = num; 0 < i; i--) {
    total *= i;
  }
  return total;
}

function findLongestWordLength(str) {
  //update longest word
  var longestWord = 0;
  var arrayOfWords = str.split(" ");
  for (let eachWord of arrayOfWords) {
    longestWord = Math.max(longestWord, eachWord.length);
  }
  // arrayOfWords.forEach(function getLongestWord(word) {

  // });
  // for (let i = 0; i < arrayOfWords.length; i++){
  //   var eachWord = arrayOfWords[i];
  // }
  return longestWord;
}

function largestOfFour(arr) {
  //largest number in each array will be added to result. return result at the end
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    let eachSubarray = arr[i];
    let maxNum;
    // eachSubarray.forEach(function getMaxNumInSubArray(eachNumValue) {
    //   maxNum = Math.max(maxNum, eachNumValue);
    // });
    // for (let eachNumValue of eachSubarray) {
    //   maxNum = Math.max(maxNum, eachNumValue);
    // }
    for (let j = 0; j < eachSubarray.length; j++) {
      let eachNumValue = eachSubarray[j];
      let nextValue = eachSubarray[j + 1];

      if (maxNum == undefined) {
        maxNum = Math.max(eachNumValue, nextValue);
      } else {
        if (nextValue == undefined) break;
        maxNum = Math.max(maxNum, nextValue);
      }
      // if (maxNum == undefined || nextValue != undefined) {
      //   maxNum = Math.max(eachNumValue, nextValue);
      // }
    }
    result.push(maxNum);
  }
  return result;
}

function confirmEnding(str, target) {
  var arrayOfStrChar = str.toLowerCase().split("");
  var arrayOfTargetChar = target.toLowerCase().split("");
  //reverse the order of arrays
  var reverseStr = arrayOfStrChar.reverse();
  var reverseTarget = arrayOfTargetChar.reverse();
  //get length of target string
  var lengthOfTarget = target.length;
  //add true to an array if the char in both str and target matched and we want to cache/remember the value we added to the array.
  var cache = {
    arrayOfTrueValues: [],
  };
  //loop through shortest length word in the outer loop then loop the longer word in the inner loop
  //we are looping through the shortest length word first because we don't want to have to loop through the long string.
  //once we are done looping through the short word and the char in each words don't match we can break out of the inner loop or the longest word loop.

  //see if looping through the longest word using the length of the shortest word will work.
  reverseTarget.forEach(function findSameValue(currentChar) {
    for (let i = 0; i < reverseTarget.length; i++) {
      let eachCharOfRevStr = reverseStr[i];
      if (eachCharOfRevStr == currentChar && !cache[eachCharOfRevStr]) {
        cache.arrayOfTrueValues.push(Boolean(true));
        cache[currentChar] = true;
      }
    }
  });
  //then compare the length of the array with true values to the length of target.
  // if (arrayOfTrueValues.length == lengthOfTarget) return true;
  return cache.arrayOfTrueValues.length == lengthOfTarget ? true : false;
  /* our attempt with this solution didn't work. Try a different algorithm */
  /* 
  try again:

  reverseTarget.forEach(function findSameValue(currentChar) {
    for (let i = 0; i < reverseStr.length; i++) {
      let eachCharOfRevStr = reverseStr[i];
      if (eachCharOfRevStr == currentChar) {
        arrayOfTrueValues.push(Boolean(true));
      } else {
        break;
      }
    }
  });

  for (let i = arrayOfTargetChar.length - 1; 0 <= i; i--) {
    let eachCharOfTarget = arrayOfTargetChar[i];
    for (let j = arrayOfStrChar.length - 1; 0 <= j; j--) {
      let eachCharOfStr = arrayOfStrChar[j];
      if (eachCharOfStr == eachCharOfTarget) {
        arrayOfTrueValues.push(Boolean(true));
      } else {
        break;
      }
    }
  }

  var lastString = str.length - 1;
  if (str.includes(" ")) {
    let arrayOfStrings = str.split(" ");
    console.log(arrayOfStrings);
    if (arrayOfStrings[lastString] == target) {
      return true;
    }
  } else {
    let arrayOfChar = str.split("");
    console.log(arrayOfChar);
    if (arrayOfChar[lastString] == target) {
      return true;
    }
  }*/
}

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  //add str into an array num(parameter) times using a for loop. loop up to num(parameter) times
  var arrayOfStrings = [];
  for (let i = 0; i < num; i++) {
    arrayOfStrings.push(str);
  }
  //use join to concat string values in array to a single string.
  return arrayOfStrings.join("");
}

function truncateString(str, num) {
  var truncatedArray = [];
  //if num is greater than or equal to str.length return str.
  if (num >= str.length) return str;
  //we truncate the str
  var arrayOfStrChar = [...str];
  //using a for loop, loop up to num(parameter)
  for (let i = 0; i < num; i++) {
    let eachChar = arrayOfStrChar[i];
    truncatedArray.push(eachChar);
    // if (i == num - 1) {
    //   truncatedArray.push(`${eachChar}...`);
    // } else {
    //   truncatedArray.push(eachChar);
    // }
  }
  truncatedArray.push("...");
  return truncatedArray.join("");
}

function findElement(arr, func) {
  var result = [];

  arr.forEach(function trustTest(currentValue) {
    if (func(currentValue) == true) {
      result.push(currentValue);
      // result.push(currentValue);
    }
  });
  if (result.length == 0) return undefined;
  return result.shift();
  // for (let eachValue of arr) {
  //   if (func(eachValue) == true) {
  //     result.push(currentChar);
  //   }
  // };
  // return result;
}
/* use recursion */
function findElement(arr, func) {
  if (arr.length == 0) return [];
  var checkThisValue = arr.shift();
  if (func(checkThisValue) == true) {
    let result = findElement(arr, func);
    result.push(checkThisValue);
    return result;
  }

  // findElement(arr, func, returnArray);
  // if (returnArray.length == 1) {
  //   returnValue(returnArray);
  // }
  // function returnValue(ourArray) {
  //   return ourArray.shift();
  // }
}

findElement([1, 2, 3, 4], (num) => num % 2 == 0);

function booWho(bool) {
  if (typeof bool == "boolean") return true;
  return false;
}

function titleCase(str) {
  //add each char to this array
  var result = [];
  //lower case the whole string
  var arrayOfLowerCaseChar = str.toLowerCase().split("");
  //first char of the string should be uppercase and char followed by an " "
  var firstChar = arrayOfLowerCaseChar.shift();
  result.push(firstChar.toUpperCase());
  for (let i = 0; i < arrayOfLowerCaseChar.length; i++) {
    let eachChar = arrayOfLowerCaseChar[i];
    //check if value before is an " " if it is an empty " " uppercase currentValue
    if (arrayOfLowerCaseChar[i - 1] == " ") {
      //then push in to result array
      result.push(eachChar.toUpperCase());
    } else {
      result.push(eachChar);
    }
  }
  return result.join("");
}

function frankenSplice(arr1, arr2, n) {
  var copiedArr1 = [...arr1];
  var copiedArr2 = [...arr2];
  copiedArr2.splice(n, 0, ...copiedArr1);

  return copiedArr2;
}

function bouncer(arr) {
  //use filter method
  // var justTrueValues = arr.filter(function returnTrueValues(eachValue) {
  //   var falseValue = Boolean(eachValue);
  //   return falseValue !== false;
  // });
  //use reduce method
  var justTrueValues = arr.reduce(function getTrueValues(
    buildingUp,
    currentValue
  ) {
    var falseValue = Boolean(currentValue);
    if (falseValue !== false) {
      buildingUp.push(currentValue);
      return buildingUp;
    } else {
      return buildingUp;
    }
  },
  []);
  /* first attempte*/
  // for (let i = 0; i < arr.length; i++){
  //   let falseValue = Boolean(arr[i]);
  //   if ( falseValue === false) {
  //     arr.splice(i, 1);
  //   }
  // }
  return justTrueValues;
}

function getIndexToIns(arr, num) {
  if (arr.length == 0) return 0;
  var lowestIndex = 0;
  var sortedArray = arr.sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  for (let i = 0; i < sortedArray.length; i++) {
    // let beforeIndex = i - 1;
    // let beforeValue = sortedArray[beforeIndex];
    let currentValue = sortedArray[i];
    // let afterIndex = i + 1;
    // let afterValue = sortedArray[afterIndex];
    if (num <= currentValue) {
      lowestIndex = i;
      break;
    }
    if (lowestIndex == 0 && i == sortedArray.length - 1) {
      lowestIndex = sortedArray.length;
    }
  }
  return lowestIndex;
}

function mutation(arr) {
  //array we passed into our function has two strings.
  //return true if the first string contains all the characters of the second string.
  var firstStringChar = [...arr[0].toLowerCase()];
  var secondStringChar = [...arr[1].toLowerCase()];
  var uniqueCharOfSecondStr = [];
  for (let eachChar of secondStringChar) {
    if (!uniqueCharOfSecondStr.includes(eachChar)) {
      uniqueCharOfSecondStr.push(eachChar);
    }
  }

  var checkForMatchedChar = [];
  uniqueCharOfSecondStr.reduce(function findMatchChar(
    buildingUp,
    currentValue
  ) {
    if (!buildingUp[currentValue] && firstStringChar.includes(currentValue)) {
      buildingUp[currentValue] = true;
      checkForMatchedChar.push(currentValue);
    }
    return buildingUp;
  },
  {});
  return checkForMatchedChar.length == uniqueCharOfSecondStr.length
    ? true
    : false;
  /* first attempts
  secondStringChar.forEach(function findMatch(eachChar) {
    return firstStringChar.includes(eachChar) ? true : false;
  });
  
  */
}

function chunkArrayInGroups(arr, size) {
  //returning an array with subarrays each subarray's length will be the second argument passed into function call
  var result = [];
  var numberOfLoops = Math.floor(arr.length / size);
  //loop through length of array
  //when we call shift() on an array we remove the first value of that array. we modify the array in place.
  //use a for loop. i will start at 0 we stop when i is not less than size.
  //we should keep track of the length of the array that is passed into the function call.
  //when the length of that array is less than the size argument
  //we will push what is left in the array
  //we could use splice method
  /*
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
  */
  //using shift method in the forEach will update the length of arr
  // arr.forEach(function TODO(eachValue) {
  //   console.log(arr.length);
  //   console.log(arr.shift());
  // });
  //use reduce
  // arr.reduce(function addSubarray(buildingUp, currentValue) {

  // }, []);

  //for loop
  for (let i = 0; i < numberOfLoops; i++) {
    if (arr.length > size) {
      let addSubarray = arr.splice(0, size);
      result.push(addSubarray);
    }
  }

  if (arr.length > 0) {
    result.push(arr);
  }

  //while loop works
  while (arr.length >= size) {
    let addSubarray = arr.splice(0, size);
    result.push(addSubarray);
  }
  if (arr.length > 0) {
    result.push(arr);
  }

  //find a way to not alter the array passed in.
  return result;
}

/*** Object-Oriented Programming ***/
/*
At its core, software development solves a problem or achieves a result with computation.
The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.
*/
/*
These are all objects: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts
*/
/*
While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well.
In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.
*/
/*
Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator.
instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
*/
/*
name and numLegs are called own properties, because they are defined directly on the instance object.
That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties.
*/
/*
Use Prototype Properties to Reduce Duplicate Code
Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.
Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

You have now seen two kinds of properties: own properties and prototype properties.
Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
*/
/*
There is a special constructor property located on the object instances duck and beagle that were created
Note that the constructor property is a reference to the constructor function that created the instance.
The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.

Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
*/

/*
Change the Prototype to a New Object
Up until now you have been adding properties to the prototype individually:
A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/

function Dog() {
  name: "Deadpool";
}

Dog.prototype = {
  numLegs: 4,
  eat() {
    return "I like to eat";
  },
  sayHi() {
    return `my name is ${this.name}`;
  },
};

/*
Remember to Set the Constructor Property when Changing the Prototype
There is one crucial side effect of manually setting the prototype to a new object.

It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works
To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
*/
/*
Understand Where an Object’s Prototype Comes From
Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// returns true
Use isPrototypeOf to check the prototype of beagle.

from the original prototype to the instantiated object(created object)
*/

/*
Understand the Prototype Chain
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype); // returns true
How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

In this prototype chain, Bird is the supertype for duck, while duck is the subtype.

Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
*/
/*
Use Inheritance So You Don't Repeat Yourself
There's a principle in programming called Don't Repeat Yourself (DRY).

The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.
*/
/*** Object.create() ***/
/*
Inherit Behaviors from a Supertype
In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
This and the next challenge will cover how to reuse Animal's methods inside Bird and Dog without defining them again. It uses a technique called inheritance.
This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

let animal = new Animal();
There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);
Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object.
By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
*/
/*
Set the Child's Prototype to an Instance of the Parent
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
duck inherits all of Animal's properties, including the eat method.
*/
/*
Reset an Inherited Constructor Property
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}

*/
/*
you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};
It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype
using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
*/
/*
Use a Mixin to Add Common Behavior Between Unrelated Objects
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution.
Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
The flyMixin takes any object and gives it the fly method.
*/
/*
Use Closure to Protect Properties Within an Object from Being Modified Externally
In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

bird.name = "Duffy";
Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function.
This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

function Bird() {
  let hatchedEgg = 10; // private variable

  publicly available method that a bird object can use
this.getHatchedEggCount = function () {
  return hatchedEgg;
};
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg.
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount.In JavaScript, a function always has access to the context in which it was created.This is called closure.
*/
/*
Use an IIFE to Create a Module
An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object.
The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:
*/
/*** Functional Programming ***/
/*
Functional programming is an approach to software development based around the evaluation of functions.
Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
Functions have minimal side effects in the program
*/
/*
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
*/
/*
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value,
are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
*/
/*
In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.
*/
/*
Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.
*/
/*
One of the core principles of functional programming is to not change things. Changes lead to bugs.
It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.
*/
/*
One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect.
A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.
*/
var fixedValue = 4;

function incrementer() {
  // Only change code below this line
  var incrementWithOutSideEffect = fixedValue;
  incrementWithOutSideEffect += 1;

  return incrementWithOutSideEffect;
  // Only change code above this line
}

/*
Pass Arguments to Avoid External Dependence in a Function

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly.
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/

// The global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(ourList, bookName) {
  var copiedList = [...ourList];
  ourList.push(bookName);
  return copiedList;

  // Change code above this line
}

// Change code below this line
function remove(ourList, bookName) {
  var copiedList = [...ourList];
  var book_index = copiedList.indexOf(bookName);
  if (book_index >= 0) {
    copiedList.splice(book_index, 1);
    return copiedList;

    // Change code above this line
  }
}

/*
As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript,
which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().You should not use the built -in map method.The Array instance can be accessed in the myMap method using this.
*/

var rating = watchList.map(function arrayOfObj({
  Title: title,
  imdbRating: rating,
}) {
  return { title, rating };
});

function forEach(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i, list);
  }
}
Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Only change code below this line
  var copiedArray = [...s];
  for (let i = 0; i < copiedArray.length; i++) {
    newArray.push(callback(copiedArray[i], i, copiedArray));
  }
  // Only change code above this line
  return newArray;
};

var filteredList = watchList
  .map(function arrayOfObj({ Title: title, imdbRating: rating }) {
    return { title, rating };
  })
  .filter(function filterByRatings({ rating }) {
    var convertToNumber = Number(rating);
    return convertToNumber > 8;
  });

/*
oncatenation means to join items end to end. 
It returns a new array and does not mutate either of the original arrays.
*/

/*
Add Elements to the End of an Array Using concat Instead of push
Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays.
Compare concat to the push method. Push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:
*/
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  var result = original.concat(newItem);
  return result;

  // Only change code above this line
}

function getRating(watchList) {
  // Only change code below this line

  var ourRating = watchList.reduce(function arrayOfObj(
    buildingUp,
    { Director: director, imdbRating: rating },
    index,
    list
  ) {
    if (director == "Christopher Nolan") {
      buildingUp.push(Number(rating));
    }
    return buildingUp;
    // var convertToNum = rating;
  },
  []);
  var total = 0;

  ourRating.forEach(function calcRating(eachValue) {
    total += eachValue;
  });

  var averageRating = total / ourRating.length;
  /* testing with forEach */
  /* watchList.forEach(function testingStuff({ Genre: genre, imdbRating: rating }, index, list) {

    
    console.log(genre);
    console.log(rating)
    console.log(list[index]);//will give us each value in the array
  });*/
  // Only change code above this line
  return averageRating;
}

const squareList = (arr) => {
  // Only change code below this line
  //use Number.isInterger()
  /*
  squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36]
  */
  //use reduce
  var arrayOfInt = arr.reduce(function filterOurArray(
    buildingUp,
    currentValue
  ) {
    let stringIt = String(currentValue);
    if (!stringIt.includes(".") && currentValue > 0) {
      let squaredValue = currentValue ** 2;
      buildingUp.push(squaredValue);
    }
    // if (Number.isInteger(currentValue) && currentValue > 0) {
    //   let squaredValue = currentValue ** 2;
    //   buildingUp.push(squaredValue);
    // }
    return buildingUp;
  },
  []);
  return arrayOfInt;
  // Only change code above this line
};
/*
JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.
Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied,
the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b.
If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a.
If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.
*/
/*
Return a Sorted Array Without Changing the Original Array
A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place.
One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.
*/
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return arr.concat([]).sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // Only change code above this line
}

/*
Split a String into an Array Using the split Method

 if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

 join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
*/

function sentensify(str) {
  // Only change code below this line
  var ourString = str.split(/\W/);
  return ourString.join(" ");
  // Only change code above this line
}

function urlSlug(title) {
  //split at whitespace and lowercase our strings
  var modString = title.toLowerCase().split(" ");
  //use reduce iterate array, filter out empty strings. pass in empty array as initial value to reduce
  var filteredString = modString.reduce(function filterAndJoin(
    buildingUp,
    currentValue
  ) {
    if (currentValue !== "") {
      buildingUp.push(currentValue);
    }
    return buildingUp;
  },
  []);
  return filteredString.join("-");
}

/*
Introduction to Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
*/
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function (y) {
    return x + y;
  };
}

/*
This is useful in your program if you can't supply all the arguments to a function at one time.
You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
*/
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2));

/*
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10);
*/

function add(x, y) {
  // Only change code below this line

  // if (y == undefined) {
  //   return x;
  // } else {
  //   return function (z) {
  //     return x + y + z;
  //   };
  // }
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };

  // Only change code above this line
}

function sumAll(arr) {
  //our array has two numbers
  //find the sum of all the numbers between the two numbers including the two numbers(both inclusive)
  var minValue = Math.min(...arr);
  var maxValue = Math.max(...arr);
  var total = 0;
  for (let i = maxValue; minValue <= i; i--) {
    total += i;
  }
  return total;
}

function diffArray(arr1, arr2) {
  // find an algorithm that will work when both array have the same length
  // var shorterArray;
  // var longerArray;
  // if (arr1.length <= arr2.length) {
  //   shorterArray = arr1;
  //   longerArray = arr2;
  // } else {
  //   shorterArray = arr2;
  //   longerArray = arr1;
  // }

  // var result = longerArray.reduce(function appearOnce(
  //   buildingUp,
  //   currentValue
  // ) {
  //   if (!shorterArray.includes(currentValue)) {
  //     buildingUp.push(currentValue);
  //   }
  //   return buildingUp;
  // },
  // []);
  /*** another algorithm ***/

  /*var result = [];
  var valuesOfBothArrays = [...arr1, ...arr2];
  valuesOfBothArrays.reduce(function freqCounter(buildingUp, currentValue) {
    
    if()
    return buildingUp;
  },{});*/
  /*** loop both arrays at the same time ***/
  var copiedArr1 = [...arr1];
  var copiedArr2 = [...arr2];

  var uniqueArr1 = copiedArr1.reduce(function findUnique(
    buildingUp,
    currentValue
  ) {
    if (!copiedArr2.includes(currentValue)) {
      buildingUp.push(currentValue);
    }
    return buildingUp;
  },
  []);
  var uniqueArr2 = copiedArr2.reduce(function findUnique(
    buildingUp,
    currentValue
  ) {
    if (!copiedArr1.includes(currentValue)) {
      buildingUp.push(currentValue);
    }
    return buildingUp;
  },
  []);
  return [...uniqueArr1, ...uniqueArr2];
}

/*
destroyer([1, 2, 3, 1, 2, 3], 2, 3)
*/
function destroyer(arr, ...list) {
  var copiedArr = [...arr];
  var filteredArray = copiedArr.filter(function dontInclude(eachValue) {
    return !list.includes(eachValue);
  });
  console.log(filteredArray);
  return filteredArray;
}
/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
*/
function whatIsInAName(collection, source) {
  var arr = [];

  var keysOfSource = Object.keys(source);
  var arrOfKeyAndValuePairs = Object.entries(source);
  //filter by keys
  var objHasKeysOfSource = collection.filter(function filterTheArray(
    eachValue
  ) {
    // var firstKey = keysOfSource[0];
    // return eachValue.hasOwnProperty(firstKey);
    /*** USING NESTED LOOPS: looping through collections: eachValue is an object in the collection array ***/
    /*** then we use every function/method: we are looping though keysOfSource. an array of our properties/keys from source argument ***/
    /*** each iteration of our every function/method we are checking if our object(eachValue) in our collection array has the property/keys(eachKey(our parameter)) using the method .hasOwnProperty() ***/
    /*** if every function/method returns true our filter function/method will add eachValue(our object) in collections into an array because filter returns an array if the callback returns true.***/
    /*** our every method will only returns true if our object passes the test of returning true for each iteration of every method.***/
    /* no matter the number of keys in our source argument, our algorithm will check if our object has all of the keys from source argument.*/
    return keysOfSource.every(function objHasAllKeys(eachKey) {
      return eachValue.hasOwnProperty(eachKey);
    });
  });

  objHasKeysOfSource.reduce(function matchKeyAndValue(
    buildingUp,
    currentValue
  ) {
    /* if our every method returns true it means currentValue(each obj of the reduce iteration) has a key-value pair that patches the value
    of both subarray of arrOfKeyAndValuePairs which is an array of subarray. each subarray has two values. the first value is the key and the second value is the value.
    [[key,value], [key,value]] of the object source(that is passed into this function call).
    */
    var valueMatches = arrOfKeyAndValuePairs.every(function matchedValues(
      keyAndValuePair
    ) {
      let keyOfSubArray = keyAndValuePair[0];
      let valueOfSubArray = keyAndValuePair[1];
      return currentValue[keyOfSubArray] == valueOfSubArray;
    });
    if (valueMatches) {
      buildingUp.push(currentValue);
    }
    return buildingUp;
  },
  arr);

  /* first attempts(learning)
  //filter the objects in collection that has keys of the second argument.
  //if a key/property-value pair in one of those objects matches the key/property-value pair of the
  //second argument we want to push that object in to the array that our function will return

  // Only change code above this line
  // for (let i = 0; i < arrOfKeyAndValuePairs; i++){
    //   let eachSubarray = arrOfKeyAndValuePairs[i];
    //   let eachSubArrKey = eachSubarray[0];
    //   let eachSubArrValue = eachSubarray[1];
    //   if (currentValue[eachSubArrKey] == eachSubArrValue) {
    //     buildingUp.push(currentValue);
    //   }
    // };
    //loop again through collection once we know each object in this array include our key then filter by values
  // var filteredArray = objHasKeysOfSource.filter(function matchTheValue({
  //   last,
  // }) {
  //   var firstValue = valuesOfSource[0];
  //   return last == firstValue;
  // });
  // Only change code below this line
  // var { last } = source;
  // var numOfKeysInSource = keysOfSource.length;
  // var valuesOfSource = Object.values(source);
  */
  return arr;
}

function spinalCase(str) {
  var charsOfStr = [...str];
  var replaceTheseChar = [" ", "_"];
  var regex = /[A-Z]/g;
  var upperCases = str.match(regex);
  // var loweredCasedFirst = charsOfStr[0].toLowerCase();
  var result = [];
  for (let i = 1; i < charsOfStr.length; i++) {
    let currentChar = charsOfStr[i];
    let nextChar = charsOfStr[i + 1];
    if (replaceTheseChar.includes(currentChar)) {
      result.push(currentChar.replace(currentChar, "-"));
    } else if (upperCases.includes(nextChar)) {
      result.push(currentChar);
      result.push("-");
    } else if (upperCases.includes(currentChar)) {
      result.push(currentChar.toLowerCase());
    } else {
      result.push(currentChar);
    }
  }
  return result.join("");
}
/*
translatePigLatin("schwartz")
*/
function translatePigLatin(str) {
  var arrayOfChar = [...str];
  var vowels = ["a", "e", "i", "o", "u"];
  var startIndex;
  var endIndex;
  var beginningStr;
  var endingStr;

  for (let i = 0; i < arrayOfChar.length; i++) {
    var eachChar = arrayOfChar[i];
    if (vowels.includes(arrayOfChar[0])) {
      arrayOfChar.push("way");
      return arrayOfChar.join("");
    }

    if (!vowels.includes(eachChar) && startIndex == undefined) {
      startIndex = i;
    }
    if (vowels.includes(eachChar) && endIndex == undefined) {
      endIndex = i;
      break;
    }
  }
  if (startIndex != undefined && endIndex == undefined) {
    arrayOfChar.push("ay");
    return arrayOfChar.slice(startIndex).join("");
  } else {
    beginningStr = arrayOfChar.slice(startIndex, endIndex);
    endingStr = arrayOfChar.slice(endIndex);
    return [...endingStr, ...beginningStr, "ay"].join("");
  }
}

function myReplace(str, before, after) {
  // var regex = /[A-Z]/g;
  // var upperCases = before.match(regex);
  //split the string at spaces
  var copyOfStr = str;
  var splittedStr = copyOfStr.split(" ");
  //find index of before param in str
  var findIndexOfBeforeParam = splittedStr.indexOf(before);
  //local identifiers/variables
  var copyOfAfterParam = after;
  var firstCharOfBeforeParam = before[0];
  var rebuiltAfterParam;
  //check if first char in before str is upper case
  if (firstCharOfBeforeParam == firstCharOfBeforeParam.toUpperCase()) {
    let afterFirstChar = copyOfAfterParam.slice(1);
    let firstCharOfAfterParam = copyOfAfterParam[0].toUpperCase();
    rebuiltAfterParam = [...firstCharOfAfterParam, ...afterFirstChar].join("");
    //find and replace when first char of before param is uppercase
    splittedStr.splice(findIndexOfBeforeParam, 1, rebuiltAfterParam);
    return splittedStr.join(" ");
  } else {
    var loweredCasedOfAfterParam = copyOfAfterParam.toLowerCase();
    splittedStr.splice(findIndexOfBeforeParam, 1, loweredCasedOfAfterParam);
    return splittedStr.join(" ");
  }
}

function pairElement(str) {
  var splitTheStr = str.split("");
  //use reduce
  var arrOfSubarrays = splitTheStr.reduce(function checkingAndAddPairElements(
    buildingUp,
    currentValue
  ) {
    switch (currentValue) {
      case "A":
        buildingUp.push([currentValue, "T"]);
        break;
      case "T":
        buildingUp.push([currentValue, "A"]);
        break;
      case "C":
        buildingUp.push([currentValue, "G"]);
        break;
      case "G":
        buildingUp.push([currentValue, "C"]);
        break;
    }
    return buildingUp;
  },
  []);
  return arrOfSubarrays;
}

function fearNotLetter(str) {
  var splitStr = str.split("");
  var missingCharCode;
  var afterCharCode;
  // var regex = /[a-z]/g;
  // var allLetters = str.match(regex);
  // var containAllLetters = splitStr.every(function checkForTrue(eachChar) {
  //   return allLetters.includes(eachChar);
  // });
  // if (containAllLetters == true) return undefined;
  //get each character charcode
  //use for loop to keep track of two charCodes
  // for (let i = 1; i < splitStr.length; i++) {
  //   //currentcode = 98 but beforeCharCode is 96 we want to return charFromCode 97
  //   let beforeCharCode = splitStr[i - 1].charCodeAt();
  //   let currentCharCode = splitStr[i].charCodeAt();
  //   if (beforeCharCode != currentCharCode - 1) {
  //     missingCharCode = currentCharCode - 1;
  //   }
  // }
  //another way
  for (let i = 0; i <= splitStr.length - 2; i++) {
    afterCharCode = splitStr[i + 1].charCodeAt();
    let currentCharCode = splitStr[i].charCodeAt();
    if (afterCharCode != currentCharCode + 1) {
      missingCharCode = currentCharCode + 1;
    }
  }
  if (missingCharCode == undefined) {
    return undefined;
  } else {
    return String.fromCharCode(missingCharCode);
  }
}

//using rest/gather operator
function uniteUnique(...arr) {
  var result = [];
  var listOfValues = arr.flat();
  listOfValues.reduce(function findUniqueValues(buildingUp, currentValue) {
    if (!buildingUp[currentValue]) {
      result.push(currentValue);
      buildingUp[currentValue] = true;
    }
    return buildingUp;
  }, {});
  return result;
}

//using argument keyword then using Array.from() to turn argument array like into an array so we can use array methods.
function uniteUnique(arr) {
  var result = [];
  var makeArray = Array.from(arguments);
  var listOfValues = makeArray.flat();
  listOfValues.reduce(function findUniqueValues(buildingUp, currentValue) {
    if (!buildingUp[currentValue]) {
      result.push(currentValue);
      buildingUp[currentValue] = true;
    }
    return buildingUp;
  }, {});
  return result;
}

function convertHTML(str) {
  var splitOutString = str.split("");

  var result = splitOutString.reduce(function findAndReplace(
    buildingUp,
    currentValue
  ) {
    switch (currentValue) {
      case "&":
        buildingUp.push("&amp;");
        break;
      case "<":
        buildingUp.push("&lt;");
        break;
      case ">":
        buildingUp.push("&gt;");
        break;
      case '"':
        buildingUp.push("&quot;");
        break;
      case "'":
        buildingUp.push("&apos;s");
        break;
      default:
        buildingUp.push(currentValue);
    }
    return buildingUp;
  },
  []);

  return result.join("");
}

/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/
/*
recursive
function memoize(ourFunc) {
  var cachedValues = {};
  var sumOfOddsNum = 0;
  return function calcFibValues(numInput) {
    if (cachedValues[numInput]) {
      return cachedValues[numInput];
    } else {
      let result = ourFunc(numInput);
      cachedValues[numInput] = result;
      return cachedValues[numInput];
    }
  };
}

var fibsRecursive = memoize(function rememberValue(numInput) {
  if (numInput <= 2) return 1;
  return fibsRecursive(numInput - 1) + fibsRecursive(numInput - 2);
});*/

function sumFibs(num) {
  var fibValues = [1, 1, 2];
  for (let i = 3; i < num; i++) {
    fibValues[i] = fibValues[i - 1] + fibValues[i - 2];
  }
  var addUpOddValues = fibValues.reduce(function addOddValues(
    buildingUp,
    currentValue
  ) {
    if (currentValue % 2 != 0 && currentValue <= num) {
      return (buildingUp += currentValue);
    } else {
      return buildingUp;
    }
  },
  0);
  return addUpOddValues;
}

function sumPrimes(num) {
  /* keep this
  // if (currentNumber % 2 != 0 && currentNumber % lastAddedPrimeNum != 0) {
  //   ourPrimeNumbers.push(currentNumber);
  // }
  // var keepTrackOfLength = ourPrimeNumbers.length;
  // let lastAddedPrimeNum = ourPrimeNumbers[keepTrackOfLength - 1];
  */
  //prime number is a whole number greater than 1 with exactly two divisors: 1 and itself
  //keep track of prime numbers [2,3,5,7]
  /*
  9 % 8; 9 % 7; 9 % 6; 9 % 5; 9 % 4; 9 % 2 will not != to 0. these will return true
  9 % 3 this will == 0 this will return false.
  */
  var ourPrimeNumbers = [2];
  //find prime numbers
  var sumOfPrimeNums = 0;
  for (let i = 3; i <= num; i++) {
    let currentNumber = i;
    //in our every method we are checking if currentNumber is not divisible by every value in our primeNums array
    //if every method returns false it means our currentNumber is divisible by one of the prime number.
    //we know a prime number is divisible by 1 and itself so if our currentNumber is divisible by one of the num in our prime array these it is not a prime number.
    //once our every method returns false it stops loops.this will check if the currentValue is divisible by 2 if it is our every method will stop its loop.
    //we only add the currentNumber to our prime if it is divisible by itself and our every method returns true.
    let currNumIsDivisibleByOneOfVal = ourPrimeNumbers.every(
      function ifNumIsDivisible(eachPrime) {
        //once our conditional returns false our every method will stop looping.
        //when our every method returns true it means the currentValue is not divisible by 2 and any of the prime numbers.
        return currentNumber % eachPrime != 0;
      }
    );
    if (currentNumber % currentNumber == 0 && currNumIsDivisibleByOneOfVal) {
      ourPrimeNumbers.push(currentNumber);
    }
    //use some if current number is divisible by a number in our array is is not a prime.
  }

  return ourPrimeNumbers.reduce(function getSumOfPrime(
    buildingUp,
    currentValue
  ) {
    return (buildingUp += currentValue);
  },
  sumOfPrimeNums);
}
//1 * 2 * 3
//10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10
function smallestCommons(arr) {
  //[18,19,20,21,22,23]
  //make an array of numbers from the lowest number to highest number of array
  var ourArray = [];
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    ourArray.push(i);
  }

  var calcSmallestCommons = ourArray.reduce(function lowestCommonMultiples(
    buildingUp,
    currentValue
  ) {
    //lcm(a,b) = (a * b) / gcf(a,b).
    //a is the value we want to "remember"/saved/passed to for the next iteration.
    //first iteration a will be buildingUp and b will always be currentValue.
    //lcm will be 'saved' for the next iteration.
    var greatCommonMulti = greaterCommonFactor(buildingUp, currentValue);
    var lowCommonMulti = (buildingUp * currentValue) / greatCommonMulti;
    // var lowCommonMulti = (buildingUp * currentValue) / greaterCommonFactor(buildingUp, currentValue);
    return lowCommonMulti;
  });
  return calcSmallestCommons;

  /*** Helper functions ***/
  function greaterCommonFactor(firstNum, secondNum) {
    //ALWAYS divide larger number by smaller number between b and remainder
    //we pass in a=263340, b = 23, r will be undefined for first iteration
    var remainder;
    var min = Math.min(firstNum, secondNum);
    var max = Math.max(firstNum, secondNum);
    /* euclid's algorithm to find greaterCommonFactor
    263340 ÷ 23 = 11449 R 13    (263340 = 11449 × 23 + 13)
    first iteration: when we enter our while loop remainer is undefined. max is 263340 min is 23 then we calculate remainder in our while loop. 
    after the first iteration: remainder will be 13 then we get the max and min between min and remainder. 
    before we enter the second iteration we check is remainder(13) !== 0 which is true we enter our while loop
    23 ÷ 13 = 1 R 10    (23 = 1 × 13 + 10)
  
    13 ÷ 10 = 1 R 3    (13 = 1 × 10 + 3)
  
    10 ÷ 3 = 3 R 1    (10 = 3 × 3 + 1)
  last iteration: max is 3 min is 1 which will give us a remainder of 0 then we get the max and min between 1 and 0. max will 1 and min will be 0
    3 ÷ 1 = 3 R 0
    then our while loop will check is remainder(0) !== 0 this will return false because remainder is 0
    When remainder R = 0, the GCF is the divisor, b, in the last equation. GCF = 1.
    in our last iteration the GCF is the divisor b which is max between min and remainer. which is 1 in this case.
    */
    while (remainder !== 0) {
      //after the first iteration remainder will be largest number between firstNum value and secondNum value dividing that number with the smallest number between the two.
      //then we find the largest and smallest number between min and remainder.
      //our loop will keep looping until remainder returns 0. our variables of min and max have to be outside of the while loop
      //we need the updated values of min and remainder.
      remainder = max % min;
      max = Math.max(min, remainder);
      min = Math.min(min, remainder);
      //the greaterCommonFactor is the b of the last iteration which is max in our calculation.
    }
    return max;
  }
}

function dropElements(arr, func) {
  //loop through array.
  //once our func(callback) returns true copy the array start at the index of the value that return true to the end of the array.
  //if we use .shift() we mutate the array but we can return the array once func(ourValue) returns true. we can use forEach
  //lets use for loop
  // var returnThisArray;
  var copiedOfArray = [...arr];
  for (let i = 0; i < copiedOfArray.length; i++) {
    let ourValue = copiedOfArray[i];
    if (func(ourValue) == true) {
      return copiedOfArray.slice(i);
    }
    if (func(ourValue) == false && i == copiedOfArray.length - 1) {
      return [];
    }
  }
}

function flatArrays(arr) {
  //flatten an array
  //we can use Array.isArray to check if our value is an array.
  /*
  find index of array
  var getIndexOfArray = arrInput.findIndex(function findArray(eachValue) {
    return Array.isArray(eachValue);
  });
  
  */
  var result = arr.reduce(function flatArray(buildingUp, currentValue) {
    if (Array.isArray(currentValue)) {
      return buildingUp.concat(flatArrays(currentValue));
    } else {
      let makeArray = [currentValue];
      return buildingUp.concat(makeArray);
    }
  }, []);
  //when currentValue is an array we return the value of calling reduce on that array. our flatArrays returns the value of calling reduce on that array. our result identifier/variable
  //our initialValue of an empty array [] is IMPORTANT.
  //we want to return an array with one value in it so that this line:
  //building.concat(return value of calling flatArrays will be an array with a length of 1. [2]) then this line will concat the return array into buildingUp paramater
  //which should be an array. the buildingUp parameter of our reduce method is always waiting for the return value of calling flatArrays if currentValue is an array.
  //our function with reduce when currentValue is an array will call itself until the array length is 1 because we use concat method
  return result;
  //we need to return an array. can we use reduce?
  //if we use recursion what is our base case and how do we hit that based case? our recursive function could be a helper functio
  /*below situation occurs when we used pop() method and removed from the end. we attempting to remove from the beginning.
      flatArrays([1, [2], [3, [[4]]]]);
      when we passed in arr our top level array after calling pop method on arr our removedValue will be [3, [[4]]]
      our arr will be [1,[2]]
      [4].findIndex(function findArray(eachValue) {
        return Array.isArray(eachValue);
      }); this returns -1  
      */
  //helper function
}
/*
7   6  5  4  3 2 1 0
128 64 32 16 8 4 2 1
0   1  0  0  0 0 0 1
64 + 1

*/
function binaryAgent(str) {
  //we need to convert each binary into a number then convert that number in to a string using String.fromCharCode()
  //use reduce?
  //Math.pow(2,0)
  var binaryCode = str.split(" ");
  var arrayOfStrings = binaryCode.reduce(function convertCodeToLetterStr(
    buildingUp,
    currentValue
  ) {
    var splitBinary = currentValue.split("");
    var charCode = convertBinaryToCharCode(splitBinary);
    buildingUp.push(String.fromCharCode(charCode));
    return buildingUp;
  },
  []);

  function convertBinaryToCharCode(arrInput) {
    var total = 0;
    for (let ourIndex = 0; ourIndex < arrInput.length; ourIndex++) {
      let eachCode = arrInput[ourIndex];
      if (eachCode == 1) {
        let exponent;
        switch (ourIndex) {
          case 0:
            exponent = ourIndex + 7;
            break;
          case 1:
            exponent = ourIndex + 5;
            break;
          case 2:
            exponent = ourIndex + 3;
            break;
          case 3:
            exponent = ourIndex + 1;
            break;
          case 4:
            exponent = ourIndex - 1;
            break;
          case 5:
            exponent = ourIndex - 3;
            break;
          case 6:
            exponent = ourIndex - 5;
            break;
          case 7:
            exponent = ourIndex - 7;
            break;
        }
        let addUp = Math.pow(2, exponent);
        total += addUp;
      }
    }
    return total;
  }
  return arrayOfStrings.join("");
}

function truthCheck(collection, pre) {
  //first check if objects in collection has second argument.
  var allObjContainSecParam = collection.every(function findKey(eachObj) {
    return eachObj.hasOwnProperty(pre);
  });

  //if allObjContainSecParam returns true we check if the value of pre in the collection ARE ALL truthy
  //seven falsy values are: false, "", 0, -0, undefined, null, NaN
  if (allObjContainSecParam == true) {
    //eachObj is our obj we will access the value using eachObj[pre] then check if value is truthy.
    //we want every obj with the pre(property) to be true
    return collection.every(function allValueAreTruthy(eachObj) {
      return Boolean(eachObj[pre]) == true;
    });
  } else {
    return false;
  }
}

function addTogether(firstInput, secondInput) {
  //if we passed into two arguments that are both numbers get the sum of those numbers.
  var sum = 0;
  if (firstInput != undefined && secondInput != undefined) {
    if (typeof firstInput == "number" && typeof secondInput == "number") {
      sum = firstInput + secondInput;
    }
    if (typeof firstInput != "number" || typeof secondInput != "number") {
      return undefined;
    }
  }
  if (firstInput != undefined && secondInput == undefined) {
    if (typeof firstInput != "number") return undefined;
    return function secondFunc(numInputOfSecFunc) {
      //if either firstInput or secondInput is not a number return Undefined
      if (
        typeof firstInput != "number" ||
        typeof numInputOfSecFunc != "number"
      ) {
        return undefined;
      }
      if (typeof numInputOfSecFunc == "number") {
        return (sum = firstInput + numInputOfSecFunc);
      }
    };
  }
  return sum;
}

var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  //using .split(" ") on "Bob" will return ["Bob"]
  var arrayOfStrings = firstAndLast.split(" ");
  //we also have to update joinStrIntoName when we run one of our set methods or else it will keep the original string the first time our algorithm ran .join on arrayOfStrings
  //the most items/values in our array will be two if we use split method on string passed into function
  //if we set first name we want to add and remove from the beginning.
  //if we set last name we want to add and remove from the end.
  this.getFullName = function () {
    return arrayOfStrings.join(" ");
  };
  this.getFirstName = function () {
    return arrayOfStrings[0];
  };
  this.getLastName = function () {
    return arrayOfStrings[1];
  };
  this.setFirstName = function (first) {
    if (arrayOfStrings.length == 2) {
      arrayOfStrings.splice(0, 1, first);
    }
  };
  this.setLastName = function (last) {
    if (arrayOfStrings.length == 2) {
      arrayOfStrings.splice(1, 1, last);
    }
  };
  this.setFullName = function (firstAndLast) {
    if (arrayOfStrings.length == 2)
      var replaceValueInArr = firstAndLast.split(" ");
    //our replaceValueInArr will be an array of two strings, we will use spread operator to spread it into our arrayOfStrings.
    arrayOfStrings.splice(0, 2, ...replaceValueInArr);
  };
  /*
var arrOfString = ["Boss", "Pool"];
var secondArr = ["Marvel", "Comic"];

var replace = arrOfString.splice(0, 2, ...secondArr);
*/
  return firstAndLast;
};

function orbitalPeriod(arr) {
  /*Math.round(2 * Math.PI * Math.sqrt(topNumToThird/398600.4418));
  works!!!
  r = earthRadius + avgAlt;
  */
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //use Math.sq, Math.round and Math.PI
  //use reduce?
  //each item in array is an object with name and avgAlt properties.
  var result = arr.reduce(function calcAndAddObj(buildingUp, { name, avgAlt }) {
    var topNum = (earthRadius + avgAlt) ** 3;
    var orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(topNum / GM));
    /*** using .push() method ***/
    // buildingUp.push({ name, orbitalPeriod });
    // return buildingUp;
    /*use .concat()*/
    return buildingUp.concat([{ name, orbitalPeriod }]);
  }, []);
  console.log(result);
  return result;
}

/*** Coderbyte ***/

/*** First Attempt ***/
function QuestionsMarks(str) {
  // code goes here
  //str passed into function will be numbers, strings and question mark.
  //checking to see if the strings has exactly 3 question marks between every pair of two numbers that add up to 10.
  //use split method on string.
  var splitString = str.split("");
  //keep track of first number in our string like its index, keep track of next number we encounter its index
  //we could copy the values between the two pair of numbers.
  var beginningIndex;
  var endingIndex;
  /*
  [[{number:index}, {number:index}],[{number:index},{number:index}]]
  */
  var arrayOfSubarrays = [];
  var result = splitString.reduce(function findNums(
    buildingUp,
    currentValue,
    currentIndex,
    array
  ) {
    //our Number(currentValue) will either be a number or NaN(when currentValue is a string). we should check for both typeof convertToNum and if its not NaN
    //using Number.isInteger(convertToNum). we want to check if it is not NaN because typeof NaN is number
    var convertToNum = Number(currentValue);
    //if we used Boolean(Number.isInterger(NaN)) will be false, we can check if Number.isInteger returns false. will have to use triple equal. false used with double equal
    //will cause problems when we compare it to "" or 0 or []. Number.isInteger === false is one way or
    //but use Number.isNaN() if we want to check if convertToNum is NaN. Number.isNaN(convertToNum) === false. Number.isNaN() will return true if convertToNum is NaN.
    //we want to check if convertToNum is not NaN we can use Number.isInteger == true
    if (
      typeof convertToNum == "number" &&
      Number.isNaN(convertToNum) === false
    ) {
      //when we encounter a number make an obj {number:index} push it into buildingUp
      //we can keep track of how many times we encounter "?"
      let ourObj = { number: convertToNum, index: currentIndex };
      //this returns the length when we push a value into an array.
      buildingUp.push(ourObj);
      if (buildingUp.length == 2) {
        //if buildingUp length is 2 push it into arrayOfSubarray
        let copyTwoObj = buildingUp.splice(0, 2);
        //we want to keep our obj we add to arrayOfSubarray in order in case our string has more than 1 two number pairs. we want to add to the end
        // arrayOfSubarrays.push(...copyTwoObj);
        //or since our buildingUp which is an array has two obj in it we can access both obj here and copy the array

        let { number: firstNum, index: firstIndex } = copyTwoObj[0];
        let { number: secondNum, index: secondIndex } = copyTwoObj[1];
        let sum = firstNum + secondNum;
        if (sum == 10) {
          //slice will copy an array from firstIndex and one index before secondIndex. in case the secondIndex is the last index/value of array.
          let copyArray = array.slice(firstIndex + 1, secondIndex);
          let lastIndex = array.length - 1;
          //check condition based on copyArray length. only add an array if the length >= 3;
          if (copyArray.length >= 3) {
            arrayOfSubarrays.push(copyArray);
          } else {
            return copyArray.length < 3 &&
              lastIndex - secondIndex < 3 &&
              arrayOfSubarrays.length == 0
              ? false
              : buildingUp;
          }
          return sum != 10 &&
            lastIndex - secondIndex < 3 &&
            arrayOfSubarrays.length == 0
            ? false
            : buildingUp;
        }
      }
      return buildingUp;
    }
    return buildingUp;
    //if length of our subarray is 2(obj with number is the key and index as its value) push it into arrayOfSubarrays;
    //we should have an array with two obj [{number:index},{number:index}]
    //we could use an obj and we can have a key-value pair where the key/property will be our number and value will be its index.
    //once we find the pair of numbers and its index outside of our reduce method we can get the two numbers find the sum
    //use the two index to make a copy of the array then we can check if there are 3 question marks.
  },
  []);
  //first check if the pair of number equals 10. if they dont add to 10 we do nothing.
  //if pair of numbers add up to 10 check if there are 3 questions marks between the two numbers.

  return str;
}

/*** Second Attempt ***/

function QuestionsMarks(str) {
  var splitString = str.split("");
  var arrayOfSubarrays = [];
  var questMarksFreq;
  var result = splitString.reduce(function findNums(
    buildingUp,
    currentValue,
    currentIndex,
    array
  ) {
    var convertToNum = Number(currentValue);
    if (
      typeof convertToNum == "number" &&
      Number.isNaN(convertToNum) === false
    ) {
      let ourObj = { number: convertToNum, index: currentIndex };
      buildingUp.push(ourObj);
      if (buildingUp.length == 2) {
        let copyTwoObj = buildingUp.splice(0, 2);
        let { number: firstNum, index: firstIndex } = copyTwoObj[0];
        let { number: secondNum, index: secondIndex } = copyTwoObj[1];
        let sum = firstNum + secondNum;
        let lastIndex = array.length - 1;
        if (sum == 10) {
          let copyArray = array.slice(firstIndex + 1, secondIndex);
          if (copyArray.length >= 3) {
            questMarksFreq = copyArray.reduce(function countTheMarks(
              innerBuildingUp,
              innerCurrentValue
            ) {
              if (innerCurrentValue == "?") {
                innerBuildingUp[innerCurrentValue] =
                  (innerBuildingUp[innerCurrentValue] || 0) + 1;
              }
              return innerBuildingUp["?"] == 3 ? true : innerBuildingUp;
              // return innerBuildingUp;
            },
            {});
            arrayOfSubarrays.push(questMarksFreq);
            // arrayOfSubarrays.push(copyArray);
            return buildingUp;
          } else {
            return lastIndex - secondIndex < 3 && arrayOfSubarrays.length == 0
              ? false
              : buildingUp;
          }
        } else {
          return lastIndex - secondIndex < 3 && arrayOfSubarrays.length == 0
            ? false
            : buildingUp;
        }
      }
      return buildingUp;
    }
    return buildingUp;
  },
  []);
  console.log(questMarksFreq);
  //check for 3 questions marks
  if (questMarksFreq == true) return true;
  if (arrayOfSubarrays.length == 0 && result === false) return false;
  // if (arrayOfSubarrays.length > 0) {
  //   return arrayOfSubarrays.some(function checkForQuestMarks(eachObj) {
  //     return eachObj["?"] == 3 ? true : false;
  //   })
  // }
}
QuestionsMarks("arrb5???4xxe7e?e?ew?e3rrrw6e?r??s5");
QuestionsMarks("arrb5???4xxbl5???eee5");
/*** Implement reduceRight: which loops from right to left of an array. ***/

function forEachRight(list, callback) {
  //going from right to left
  for (let i = list.length - 1; 0 < i; i--) {
    callback(list[i], i, list);
  }
}
function reduceRight(list, howTocombine, initialValue) {
  var memoValue = initialValue;

  /*** forEachRight ***/
  forEachRight(list, memoizedFunc);

  function memoizedFunc(valueOfArray, indexOfArray, list) {
    var memoValue = initialValue;

    memoValue == undefined && indexOfArray == 0
      ? (memoValue = valueOfArray)
      : (memoValue = howTocombine(memoValue, valueOfArray));
  }
  /*** for loop ***/
  /*for (let i = list.length - 1; 0 < i; i--){
    memoValue == undefined && i == 0 ? memoValue = list[i] : memoValue = howTocombine(memoValue, list[i]);
  };*/
  return memoValue;
}

/*** implement flat with just reduce and concat ***/

function flatArrays(arrInput) {
  var result = arrInput.reduce(function flatThisArray(
    buildingUp,
    currentValue,
    currentIndex,
    array
  ) {
    if (array.length == 0) return buildingUp;
    if (Array.isArray(currentValue) == true) {
      return buildingUp.concat(currentValue);
    } else {
      let turnToArray = [currentValue];
      return buildingUp.concat(turnToArray);
    }
  },
  []);
  console.log(result);
}
/*
flatArrays([[["a"]], [["b"]]]);
flatArrays([1, [2], [3, [[4]]]]);
flatArrays([1, [], [3, [[4]]]]);
flatArrays([1, {}, [3, [[4]]]]);
*/

/*
["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
*/
function FindIntersection(strArr) {
  // code goes here
  var result = [];
  var lengthOfArr = strArr.length;
  var ourValues = strArr.reduce(function splitValuesInArr(
    buildingUp,
    currentValue
  ) {
    var splitStr = currentValue.split(",");
    return buildingUp.concat(splitStr);
  },
  []);
  var freqCount = ourValues.reduce(function countNums(
    buildingUp,
    currentValue
  ) {
    var trimStr = currentValue.trim();
    buildingUp[trimStr] = (buildingUp[trimStr] || 0) + 1;
    return buildingUp;
  },
  {});
  var numsInAllStrings = Object.entries(freqCount)
    .reduce(function checkFreq(buildingUp, [keyValue, value]) {
      // if (value == lengthOfArr) {
      //   buildingUp.push(keyValue);
      //   return buildingUp;
      // }
      /*ternary opeartor*/
      return value == lengthOfArr ? buildingUp.concat(keyValue) : buildingUp;
    }, [])
    .join(",");
  /***we can return this whole statement ***/
  return Object.entries(freqCount)
    .reduce(function checkFreq(buildingUp, [keyValue, value]) {
      // if (value == lengthOfArr) {
      //   buildingUp.push(keyValue);
      //   return buildingUp;
      // }
      /*ternary opeartor*/
      return value == lengthOfArr ? buildingUp.concat(keyValue) : buildingUp;
    }, [])
    .join(",");
}

function CodelandUsernameValidation(str) {
  // code goes here
  // var splitOurStr = [...str];
  var regexLetter = /^[a-z]/gi; //check if first char is a letter
  var regexUnderscore = /_$/g; //check if the last char of a string is an underscore.
  /*
  The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]
  character class also includes the underscore character (_)
  firstCharIsLetter
  lastCharIsUnderscore
  */
  // var regexLettersNumsAndUnderscore = /\w/g; //will match letters, numbers and underscores.
  //use regex to check for letters and numbers. use /\W/ match everything except letters, numbers, and underscore
  var regexNotLettersNumsUnderscore = /\W/g;
  //use match on str str.match() pass in the regex as the argument.
  //match() method if nothing match it returns null
  var arrayOfNonLettersAndNums = str.match(regexNotLettersNumsUnderscore);
  if (arrayOfNonLettersAndNums == null) {
    arrayOfNonLettersAndNums = [];
  }
  var firstCharIsLetter = regexLetter.test(str); //will return true if str first char is a string else false.
  //use regexLetter.test() method by calling .test() or the regex and passing the str as the argument.
  var lastCharIsUnderscore = regexUnderscore.test(str);
  // var firstChar = splitOurStr[0];
  // var lastChar = splitOurStr[splitOurStr.length - 1];
  // if (lastChar == "_") return "it is an underscore";
  // if(firstChar != )
  if (
    splitOurStr.length < 4 ||
    splitOurStr.length > 25 ||
    lastCharIsUnderscore == true ||
    arrayOfNonLettersAndNums.length > 0 ||
    firstCharIsLetter === false
  ) {
    return false;
  } else {
    return "Username Valid";
  }
}

/***
 * BracketMatcher
 * ***/

function BracketMatcher(str) {
  // code goes here
  return str;
}

//this will match empty spaces
var regex = /\W/gi;

("(c(oder)) b(yte)");
