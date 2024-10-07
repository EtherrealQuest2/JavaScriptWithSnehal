/*
        let, const and var are keywords(special meaning in the language) in Js and its uses are--> 
 */

/*********************************************************************************************** */
/*
    about const -->
    1. Use for block scope (loops and if,else statements ).
    2. Cannot use for redeclarations or hoisting . 
*/
/*
const pi = 3.14;
// const pi=5.67; //Sytax Error : redeclared 
function abc(){
    const pi = 5.78;
    console.log(pi);
}
abc(pi); //function invoked 
console.log(pi); // global pi value is defined 
*/
/*
function abc(){
    const pi = 3.14;
    console.log(pi);
}
console.log(pi); //Reference Error : pi is not defined beacuse of block scope it is not present outside of scope .

*/

/*********************************************************************************************** */
/*
    about var -->
    1. Use for function scope.
    2. use for redeclarations or hoisting .
    3. not really used for new coders as it gives some bugs and errors in scoping . 
*/
/*
function outer() {
    var x = 10;
    console.log(x); // 10
    function inner() {
      console.log(x); // 10
    }
    inner();
  }
  outer();
*/

/*********************************************************************************************** */
/*
    about let -->
    1. Use for block scope.
    2. use for redeclarations not for hoisting .
*/
/*
if (true) {
    let y = 20;
    console.log(y); // 20
  }
  console.log(y); // ReferenceError: y is not defined
*/