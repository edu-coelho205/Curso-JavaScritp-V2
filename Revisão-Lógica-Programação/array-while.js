function generateRandomNumber(max) {
    return parseInt(Math.random()*max)
}
;
let number=[]
let i=0
while (number.length<10) {
    i++
    let randomNumber=generateRandomNumber(10)
    if(number.indexOf(randomNumber)<0){
        number.push(randomNumber)
    } else {
        console.log(randomNumber, " já existe no arr")
    }
}
console.log(number)
console.log("O loop foi executado ", i, " vezes")