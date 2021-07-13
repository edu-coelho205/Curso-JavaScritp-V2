;(function(){
    'use strict'
    ;
    // Armazenar DOM em variáveis
    const form=document.getElementById("todo-add")
    const itemInput=form.querySelector("#item-input")
    const ul=document.getElementById("todo-list")
    const lis=document.getElementsByTagName("li")
    let arrTasks= getSavedData()
    ;
    // Funções
    function addLi(obj){
        const li=document.createElement("li")
        const checkButton=document.createElement("button")
        const p=document.createElement("p")
        const editButton=document.createElement("i")
        const deleteButton=document.createElement("i")
        ;
        li.classList.add("todo-item")
        checkButton.classList.add("button-check")
        checkButton.setAttribute("data-action","checkButton")
        checkButton.innerHTML=`<i class="fas fa-check ${obj.completed?"":"displayNone"}" data-action="checkButton"></i>`
        p.classList.add("task-name")
        editButton.classList.add("fas","fa-edit")
        editButton.setAttribute("data-action","editButton")
        deleteButton.classList.add("fas","fa-trash-alt")
        deleteButton.setAttribute("data-action","deleteButton")
        ;
        const containerLi=document.createElement("div")
        const containerEditInput=document.createElement("input")
        const containerEdit=document.createElement("button")
        const containerCancel=document.createElement("button")
        ;
        containerLi.classList.add("editContainer")
        containerEditInput.classList.add("editInput")
        containerEditInput.setAttribute("data-action","containerEditInput")
        containerEdit.classList.add("editButton")
        containerEdit.setAttribute("data-action","containerEdit")
        containerCancel.classList.add("cancelButton")
        containerCancel.setAttribute("data-action","containerCancel")
        ;
        containerEdit.textContent="Edit"
        containerCancel.textContent="Cancel"
        ;
        containerLi.appendChild(containerEditInput)
        containerLi.appendChild(containerEdit)
        containerLi.appendChild(containerCancel)
        ;
        p.textContent=obj.name
        ;
        li.appendChild(checkButton)
        li.appendChild(p)
        li.appendChild(editButton)
        li.appendChild(containerLi)
        li.appendChild(deleteButton)
        addEventLi(li)
        return li
    }
    ;
    function addTask(task){
        arrTasks.push({
            name:task,
            createdAt:Date.now(),
            completed:false
        })
        
    }
    ;
    function renderTasks(){
        ul.innerHTML=""
        ;
        arrTasks.forEach(task => {
            ul.appendChild(addLi(task))
        })
    }
    ;
    function clickedUl(e){
        const dataAction=e.target.getAttribute("data-action")
        ;
        if(!dataAction) return
        ;
        let currentLi=e.target
        while(currentLi.nodeName !== "LI"){
            currentLi=currentLi.parentElement
        }
        const currentLiIndex=[...lis].indexOf(currentLi)
        ;
        const actions={
            checkButton:function(){
                const checkButton=lis[currentLiIndex].querySelector(".button-check i")
                if(!checkButton.classList.contains("displayNone")){
                    checkButton.classList.add("displayNone")
                    arrTasks[currentLiIndex].completed=false
                } else{
                    checkButton.classList.remove("displayNone")
                    arrTasks[currentLiIndex].completed=true
                }
                ;
                setNewData()
            },
            editButton:function(){
                const editContainer=lis[currentLiIndex].querySelector(".editContainer")
                const editInput=lis[currentLiIndex].querySelector(".editInput")
                ;
                [...ul.querySelectorAll(".editContainer")].forEach(container =>{
                    container.removeAttribute("style")
                })
                ;
                editContainer.style.display="flex"
                ;
                editInput.focus()
            },
            containerEdit:function(){
                const editInput=lis[currentLiIndex].querySelector(".editInput")
                const editContainer=lis[currentLiIndex].querySelector(".editContainer")
                ;
                arrTasks[currentLiIndex].name=editInput.value
                editInput.value=""
                editContainer.removeAttribute("style")
                ;
                setNewData()
                renderTasks()
                itemInput.focus()
            },
            containerCancel:function(){
                const editContainer=lis[currentLiIndex].querySelector(".editContainer")
                editContainer.removeAttribute("style", "none")
            },
            deleteButton:function(){
                arrTasks.splice(currentLiIndex, 1)
                ;
                setNewData()
                renderTasks()
            }
        }
        if(actions[dataAction]){
            actions[dataAction]()
        }
    }
    ;
    function addEventLi(li){
        li.addEventListener("click",function(e){
            clickedUl(e)
        })
    }
    ;
    function getSavedData(){
        let taskData=localStorage.getItem("tasks")
        taskData=JSON.parse(taskData)
        ;
        return taskData && taskData.length ? taskData : [{
                name:"task1",
                createdAt:Date.now(),
                completed:true
            }]
    }
    ;
    function setNewData(){
        localStorage.setItem("tasks",JSON.stringify(arrTasks))
    }
    ;
    // Adicionar Eventos
    form.addEventListener("submit",function(e){
        e.preventDefault()
        ;
        addTask(itemInput.value)
        setNewData()
        renderTasks()
        itemInput.value=""
        itemInput.focus()
    })

    renderTasks()
})()