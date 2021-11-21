console.log('Problem Solving Q:13 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

 evenOccurrence=(arr)=> {
  
  result ={}
  arr.forEach((elem)=>result[elem]=result[elem]+1 )
  for(let i=0; i<arr.length;i++){
    let newValu = arr[i]
    if(result[newValu] %2 ===0){
      return newValu
    }
    
    }
}


/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/