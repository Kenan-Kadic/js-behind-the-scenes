'use strict';
//
// // PRACTICING THE SCOPE CHAIN
//
// //SCOPE is entire region where a variable is accessible.
//
// //Via Scope, parent elements on top can not reach into functions to get the variables from them.
//
// //Scoping is the reason you can have many different functions with the exact same parameter names.
// //Those variables don't exist outside of the function
//
// const firstName = 'Jonas';
// calcAge(1991);
//
// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//
//     // javaScript does a variable look up--finds firstName in global scope and can use it
//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`
//         console.log(output);
//
//         // BLOCK SCOPE
//         if (birthYear >= 1981 && birthYear <= 1996) {
//
//             // JavaScript tries to look for the variable in the current scope.
//             const firstName = 'Stephen'
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);
//
//             // ADD FUNCTION CAN ONLY BE USED IN THE BLOCK IN WHICH IT WAS DEFINED
//             function add(a,b) {
//                 return a + b;
//             }
//
//              output = 'NEW OUTPUT';
//
//         }
//         console.log(output);
//         // THIS WILL GIVE A REFERENCE ERROR AS YOU ARE OUTSIDE OF THE BLOCK SCOPE
//         // if str was var instead of const it could still find it.
//
//     }
//     printAge()
//
//     return age;
// }

// HOISTING

// console.log(me);
// console.log(job);
// console.log(year);

//var returns undefined
// var me = 'jones';
// let returns cannot access 'job' before initialization
// let job = 'teacher';
// let returns cannot access 'job' before initialization
// const year = 1991;

//first function is not a variable so it is not in a temporal dead zone
// console.log(addDecl(2,3));

//this function is a variable so it is in the temporal dead zone and you will get an error
// console.log(addExpr(2,3))


//Functions
// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function (a,b){
//     return a + b;
// }

// this will also be in a temporal dead zone as it is a variable that is
//trying to be used before declared
// const addArrow = (a,b) => a+b;

//WHAT IS THE THIS VARIABLE?

//this points to the owner of the function

// the this value is only assigned when function is called

// const jonas = {
//     name: 'Jonas',
//     year: 1989,
//     calcAge: function() {
//         return 2037 - this.year;
//     }
// };
// jonas.calcAge();

// THE THIS KEYWORD

// you get the window object if you just print out this
console.log(this)

// in a regular function call, this is undefined.
const calcAge = function(birthYear){
    console.log(2037 - birthYear)
    console.log(this)
}
calcAge(1991)

// arrow function has no this keyword. It uses window lexical this keyword--from parent scope...it is window from global scope
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1990);

//this in a method

// jonas here is the owner of the this keyword...it is who owns the calcAge method
const jonas = {
    year:1991,
    calcAge: function() {
        console.log(this)
        console.log(2037 - this.year)
    }
}
jonas.calcAge();



const matilda = {
    year: 2017,
}

// METHOD BORROWING

matilda.calcAge = jonas.calcAge;

//now matila has calcAge

//this keyword now points to matilda because matilda is calling the calcAge() method that has this in it
//matilda owns the calcAge method
matilda.calcAge();

// THIS KEYWORD always points to the object that is calling the method.