//create a foo that accept a array of numbers and return the sum of the numbers and average
function sums(array) {
    let sumArray = array.reduce((acc, cur) => acc + cur, 0); // reduce i used it to loop through the array and add all the numbers together
    let average = sumArray / array.length; // calculate the average
    return `The sums of Array is:${sumArray},and Average is:${average}`; // return the sums and average
}

console.log(sums([10, 20, 30, 40, 50]));
//output: The sums of Array is:150, and Average is:30

//create a foo that accept a array of string and return  it without duplicates in the array
function findDuplicates(array) {
    return array.sort().filter((ele, i, arr) => ele != arr[i + 1]) // in the first i used sort to sort the array and then filter to remove duplicates
}
console.log(findDuplicates(["test", "spread", "awesome", "stroke", "spin", "spread", "awesome", "awesome",]));
