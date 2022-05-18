//Objects
let x={
	"a":1,b:true,"c":[1,2,3],d:"str"
};
console.log(x,x["b"],x.a);
console.log(typeof x);
console.log("a" in x ? "yes":no);
for(let i in x){
	console.log(i,x[i]);
}

//Cloning objects
let y=Object.assign({},x);
console.log(y);

//Object with method
let obj={
	a:1,
	b:2
};
obj.fun = function(){
	alert("Hi");
	console.log(this.a);
};
obj.fun();

//Optional chaining '?.'
let usr={};
console.log(usr.address ? usr.address : null)
console.log(usr?.address?.street);

//Symbol
let sym=Symbol("id");
usr={
	name:"Stark",
	[sym]:1
};
console.log(usr[sym]);

//Numbers
let nu=10_000_000;
//or
let nu1=1e7;
console.log(nu==nu1);

//Converting to other bases
let n=267;
console.log(n.toString(16),n.toString(32));
console.log(1234..toString(15),(1234).toString(2));

//Rounding
let cm=12.36;
console.log(Math.floor(cm),Math.round(cm),Math.ceil(cm));
console.log(cm.toFixed(5));
//parseInt
let pr="12rhf";
console.log(parseInt(pr),parseFloat("12.35dff"));
console.log(parseInt(0xff21,16));
console.log(Math.random());

//Strings
let str="Widget with id";
console.log(str.indexOf('id',2));
console.log(str.includes("id",2),str.startsWith("Wid"),str.endsWith("id"));
console.log(str.slice(-8,-3),str.substring(-5,6),str.substr(2,4));

let s1="Ab",s2="ab";
console.log(s1.localeCompare(s2));

//Array
let arr=[1,2,3];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(3,4,5);
console.log(arr);

arr.forEach((item,index,array) => console.log(item)); 
let a1= arr.filter((i,ind,ar) => i>3);
console.log(a1);
let a2=arr.map(i=>i+6);
console.log(a2);

a2.sort();
console.log(a2);
a2.sort((a,b)=> a-b);
console.log(a2);

//sum of array
console.log(arr.reduce((sum,cur)=> sum+cur));

//Iterables
let ob={
	from:1,
	to:5
};
ob[Symbol.iterator]=function(){
	return{
		current: this.from,
		last:this.to,
		next(){
			if(this.current<=this.last)
				return {done:false, value:this.current++};
			else
				return {done:true};
		}
	};
};
for(let i of ob)
	console.log(i);

//Maps
let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');     
map.set(true, 'bool1'); 


console.log(map.get(1)); 

console.log(map.size); 

//Date and Time
let d1=new Date();
console.log(d1,d1.getFullYear(),d1.getMonth(),d1.getDate());
i=0;
while(i<1000000){
	c=2*323;
	i++;
}
let d2=new Date();
console.log(d2-d1);


//JSON
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room 
};
console.log(JSON.stringify(meetup,null,2));

let cv="[1,2,3,4,5]";
console.log(JSON.parse(cv));
