'use strict'

function factorial(x){
    return x ? x * factorial(x-1) : 1;
};

console.log(factorial(5));