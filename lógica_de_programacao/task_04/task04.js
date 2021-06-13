const evenNumbers = () => {
    const allNumbers = [...Array(101).keys()]
    allNumbers.forEach((value) => {
        if (value % 2 != 0) {
            console.log(value)
        }
    })
}
evenNumbers()