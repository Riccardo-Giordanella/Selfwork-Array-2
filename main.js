let numbers = [3, 5, 10, 2, 8];

console.log(numbers);


let somma = numbers.reduce((acc, n)=> acc + n, 0);

let media = somma / numbers.length;

let minori = numbers.filter((number)=> number < media)

console.log(media);
console.log(minori);
