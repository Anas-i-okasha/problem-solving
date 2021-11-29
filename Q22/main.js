console.log("problem solving Q22");

/*  JavaScript Q1 */

/* Find the missing letter using Javascript  */

function findMissing(letter) {
  let word = "abcdefghijklmnopqrstuvwxyz";
  let start = word.indexOf(letter[0]);
  for (let i = 0; i < letter.length; i++) {
    // console.log(letter[i])
    // console.log(word[start + i])  // loop to check start match with word alphacar
    if (letter[i] != word[start + i]) {
      return word[start + i];
    }
  }
  return "No missing letter here ";
}
findMissing("abcd"); // No missing letter
findMissing("defgi"); // "h"

// ===========================================================================

/* Function have parameter (number) put underscore and comma if number lenght
 more 7,8,9  and  if the number lenght is 4 put underscore */


function addCommaUnderscore(num) {
    //convert to string 
  let arr1=num.toLocaleString()
  //convert to array 
  let arr = arr1.split("");
//   return arr
arr[arr.length - 4]="_"
// convert to string 
result = arr.join("")
return result
}

addCommaUnderscore(123)  // 123
addCommaUnderscore(1234) // 1_234
addCommaUnderscore(120130421) //120,130_421