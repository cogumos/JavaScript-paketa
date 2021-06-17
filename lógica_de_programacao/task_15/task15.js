const totalItems = (list) => {
    let valueTotal = 0
    list.map(i => {
        let prc = i.value
        let qtd = i.quant
        valueTotal += prc * qtd
    })
    return valueTotal
}

const totalWithIpi = (total, ipi) => total * (ipi / 100 + 1)

const equipment = [
    {
        code: 1,
        value: 100,
        quant: 4
    },
    {
        code: 2,
        value: 150,
        quant: 2
    }
]

let valueIpi = 10
let total = 0
let totalIpi = 0

total = totalItems(equipment)
totalIpi = totalWithIpi(total, valueIpi)

console.log(totalIpi.toFixed(2))