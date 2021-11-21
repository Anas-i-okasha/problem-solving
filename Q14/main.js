console.log('Problem Solving Q:14 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

 firstNonRepeatedCharacter=(str)=> {
   for(let i =0 ; i<str.length ; i++){
     let newArr = str.charAt(i)
      if(str.indexOf(newArr)==i && str.indexOf(newArr,i+1)==-1){
       return newArr
      }
   }
}
// function firstNonRepeatedCharacter(string) {
//   for (var i = 0; i < string.length; i++) {
//     var c = string.charAt(i);
//     if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//       return c;
//     }
//   }
//   return null;
// }
/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/