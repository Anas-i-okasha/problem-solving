console.log('Problem Solving Q:11 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  let middle = arr[Math.round((arr.length-1)/2)]
  if((arr.length /2)!=1){
    return middle
  }else{
    result = arr.reduce((acc , num)=>(num+acc/arr.length-1), 0)
    return result
  }

}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/