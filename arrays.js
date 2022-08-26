var strings = ["chair", "clock", "cucumber", "cadence", "cool it"];

var numbers = [3, 9, 15, 21];

var booleans = [true, false, false, true];

//This will isolate the elements between the index positions 2 - 4 in the array and print them to the console
//will print strings[2] and strings[3]
console.log(strings.slice(2, 4));

//This will add two elements to the end of the numbers array and print the new modified number of elements in the array to the console
console.log(numbers.push(27, 33));

//This will remove the first element from the array and print its value to the console
console.log(booleans.shift());

//Index positions begin their count at zero, so the first element in each array is in the index position 0
//Because we begin counting at 0, the index position of the last element is n -1 (n being the numner of elements included in the array)
//so, if I wanted to print the third and last elements of the strings array, I would call them as follows:

console.log(strings[2], strings[4]);
