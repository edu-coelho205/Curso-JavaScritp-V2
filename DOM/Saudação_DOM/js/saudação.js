(function(){
    'use strict'
    ;
    let userName="Eduardo Coelho"
    ;
    let divTop=document.querySelector(".top-bar")
    let pTop=divTop.getElementsByTagName("p")
    ;
    if(userName){
        // pTop[0].textContent=pTop[0].textContent+userName
        pTop[0].innerHTML+="<b>"+userName+"</b>"
    } else {
        divTop.style.display="none"
    }
})()    