// Question no 1
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// const originalString = "Hello World!";
// console.log("OriginalString",originalString);
// const reversedString = reverseString(originalString);
// console.log("ReversedString",reversedString);

// Question no 2
// function countVowels(str) {
//     const vowels = "aeiouAEIOU"; // List of vowel characters
//     let vowelCount = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i])) {
//         vowelCount++;
//       }
//     }
  
//     return vowelCount;
//   }
  
//   const inputString = "Hello, how are you?";
//   console.log("String :",inputString)
//   const numberOfVowels = countVowels(inputString);
//   console.log(`Number of vowels: ${numberOfVowels}`);

// Question no 3
// function capitalizeWords(sentence) {
//   const words = sentence.split(" ");
//   const capitalizedWords = [];

//   for (const word of words) {
//     if (word.length > 0) {
//       const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
//       capitalizedWords.push(capitalizedWord);
//     }
//   }

//   return capitalizedWords.join(" ");
// }

// const inputSentence = "hello, how are you?";
// console.log("Original String :",inputSentence)
// const capitalizedSentence = capitalizeWords(inputSentence);
// console.log(capitalizedSentence); 

// Question no 4
// function isPalindrome(str) {
//     const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
  
//     return cleanedStr === reversedStr;
//   }
  
//   const inputString = "A man, a plan, a canal, Panama";
//   const isInputPalindrome = isPalindrome(inputString);
//   console.log(isInputPalindrome)
  
//   if (isInputPalindrome) {
//     console.log("The string is a palindrome.");
//   } else {
//     console.log("The string is not a palindrome.");
//   }
  
// Question no 5
// function sumOfPositiveNumbers(arr) {
//     return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
//   }
  
//   const numbers = [3, -5, 7, 10, -2, 1];
//   console.log(numbers);
//   const positiveSum = sumOfPositiveNumbers(numbers);
//   console.log("Sum of positive numbers:", positiveSum);

// Question no 6
// const array = [5, 10, 15, 20, 25];
// const elementToFind = 20;
// console.log(array);
// const index = array.indexOf(elementToFind);

// if (index !== -1) {
//   console.log(`The element ${elementToFind} is found at index ${index}.`);
// } else {
//   console.log(`The element ${elementToFind} is not found in the array.`);
// }

// Question no 7
// function removeDuplicates(arr) {
//     const uniqueArray = [];
    
//     for (const element of arr) {
//       if (!uniqueArray.includes(element)) {
//         uniqueArray.push(element);
//       }
//     }
//     return uniqueArray;
//   }
//   const originalArray = [1, 2, 2, 3, 4, 4, 5];
//   console.log("Original",originalArray);
//   const newArray = removeDuplicates(originalArray);
//   console.log("after removing duplicate",newArray); 
  
// Question no 8
// function sortAscending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const originalArray = [5, 2, 8, 1, 3];
//   console.log(originalArray);
//   const ascendingArray = sortAscending([...originalArray]);
//   console.log("AscendingArray",ascendingArray); 

//   function sortDescending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
  
//   const originalArray1 = [5, 2, 8, 1, 3];
//   const descendingArray = sortDescending([...originalArray1]);
//   console.log("DescendingArray",descendingArray); 
  
  // Question no 9
//   let number = 2;

// while (number <= 20) {
//   console.log(number);
//   number += 2;
// }

// Question no 10
// function calculateFactorial(number) {
//     let factorial = 1;
//     let i = 1;
  
//     do {
//       factorial *= i;
//       i++;
//     } while (i <= number);
//     return factorial;
//   }
//   const num = 5;
//   const factorialResult = calculateFactorial(num);
//   console.log(`Factorial of ${num} is ${factorialResult}`);

// Question no 11
// const person = {
//     name: "John",
//     age: 30,
//     occupation: "Engineer"
//   };
  
//   for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//       console.log(`${key}: ${person[key]}`);
//     }
//   }
  
// Question no 12
// const originalArray = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (const num of originalArray) {
//   doubledArray.push(num * 2);
// }
// console.log("OriginalArray",originalArray)
// console.log("DoubleArray",doubledArray); 

// Question no 13
// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return `${number} is even.`;
//     } else {
//       return `${number} is odd.`;
//     }
//   }
//   const num1 = 4;
//   const num2 = 7;
  
//   const message1 = checkEvenOrOdd(num1);
//   const message2 = checkEvenOrOdd(num2);
  
//   console.log(message1); 
//   console.log(message2); 
  
// Question no 14
// function maxOfThree(a, b, c) {
//     return a > b ? (a > c ? a : c) : (b > c ? b : c);
//   }
//   const num1 = 10;
//   const num2 = 25;
//   const num3 = 15;
  
//   const max = maxOfThree(num1, num2, num3);
//   console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${max}.`);
  
// Question no 15
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const year1 = 2020;
const year2 = 2021;

console.log(`${year1} is a leap year: ${isLeapYear(year1)}`);
console.log(`${year2} is a leap year: ${isLeapYear(year2)}`);
