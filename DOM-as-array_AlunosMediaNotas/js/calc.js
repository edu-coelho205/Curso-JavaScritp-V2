function sum() {
    // const numbers = Array.from(arguments)
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function avarege() {
    let media=sum(...arguments) / arguments.length
    ;
    return media.toFixed(1)
}