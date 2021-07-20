let x=[10]
let y={n:10}
;
function mudaX(x){
    x.push(11)
    console.log("x interno ", x)
}
;
mudaX(x)
// mudaX(10)
console.log("x externo ", x)
;
function mudaY(obj){
    obj.n++
}
;
mudaY(y)
console.log(y)