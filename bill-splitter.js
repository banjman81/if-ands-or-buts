const prompt = require('prompt-sync')();

const person1 = Number(prompt('Amount paid by person 1. $'));

const person2 = Number(prompt('Amount paid by person 2. $'));

var total = person1 + person2;
var half = total/2;

if(isNaN(person1) || isNaN(person2)){
    console.log("error!")
}
else if(person1 < half){
    let difference = Math.round(100*(half - person1))/100;
    console.log('Person 1 owes person 2 ', '$'+difference)
}
else if(person2 < half){
    let difference = Math.round(100*(half - person2))/100;
    console.log('Person 1 owes person 2 ',  '$'+difference )
}
else{
    console.log('The bill was split evenly.')
}