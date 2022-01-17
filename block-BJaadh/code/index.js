// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]
*/
let numbers1=[...numbers];
console.log(numbers1);
let strings1=[...strings];
console.log(strings1);


// - Find the index of `101` in numbers

console.log(numbers1.indexOf(101));


// - Find the last index of `9` in numbers

console.log(numbers1.lastIndexOf(9));


// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(strings1.join(" "));


// - Add two new words in the strings array "called" and "sentance"

strings1.push("called");
strings1.push("sentance");
console.log(strings1);



// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(strings1.join(" "));



// - Remove the first word in the array (strings)

console.log(strings1.shift());
console.log(strings1);


// - Find all the words that contain 'is' use string method 'includes'

strings1.unshift("is");
strings1.shift();
strings1.unshift("This");



let allIs=strings1.filter((string)=>string.includes("is"));

console.log(allIs);




// - Find all the words that contain 'is' use string method 'indexOf'

let allIss=strings1.filter((string)=>string.indexOf("is")!==-1);
console.log(allIss);


// - Check if all the numbers in numbers array are divisible by three use array method (every)

console.log(numbers1.every((num)=>num % 3===0));


// -  Sort Array from smallest to largest

console.log(...numbers1.sort((a,b)=>a-b));

// - Remove the last word in strings

console.log(strings1.pop());
console.log(strings1);


// - Find largest number in numbers



let largest=numbers1.sort((a,b)=>a-b).pop()
console.log(largest);
// - Find longest string in strings

let longestString=[...strings1.sort((a,b)=>a.length-b.length).pop()]


// - Find all the even numbers

let evenNumbers=(numbers1.filter((num)=>num % 2===0));

console.log(evenNumbers);

// - Find all the odd numbers

let oddNumbers=(numbers1.filter((num)=>num % 2!==0));

console.log(oddNumbers);


// - Place a new word at the start of the array use (unshift)

console.log(strings1.unshift("hello"));
console.log(strings1);

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers1.slice(3,7));


// - Make a subset of strings array ['a','collection']

console.log(strings1.slice(3,5));

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word
console.log(strings1.map((value)=>value.length));


// - Find the sum of the length of words using above question



// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'


console.log(customers.filter((customer)=>customer.firstname.startsWith("J")));



// - Create new array with only first name

let firstName=console.log(customers.map((customer)=>customer.firstname));


// - Create new array with all the full names (ex: "Joe Blogs")

let fullName=customers.map((customer)=>`${customer.firstname} ${customer.lastname}`);




// - Sort the array created above alphabetically

console.log(fullName.sort());


// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowel=firstName.filter((customer)=>
{
  if(
customer.firstName.toLowerCase().includes("a") ||
customer.firstName.toLowerCase().includes("e") ||
customer.firstName.toLowerCase().includes("i") ||
customer.firstName.toLowerCase().includes("o") ||
customer.firstName.toLowerCase().includes("u") 
  )
  {
    return true;
  }
  else
  {
    return false;
  }
});