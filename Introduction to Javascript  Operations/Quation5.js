// Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.


// let interest;

// let principal = 300;

// let rate = 3;

// let time = 2;

// interest = (principal * rate * time) / 100;

// console.log(interest);


function calculateSimpleIntrest(principal, rate, time) 
{

    return (principal * rate * time) / 100;
    
}


const Intrest = calculateSimpleIntrest(300, 3, 4);

console.log(Intrest);