const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

const  object = JSON.parse(jsonString)

const object2 = JSON.stringify(jsonString)

console.log(object.name)

console.log(object2)


let string = "how,are,you"

console.log(string.split(",",2))


let array = [1,4,6,8,9,0,8,6,7]
let t = array.slice(1,4)
console.log(t)




//=========
let students = [
    {
    firstname : "mayuri",
    lastname : "beldar",
    skills : ["QA","SNAP"]
},
{
    firstname : "mayuri1",
    lastname : "beldar1",
    skills : ["QA1","SNAP1"]
}]

students.forEach(function(el,index,array){
    console.log(`${el.firstname}${el.lastname}`)

})


students.forEach(function(el,index,array){
if(el.skills.includes("SNAP"))
console.log(el.firstname)
})

 
students.forEach(function(el,index,array)
{
  if(el.skills.includes("QA1")) 
   {
    console.log(el.lastname)
  }
})