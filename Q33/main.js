console.log("Problem solving Q33")

/* Write a function that take array of number and check the prime number then return new array including prime number only. */

function primeNumber(array){
    let newEle=2;
array.map((ele)=>{
if(ele % newEle++ !=0 ){
array.pop(ele)
// newEle++;
}
})
return array
}
// ===============================================================

// let result=[];
//   for(let i=2;i<array.length;i++){
//     if(array[i]%i ===0){
//       result.push(array[i])    }
//   }
//   return result

console.log(primeNumber([5, 38, 33, 60, 56, 7]))