let ni= "chandrapur"

let ne = ni.split('')

let new1 = [] 

for(let i = 0; i<=ne.length;i++)
{
if(!new1.includes(ne[i]))
 new1.push(ne[i])
}

new1.join("")
console.log(new1)