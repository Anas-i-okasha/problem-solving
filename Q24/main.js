console.log("Q24 JS")
// Which generation are you??
// Try finding your ancestors and offspring with code.

function generation(x, y) {
	gen = {
    "-3": {m: "great grandfather", f: "great grandmother"},
    "-2": {m: "grandfather", f: "grandmother"},
    "-1": {m: "father", f: "mother"},
    "0": {m: "me!", f: "me!"},
    "1": {m: "son", f: "daughter"},
    "2": {m: "grandson", f: "granddaughter"},
    "3": {m:"great grandson", f: "great granddaughter"}
  }
  return gen[x][y]
}

console.log(generation(1,"f")) // =>"daughter"

// =================================================================


/*Create a function which returns the number of true values there are in an array. */

function countTrue(arr){
    let result=[];
for(let i=0;i<arr.length;i++){
if(true==arr[i]){
    result.push(arr[i])
}
}
return result.length
}

console.log(countTrue([ false, false, false]))  // => 0
console.log(countTrue([ true ,false, false, false]))  //=>1  
