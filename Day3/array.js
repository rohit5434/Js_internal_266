function fun(n){
    return n*2;
}

let ch = fun(72);
console.log(ch)
      // 1. Create an array of 5 fruits and print each fruit using for loop.
// 2. Add "Papaya" at the end using push() and remove last element using pop().
// 3. Add "Kiwi" at the beginning using unshift() and remove first using shift().
// 4. Check if "Mango" exists in array using includes().
// 5. Find index of "Banana" using indexOf(). 

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

// Higher Oreder Function

// 6. Create an array of numbers [2, 4, 6, 8] and return a new array with each value doubled using map().
// 7. From numbers [10, 25, 30, 5, 60] filter values greater than 20.
// 8. Find sum of numbers [1,2,3,4,5] using reduce().

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

// Objects

// 9. Create an object student with name, age & course properties. Print them.
// 10. Add a new property city in the object.
// 11. Remove age property using delete.
// 12. Loop the object using for…in and print key-value pairs.

/// object
console.log("\n\nTask 9")
let student = {
    name : "Ram",
    age : 23,
    course : "CSE"
}

console.log("Name : " + student.name);
console.log("Age : " + student.age);
console.log("Course : " + student['course']); // Object.[] is used for dynamic acess


console.log("\n\nTask 10")
student.city = "Prayagraj";
console.log(student);

console.log("\n\nTask 11")
delete student.age;
console.log(student);


console.log("\n\nTask 12")
for(key in student){
    console.log(`Key : ${key} , Value : ${student[key]}`) //Dynamic Accessing
}


//Nested Object


// 13. Create an object person with nested address {city, country}. Print city.
// 14. Change the city to "Mumbai" inside nested object.

console.log("\n\nTask 13")
const person = {
    name : "Shayam",
    address : {city : "Prayagraj" , country : "India"}
}
console.log(person.address.city)


console.log("\n\nTask 14")
person.address.city = "Mumbai";
console.log(person.address.city);

// JSON and Objects

// 15. Convert an object into JSON string using JSON.stringify().
// 16. Convert a JSON string back to object using JSON.parse().

console.log("\n\nTask 15")
let jsonString = JSON.stringify(student);
console.log(jsonString);

console.log("\n\nTask 16")
let obj = JSON.parse(jsonString);
console.log(obj)


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
