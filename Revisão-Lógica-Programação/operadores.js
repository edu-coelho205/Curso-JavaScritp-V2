// OPERADORES ARITIMETICOS
;
// + - * / % **
;
let n1=10
let n2=5
console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)
console.log(n1%n2)
console.log(2**3)
;
// OPERADORES DE ATRIBUIÇÃO
let n3=25
// n3=n3*2
n3+=2
console.log(n3)
;
// INCREMENTO E DECREMENTO
;
let i=0
console.log(i--)
i++
i++
i++
console.log(i)
;
// COMPARAÇÃO
/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valor e tipos diferente
*/
;
console.log(n1 != "10")
console.log(n1 !== "10")
;
// OPERADORES LÓGICOS
/*
    Para uma pessoa viajar para o exterior:
    - precisa ser maior de 18 anos
    OU
    acompanhado com os pais
    E
    ter comprado bilhete
*/
let idade=21
let paisPresentes=false
let comprouBilhete=true
const podeViajar=(idade >= 18 || paisPresentes) && comprouBilhete
;
console.log(`Pode viajar: ${podeViajar}`)
;
console.log("--------------------------------------------")
;
console.log(n1,n2,n3)
n1=6
n2=8
let media=(n1+n2)/2
console.log(`media: ${media}`)
console.log((3*2)**2)