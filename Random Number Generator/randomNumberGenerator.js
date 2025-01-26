let numbers = [];
numbers=randomNumbersGenerator();
console.dir(numbers, {'maxArrayLength': null})

//return {numbers} - Returns 50000 random numbers in a list between 0 and 10000
function randomNumbersGenerator(){
    for (let i = 0; i < 2000; i++){
        numbers[numbers.length]= Math.floor(Math.random() * (1000 - 0 + 1)) + 0;;
    }
    return numbers;
}
