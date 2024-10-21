//find max and min in array
//way 1 : with min max

let array = [1,70,80,89,78,56,56789,4,3,5]

let t = Math.min(...array)

console.log(t)
let y = Math.max(...array)

console.log(y)



//way 2 : for loop
let array1 = [1,70,80,89,78,56,56789,4,3,5]
let array2 = [1,70,80,89,78,56,56789,4,3,5]

let m = [...array1,...array2]

console.log(m)
let min = array1[0]
let max = array1[0]

for(let i = 1;i< array1.length;i++){

   if( array1[i] < min )
   {
   min = array1[i]
   }

   

   if( array1[i] > array1[0] )
   {
   max = array1[i]
   }
}
console.log(min)
console.log(max)





