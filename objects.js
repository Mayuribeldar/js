//object
let object = {

   firstname : "mayuri",
   lastname : "beldar"
}

console.log(`I am ${object.firstname} ${object.lastname}`)
console.log(object.firstname)


for( let i in object)

{

    console.log(object[i])
}
 class mayuri {
    constructor(fn,ln,role,model,no){

        this.fistname = fn,

        this.lastname =ln,
        this.role = role,
        this.model = model,
        this.no = no
    }
 }

 let m = new mayuri()

 let n = new mayuri()

 m.firstname = "Kavita"
 m.lastname = "beldar"
 console.log(m)