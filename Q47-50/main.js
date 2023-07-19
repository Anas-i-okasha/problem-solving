console.log('Problem solving ==> recursion');

/* Write a JavaScript program to compute the sum of an array of integers.*/

function arraySummation(arr) {
    // base (the function should stop calling itself if the based true)
    if (arr.length == 0) return 0;

    // recursive (call itself)
    return arr.pop() + arraySummation(arr);
}
// console.log(arraySummation([1,2,3,4,5])); // should return 15;


/* Write a JavaScript program to compute the exponent of a number. */

function exponentNumber(num, base) {
    // base
    if (base == 0) return 1;

    // recursion
    return num * exponentNumber(num, base - 1);
}

// console.log(exponentNumber(8,2));  // should return 68;


/* Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same 
backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11  */

function palindrome (word) {
    let newWord = word.split('');

    if(newWord.length <=1) return true

    if(newWord.pop() != newWord.shift())
        return false;

    return palindrome(word.slice(1, word.length - 1))
}

console.log(palindrome('mom')) // should return true;
console.log(palindrome('madam')) // should return true;
console.log(palindrome('anas')) // should return false;



