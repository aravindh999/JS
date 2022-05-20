//Class
{
class MyClass {
  constructor(var1) {
    this.var1 = var1;
  }
  fun() {
    console.log(this.var1);
  }
}

let myClass = new MyClass("Hi");
myClass.fun();
}

//Class Expression
{
function makeClass(x) {
  return class {
    fun() {
      console.log(x);
    }
  };
}

let NewClass = makeClass("Hello");

new NewClass().fun();
}

//Getter and Setter
{
  class MyClass{
    constructor(x){
      this.x=x;
    }
    get x(){
      return this._x;
    }
    set x(val){
      this._x=val;
    }
  }
  let obj=new MyClass("Nothing");
  console.log(obj.x);
}

//extends
{
class A{
  constructor(x){
    this.x=x;
  }
}
class B extends A{
  alt(){ console.log(this.x)};
}
let obj = new B("Hi");
obj.alt();
}

//overriding
{
class A{
  constructor(x){
    this.x=x;
  }
  print(){
    console.log(x);
  }
}
class B extends A{
  alt(){ console.log(this.x)};
  print(){
    console.log("Overriden "+this.x);
  }
}
let obj = new B("Hi");
obj.print();
}

//Static properties and methods
class ClassA {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(a, b) {
    return a.date - b.date;
  }
}

let ClassAs = [
  new ClassA("HTML", new Date(2019, 1, 1)),
  new ClassA("CSS", new Date(2019, 0, 1)),
  new ClassA("JavaScript", new Date(2019, 11, 1))
];

ClassAs.sort(ClassA.compare);

console.log(ClassAs[0].title);

//Protected
{
  class A{
    _var1 = 0;
    set var1(val){
      this._var1=val;
    }
    get var1(){
      return this._var1;
    }
    constructor(val){
      this._var1=val;
    }
  }
  let a=new A(100);
  a.var1=10;
  console.log(a.var1);
}

//Private
{
  class A{
    #var1 = 0;
    set var1(val){
      this.#var1=val;
    }
    get var1(){
      return this.#var1;
    }
    constructor(val){
      this.#var1=val;
    }
  }
  let a=new A(100);
  a.var1=10;
  console.log(a.var1);
}

//Extending built-in classes
class NewArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
let arr = new NewArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

//mixin
let funMixin = {
  fun() {
    console.log(`Hello ${this.name}`);
  },
  fun2() {
    console.log(`Bye ${this.name}`);
  }
};
class User {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(User.prototype, funMixin);
new User("Dude").fun();