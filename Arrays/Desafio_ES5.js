function sum() {
    const numbers=[]
    // for (let i = 0; i < arguments.length; i++) {
    //     numbers.push(arguments[i])
    // }
    // console.log(numbers)
    ;
    Array.prototype.forEach.call(arguments, function(argument){
        numbers.push(argument)
    })
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
console.log(sum(7,8,6,10))
;
function avarege(){
    const soma=sum.apply(null,arguments)
    ;
    return soma/arguments.length
}
console.log(avarege(7,8,6,10))
;
// sum.call(null, 7,8,6,10)
// sum.apply(null,[7,8,6,10])