let object = {

    fistname : "mayuri",
    lastname : "beldar",
    dept : "QA"

}

console.log(`${object.fistname} : ${object.dept}`)

class object2 {
    constructor(firstname1, lastname1 , Dept1)
    {

        this.firstname1 = firstname1,
        this.lastname1 = lastname1,
        this.Dept1 = Dept1
    }
}

let object3 = new object2 ("mayuri","beldar","QA")

console.log(this.firstname1)
console.log(object3)