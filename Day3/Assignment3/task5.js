let user = {
  name:"Aman" ,
  age:21,
  course:"js"
}


console.log(JSON.stringify(user));

console.log(JSON.parse(JSON.stringify(user)))