const note = value => {
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0
    let i = parseInt(value)

    console.log(i)

    while (i > 0) {
        if (i >= 100) {
            i -= 100
            n100++
        } else if (i >= 50) {
            i -= 50
            n50++
        } else if (i >= 10) {
            i -= 10
            n10++
        } else if (i >= 5) {
            i -= 5
            n5++
        } else {
            i--
            n1++
        }
    }
    return `${n100} note of 100$ \n${n50} note of 50$ \n${n10} notes of 10$ \n${n5} note of 5$ \n${n1} notes of 1$`
}

console.log(note(199))