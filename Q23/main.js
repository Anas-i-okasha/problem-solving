console.log("Q23 JS")

/* Remove the character for the word  */

function remove(word,c){
    let result=[];
    // put the word in array 
     arr=word.split("")
    for(let i=0;i<arr.length;i++){
        // loop throuth the array and check if the chr. inside it or not 
        if(c.toLowerCase()!=arr[i]){
            // if the chr. inside the array , push another char. in new array called result 
            result.push(arr[i])
        }
    }
    // return new string 
    return result.join("");

}

// console.log(remove("anas","a"))
console.log(remove("pizza","z"))
