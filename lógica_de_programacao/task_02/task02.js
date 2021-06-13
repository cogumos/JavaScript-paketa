const getHigherNumber = (arrayNumbers) => {
    let higherNumber = 0
    arrayNumbers.forEach((value) => {
        if (value > higherNumber) {
            higherNumber = value
        }
    })
    return (higherNumber)
}
console.log(getHigherNumber([13, 42, 44, 69, 66, 14, 7, 1, 5, 91]))