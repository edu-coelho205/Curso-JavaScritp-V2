(function(){
    'use strict'
    ;
    let userName="Eduardo"
    ;
    if(userName){
        const topBar=document.createElement("div")
        topBar.className="top-bar"
        topBar.innerHTML=`<p> Olá, ${userName} </p>`
        ;
        const parentElement=document.querySelector(".hero")
        parentElement.insertBefore(topBar, parentElement.firstElementChild)
    }
})()    