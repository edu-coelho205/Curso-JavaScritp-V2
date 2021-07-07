function sum() {
    let notas= Array.from(arguments)
    ;
    return notas.reduce(function(notasSomadas,_notas) {
        return notasSomadas+_notas
    },0)
}
function avarege() {
    return sum(...arguments)/arguments.length
}
let soma=sum(7,8,10,6)
let media=avarege(7,8,10,6)
console.log(soma)
console.log(media)