//Error handling, "try...catch"
try{
	sjsjsj;
}
catch(err){
	console.log(err);
}
finally{
	console.log("Completed");
}

//Try catch in set timeout
setTimeout(function(){
	try{
		some;
	}
	catch(err){
		console.log(err);
	}
},1000);

//Custom Errors
class CustomError extends Error{
	constructor(msg){
		super(msg);
		this.name="Custom Error";
	}
}
try{
	let a=0;
	let b=1/a;
	if(a<=0)
		throw new CustomError("Divide by Zero!");
}
catch(err){
	console.log(err);
}

//Call back 
function loadScript(src,callback){
	let script = document.createElement('script');
	script.src=src;
	script.onload = () => callback(null,script);
	script.onerror = () => callback(new Error("Script load error ${src}"));
	document.head.append(script);
}
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',(err,script) =>{
	if(err)
		console.log(err);
	else
		console.log(script.src +" loaded");
});

//Promise
{
let prm =new Promise((res,rej)=>{
	setTimeout(()=> res("Done"),1000);
});
prm.then(
	result => console.log(result),
	error => console.log(error)
);
}
{
let prm =new Promise((res,rej)=>{
	setTimeout(()=> rej("Error"),1000);
});
prm.then(
	result => console.log(result),
	error => console.log(error)
);
}

//Example
function loadScript(src){
	return new Promise(function(res,rej){
		let script = document.createElement("script");
		script.src=src;

		script.onload = () => res(script);
		script.onerror = () => rej(new Error("Script loaded ${src}"));
		document.head.append(script);
	});
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
.then(
	script => console.log(`${script.src} Loaded successfully!!!`),
	error => console.log(error)
);

//Chaining Promises
new Promise(function(res,rej){
	setTimeout(()=> res(10),1000);
})
.then(res => {
	console.log(res*10);
	return res})
.then(res => {
	console.log(res*20);
	return res;
});

//fetch
fetch("https://api.github.com/users")
.then(response => response.json())
.then(usrs => new Promise((res,rej) =>{
	console.log(usrs.length);
	let h1= document.createElement('h1');
	h1.innerHTML = "Images from Github API";
	document.body.append(h1);
	for(let x in usrs){
		let img= document.createElement('img');
		img.src= usrs[x].avatar_url;
		img.height = 100;
		img.title= usrs[x].login;
		img.className = 'exp'+usrs[x].id;
		document.body.append(img);
	}
}))
.then(res => console.log("Completed!!"));

//