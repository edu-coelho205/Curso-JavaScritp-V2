const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
;
let numerosUnicos=numeros.reduce(function(numerosUnicos,numero){
    if(numerosUnicos.indexOf(numero)<0){
        numerosUnicos.push(numero)
    }
    return numerosUnicos
},[])
console.log(numerosUnicos)