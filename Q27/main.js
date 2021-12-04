console.log("Q27 JS problem solving ")

// Write a function `sum` that accepts an array of numbers and returns the sum of the numbers.

function sumArr(arr){
    // declare varaible to store data
let result=0;
for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    // sum previous data with loop data
result=result+arr[i]
// console.log(result)

}
return result;
}

console.log(sumArr([1,2,3,4,5,6]))  // => 21
// ===============================================================================

// Write a function `maximumNumber` that accepts an array of numbers and returns the max number in the array.

function maxNum(arr){
let result=0;
for(let i=0;i<arr.length;i++){
    // check if the value at the result bigger than the value in the arr
if(arr[i]>result){
    result=arr[i]
}
}
return result;
}

console.log(maxNum([0,5,2,10,8,6]))  // => 10
console.log(maxNum([2,10,21,3,6,7]))  // => 21
