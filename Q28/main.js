console.log("Q28 JS");

/* Write a function that accept a string as a parameter and count the number vowel letters */

function vowel(str){
let str1="aeiouAEIOU";
// let str2=str.split("")
let count=0;
for(let i=0;i<str.length;i++){
    // console.log(str[i])
    // console.log(str2)
    if(str1.indexOf(str[i])!=-1){
      count+=1;
    }
}
return count;
}
// console.log(vowel("Anas"))  // =>  2 

// ======================================================================================================================



// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function convert(stri){
let first = stri.split(" ")
let result=[]
// console.log(first)
for(let i=0;i<first.length;i++){
// console.log(first[i].charAt(0))
result.push(first[i].charAt(0).toUpperCase()+first[i].slice(1))
}
return result;
}

console.log(convert("school anas"))