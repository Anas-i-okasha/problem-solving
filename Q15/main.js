console.log('Problem Solving Q:15 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

 factorial=(number)=> {
  let result = 1;
  if (number == 0 || number == 1){
    return result;
  }else{
    for(let i = number; i >= 1; i--){
      result = result * i;
    }
    return result;
  }  
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/