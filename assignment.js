// Assignments
// 1
// Write a program that will take a user input of a number and alert the sums of all the digits that make up the number
// Define the number
// let number = 1234;

// // Initialize a variable to store the sum
// let sum = 0;

// // Loop through each digit in the number and add it to the sum
// while (number > 0) {
//   // Get the last digit of the number
//   let digit = number % 10;
  
//   // Add the digit to the sum
//   sum += digit;
  
//   // Remove the last digit from the number
//   number = Math.floor(number / 10);
// }

// // Alert the sum of the digits
// alert("The sum of the digits is: " + sum);


// 2 
// Write a function that will take in any year a d return this is a leap year if its a leap year and return this is not a leap year the year is not a leap year
// Function 1: 

// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return year + " is a leap year";
//         } else {
//           return year + " is not a leap year";
//         }
//       } else {
//         return year + " is a leap year";
//       }
//     } else {
//       return year + " is not a leap year";
//     }
    
//   }



  
//   // Function 2: checkLeapYear
//   function checkLeapYear(year) {

//     console.log(isLeapYear(year));
//     // var name = prompt("Put in a year");
//     // if (isLeapYear === "leap year") {
//     //   alert("This is a leap year");
//     // } else {
//     //       alert(isLeapYear + " this is not a leap year");
//     //     }
//   }
  
//   // the checkLeapYear function
//   checkLeapYear(2023);
  

// 3
// Write a function that will take in three numbers x, y and z and return the first x multiple of the second and factors of the third
// function getMultiplesAndFactors(x, y, z) {
//     var result = [];
//     let count = 0;
    
//     for (let i = y; count < x; i += y) {
//       if (z % i === 0) {
//         result.push(i);
//         count++;
//       }
//     }
    
//     return result;
//   }
//   var multiplesAndFactors = getMultiplesAndFactors(2, 5, 20);
// console.log(multiplesAndFactors); // [3, 6, 9, 12, 15]

// 4
// Write a javascript function that would take a word and return an object with all the vowels and consonants of the word in this format:
// getWord("godbless")
// prints{vowels:['o','e'], consonants: ['g','d','b','l','s','s']}

// function getWord(word) {
//     var vowels = [];
//     var consonants = [];
    
//     for (let i = 0; i < word.length; i++) {
//       var char = word[i].toLowerCase();
      
//       if ('aeiou'.indexOf(char) !== -1) {
//         vowels.push(char);
//       } else {
//         consonants.push(char);
//       }
//     }
    
//     return {vowels: vowels, consonants: consonants};
//   }
//   var result = getWord("godbless");
// console.log(result);

// 5
// write a function to get the LCM of two numbers in this format 
// L.C.M(8,12)
// print the L.C.M of 8 and 12
  
function getLCM(num1, num2) {
    let lcm = 0;
    let largerNum = Math.max(num1, num2);
    
    while (true) {
      if (largerNum % num1 === 0 && largerNum % num2 === 0) {
        lcm = largerNum;
        break;
      }
      largerNum++;
    }
    
    return lcm;
  }
  var lcm = getLCM(8, 12);
  console.log("The LCM of 8 and 12 is " + lcm);

// // console.log(`The LCM of 8 and 12 is

// console.log('The LCM of 8 and 12 is ${lcm}'); // The LCM of 8 and 12 is 24

// 5
// Write a function to get the HCF of two numbers in this format
// H.C.F(28,21)
// print the H.C.F of 28 and 21 is : 7

function getHCF(num1, num2) {
    // Find the smaller number between num1 and num2
    var smallerNum = Math.min(num1, num2);
  
    // Initialize hcf variable to 1
    let hcf = 1;
  
    // Loop from 1 to smallerNum
    for (let i = 1; i <= smallerNum; i++) {
      // If i divides both num1 and num2, update hcf
      if (num1 % i === 0 && num2 % i === 0) {
        hcf = i;
      }
    }
  
    return hcf;
  }
  var hcf = getHCF(28, 21);
console.log("The H.C.F of 28 and 21 is " + hcf);