const name ="Snehal"
const repoCount = 50

//console.log(name + repoCount + "Value"); // not used by modern technique

console.log(`Hello my name is ${name} an dmy repocount is ${repoCount}`);
// this is string interpolation hence here semicolon is must
// must use this method for string declarations

// There is also a special method to declare a string => string interpolation 

// String interpolation method is a object method by using 'new'
const versionName = new String("KillerName");
console.log(versionName); //in browser it will show length , keyvalue pair, prototype and primitiveName

//prototype is having many methods 
//Some are :
console.log(versionName.length); //10
console.log(versionName[4]); // "e"
console.log(versionName.__proto__); //Array => {}
console.log(versionName.toUpperCase()) //KILLERNAME
console.log(versionName.toLowerCase()) //killername
console.log(versionName.charAt(2)) //l
console.log(versionName.indexOf("K")) //0










