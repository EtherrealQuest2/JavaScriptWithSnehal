/*
    DataTypes in JS and ECMA standards :
    While using documentation of Js we all use documentation of MDN => Mozilla builded 
    but the original one is tc39.es which is truly deep but not understandable by beginner devloper use MDN for beginner and better understanding.
    
    Data Types : Number, BigInt, Boolean, String, Objects, Function, Undefined, null, NaN(Not a number), symbol (coersion)
    

*/

//Converting into Number and its output
/*let a = {y:13};
console.log(typeof(a)); //

let convToNum = Number(a);

console.log(convToNum); 
// abc(string) --> NaN (number)
// true(boolean) --> 1(number)
// undefined(undefined) --> NaN(number)
// null(object) --> 0(number)
// NaN(number) --> NaN(number)
// object --> NaN(number)

console.log(typeof(convToNum)); 

*/

//Converting to boolean 
/*let b = 1;
console.log(typeof(b));

let conToBoolean = Boolean(b);

console.log(conToBoolean);
// true(boolean) --> true(boolean)
// 1 (number) --> true (boolean)
// "abc"(string) --> true(boolean)
// ""(string) --> false (boolean) 

console.log(typeof(conToBoolean));

*/

//Note that we can easily convert any data type to String. 

// null is nothing when there is no output as such either using 0 we use null 
// undefined is used when the value is not declared or initialized
// symbol is used when there is immutability
// object is what {key:value} and every typeof(null) --> object
// in number 0 and -0 are different 