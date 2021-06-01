const prompt = require('prompt-sync')();

const password = Number(prompt('Please enter a four digit password. '));

if( isNaN(password)){
    console.log("Please enter numbers. ")
}

else if (password == 1234){
    console.log("Success, access geanted!")
}
else{
    console.log("Failure, access denied!")
}