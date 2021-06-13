const CheckEvenAndOdd = (a, b) => { 
    const restA = a % 2;
    const restB = b % 2;
    if (restA == 0 && restB == 0) {
        return `Os valores ${a}, ${b} são pares`
    }
    else if (restA !== 0 && restB == 0) {
        return `O valor ${a} é ímpar e o valor ${b} é par`
    }

    else if (restA == 0 && restB != 0) {
        return `O valor ${a} é par e o valor ${b} é ímpar`
    }
    else {
        return `Os valores de ${a} e ${b} são ímpares`
    }
}
console.log(CheckEvenAndOdd(6, 3))