let barsContainer= document.getElementById("barsContainer");
let number = document.getElementById("number");

let randomize= document.getElementById("randomize");
let algorithm= document.getElementById("algorithm");

let sort = document.getElementById("sort");
let speed= document.getElementById("speed");

let max= number.value;
let numberOfBars= number.value;

let delay=speed.value;
let unsortedArray= new Array(numberOfBars);

let newArray= document.getElementById("newArray");

function waitforme(delay) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, delay); 
    }) 
}
