let arr1=[1,2,3,4]
let arr2=[].concat(arr1)
arr2[arr2.length]=["aa",12]
console.log(arr1)
console.log(arr2)
;
console.log("-----------------------------------------------------")
;
let arr3=[5,6,7,8]
let arr4=arr3
arr4[arr4.length]=9
console.log(arr3)
console.log(arr4)