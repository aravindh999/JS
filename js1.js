//Conditionals
let num=56;
if(num%2==0)
	console.log("Even");
else
	console.log("Odd");

//Conditionals operator

console.log(num%2==0 ? "Even" : "Odd");

//Nested conditional operator

let x= num>4 ? num>10 ? "10" : "9" : "3";

console.log(x);

//Logical operator

x=11 && alert("Nothing");
console.log(x);

//Nullish coalescing operator (??)

let a=null;
let b= a??10;
console.log(b);

let h = null;
let w = null;

let area = (h ?? 100) * (w ?? 50);

console.log(area);

//Loops
// x=5;
// while(x>0){
// 	console.log(x);
// 	x--;
// }

// do{
// 	console.log(x);
// 	x++;
// }while(x<5);

// for (var i = 5; i >= 0; i--) {
// 	console.log(i);
// }

//Break outer for loop from inner loop
out: for(var i=0;i<10;i++){
	for(var j=0;j<10;j++){
		if(j>5)
			break out;
		console.log(j);
	}
}

//Switch

let z=2;
switch(z){
	case 1:
		console.log("one");
		break
	case 2:
		console.log("two");
		break;
	case 3:
		console.log("three");
		break;
	default:
		console.log("num");
}

//Functions

function pow(x, y=2){
	return x**y;
}
console.log(pow(2,5));
console.log(pow(6))

function primes(n){
	main: for(var i=2;i<n;i++){
		for(var j=2;j<=i**(0.5);j++){
			if(i%j==0) continue main;
		}
		console.log(i);
	}
}
primes(50);


//Call back functions

function f(f1,f2){
	confirm("select") ? f1() :f2();
}
function a1(){
	alert("Hi");
}
function a2(){
	alert("Hello");
}
f(a1,a2);


//Arrow Functions

let pow1 = (x,y) => x**y;

console.log(pow1(2,5)); 

let fun = () => {
	console.log(2);
	console.log(3);
}
fun();
