// strings, number (int, floats), boolean
// undefined, null, symbol (ES2015)

let string="minha 'string' com aspas simples"
let string2='minha "string" com aspas duplas'
var string3=`minha template literal`
;
let idade=16
let msg=`eu possuo ${idade} anos`
;
console.log(msg)
console.log(typeof msg, typeof idade, typeof string)
;
const n1=10
const n2=1.1
;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`)
;
const isValid=true
console.log(`isValid:${isValid}`)
;
let varTeste=null
console.log(varTeste)
console.log(typeof varTeste)
;
varTeste=10
console.log(typeof varTeste,varTeste)