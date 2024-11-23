// define the Product interface and that expect name value and price value 
interface Product {
    name: string;
    price: number;
}
// create calculateTotalPrice to calc the total of prices which take a array of objects and return a total of price for every object

function calculateTotalPrice (products:Product[]):number{ // the function expect to ensure array of objects and return a number
    return products.reduce((acc,cur)=>acc + cur.price,0) //used reduce to calc th prices by current value and accumulator and take a initial value and in this case we must use 0
}

console.log(calculateTotalPrice([{name:"moo",price:18},{name:"d",price:18},{name:"a",price:18}]));


//Task 2
//Email Validation

// define the Email interface and that expect value "the email" as string
interface Email {
    value: string
}

// create calculateTotalPrice to calc the total of prices which take a array of objects and return a total of price for every object

// create isValidEmail to check the email if it valid email or not
function isValidEmail (email:Email):boolean{ // the function expect to ensure object has a email and that return a boolean value
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,6}$/ //spell check by regular expression
    // [a-zA-Z0-9._-] to match a capital or small char or any number or . or - or _ 
    // {2,6} to specify as a min 2 char and max 6 capital or small char to pass  
    return emailRegex.test(email.value) //that return a boolean value after check the email by emailRegex
}

console.log(isValidEmail({value:'beat-s@anything.ps'})); //true
console.log(isValidEmail({value:'bea t-s@gmail.com'}));   //false
console.log(isValidEmail({value:'beat-s@gmail.c'}));      //false
