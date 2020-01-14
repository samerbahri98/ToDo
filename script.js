//Global Declaraions
let tasksList = document.querySelector("#tasksList")


//Edit Title
function setTitleChange(){
    let editTitleText=document.querySelector("#Title")
    editTitleText.addEventListener('keyup',function(e){
        if(e.keyCode===13){
            e.target.parentNode.innerHTML=`
                <label id="titleLabel">${editTitleText.value}</label>
                <span class="icon is-small">
                    <i class="fa fa-pencil" id="editTitleBtn"></i>
                </span> `
                startTitleChange()
        }
    })
}

function startTitleChange(){
    let editTitleBtn = document.querySelector("#editTitleBtn")
    editTitleBtn.addEventListener('click',function(e){
        if(e.target.id==="editTitleBtn")
        {
            e.target.parentNode.parentNode.innerHTML=`
            <input class="input is-small" id="Title" type="text" placeholder="Title" width="150px">
            `
            setTitleChange()
        }

    })
}
startTitleChange()

//Remove Task
function setDelete(){
    let deleteButtons = document.querySelectorAll(".delete")
    deleteButtons.forEach(function(btn){
        btn.addEventListener('click',function(e){
            if(e.target.className==="delete")
            {
                e.target.parentNode.parentNode.parentNode.id="removed"
                removed=document.querySelector("#removed")
                tasksList.removeChild(removed)
            }
        })
    })
}

setDelete()

//Add Task
let newTask = document.querySelector("#taskText")
let newTaskADD = document.querySelector("#addTask")
addTask=function(e){
        if(newTask.value!== "")
        {
            let task= document.createElement("div")
            task.className="panel-block"
            task.className="dropPanel"
            task.innerHTML= `
            <a class="panel-block dragPanel" draggable="true">
            <span class="panel-icon">
            <button class="delete"></button>
            </span>
            <h1>${newTask.value}</h1>
            </a>`;
            tasksList.appendChild(task) 
            setDelete()
            newTask.value=''
        }
}

newTaskADD=addEventListener ('click',function(e){
    if(e.target.id==="addTask"){
        addTask(e)
    }
})
newTask.addEventListener('keyup',function(e){
    if(e.keyCode===13){
        addTask(e)
    }
})


//Clear ALL
let clearAll=document.querySelector("#clearAll")
clearAll.addEventListener('click',function(e){
    if(e.target.id==="clearAll"){
        tasksList.innerHTML=''
    }
})


