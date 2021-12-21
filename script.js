// var room = [1,34,65,'Ali',45,76,23,76,65,3.4,2,34,34,65,'Ali',45,76,23,76,65,3.4,2,34,34,65,'Ali',45,76,23,76,65,3.4,2,34,];
// console.log(room[10]);
// console.log("length of arrya", room.length);

// room[3] = 'hamza';
// console.log(room);


// write a js program to draw table for 2 
// example output
// 2 * 1 = 2
// 2 * 2 = 4
// ...
// 2 * 20 = 40

// var userinput = parseInt(prompt("Enter Number"))  //All Table//
// for (let index = 1; index <=20; index++) {

//     console.log("index", index*userinput);
// }


// var numbers = [1,2,4,5,64,6,3,6,3,3]
// numbers.push(123,43,24,25,2,2,)
// numbers.pop();
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.unshift(10,12,23)
// numbers.shift()
// numbers.shift()
// numbers.shift()
// console.log(numbers);

// var arr = [43,4,35,2,453,465,54,43];

// console.log(arr[0]);

// MAP Loop
var arr = [43, 4, 35, 2, 453, 465, 54, 43];
console.log(arr);
var ary = arr.map(function(x){
    return x + 10
    
})
console.log(ary);