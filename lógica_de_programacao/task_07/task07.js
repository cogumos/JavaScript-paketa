const longestString = (wordslist) => {
    let longestWord = ""
    wordslist.forEach(value => {
        if (value.length > longestWord.length) {
            longestWord = value

        }
    });
    return longestWord
}
console.log(longestString(["Fullmetal Alchemist Brotherhood", "Shingeji no Kyojin", "One Piece", "Naruto"]))
