let arr=[5,6,10,35,4,5,9]
;
console.log(arr.lastIndexOf(5))
console.log(arr.indexOf(10))
console.log(arr.indexOf(10)>-1)
console.log(arr.includes(5))
;
console.log(arr.find(function(el){
    return el>10
}))
console.log(arr.findIndex(function(el){
    return el>10
}))