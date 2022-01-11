Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- Parameter: (string data type)
   - Return: change case in the string (string data type)
   - Example:
     ```js
     const sentence = 'The quick brown fox jumps over the lazy dog.';

      console.log(sentence.toUpperCase());
// output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
     ```
   - `toUpperCase` accepts a string and return the upercase string.


3. `toLowerCase`

- Parameter: (string data type)
   - Return: change case in the string (string data type)
   - Example:
     ```js
     const sentence = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';

      console.log(sentence.toUpperCase());
// output: "The quick brown fox jumps over the lazy dog"
     ```
   - `toLowerrCase` accepts a string and return the Lowercase string.

4. `trim`
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
//output: "Hello world!";
'Trim' will remove the extra space from the string. 

5. `trimEnd`
`trimEnd`
const greeting = '   Hello world!   ';

console.log(greeting);
//output: "   Hello world!";

console.log(greeting.trim());
//output: "   Hello world!";
'TrimEnd' will remove the extra space after the string ends.


6. `trimStart`
`trimStart`
const greeting = '   Hello world!   ';

console.log(greeting);
//output: "   Hello world!   ";

console.log(greeting.trim());
//output: "Hello world!   ";
'TrimStart' will remove the extra spaces before the string starts.
7. `concat`

parameter: one or more strings to concat.
example:---
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
//output: "Hello World"

console.log(str2.concat(', ', str1));
//output: "World, Hello"

'concat' method will concatinate string values, it also takes an option to provide extra information in between.

8. `endsWith`

parameter :requires a string  to check upon the end value and provide true & false based upon the output.

example:---

const string1="Tajmahal is situated in Agra";

console.log(string1.endsWith("Agra"));
//output:True

9. `includes`
parameter:requires a string to check if another string is inside it or not.


const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes(word));
output:true.

'includes',it performs a case sensitive search, weather or not if the part of another string is inside the first one & returns the values as true or false.
10. `indexOf`
parameter:-The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

example:---
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'dog';
console.log(sentence.indexOf(word));


11. `lastIndexOf`

parameter:takes a string and looks for other string inside from backside.

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`paragraph.lastIndexOf(searchTerm)`);

12. `padEnd`

parameter:The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

const str1="hello world";
console.log(str1.padEnd(25," "));
//output:"hello world        "

13. `padStart`
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

const str1="8566996188";
const str2=str1.slice(-2);
console.log(str2);
console.log(str2.padStart(str1.length,"*"));

14. `repeat`

parameter:The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

15. `replace`

parameter:
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


16. `slice`

parameter:
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// output: "the lazy dog."

console.log(str.slice(4, 19));
// output: "quick brown fox"

console.log(str.slice(-4));
//  output: "dog."

console.log(str.slice(-9, -5));
//  output: "lazy"

17. `split`
parameter:
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split(' ');
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

18. `substring`

parameter:

The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
