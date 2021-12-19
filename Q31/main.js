console.log("Q31 problem-solving JS");

/* write a function take two arrays and return the subtract between them as array */
function subArr(arr1,arr2){
 const result =arr2.map((num,id)=>{
    //    console.log(num)
    //    console.log(id)
    return num-arr1[id]
    })
    return result
}

// console.log(subArr([93,22,7],[-3,4,0]))

// ==========================================================================

/* write a function take an array number of integer and return the element most frequancy in the array */
function mostFreq(array){
const result = array.filter((item,i)=>{
if(item ==array[i]){
return item
}
})
return result
}
