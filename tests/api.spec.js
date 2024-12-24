const {test,expect } = require("@playwright/test")
let userid;

test("to test GET API ", async({request})=>{
    
   const respose =  await request.get("https://reqres.in/api/users?page=2")
   console.log(respose.statusText())
 
   expect (respose.status()).toBe(200)

})

test("to test POST API ", async({request})=>{

   const respose =  await request.post("https://reqres.in/api/users",{
 
data:{
"name" : "kumar",
"job ": "trainer"
},
headers:{

}    
    })

    console.log(await respose.json())
    var xyz = await respose.json()
    userid = xyz.id
    expect (await respose.status()).toBe(201)
})

test("to test UPDATE API ", async({request})=>{
const put =  await request.put("https://reqres.in/api/users/",+userid, 
{ 

    data:{
    "name" : "kumar",
    "job ": "engineer"
    }
})
console.log(put.status())
console.log(put.json())
})



test("to test DELETE API ", async({request})=>{
await request.delete("https://reqres.in/api/users/",+userid)
})