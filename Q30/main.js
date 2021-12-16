console.log("Problem-solving Q30 JS")

// write a function to find the Minmum and Maxmum number in array


/* Solution number One */
function minMax(array){
    let result=0;
    let result1;
    for(let i=0;i<array.length;i++){
    if(array[i]>result){
    result=array[i]
    }if(array[i]<result1){
    result1+=array[i]
    }
    }
    return { 
        result1,
        result
    }
    }

    /* Solution Number Two */
    function minMax(array){
            let result=[]
        let res1 = Math.max(...array)
        let res2= Math.min(...array)
        
        result.push(res1 , res2)
        return result
        }

        // console.log(minMax([3,1,7,9,12,6])) => [12,1]
// ===============================================================================

/* Write a function to determine the input type, the input shoud be inside qoutes (string ) || (number) || (double) */

function inputType(val){
    let result = Number(val)
if(isNaN(val)){
return "string "
}else if(Number.isInteger(result)){
return "integer"
    }else if (!Number.isInteger(result)){
 return "double"
    }

}

// console.log(inputType("12.325")) => double
// console.log(inputType("12")) => number
// console.log(inputType("Anas")) => string