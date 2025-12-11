function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


let num = 29;

if (isPrime(num)) {
    console.log(num + " is Prime");
} else {
    console.log(num + " is Not Prime");
}
