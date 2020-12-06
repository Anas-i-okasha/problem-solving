console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
  let result = 0;
  for (let i=0 ; i<arr.length-2; i++){
    for(let j=i+1 ; j<arr.length-1;j++){
     for(let k=j+1 ; k<arr.length ; k++){
       let largest = arr[i]*arr[j]*arr[k];
       if(largest > result){
         result = largest
       }
     }
    }
  }
  return result 
}
/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/