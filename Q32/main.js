/* Write a function take array number of integer and return the most freq. */

// function mostFre(arr){
// let result
// }

//==========================================================================================


/* write a function take an array and index then return new array and delete number index */
function deleteEle(arr,index) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
// console.log(deleteEle([2,4,8],2))

// =====================================================================
function sorting(array){
// array.sort(); => First solution to arrange the element from small to bigger 
array.sort((a,b)=>{
return a-b
})
return array
}

// =====================================================================
function reArrange(arr,type){
    // First we need to check the type if "S" smaller to bigger || "B" from bigeer to smaller
if(type =="S"){
arr.sort((a,b)=>{
return a-b
})
}if(type =="B"){
arr.sort((a,b)=>{
return b-a
})
}
return arr
}

console.log(reArrange([2,5,1,3,9],"B"))