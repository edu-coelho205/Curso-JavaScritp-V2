const arr=[2,6,1,9,"hello word",false]
;
let justNumbers=arr.every(function(el){
    return typeof el==="number"
})
console.log(justNumbers)
;
justNumbers=arr.some(function(el){
    return typeof el==="number"
})
console.log(justNumbers)
;
let arr1=arr.filter(function(el,i,_arr){
    return typeof el==="number"
})
console.log(arr1)
;
arr.forEach(function(el,i,_arr){
    console.log(el)
})
;
let arr2=arr1.map(function(el,i,_arr){
    return el*el
})
console.log(arr2)