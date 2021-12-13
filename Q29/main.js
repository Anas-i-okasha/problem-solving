console.log("Problem Number 29 JS")

// Write a JavaScript program to get the integers in range (x, y)
// Ex : range(2,9) => [3,4,5,6,7,8]


function range(x,y){
    if(y - x === 2) 
    {
      return [x + 1];
    } 
    else 
    {
      var list = range(x,y - 1);
      list.push(y- 1);
      return list;
    }
}

// console.log(range(3,7))  => [4,5,6]