console.log('Problem Solving Q: 9');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
    let newStr= str.split("").reverse().join("").split(" ").reverse().join(" ").split(" ").reverse().join(' ')
    return newStr
} 

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
