console.log('Problem Solving Q: 6');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

 SumOddNumber=(numbers)=> {
    const newArr =[];
    for(let i=0; numbers.length>i ; i++){
      if(numbers[i] %2 !=0){
        newArr.push(numbers[i])
      }
    }
  let result= newArr.reduce((acc , num)=>num+acc,0)
  return result
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
