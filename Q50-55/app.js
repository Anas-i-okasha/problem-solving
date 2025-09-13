function add_five(arr) {
    // write your code here
    let res = []
    if (arr.length == 0)
        return arr;

    for (let i=0; i<arr.length; i++) {
        let newWord = arr[i].split('')
        newWord.push(5);
        res.push(newWord.join(''));
    }
    return res;
}

add_five(['code','c'])
