
/* Longest Word */
/*  
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. If there are two or more words that are the same length, 
return the first word from the string with that length.
*/

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/

// solving ==> //
console.log('Answwer: Q1') 


 longestWord=(sen)=>{
  if(sen.length ===0){
    return 'ther is no 0 word '
  }
  let output = '';
  const words = sen.split(' ');
  words.forEach((word)=>{
    if(word.length > output.length){
    output = word
    }
  })
 return output;
 
}
