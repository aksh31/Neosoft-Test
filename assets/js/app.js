let cl = console.log;
// ================================================================================================

// 1	If 10 names are represented in list format in html then how we can console all the names present in the list ?

const skills = Array.from(document.getElementsByTagName('li'));
skills.forEach(li => cl(li.innerText));

// ================================================================================================

// 2	If we console.log(message) and then we declare var message = 'test' what would be the output ?

console.log(message); // undefined
var message = 'test'; // only declaration get hoisted not their value..

// ================================================================================================

// 3	If we have array let arr = [1,2,3,4,5,6] and we console.log(arr.slice(2)) or console.log(arr.splice(2)) then what would be the output.?

let arr = [1,2,3,4,5,6];

console.log(arr.slice(2)); // [3, 4, 5, 6] it does'nt affects original array

console.log(arr.splice(2)) // [3, 4, 5, 6] it affects original array

// ================================================================================================

// 4	what would be the ouput of console.log(0 == false) or console.log(0 === false)

console.log(0 == false) // true =>  It checks only value 
console.log(0 === false) // false =.  It checks value as well as their data-type

// ================================================================================================

// 5	"var user; console.log(typeof user);  or  console.log(typeof (NaN))"
// var user;
console.log(typeof user); // undefined

console.log(typeof (NaN)); // number

// ================================================================================================

// 6	"var user = null; console.log(typeof user);"

var user = null;
console.log(typeof user); // Object

// ================================================================================================

// 7	console.log(1+2+'3') 

console.log(1+2+'3') // "33"

// ================================================================================================

// 8	isNaN("designer") = ? OR isNaN("123")

isNaN("designer") // true
isNaN("123") // false

// ================================================================================================

// 9	console.log(typeof typeof '1');

console.log(typeof typeof '1'); // string

// ================================================================================================

// 10	"var a= 'singapore';  console.log(a.substring(2,4));"

// var a= 'singapore'
// console.log(a.substring(2,4)); // ng

// ================================================================================================

// 11	"var a; console.log(a+1);"
var a;
console.log(a+1); // undefined + "1" = NaN

// ================================================================================================

// 12	"function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);" // object

function getAge(...args) {
    console.log(typeof args);
}
getAge(21); // object

// ================================================================================================

// 13	"let x = new String(""TestCase"");             
// let y = new String(""TestCase"");
// (x == y) 

let x = new String("'TestCase'");             
let y = new String("'TestCase'");
(x == y) // =>>>> false

// ================================================================================================

// 14	"<a href="'JavaScript:void(0);'" onclick=""alert('Hello World I am designer')"">
//   Click Me!
// </a>"
// => shows msg in Alert but after clicking it thorws error..

// ================================================================================================

// 15	"const originalArray = [1, 2, 3, 4, 5];
// const newArrayOne = originalArray.reverse();

// console.log(newArrayOne )

// What would be the output and will it change the original array..? ==>>> Yes It chnage

// How to reverese a array without changing the original array 
//<--- const newArrayOne = originalArray.slice().reverse(); --->" 
// ==>>> Yes, this code is used for reverese a array without changing the original array


const originalArray = [1, 2, 3, 4, 5];
const newArrayOne = originalArray.reverse();

console.log(newArrayOne ) 
console.log(originalArray )

// ================================================================================================
