console.log("Problem Number 29 JS");

// Write a JavaScript program to get the integers in range (x, y)
// Ex : range(2,9) => [3,4,5,6,7,8]

function range(x, y) {
  if (y - x === 2) {
    return [x + 1];
  } else {
    var list = range(x, y - 1);
    list.push(y - 1);
    return list;
  }
}

// console.log(range(3,7))  => [4,5,6]

//===============================================================================================================

// Randomly select a number between 1 to 10 until you get the number 5.

// function randomly(val = 0, count = 0) {
//   if (val === 5) {
//     console.log(`The value is ${val}`);
//     return;
//   }
//   val = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//   count++;
//   randomly(val, count);
// }
// console.log(randomly(3));

function getLength(str){
if(!str.length){
return 0;
}
return 1+getLength(str.slice(1))
}

//  console.log(getLength(""))

 //==================================================================================================


 function repat(str,char){
if(!str.length){
return 0;
}
if(str[0]===char){
return 1+ repat(str.slice(1),char)
}
return repat(str.slice(1) , char)
}

// console.log(repat("hello",'l'))  => 2