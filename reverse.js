let array = ["banana","mango","banana","kiwi","orange","apple"]
//remove suplicate
let a = [... new Set(array)]
console.log(a)

//reverse
console.log(array.reverse())

if(array.includes("banana")){

    console.log("true")
}

console.log(array.indexOf("banana"))
let t = array.at(3)

console.log(t)

let info  = ["chinmay","deshpande",7709192441]

let a1 = info.join('-')



let r= array.join("=")

console.log(r)



let names = ["chinmay","shirish","ram","sham","vaibhav","sumit"]

let y = names.splice(1,8,"Mayuri")

console.log(y)









