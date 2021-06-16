const idealWeight = (gender, height) => {
    let weight = 0

    gender == 'F' ? weight = (62.1 * height) - 44.7 : weight = (72.7 * height) - 58

    return weight
}

console.log(idealWeight('F', 1.50).toFixed(2))