function enviarEmail(){
    const email=document.getElementById("txtEmail")
    const emailTxt=document.getElementById("newsletterFeedback")
    emailTxt.innerHTML=`<p> Email ${email.value} enviado com sucesso!`
    ;
    // emailTxt.appendChild()
}