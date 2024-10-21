function left_rotation(arr,position){
    return [...arr.slice(position), ...arr.slice(0,position)]

}

let array1 = [1,0,2,3,4]
let leftrotatearray = left_rotation(array1,2)
console.log(leftrotatearray)

function rightRotate(arr, positions) {
    let len = arr.length;
    return [...arr.slice(len - positions), ...arr.slice(0, len - positions)];
  }
  
  let array = [1,0,2,3,4]
  let rotatedArray = rightRotate(array, 2);
  console.log(rotatedArray);

  