const marks = [23, 25, 34, 93, 85];
const fruits = ['orange','apple', 'kiwi'];
const mix= ['Hello', 56, [78,23]];

const arr = new Array(23, 56, 'Byebye');
console.log(arr);
console.log(mix);

//length is property of array
console.log(arr.length);

//method of array
console.log(Array.isArray(arr));

arr[0] = 'Shivani';
console.log(arr);

let arrElement = arr[0];
console.log("Element of array:", arrElement);

let value = marks.indexOf(34);
console.log(value);

//Mutating or modifying

marks.push(83);
console.log(marks);
//output: [23, 25, 34, 93, 85, 83]

marks.unshift(15);
console.log(marks);
//output: [ 15, 23, 25, 34, 93, 85, 83, ]

marks.shift();
console.log(marks);
//output:  [ 23, 25, 34, 93, 85, ]

marks.splice(2,2);
console.log(marks);
//output: [ 23, 25, 85, ]
//It will remove elements starting from index 2 and will remove 2 elements

marks.reverse();
console.log(marks);
//output:[ 85, 93, 34, 25, 23, ]

let marks2 = [1, 2, 3];
marks = marks.concat(marks2);
console.log(marks);
//output: [ 85, 93, 23, 1, 2, 3, ]

//objects

let myObj = {
  name: 'Shivani',
  subject: 'javascript',
  isActive: true,
  marks: [1, 5, 8, 9]
}

console.log(myObj);
//output: { "isActive": true, "marks": Array [ 1, 5, 8, 9, ], "name": "Shivani", "subject": "javascript", }

console.log(myObj.subject);
//output: javascript
