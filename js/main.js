let number = 4;
let print = number % 2;
if (print) {
    console.log('number is odd')
} else {
    console.log('number is even')

}

console.log('----------------------------------------');

let age = 35;
if (age > 0 && age < 19) {
    console.log('your age is 0 - 18')

} else if (age >= 19 && age <= 30) {
    console.log('your age is 19 - 30')

} else if (age > 30 && age <= 40) {
    console.log('your age is 31 - 40')

} else {
    console.log('your age is undefined')

}

console.log('----------------------------------------');

let num = 12;

let print2 = num % 2;
let print3 = num % 3;

if (!print2 && !print3) {
    console.log('Fizz Bazz')
} else if (!print2) {
    console.log('Fizz')
} else if (!print3) {
    console.log('Bazz')
} else {
    console.log(num)
}