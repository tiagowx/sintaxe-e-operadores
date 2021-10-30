let output = ""

function comparar(a, b) {
    a === b ? output += `Os números ${a} e ${b} são iguais. ` : output += `Os números ${a} e ${b} não são iguais. `

    if ((a + b) > 10 || (a + b) > 20) {
        output += `Sua soma é ${a+b}, que é maior que 10 e maior que 20.`
    } else if ((a + b) < 10 || (a + b) < 20) {
        output += `Sua soma é ${a+b}, que é menor que 10 e menor que 20.`
    } else if ((a + b) > 10 || (a + b) < 20) {
        output += `Sua soma é ${a+b}, que é maior que 10 e menor que 20.`
    } else if ((a + b) > 10 || (a + b) < 20) {
        output += `Sua soma é ${a+b}, que é menor que 10 e maior que 20.`
    }
    return output
}
console.log(comparar(133, 133))
console.log(comparar(133, 23))
console.log(comparar(1, 3))
console.log(comparar(11, 13))
console.log(comparar(12, 33))