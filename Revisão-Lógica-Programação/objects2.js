let pessoa={
    Nome:"Eduardo",
    Idade:16,
    Email:"eduardo13ccoelho@gmail.com"
}
;
for (const prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`)
}