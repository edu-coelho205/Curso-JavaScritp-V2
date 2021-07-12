(function(){
    'use strict'
    ;
    const title=document.querySelector("#txtTitulo")
    const check=document.querySelector("#chkAceito")
    const btn=document.querySelector("#btn")
    const form=document.querySelector(".formCadastro__app")
    const desc=document.querySelector("#txtDescricao")
    const max=desc.maxLength
    const counter=document.querySelector("#contador")
    const spanCounter=counter.getElementsByTagName("span")[0]
    const feedback=document.getElementById("feedbackMessage")
    const feedbackMessage=feedback.getElementsByTagName("p")[0]
    const feedbackCloseBtn=feedback.getElementsByTagName("button")[0]
    ;
    showCharacters(max)
    ;
    function checkBox(){
        if(check.checked){
            btn.disabled=false
        } else{
            btn.disabled=true
        }
    }
    ;
    function validateForm(e){
        if(title.value.length < 1){
            showFeedbackMsg("Preencha todos os campos!")
            ;
            check.checked=false
            checkBox()
            ;
            e.preventDefault()
        }
    }
    ;
    function characterCounter(){
        let typedNumbers=this.value.length
        let charactersRemaining=parseInt(max) - parseInt(typedNumbers)
        ;
        showCharacters(charactersRemaining)
    }
    ;
    function showCharacters(n){
        spanCounter.textContent=n
    }
    ;
    function showFeedbackMsg(msg){
        feedbackMessage.textContent=msg
        feedback.classList.add("show")
        ;
        feedbackCloseBtn.focus(feedbackCloseBtn)
        ;
        function closeFeedbackMessage(){
            feedback.classList.remove("show")
            title.focus(title)
            ;
            feedbackCloseBtn.removeEventListener("click",closeFeedbackMessage)
            feedbackCloseBtn.removeEventListener("keyup",closeFeedbackMessageWithKeyboard)
        }
        ;   
        function closeFeedbackMessageWithKeyboard(e){
            if(e.keyCode === 27){
            closeFeedbackMessage()
            }
        }
        ;
        feedbackCloseBtn.addEventListener("click",closeFeedbackMessage)
        feedbackCloseBtn.addEventListener("keyup",closeFeedbackMessageWithKeyboard)
    }
    ;
    check.addEventListener("click",checkBox)
    form.addEventListener("submit",validateForm)
    desc.addEventListener("input",characterCounter)
})()