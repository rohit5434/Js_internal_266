let a = 20;

function check(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(`given number is ${a} and is ${check(a)}`);
