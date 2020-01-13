
let newTask = document.querySelector("#taskText")
let newTaskADD = document.querySelector("#addTask")
let tasksList = document.querySelector("#tasksList")

//remove task
function setDelete(){
    let delTaskBtn = document.querySelectorAll(".delete")
    for (let i = 0 ; i <delTaskBtn.length; i++){
        delTaskBtn[i].addEventListener('click',function(e){
            if(e.target.className==="delete")
            {
                e.target.parentNode.parentNode.id="removed"
                removed=document.querySelector("#removed")
                tasksList.removeChild(removed)
            }
        })
    }
}
setDelete()


//add Task
newTaskADD=addEventListener ('click',function(e){
    if(e.target.id==="addTask")
    {
        let task= document.createElement("a")
        task.className="panel-block"
        task.innerHTML= `
    <span class="panel-icon">
        <button class="delete"></button>
    </span>
    <h1>${newTask.value}</h1>
        `;
        tasksList.appendChild(task) 
        setDelete()
    }
})



//clear ALL
let clearAll=document.querySelector("#clearAll")
clearAll.addEventListener('click',function(e){
    if(e.target.id==="clearAll"){
        tasksList.innerHTML=''
    }
})
