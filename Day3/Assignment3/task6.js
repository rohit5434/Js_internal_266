let arr = [10, 40, 25, 80,15];

let max = arr.reduce((a, b) => a > b ? a : b, 0);

console.log(max); 