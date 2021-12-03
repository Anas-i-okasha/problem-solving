console.log("Q26 JS")

// Write a function `getLength` that accepts a string, and returns the length of the string.

function getLen(str){
 let result = str.split("")
 return result.length

}
// console.log (getLen(""))

// ===============================================================================

// Write a function `countCharacter` that accepts a string, and a character and returns the number of times the character was repeated, using recursion.

function countCh(string,ch){
let result=string.split("")
let res=[]
for (let i=0;i<result.length;i++){
if(string[i]==ch){
    res.push(string[i])
}
}
return res.length
}
console.log(countCh("hello", "l"))  //=> 2
console.log(countCh("hello", "e"))  // => 1
console.log(countCh("hello", "z"))  // => 0