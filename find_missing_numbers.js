 
let arr = [1, 2, 4, 5, 6]

function find_missing_number(arr)
{

let n = arr.length + 1

let exp_Sum = (n*(n+1))/2

   let actual_sum =  arr.reduce(function(acc,el,index,array){

        return  exp_Sum - actual_sum

    },0) 
    

}
console.log(find_missing_number(arr))
    
