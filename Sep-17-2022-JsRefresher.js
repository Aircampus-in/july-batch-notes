// why object is updated even after declaring it using const keyword?
// shallow copy
// deep copy
// nested object and deep copy in nested object. 
// object methods
// how to convert Obj into string if it has function as a value?
// this in depth
// a hard question for object , 
// contaning all the implementation to understand hard implementation


// Topic 1 : Object

// How object implements:-
// 2. read 
// 3. update

var a = { 
    key1 : 'value1',
    key2 : 'value2',
    1: 'value7'
}

// console.log(a['key1']) // value1;
// console.log(a.key1) // value1;

// if we have an object and we wanted to check values we must know the
// associated keys of it.

// change the value of a key. 

a['key2'] = 'value5';
// console.log(a);

a['key2'] = 'aircampus';
// console.log(a);

// all the keys present in the object is a string in nature.

var a = { 
    key1 : 'value1',
    key2 : 'value2',
    1: 'value7'
}

// console.log(a[1]); // value7
// console.log(a['1']); // value7

a[1] = 5; // not good practise.
a['1'] = 5; // good practise. 

// console.log(a); 

var a = { 
    key1 : 'value1',
    key2 : 'value2',
    1: 'value7',
    true: false
}

// console.log(a['1']); 

// strings must be in '', "", ``;

// how to add new key-value pair in the object. 

var a = { 
    key1 : 'value1',
    key2 : 'value2'
}

// console.log(a);
// we wanted to add new key-value pair ( key = 'key3', value = 789);

// console.log(a['key3']);

a['key3'] = 789;
// console.log(a);


// const-> if you will declare any variable using const keyword,
// you will not able to change the value directly associated with that variable.

// const testVariable = 5;

// testVariable = 6;

// const obj = { a : 5 }
// obj = { a : 5 }; // we are changing the value of obj;

// obj['b'] = 6; // we are updating the value of key 'b' in the obj;
// // delete obj.a;
// obj['a'] = 7;

// how to replace key 'a' with a key 'c'?
// solu1. = preserve it value, delete a, add 'c';
// solu2 = add 'c' with a value of 'a', delete a;

// obj['c'] = obj['a'];
// delete obj.a;
// console.log(obj);

// Reference :- address of the variable. 

// you wanted to store two 5;
// you wanted to store two { a: 5 };


// NOTE:- object variable is holding its Reference(address)

// Shallow copy

// var obj1 = { a: 5 };

// var obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj2['b'] = 8;
// console.log(obj1);

//-> if we will change the value of any shallow copied object, 
// it will reflect all of the copies.


// deep copy
// How to do it?
// ans = Spread operator. it looks like '...'. 

// var obj3 = { ...obj1 };

// Question:- Given an object 'obj'. 
// 1. Print the value of object?
// 2. create a object having given obj key-values and a new key value pair (newKey, newValue)?
// 3. print it. 
// 4. add another key-value to the given obj (7: 'yes') and retrun newObj. 

// function printObj(obj) {
//     console.log(obj);

//     var newObj = {...obj};
//     newObj['newKey'] = 'newValue';

//     console.log(newObj);

    // obj['7'] = 'yes';
//     return newObj;
// }

// console.log(printObj({a: 5}));

// nested object => object inside object. 

// { 
//     a: {
//         b : 8,
//         c : {
//             d: 5
//         }
//     }
// }

// shallow copy in nested Object;

// deep copy in nested object;

var nestedObj = {
    a: 5,
    b: { "nestedKey" : 7 }
}

console.log(nestedObj);

// var deepCopied = { ...nestedObj };

// when you do the deep copy, is the refrences of nested object also resolved? 
// Ans = NO

deepCopied['k'] = 90;

console.log(nestedObj);
console.log(deepCopied);

deepCopied['b']["ki"] = 900;
console.log(deepCopied);

// Question : As our deepCopied obj is build by deep copying nestedObj, 
// so key 'b' will also not changed?

console.log(nestedObj);

// Issue: when doing deep copy for a nested objects, the internal objects are still copying
// by shallow copy.
// Question: How to resolve this issue?

// var obj = { a: 5 };
// var newObj = { ...obj, b: 7, m: 9 };
// console.log(newObj);


// var deepCopied = { ...nestedObj };


// var deepCopied = { ...nestedObj, b: { ...nestedObj['b'] } };

// var deepCopied = { ...nestedObj };
// deepCopied['b'] = { ...nestedObj['b'] }

// Problem:- if we don't know the depth of nested object or the depth is too high, how we will
// do the deep copy of that object 

// Solution 1:- 
// var objStr = JSON.stringify(nestedObj); // we are changing it to the string. 
// var newObj = JSON.parse(objStr); // we are converting JSON string into object. 

// Solution 2:- Recursive method.

// 1. For in. 
// 2. object to Array. 
// 3. sort. 

// for( index = 0; index < ; index jump)

// Object => indexes?// keys

// for ( var c in obj ) {
//     console.log(c);
//     console.log("value = ", obj[c]);
// }

// var a = 9;
// obj = {
//     a : 5
// }

// obj.a => 5

// var c = 'a';
// obj.c => 5


Object to Array => ?

var obj = {a: 7, b:6, c:5};
// { c: 5, b:6, a:7 }

// Object.keys(obj);
// Object.values(obj);

var arr = [
    {key: a, value: 5},
    {key: b, value: 6},
    {key: c, value: 7}
]

// var arr = [];
// for( var c in obj ) {
//     var newObj = { key: c, value: obj[c] };
//     arr.push(newObj);
// }

// arr = [];

// insert 90, 100;

// arr.push(90);
// arr.push(100);

// arr[0] = 90;
// arr[1] = 100;

// var arr = [];
// index = 0;
// for( var c in obj ) {
//     var newObj = { key: c, value: obj[c] };
//     arr[index] = newObj;
//     index++;
// }

// sorting. 

arr.sort(); // ascending sort

function compareFun(obj1 , obj2) {
    if(ob1.value > obj2.value) {
        return 1;
    } else {
        return 0;
    }
    // return obj1.value - obj2.value;
}

//  > 0; a - b > 0 => a > b
//  < 0
//  = 0

arr.sort(compareFun);









