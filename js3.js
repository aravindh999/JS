//Recursion and stack
function factorial(n){
	return n>1? n*factorial(n-1): 1;
}
console.log(factorial(9));

//Rest parameters and spread syntax
function sumAll(...args) { 
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); 
console.log( sumAll(1, 2) ); 
console.log( sumAll(1, 2, 3) ); 

//Variable scope, closure
function makecnt() {
  let count = 0;

  return function() {
    return count++;
  };
}

let cnt = makecnt();

console.log( cnt() ); 
console.log( cnt() ); 
console.log( cnt() ); 

//Global object
let gLet = 5;

console.log(window.gLet);

//Function object, NFE
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); 
console.log(f2.length); 
console.log(many.length); 

function fun() {
  console.log("Hi");
  fun.counter++;
}
fun.counter = 0;

fun(); 
fun();

console.log( fun.counter);

//The "new Function" 
let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) );

//setTimeout
setTimeout(() => alert('Hello'), 1000);

//setInterval
let timerId = setInterval(() => alert('Hi'), 2000);

setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//Nested Time out
let i = 1;
setTimeout(function run() {
  setTimeout(run, 100);
}, 100);

//Function binding
{
setTimeout(() => user.sayHi(), 1000);
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};
}
{
	let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser();
}
console.log(1);

//Property flags and descriptors
let usr = { };

Object.defineProperty(usr, "name", {
  value: "John",
  enumerable: true,
  configurable: true
});

alert(usr.name);

//Property getters and setters
{
	let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName);
}