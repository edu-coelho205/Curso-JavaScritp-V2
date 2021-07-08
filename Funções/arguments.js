function somar(){
    console.log(arguments)
    ;
    total=0
    ;
    for (let index = 0; index < arguments.length; index++) {
        total+=arguments[index]
    }
    return total
}
;
console.log(somar.name)
;
console.log(somar(1,2,4,5))
console.log(somar(3,2,4,6,7))