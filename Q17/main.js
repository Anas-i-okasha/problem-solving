console.log("Problem solving JS")

/* The task is create class StaffList 
The clas  will manage a collaction of staff members where each member is uniquely be name .

add(name , age):
parameter string name and int age are passed 
- if age is greater than 20.add member with given name to the collection
- else if age is less than 20 .throws message "staff member age greater than 20"

remove (name):
if the member with given name is in collection.it removes the member from the collection and return true
else if the member with  the given name in the collection retuen false .

getSize():
return the number of memebr in the collection 
*/

class StaffList {
    //add your code here
        collection=[] 
    
    add(name,age){
        // check the age 
        if(age>20){
            this.collection.push(name)
            
        }else{
            throw new Error('staff member age must be greater than 20')
        }
    }
    remove(name){
        const check = this.collection.find(ele=> ele.name===name)
        if(check){
            this.collection=this.collection.filter(i=>i.name !==name)
                return true
        }else{
            return false
        }
    }
    getSize(){
        return this.collection.length
    }
}

// Try the code in terminal 
let person1 = new StaffList("jhon",25)
console.log(person1.add("jhon",25))
newO.add("jhon",30)
console.log(person1.remove("jhon"))