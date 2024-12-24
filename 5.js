for(let i = 3;i>=0;i--)
{

    console.log("hi")
    console.log("hi1")
    console.log("hi2")
}


//remove duplicates

let ne = "chandrapur"


let m = [...new Set(ne)]

console.log(m)

//remove duplicates

let n = "shopnewage.com.com.com"

let new1 = n.split("")

let removeDuplicate = []

for(let i =0;i <new1.length;i++){
     if (!removeDuplicate.includes(new1[i]))
     {
        removeDuplicate.push(new1[i])
     }
}



console.log(removeDuplicate)

let t = [... new Set(n)]

console.log(t)

