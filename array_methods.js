//split,splice,slice: difference

/*
Summary of Differences:
Method	Works On	Purpose	Modifies Original?	Returns
split()	Strings	Splits a string into an array of substrings	No	Array of substrings
splice()	Arrays	Adds/removes/replaces elements in an array	Yes	Array of removed elements
slice()	Arrays, Strings	Extracts a portion of an array or string	No	New array or string
In summary:

Use split() to break a string into an array.
Use splice() to modify an array by adding or removing elements.
Use slice() to extract a portion of an array or string without modifying the original.

*/

// map() , filter() , reduce(), forEach()
// find() , findIndex() , every(), some()

//SLICE : array and string


let m = "mayuri newage testing"

console.log(m.slice(0,10))
let year = [1998,1997,1996,1992,1993,1990]

console.log(year.slice(0,3))
 

 console.log(m.split(""))
//slice is comman on  array and string


let text = "How are you doing today?";
const myArray = text.split(" ",1);
console.log(myArray)
//output : [ 'How', 'are' ]



let r = text.split(" ")
console.log(r)

console.log(r.slice(0,1))

