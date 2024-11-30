let ourArray = ["Name", 24];
//Everything starts at zero, then one
//Except for AP Computer Science...

console.log(ourArray[0]);
console.log(ourArray[1]);

let newArray = [1, 2, 4];
console.log (newArray);
newArray[2] = 3;
console.log (newArray);

//Add element to the end of an array
newArray.push(4);
console.log(newArray);

//Add element to the beginning of an array
newArray.unshift(0);
console.log(newArray);

//Remove element from the end of an array
newArray.pop();
console.log(newArray);

//Remove element from the beginning of an array
newArray.shift();
console.log(newArray);

//Remove or add element at a specific point in an array
//(index position, number of elements) -to remove
//(index position, 0, what to add) -to add

//Adding in an array
newArray.splice(2, 0, 0);
console.log(newArray);

//Removing in an array
newArray.splice(2, 1);
console.log(newArray);