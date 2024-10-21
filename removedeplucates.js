
//map

let birthyear = [1998,1997,1996,1992,1993,1990]

let age = birthyear.map(function(el,index,array){
  return 2024 - el
})
console.log(age)

//for..of loop
for (let values of birthyear){
  console.log(values)
}

//set method to remove duplicates ...ES6 
let mayuri1 = ["SNAP","NAP","NAP","SNAP","COLLECTION"]

let t = [...new Set(mayuri1)]
console.log(t)


//filter method
let mayuri = ["banana","grapes","banana"]

let filter_output = mayuri.filter(function(el,index,array){
    return array.indexOf(el) == index
})
console.log(filter_output)
 

/*let r = mayuri.filter(function(el,index,array){
    //console.log(index)
    //console.log(array)

    let m1= array.indexOf(el)
    console.log(m1)
return array.indexOf(el) == index

 })

//console.log(r)







*/
 
let age1 = [ 26, 27, 28, 32, 31, 34 ]

let some_of_ages = age1.reduce(function(acc,el,index,array){
return acc + el
 
},0)



console.log(some_of_ages)

//palindrome checkup

let m2 = "madam1"

 let m3 = m2.split(" ").reverse().join()

 console.log(m3)

 if(m3 == m3 ){

console.log("true")
 }else
  {
console.log("false")
 }

