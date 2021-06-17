let age = 7848

let years = parseInt(age / 365)
console.log(years)
let showAge = (age - (years * 365))

let months = parseInt(showAge / 30)
console.log(months)
showAge = (age - ((months * 30) + (years * 365)))

console.log(showAge)