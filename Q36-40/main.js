console.log("Problem-solving Q36-40")

/* Q36 */
//Write a JS program to extract the first half of a strig of even length

const halfString=(str)=>{
let result=str.split("")
let half=Math.ceil( result.length/2)
let result1=result.splice(0,half).join("")
return result1
}

// Another solution:
const firstHalf=(str)=> str.slice(0,str.length/2)

//==========================================================================================================

/*Q37 */
// Write a JS program to concatenate two strings except their first character.

const stringConcat=(str1,str2)=>{
let result1=str1.substr(1)
let resutl2=str2.substr(1)
return result1 + resutl2
}
console.log(stringConcat("anas","okasha")) // => The result should be => naskasha

// Another solution :
// convert the strings into array and use shift method to remove first element , then use join  to return string
//==============================================================================================

/* Q38 */
// Given two values , write a program in JS to find which value nearest 100.

const near=(nu1,nu2)=>{
    if(100-nu1< 100-nu2){
return nu1 
    }else{
        return nu2 
    }
}

console.log(near(50,75)) // => the result should be 75
//===================================================================================================

/* Q39 */
//Write a JS Program to replace the first character with $ 

const replacment=(str)=>{
    let result=str.split("")
    result[0]="$"
    return result.join("")
}

/*Q40 */

// if the string included any number replace it with dollar sign $ (first digit)

const digitReplace=(str)=> str.replace(/[0-9]/,"$")  // Regolar Exp


