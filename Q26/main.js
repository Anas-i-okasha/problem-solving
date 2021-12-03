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
// console.log(countCh("hello", "l"))  //=> 2
// console.log(countCh("hello", "e"))  // => 1
// console.log(countCh("hello", "z"))  // => 0

// =========================================================================

// Write a function `countWords` that accepts a string and returns an object that has all unique words as keys and the number of times the word was found in the string as a value

function countsWord(word){
    if(!word.length) return {}
    let newWord={}
    let res = word.split(" ")
 res.forEach(element => {
    if(!newWord[element]){
        newWord[element]=1
    }else{
        newWord[element]++
    }
});
return newWord
}
// console.log(countsWord("hello hello world"))  //{ hello: 2, world: 1 }
// ============================================================================================================

//Write a function `averageGrade` that accepts an array of student grades as values and returns the average grade and if the array is empty return "Please enter at least one grade".

function avargeGr (grades){
const result=grades.reduce((acc,ele)=>{
return (acc + ele) 
},0)
return result / (grades.length)
}
console.log(avargeGr([100, 80, 95, 67, 74]))  // 83.2
console.log(avargeGr([100, 90, 80, 70]))   // => 85