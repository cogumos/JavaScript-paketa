const verifyDota = (word) => {
    if (word.indexOf('dota') === -1) {
        return "Não existe 'dota' no parâmetro!"
    }
    else {
        return "Existem os caracteres 'dota' no parâmetro!"
    }
}
console.log(verifyDota("Adotado"))
