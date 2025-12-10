function fun(n){
    return n*2;
}

let ch = fun(72);
console.log(ch)
       

    //array
let arr = [1,2,3,4,5,"apple","banana",ch];
console.log(arr);

const fruits = ["apple" , "mango" , "banana", "orange","grapes"]
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}
     // functions of arrays 
fruits.push("papaya");
fruits.pop();

fruits.unshift("Kiwi");
fruits.shift();
console.log(fruits.includes("mango"));
 console.log(fruits.indexOf("banana"));

console.log(fruits);
   

   // loop in array
for(let value of fruits){
    console.log(value)
}

        // higher order function
//1 map();  return new array
let num = [2,4,6,8]
let double = num.map(n=>n*2);
console.log("map")
console.log(double);

// 2 filter return new array
console.log("filter")
const res = num.filter(n=>n>1);
console.log(res)


// 3 reduce();  iterate in array and give final value
//like sum 
//array.reduce((accumulator , currentValue)=> {...},initialvalue)
// accumulator (acc) store the result as loop continue

console.log("reduce")
let total = num.reduce((acc , curr)=> acc+curr , 0);
console.log(total)


/// object

  let student = {
    name : "Shivam",
    rollno : 21
  }

  console.log(student)

//convert object to JSON String
let jsonString = JSON.stringify(student);
// convert jsonstring -> object
let obj = JSON.parse(jsonString);
console.log(jsonString);
console.log(obj)