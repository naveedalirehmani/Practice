// =================================canvas=========================

// const canvas = document.querySelector("#canvas");
// const context = canvas.getContext("2d");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// //drawing a line
// context.beginPath();
// context.moveTo(100, 100); // starting point
// context.lineTo(200, 200); // ending point
// context.lineTo(200, 400); // ending point
// context.closePath();
// context.stroke();
// // creating circle
// context.beginPath();
// context.arc(500, 300, 100, 0, 2 * Math.PI); // x-y-radius-startingAngle-arcLength in radian
// context.stroke();
// // writing a text
// context.font = "300 30px Arial";
// context.fillText("Hello World", 100, 50); //x-y
// // stroke text
// context.font = "100px Arial";
// context.strokeText("Hello World", 400, 600); //x-y
// // fill rectangles
// context.fillStyle = "red";
// context.fillRect(800, 200, 200, 80); //x-y-width-height
// // stroke rect
// context.lineWidth = 2;
// context.strokeStyle = "green";
// context.strokeRect(300, 200, 150, 80); //x-y-width-height

// ===========================================BASICS====================================

// let result = (3 + 4, (a = +"5" + 6), (b = "6" + 5));
// console.log(result, typeof result, a, typeof a, typeof b);

// // 65 string 11 number string

// // const { response } = require("express");

// // // let a = 1, b = 1;

// // // let c = ++a; // ?
// // // let d = b++; // ?

// let x = 3;
// x > 2 && console.log("yes");

// console.log(+null, +undefined);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   console.log(i);
// }

// let num = +prompt("inter a number",0)

// num/num==1 ? console.log("prime number") : console.log('not a prime number')

// console.log(typeof undefined,typeof NaN,typeof null)
// console.log(Number(undefined),Number(NaN),Number(null))
// console.log(String(undefined),String(NaN),String(null))

// ========================================OBJECTS================================

// let object = new Object();
// object.age = 13;
// object["user name"]= "naveed ali";
// console.log(object)

// // //or
// let object2 = {age:13,"user name":"naveed ali"};
// console.log(object2)

// // //or
// let key = "user name"
// let object3 = new Object();
// object3.age = 13;
// object3[key]= "naveed ali";
// console.log(object3)

// // //or
// let object4 = {
//     0: "test" // same as "0": "test"
//   };
//   console.log( object4["0"] );
//   console.log( object4[0] );
// // this will integers sybols will not work with dot notation
//   console.log(object4)

// let object5 = {name:"naveed",age:"12",class:"sescond"};
// console.log("age" in object5)
// console.log(object5.age == undefined)
// for(let key in object5){
//   console.log(key)
//   console.log(object5[key])
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: "name"
// }
// for(let key in salaries){
//   if(typeof salaries[key] == 'number')
//   salaries[key] *= 2
// }
// console.log(salaries)

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
// console.log(new makeUser())
// ==================================CONSTRUCTOR FUNCTION==============================

// function User(name){
//   if(!new.target){
//     return new User(name)
//   }
//   this.name=name
//   this.age=12
// };
// let newUser = new User('naveed');
// let newUser2 = new User("rahim")
// let newUser3 = User('aslam') //to use without new key word
// console.log(newUser,newUser2,newUser3)

// important
// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

//===============================================================================

//  function Accumulator(startingValue){
//   this.value=startingValue;
//   this.read=function(){
//     this.value += 1
//   }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// console.log(accumulator.value);

// =====================================?. syntax construtor========================

//  function UserData(name,age,grade){
//   this.data={
//     name:name,
//   }
//   this.age=age
//   this.class=grade
//   this.sayHi=function sayHi(){
//     console.log('hi')
//   }
// }
// let newUser = new UserData('naveed',21,'B+')
// console.log(newUser && newUser.data && newUser.data.fatherName)
// // vs
// console.log(newUser?.data?.fatherName)
// // or
// newUser?.sayHi()
// userGuest?.sayHi()

// =================================METHODS TO PRIMITIVES===============================

/* when we apply methods on any data type be it string number boolean object most of the methods never change the original value rather return a new value */

// let str = "string";
// let num = 12;
// let float = 12.12345;

// console.log(str.toUpperCase(),float.toFixed(2))

// ==========================================number=======================================

// console.log(16e4,16e-4)
// comparison in different forms

// let binary = 0b01000101;
// let decimal = 69;
// let hexadecimal = 0x45;
// let octal = 0o1051;

// console.log(Object.is(binary,decimal))

// let array=[
//   {
//   form:"binary",
//   value:"0b01000101",
//   comparisonToBinary:"check"
//   },
//   {
//   form:"decimal",
//   value:"69",
//   comparisonToBinary:binary == decimal
//   },
//   {
//   form:"hexadecimal",
//   value:"0x45",
//   comparisonToBinary:binary == hexadecimal
//   },
//   {
//   form:"octal",
//   value:"0o105",
//   comparisonToBinary:binary == octal
//   }
// ]

// console.table(array)

// methods to know
// Math.floor() //round down
// Math.trunc() // removes the part after decimal
// Math.ceil() // round up
// Math.round() // rounding
// 123.23.toFixed() // math.trunc to a spacific number of digit

// console.log(isFinite('1234'))
// console.log(isNaN("123"))

// console.log(parseInt('100$'))
// console.log(parseFloat('23.45$'))

// console.log(Math.random(1,5))  // 0 >= random numner < 1
// console.log(Math.max(8,2,4,5,51,5,512)) //largest number
// console.log(Math.min(3,41,25,1236,12,6)) //smallest number
// console.log(Math.pow(2,10)) // 2**10

// ===================================strings================================

// let str = 'Widget with id';

// console.log( str.toUpperCase() );
// console.log( str.toLowerCase() );
// console.log( str.indexOf('Widget') );
// console.log( str.indexOf("id") );
// console.log( str.indexOf('id',3) );
// console.log( str.lastIndexOf('id') );
// console.log( str.startsWith("Wid") );
// console.log( str.endsWith("get") );
// console.log( str.slice(2,5) ); // from 2 index to 5
// console.log( str.substring(2,5) ) // same as above no negative
// console.log( str.substr(2,4) ); // from 2 to 4 more char

// ===================================Array================================

// let array = [1,2,3,4,5];
// array.splice(1,0,32,32);
// console.log(array)

// console.log(Math.sqrt(25));

// ============================== DOM MANIPULATION ==============================

// to select body;------------------------------------------------------------------------------------
// const body = document.body;
// //to createElements;----------------------------------------------------------------------------------
// const div = document.createElement('div');
// const H1 = document.createElement('h1');
// //both are same but with append you can append text;--------------------------------------------------
// body.append(div); //or body.append('appending text')
// body.appendChild(div); // only appendChild with elements no inserting text like append;
// //adding Text;----------------------------------------------------------------------------------------
// H1.append('text with append'); // for appending element into element but can also create text;
// H1.textContent = 'text with textContent'; // on console will give all content eg display:none and also all spaces;
// H1.innerText = 'text with innerText'; // on console only will give text;
// H1.innerHTML = 'text with innerHtml'; // or H1.innerHTML = '<p>a p tag with innerHTMl</P>';
// div.append(H1);
// removing element from the DOM ----------------------------------------------------------
// const title = document.querySelector('.titleclass'); // selecting with class id or element type;
// div.append(title);
// div.removeChild(title); // to remove from parent;
// title.remove(); // remove the respective element;
// working with attributes ------------------------------------------------------------
// console.log(title.getAttribute('class')); // or title.class
// title.setAttribute('id','titleId') // or title.id = titleId
// title.removeAttribute('id');
// adding class or remove or toggle------------------------------------------
// const subtitle = document.querySelector('#subtitleid');
// subtitle.classList.add('classWithJS') // to add class
// subtitle.classList.remove('classWithJS')// to remove class
// subtitle.classList.toggle('classWithJS');// to toggle addOrRemove class in the basis of existence

  // DOM TRAVERSING, it’s the act of selecting an element from another element.
  // THREE WAYS OF TRAVERSING THE DOM
  // 1. UPWARDS 2. DOWNWARDS 3. SIDEWAYS

  // 1. DOWWARDS => children, querySelectorAll,querySelector
  // const li = document.querySelector('.ul');
  // const allLi = li.children;
  // const array = Array.from(allLi);

  //   array.forEach(element=>element.innerText= 'thisisis inner text')
  
  // const allLi2 = document.querySelectorAll('.li')
  // allLi2.forEach(element=>element.innerText= 'thisisis inner text this is inner text')

  // 2. UPWARDS => parentElement, closest
  // const li = document.querySelector('.li');
  // const ul = li.parentElement;
  // const ul2 = li.closest('ul');
  // console.log(ul2,ul);

  // 3. SIDEWAYS => previousElementSibling, nextElementSibling
  // const li = document.querySelector('.li');
  // const prev = li.previousElementSibling.innerText= 'prec this is';
  // const next = li.nextElementSibling.innerText= 'next this is';
  // console.log(prev);
  // console.log(next);

  // const forth = document.querySelectorAll('.li');
  // forth[3].innerText = 'this is the fourth li';

  // const li = document.querySelector('.li');
  // const parent = li.parentElement;
  // const all  = parent.children;
  // const newAll = Array.from(all);
  // newAll[3].innerText = 'this is the fourth li';

//  ====================== functional OBJECT ORIATAIONAL PROGRAMMING ======================

//Encapsulation
//inheritance
//Abstraction
//polymorphism

// function User(name,lastName){
//   this.name = name;
//   this.lastName = lastName;
//   let nickName = 'leastLikedCustumer'
//   this.fullName=function(){
//     return `full Name = ${this.name}  ${this.lastName}`
//   }
//   this.readNickName = ()=>{
//     return nickName;
//   }
//   Object.defineProperty(this,'nickName',{
//     get:()=>{
//       return nickName
//     },
//     set:(value)=>{
//       if(typeof(value) != 'string')
//         throw new Error('please inter a string name')
//       nickName = value
//     }
//   })
// }

// let newUser = new User('Naveed','Ali')

// console.log(newUser.nickName)
// console.log(newUser.nickName = "1234") // this will not work with the setter defined in the construtor above.
// console.log(newUser.nickName = 1234) // this will not work with the setter defined in the construtor above.
// console.log(newUser.nickName);

// =================================== async await vs fetch api =================================

// quoteApi = 'http://api.quotable.io/random';

// async function getQuotation (){
//     let response = await fetch(quoteApi);
//     let quotation  = await response.json();
//     console.log(quotation.content,quotation.author)
//   }

// getQuotation();

// fetch(quoteApi)
// .then(response => response.json())
// .then(data=>{console.log(data.content,data.author)})
// .catch((error)=>{console.log(error)})

// ========================= OOP  with classes =================================

// class User{
//   constructor(name,email){
//      this.name = name,
//      this.email = email
//      this.score = 0;
//   }
//   login(){
//      console.log(this.name, 'has just logged in');
//      return this
//   }
//   logout(){
//     console.log(this.name,"has just logged out");
//     return this
//   }
//   addScore(){
//     this.score += 1;
//     console.log(this.name,'has the score of',this.score)
//     return this
//   }
// }

// class Admin extends User{
//   deleteUser(user){
//     userList = userList.filter((element)=>{
//       return user.email != element.email
//     })
//     return this
//   }
// }
// const userOne = new User('ali','ali@gmail.com');
// const userTwo = new User('rehman','rehman@gmail.com')
// const admin = new Admin('naveedAli','naveed@gmail.com')
// let userList = [userOne,userTwo]
// userOne.addScore().addScore().addScore().addScore()
// console.log(userList);
// admin.deleteUser(userTwo);
// console.log(userList)
//======================================= Regex =====================================

// const regex = /[ca]tb?/gi;
// const string = "The quick Catbrown fox jumpss over the lazy dog";
// console.log(regex.test(string));

// g to match many values;
// i to remove case sensitivity
// + to match two on to on values
// ? anything before is optional
// . match everything or can be any charactor
// \. anything after \ is treated as normal charactors
// \s  match all white space. \S match all words.
// \w match all words \W match all white space
// {4,8} length between 4 and 8 charactors.
// [ca] to group charactors means match anyone.
// [a-z] [0-9] ranges means all charactor in between a to z

//========================================= Practice ===================================

// const array = [
//   { name: "naveed", age: 25 },
//   { name: "Rahim", age: 33 },
//   { name: "Aslam", age: 223 },
//   { name: "Karim", age: 40 },
//   { name: "younus", age: 50 },
//   { name: "Rehmat", age: 20 },
// ];
// ___________________________________________________
// var a = ["one","two","three"];
// a[100] = "four";
// console.log(a.length)

// ________________________________________________
// var v = 1;
// var f1 = function(){
//   console.log(v)
// }
// var f2 =function(){
//   var v =2;
//   f1()
// }
// f2()
// console.log('here')

// _____________________________________________________

// We have an unsorted list of integers, and need to know if all numbers in the list are unique. Without sorting the given array, return true if there are no two repeating numbers, or false otherwise.

// The integers are safe to compare (no floating point issues).

// console.log('here')

// function isUnique(nums) {
//   const result = [];
//   let answer = false;
//   if (!nums.length) return true;
//   for (i = 0; i < nums.length; i++) {
//     for (k = 0; k <= result.length; k++) {
//       if (result[k] === nums[i] || result[k] === -(nums[i])) {
//         answer = true;
//         break;
//       } else {
//         result[result.length] = nums[i];
//       }
//     }
//   }
//   return answer;
// }

// console.log(isUnique([6, 2, 44, 12, 96, 0, -12, 66]));

// let x = 10000000;
// let n = 0;
// let time = performance.now()
// while(x>0){
//   n += x;
//   x--;
// }
// console.log(n)
// console.log(performance.now()-time)

// let time2  = performance.now()
// function factorial2(n){
//   let result = 0;
//   for(i = 0 ;i<=n;i++){
//     result += i;
//   }
//   return result;
// }
// console.log(factorial2(100000))
// console.log(performance.now()-time2)

// let time3 = performance.now()
// function factorial(n){
//   return  n * (n+1) /2;
// }
// console.log(factorial(10000000000))
// console.log(performance.now()-time3)

// Given two strings composed of spaces, punctuation marks and letters, determine if they are anagrams. Two strings are anagrams if ignoring non-letters and the case of letters, they consist of exactly the same number of letters. For example Dormitory and Dirty Room are anagrams, whereas bar and barb are not.

// function isAnagram(string1, string2) {
//   let string1s = string1.toUpperCase().split("");
//   let string2s = string2.toUpperCase().split("");
//   let letters = [];
//   let answer = true;
//   for (i = 65; i < 91; i++) letters.push(String.fromCharCode(i));
//   for (i = 0; i < string1s.length; i++) if (!letters.includes(string1s[i])) string1s.splice(i, 1);
//   for (i = 0; i < string2s.length; i++) if (!letters.includes(string2s[i])) string2s.splice(i, 1);
//   console.log(string1s)
//   console.log(string2s)
//   if (string1s.length != string2s.length) answer = false;
//   if (answer)
//     for (i = 0; i < string1s.length; i++) {
//       if (string2s.includes(string1s[i])) {
//         string2s.splice(string2s.indexOf(string1s[i]), 1);
//         break;
//       } else answer = false;
//     }
//   return answer;
// }

// console.log(isAnagram("Election results", "Lies - Let's recount!"));

function* generatorr(){
  yield 1;
  
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const object = generatorr();

// for(let i of object){
//   console.log(i)
// }

// console.log(object.next())
// console.log(object.next())
// console.log(object.next())
// console.log(object.next())
// console.log(object.next())
// console.log(object.next())

console.log([...object])