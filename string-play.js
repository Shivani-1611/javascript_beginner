console.log("Lets play with String");
//output: Lets play with String
const name = "Shivani";
const greet = "Hey Welcome";

console.log(greet + " " + name);
//output: Hey Welcome Shivani

let str = "Lets work out with strings";

str = str.concat(' together', ' again');
console.log(str);
//output:Lets work out with strings together again

console.log(str.length);
//output: 41
console.log(str.toUpperCase());
// output: LETS WORK OUT WITH STRINGS TOGETHER AGAIN
console.log(str);
//output: Lets work out with strings together again
console.log(str.toLowerCase());
//output: lets work out with strings together again
console.log(str[5]);
//output: w
console.log(str.indexOf('g'));
//output:24

console.log(str.lastIndexOf('o'));
//output: 28

console.log(str.charAt(17));
//output: h

console.log(str.endsWith('again'));
//output: true

console.log(str.endsWith('after'));
//output: false

console.log(str.includes('45'));
//output: false

console.log(str.includes('out'));
//output: true

console.log(str.substring(0,7));
//output: Lets wo

console.log(str.substring(3,18));
//output: s work out with

console.log(str.slice(-3));
//output: ain

console.log(str.slice(4,15));
//output:  work out w

console.log(str.split());
//output: ['Lets work out with strings together again']

console.log(str.split('w'));
//output: ['Lets ', 'ork out ', 'ith strings together again']

console.log(str.replace('with','on'));
//output: Lets work out on strings together again

let myStr = `Hello ${name}`;
console.log(myStr);
//output: Hello Shivani

let fruit1 = 'orange';
let fruit2 = 'apple';

let moreStr = `<h1>Welcome Back!</h1>
                <p>You like ${fruit1} and ${fruit2} in your platter.</p>`;

console.log(moreStr);
//output: <h1>Welcome Back!</h1>
//        <p>You like orange and apple in your platter.</p>



