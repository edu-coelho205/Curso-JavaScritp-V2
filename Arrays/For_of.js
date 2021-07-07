const arr=[1,2,3]
const obj={
    nome:"Eduardo",
    idade:16,
    email:"eduardo13ccoelh@gmail.com"
}
;
for (const prop in obj) {
    console.log(`${prop}: ${obj[prop]}`)
}
;
for (const n of arr) {
    console.log(n)
}