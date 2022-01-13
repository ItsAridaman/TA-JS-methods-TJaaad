Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

parameter: the join() method accepts an array and returns a string having all the array elements together.

returns: a string having all the array elements together.
example:

let array1=["red", "green", "blue", "black"];

console.log(array1.join())
//
let array1=["red", "green", "blue", "black"];

console.log(array1.join());
console.log(array1.join(' '));
console.log(array1.join(''));

3. `flat`

parameter: the flat() method accepts an array.
returns: this method creates a new array, with all the sub array elements upto the specified depth.

let array=[3,6,4,[6,7],6];
let array1=[3,6,4,[[[6,7]]],6];

console.log(array.flat());
console.log(array1.flat(2));

4. `push`

parameter: The push() method adds one or more elements to the end of an array and returns the new length of the array.

example:

let array=["red","green","blue"];

let length=array.push("black","violet");

console.log(array);//["red","green","blue","black","violet"];
console.log(length); //5


5. `indexOf`

parameter: the indexof() method accepts a value & checks for the index of that value in the mentioned array.
returns:-it returns the index of the particular value inside of an array.
example:

let array=["green","red","black","yellow"];

console.log(array.indexOf("black"));//2


6. `lastIndexOf`
parameter: the lastIndexOf() method accepts a value and checks for the index of that value inside array. it starts counting index from backwards.

let array=["black","red","violet","yellow","black"];
console.log(array.lastIndexOf("black"));//4


7. `includes`
parameter:the includes() method accepts entities & looks for those entities inside array, based upon the result, gives output as true or false.
return:-it returns true or false based upon the outcome. 
let array=["black","red","violet","yellow","black"];
console.log(array.includes("violet"));

8. `reverse`
parameter: The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
return: It arranged the entities inside the array in reverse order.

let array=["black","red","violet","yellow","black"];

console.log(array.reverse());


9. `every`

parameter: in this method, it accepts an callback function & checks if all the elements inside array meets the function criteria, and if yes, then only it gives true as a output else false.
const isBelowThreshold = (currentValue) => currentValue < 40;));

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold = (currentValue) => currentValue < 40;));

10. `shift`

parameter:The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// output: Array [2, 3]

console.log(firstElement);
// output: 1


11. `splice`

parameter:The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

const months = ["Jan", "Feb", "March", "April", "June","july","aug"];


months.splice(4, 2, 'May');
console.log(months);
// output: Array ["Jan", "Feb", "March", "April", "May"]


12. `find`

The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// output: 12



13. `unshift`

parameter-The unshift() method adds elements to the beginnig of the array. it changes the length of the array.

const array1 = [1, 2, 3];

console.log(array1.unshift(4,2,56));
// output: 5

console.log(array1);
// output: Array [4,2,56, 1, 2, 3]



14. `findIndex`

parameter: this method requires a calling function & based upon the function logic it checks the elements inside an array.

returns:it returns the index of first element which satisfies the consition, if no element found it returns -1 as the output.

example:

let array=[43,56,3,24,67];

let final=(num)=>num<6;

console.log(array.findIndex(final));

//output: 2

15. `filter`

parameter:The filter() method creates a new array with all elements that pass the test implemented by the provided function.

example:-
let array=[43,56,3,24,67,2,76,8,0,2];

let final=(num)=>num<6;

let result=array.findIndex(final);
console.log(result);

//output: newArray [3, 2, 0, 2]



16. `flat`

parameter: the flat() method accepts an array.
returns: this method creates a new array, with all the sub array elements upto the specified depth.

let array=[3,6,4,[6,7],6];
let array1=[3,6,4,[[[6,7]]],6];

console.log(array.flat());
console.log(array1.flat(2));

17. `forEach`

parameter:The forEach() method executes a provided function once for each array element.

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

//  output: "a"
// output: "b"
//  output: "c"


18. `map`

parameter:The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

return: it returns a new array, with the new elements.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


19. `pop`

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

return: it returns the element which is removed;

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// output: "tomato"

console.log(plants);
// output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
20. `reduce`


21. `slice`

parameter:it accepts the index values & based upon the index values provided, it slices the requested portion and shows the sallow copy of the sliced elements.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
//output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//  output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
//  output: Array ["camel", "duck"]

22. `some`

parameter: this method accepts a calling function and checks each element of the array, if any element inside array satisfies the function condition, it returns True else it returns false.

const array = [1, 2, 3, 4, 5];


const even = (element) => element % 2 === 0;

console.log(array.some(even));
// output: true
