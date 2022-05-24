//Generators
{
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }
    let ge = gen();

    for (let x of ge) console.log(x);

    let li = [...gen()];
    console.log(li);
}

//Using generators for iterables
{
    let range = {
        from: 1,
        to: 6,
        *[Symbol.iterator]() {
            for (let i = this.from; i <= this.to; i++) {
                yield i;
            }
        },
    };
    console.log([...range]);
}

//Generator Composition
{
    function* generatorSeq(from, to) {
        for (let i = from; i <= to; i++) yield i;
    }
    function* genFun() {
        yield* generatorSeq(48, 57);
        yield* generatorSeq(65, 90);
        yield* generatorSeq(97, 122);
    }
    let str = "";
    for (let c of genFun()) {
        str += String.fromCharCode(c);
    }
    console.log(str);
}

//“yield” is a two-way street
{
    function* gen() {
        let res = yield "2+2=?";
        console.log("Xccd:", res);
    }
    let g = gen();
    let q = g.next().value;
    g.next(4);
}

//Async iteration and generators
{
    let range = {
        from: 1,
        to: 4,
        [Symbol.asyncIterator]() {
            return {
                current: this.from,
                last: this.to,
                async next() {
                    await new Promise((res) => setTimeout(res, 1000));
                    if (this.current <= this.last) {
                        return { done: false, value: this.current++ };
                    } else {
                        return { done: true };
                    }
                },
            };
        },
    };
    (async () => {
        for await (let v of range) {
            alert(v);
        }
    })();
}

//Modules
// import { f1, fun1 } from "./auth/a.js";
// console.log(f1());
// console.log(fun1(23));

import User from "./auth/b.js";
let user = new User("John");
console.log(user);

let { f1, fun1 } = await import("./auth/a.js");
console.log(f1());
console.log(fun1(3.5));

//Eval: run a code string
let r = eval("1*128*2193-283/283");
console.log(r);

//Currying
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
function sum(a, b) {
    return a + b;
}

let curr = curry(sum);

alert(curr(1)(2));

//.curry
function fun(a, b, c) {
    return a * b + " " + c;
}
fun = curry(fun);
let x = fun(4);
console.log(x(2, "abcd"));

//BigInt
const bigin = 1263744845585555555555555555555488338n;
const b = BigInt(bigin);
console.log(bigin, b);
