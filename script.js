'use strict';

// PRACTICING THE SCOPE CHAIN

//SCOPE is entire region where a variable is accessible.

//Via Scope, parent elements on top can not reach into functions to get the variables from them.

//Scoping is the reason you can have many different functions with the exact same parameter names.
//Those variables don't exist outside of the function

const firstName = 'Jonas';
calcAge(1991);

function calcAge(birthYear){
    const age = 2037 - birthYear;

    // javaScript does a variable look up--finds firstName in global scope and can use it
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        // BLOCK SCOPE
        if (birthYear >= 1981 && birthYear <= 1996) {

            // JavaScript tries to look for the variable in the current scope.
            const firstName = 'Stephen'
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);

            // ADD FUNCTION CAN ONLY BE USED IN THE BLOCK IN WHICH IT WAS DEFINED
            function add(a,b) {
                return a + b;
            }

             output = 'NEW OUTPUT';

        }
        console.log(output);
        // THIS WILL GIVE A REFERENCE ERROR AS YOU ARE OUTSIDE OF THE BLOCK SCOPE
        // if str was var instead of const it could still find it.

    }
    printAge()

    return age;
}

