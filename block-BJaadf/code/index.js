let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end


console.log(fruits);

fruits.push("papaya");
console.log(fruits);


// Remove the last element from fruits array


fruits.pop();
console.log(fruits);


// Log the current length of fruits array

console.log(fruits.length);



// Remove the first element from fruits and log the value of fruits (use delete arr[0])

delete fruits[0];
console.log(fruits);


// Log the element on index 0 and 1
console.log(fruits[0]);
console.log(fruits[1]);


// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

fruits.shift();
console.log(fruits);


// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift("Guava");
console.log(fruits);


// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift("dragon fruit");
console.log(fruits);


// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

if(fruits[0]==="dragon fruit" && fruits[1]==="Guava")
{
    console.log(`true`);
}
else{
    console.log(`false`);
}


// Update the value of index 1 to `Pears`

fruits[1]="Pears";
console.log(fruits);


// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1,0,"Kiwi");
fruits.splice(2,0,"Lemon");
console.log(fruits);



// Remove (slice) all the element from index 5

console.log(fruits.slice(5));


// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits=['Berries', 'Melons'];


// Concat moreFruits into fruits array (re-assign so the value gets updated)

console.log(fruits.concat(moreFruits));


// Log the name of all fruit in console

console.log(fruits);


// Convert each fruit name to lowercase and log it
function lowercase(value)
{
    return value.toLowerCase();
}
console.log(fruits.map(lowercase));

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits=fruits.map(lowercase);


// Convert all fruits name into uppercase and store in new array named uppercaseFruits

function uppercase(value)
{
    return value.toUpperCase();
}
console.log(fruits.map(uppercase));

let uppercaseFruits=fruits.map(uppercase);


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

console.log(numbers.flat());

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

console.log(numbersTwo.flat(2));


// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

console.log(numbersThree.flat(4));
numbersThree=numbersThree.flat(4);

// Use forEach to log all the elements of numberThree array


let foreach=(value)=>console.log(value);


console.log(fruits.forEach(foreach));



// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

function multiply2(value)
{
    return value*2;
}
console.log(numbersThree.map(multiply2));
let doubleNumbers=numbersThree.map(multiply2);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

function multiply3(value)
{
    return value*3;
}
console.log(numbersThree.map(multiply3));
let tripleNumbers=numbersThree.map(multiply3);


// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

function devide1(value)
{
    return value/2;
}
console.log(numbersThree.map(devide1));

let halfNumbers=numbersThree.map(devide1);


// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array



let oddNumber=(value)=>value % 2!==0;

let oddNumbers=numbersThree.filter(oddNumber);
console.log(oddNumbers);


// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumber=(value)=>value % 2===0;

let evenNumbers=numbersThree.filter(evenNumber);
console.log(evenNumbers);

// Find the index of 10 in numbersThree array

console.log(numbersThree.indexOf(10));


// Reverse the values of numbersThree array

console.log(numbersThree.reverse());

// Reverse the values of numbersTwo array

console.log(numbersTwo.reverse());



// Join all fruits with '-', convert to uppercase and log it

console.log(fruits.join("-").toLowerCase());


// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join("&").toLowerCase());
