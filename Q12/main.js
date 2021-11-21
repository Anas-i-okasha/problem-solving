console.log('Problem Solving Q:12 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

 commonCharacters=(str1 , str2)=> {
  let newStr1 = str1
  let newStr2 = str2
  let resultStr=[]
  for(let i=0; i<newStr1.length ; i++){
    if(newStr2.indexOf(newStr1[i])!==-1){
      resultStr.push(newStr2[i])
    }
  } 
  return resultStr.join("")
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/