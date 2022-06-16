'use strict';

// PRACTICING THE SCOPE CHAIN

//SCOPE is entire region where a variable is accessible.

function calcAge(birthYear){
    const age = 2037 - birthYear;

    // javaScript does a variable look up--finds firstName in global scope and can use it
    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`
        console.log(output);
    }
    printAge()

    return age;
}

const firstName = 'Jonas';
calcAge(1991);