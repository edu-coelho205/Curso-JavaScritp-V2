(function(){
function calcularMedia(){
    let total=0
    for (let index = 0; index < arguments.length; index++) {
        if(typeof arguments[index]!=="number"){
            return console.log("Valor Inválido!")
        }
        total+=arguments[index]
    }
    return (total/arguments.length) || 0
}   
console.log(calcularMedia(7,7,7,7))
})()
