let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.


function findLongestWord(value)
{
return [...value].sort((a,b)=>a.length-b.length).pop()

}
findLongestWord(words);


// - Convert the above array "words" into an array of length of word instead of word.

let newArray=[...words].map((word)=>word.length);
console.log(newArray);


// - Create a new array that only contains word with atleast one vowel.

let newArray1=[...words.filter((word)=>
{
if(word.includes("a")|| 
   word.includes("e")||
   word.includes("i")||
   word.includes("o")||
   word.includes("u")
   )
   {
     return true;
   }
   else
   {
     return false;
   }
}
)]


// - Find the index of the word "rhythm"

console.log(words.indexOf("rhythm"));


// - Create a new array that contians words not starting with vowel.

// let newArray2=[...words].filter((word)=>!checkvowel(word[0]));


// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let mby3=[...numbers].filter((num)=>num % 3===0);

// - Create a new array that contains only even numbers

let evenNumbers=[...numbers].filter((num)=>num % 2===0);


// - Create  a new array that contains only odd numbers.

let evenNumberss=[...numbers].filter((num)=>num % 2!==0);


// - Create a new array that should have true for even number and false for odd numbers.

let oddeven=[...numbers].map((num)=>num % 2===0);



// - Sort the above number in assending order.

console.log([...numbers].sort((a,b)=>a-b));

// - Does sort mutate the original array?
// yes, it does.


// - Find the sum of the numbers in the array.

let summ=[...numbers.reduce((acc,cv)=>
{
  acc=acc+cv;
  return acc;
})];

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
