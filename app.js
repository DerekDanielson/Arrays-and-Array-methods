// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [22, 'Hello', true, null, undefined, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into an array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

//MUTATING ARRAYS
//Add onto end of array
numbers.push(250);
//Add onto front of array
numbers.unshift(120);
//Remove from end of array
numbers.pop();
//Remove from front of array
numbers.shift();
//Splice values
numbers.splice(1, 3); //Removes the '56 33'
//Reverse array
numbers.reverse();

//Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort(); //Sets in alphabetical order
val = numbers.sort();

//Use the 'compare function'
val = numbers.sort(function(x, y){
    return x - y;
});

//Reverse sort
val = numbers.sort(function(x, y){
    return y - x;
});

//Find number under 50
function under50(num){
    return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);

























