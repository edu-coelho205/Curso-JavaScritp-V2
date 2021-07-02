teste()
function teste(){
    console.log("Funciona Hoisting")
}
;
const teste1=function(){
    console.log("Não funciona Hoisting")
}
teste1()
;
const teste2=()=> console.log("Não funciona Hoisting(Arrow Function)")
teste2()