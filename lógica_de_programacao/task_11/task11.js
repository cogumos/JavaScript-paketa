const sumArray = (intArray) => {
    let sum = 0;
    intArray.forEach((value) => {
        sum += value
    })
    return sum
}
let myArray = []
for (let i = 0; i < 10000; i++) {
    myArray.push(Math.floor(Math.random() * 100))
}
console.log(sumArray(myArray))