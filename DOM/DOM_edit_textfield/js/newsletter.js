const email=document.getElementById("txtEmail")
function enableEmail(){
    email.disabled=false
    email.focus()
}
;
function disableEmail(){
    email.disabled=true
}