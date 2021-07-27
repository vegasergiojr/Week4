// Palindrome Exercise.
function palindrome(str) {
    // find the length of a string
    var word = input.length;
    // loop through the string
    for (let i = 0; i < word / 2; i++) {
        // see if the the first and last letter match
        if (input[i] !== input[word - 1 - i]) {
            return ('Palindrome = False')
        }
    }
    return ('Palinedrome = True')
}
// take input
var input = 'wow'//prompt('Enter a string: ');
// call the function
var value = palindrome(input);
console.log(value)
//Exercise Remove Dupes from array.
const nameList = ["John","Mary", "Alex", "Steve", "Mary", "John"];
var uniqueList = [...new Set(nameList)]; //The set will remove dupes by itself. Then put it back to a array. 
console.log(nameList)
console.log(uniqueList)
//Return true/false depending if the item is in the array. 
const fruits = ["apple", "oranges", "banana", "pear"];
console.log("is apple inside the list?: ")
console.log(fruits.includes("apple"))
console.log("is kiwi inside the list?: ")
console.log(fruits.includes("kiwi"))
//finding the largest number in the array. 
const numbers = [0, 1, 2, 3, 4, 5];
console.log(Math.max(...numbers)) //What does the three dots mean?
//finding the minimum or smallest number in an array. 
console.log(Math.min(...numbers))
//FizzBuzz if divisible by 3 and 5 then fizz otherwise buzz. 
//creating the loop that will count from 1 to 100 for us
for (let i = 1; i <= 30; i++){
    if (i % 3 === 0 && i % 5 === 0){  // if it is divisible by 3 & 5 print FizzBuzz
        console.log(i, "FizzBuzz") //printing the number next to the result
    }    else if (i % 3 === 0) { // if divisible by 3 then you get fizz
            console.log(i, "Fizz")
    }   else if (i % 5 ===0){ //if divisible by 5 then you get buzz. 
            console.log(i, "Buzz")
    }
}
//Creating an app that determines if the number is even odd.
var numberInput = 4//window.prompt("Please enter a number to check if it is even or odd: ")
if(numberInput % 2 === 0){ // if number is divisible by 2 then is even 
    console.log("This number is even:", numberInput)
} else if (numberInput) {console.log("This number is odd:", numberInput) // otherwise it is odd. 
}
//Sorting hard code array into ascending order. 
const orderArray = [3,4,56,7,8,1]
console.log("Ascending Order: ")
console.log(orderArray.sort(function(a, b){return a-b}))
//sorting in descending order 
console.log("Descending Order: ")
console.log(orderArray.sort(function(a, b){return b-a}))
//Making the Bank 
class Bank {
    constructor(firstName, lastName, middleName, accountType, balance, status) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
    }
}