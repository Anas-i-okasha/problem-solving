console.log("Problem solving Q41-45")

/* Q41 */

/*You are working on a Store Manager program, which stores the prices in an array.
You need to add functionality to increase the prices by the given amount.
The increase variable is taken from user input. You need to increase 
all the prices in the given array by that amount and output to the console the resulting array. */

function storeManager(increase){
prices = [98.99,15.2,20,1026];
let increaseIn = parseInt(increase,10)

for(let i=0;i<prices.length;i++){
prices[i]=prices[i]+increaseIn
}
return prices
}

/*Q2 */

/*You are making a text encryptor. It should take multiple words and output a combined version, 
where each word is separated by a dollar sign $.
For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
The given code declares a class named Add, with a constructor that takes one rest parameter.
Complete the code by adding a print() method to the class, which should generate the requested output. */

class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print(){
    console.log('$' + this.words.join('$') + '$')
  }
  }

  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();