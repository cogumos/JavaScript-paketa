const abc = (a, b, c) => {
    let d = [...a, ...b, ...c];
    d.sort((x, y) => {
        return y - x
    }
    )
    return d
}
console.log(abc([0, 3, 99, 44, -1], [4, 6, 9, 10, -349], [1, 1, 1, 99, 37]))