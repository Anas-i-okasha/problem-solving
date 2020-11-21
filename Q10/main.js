console.log('Problem Solving Q: 10 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/
longestWord_2=(sen)=>{
  sen = sen.trim()
  sen = sen.replace(/[^a-z , A-Z0-9]/g, '')
  sen = sen.split(" ")
  output = ""

  let word = sen.forEach(elem=> {
    if(elem.length > output.length )
    output=elem
  })
  return output
  
}

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/


