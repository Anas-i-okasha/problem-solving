console.log("Problem-solving Q34-Q35")

/* Q34 */
/* write a JS program to check  two numbers and return 
true if one of the number is 100 or if the sum of the two number is 100*/

const checkNumber=(num1,num2)=>{
if(num1===100 || num2===100){
return true
}else if( (num1 + num2) === 100){
return true
}else{
    return false
}
}

// Another solution 
const isEqual=(a,b)=>a===100 ||b===100 ||(a+b)===100
//=======================================================================================================

/* Q35 */
/* write a JS Program to create a new string from a given string ,taking the first 3 ch and the last 3ch of a string 
and adding them togather. the string lentgh must be 3 or more . if Not the original string returned*/  

const addingString=(str)=>{
if(str.length<3){
return str
}else{
    const newString = str.substring(0,3)
    const newString1=str.slice(str.length-3)
    return newString + newString1
}
}
