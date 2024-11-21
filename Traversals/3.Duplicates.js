let list = [2, 1, 2, 3, 3, 4, 5];

for (let i = 0; i < list.length-1; i++) {
    for (let j = i + 1; j < list.length; j++) {
        if (list[i] === list[j]){
            console.log(list[i]);
            list.splice(i, 1);
        }
    }
}
console.log(list);