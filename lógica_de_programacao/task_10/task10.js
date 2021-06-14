const intPositive = (x, y) => {
    if (Number.isInteger(x) && Number.isInteger(y) && x > 0 && y > 0) {
        return x % y
    }
}
console.log(intPositive(42, 33))