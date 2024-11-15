let list = [1 ,2, 3, 4, 3, 2, 1];

let max = list[0]
for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i];
    }
}
console.log (max);

let min = list [0]
for (let i = 0; i < list.length; i++) {
    if (list[i] < min){
        min = list[i];
    }
}
console.log (min);