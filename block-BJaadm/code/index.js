let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

let peopelName=persons.map((person)=>person.name);
console.log(peopelName);

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade=persons.map((person)=>person.grade);
console.log(peopelName);


// Create an array peopleSex and store the value of sex key from persons array
let peopleSex=persons.map((person)=>person.sex);
console.log(peopelName);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopelName.filter((people)=>people.startsWith("J")||people.startsWith("P")));


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(peopelName.filter((people)=>people.startsWith("A")||people.startsWith("C")).length);


// Log all the filtered male ('M') in persons array

console.log(persons.filter((person)=>person.sex==="M"));



// Log all the filtered female ('F') in persons array
console.log(persons.filter((person)=>person.sex==="F"));



// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(persons.filter((person)=>person.sex==="F").filter((person)=>person.name.startsWith("C")||person.name.startsWith("J")));


// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter((people)=>people%2===0));

// Find the first name that starts with 'J' in persons array and log the object

persons.find((person)=>person.name.startsWith("J"));
console.log(persons.find((person)=>person.name.startsWith("J"))
);

// Find the first name that starts with 'P' in persons array and log the object

persons.find((person)=>person.name.startsWith("P"));
console.log(persons.find((person)=>person.name.startsWith("P"))
);


// Find the first name that starts with 'J', grade is greater than 10 and is a female

persons.find((person)=>person.name.startsWith("J") && person.sex==="F" && person.grade>10);

console.log(persons.find((person)=>person.name.startsWith("J") && person.sex==="F" && person.grade>10)
);
// Filter all the female from persons array and store in femalePersons array

let femalePersons=persons.filter((person)=>person.sex==="F");
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array

let malePersons=persons.filter((person)=>person.sex==="M");



// Find the sum of all grades and store in gradeTotal

let gradeTotal=peopleGrade.reduce((acc,cv)=>
{
  return acc+ cv;
},0);

console.log(gradeTotal);
// Find the average grade

let average= gradeTotal/peopleGrade.length;
console.log(average);

// Find the average grade of male

let gradeTotalMale=persons.filter((person)=>person.sex==="M");
gradeTotalMale.reduce((acc,cv)=>
{
  return acc+ cv.grade;
},0)/gradeTotalMale.length



// Find the average grade of female

let gradeTotalFemale=persons.filter((person)=>person.sex==="F");
gradeTotalFemale.reduce((acc,cv)=>
{
  return acc+ cv.grade;
},0)/gradeTotalFemale.length

// Find the highest grade

let highest=[...peopleGrade].sort((a,b)=>a-b).pop();



// Find the highest grade in male



malePersons.map((person)=>person.grade).sort((a,b)=>a-b).pop();


// Find the highest grade in female

femalePersons.map((person)=>person.grade).sort((a,b)=>a-b).pop();


// Find the highest grade for people whose name starts with 'J' or 'P'

persons.filter((person)=>person.name.startsWith("J") || person.name.startsWith("P")).map((person)=>person.grade).sort((a,b)=>a-b).pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b)=>a-b);


// Sort the peopleGrade in descending order

// peopleGrade.sort((a,b)=>a-b).reverse();


// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

[...peopleGrade].sort((a,b)=>a-b).reverse();


// Sort the array peopelName in ascending `ABCD..Za....z`

[...peopelName].sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort().reverse();
