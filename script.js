tasksContainer.nodeName=document.querySelector(".tasksList")
let addTask = document.querySelector("#addTask")
addTask.addEventListener('click',function(){
    task.nodeType="div"
    task.nodeClass="notification"
    task.priority="is-danger"
    task.content=document.querySelector("#taskContent").value
    task.responsible=document.querySelector("#responsible").value
    task.addTask()
})
/*
let removeTask=document.querySelectorAll(".delete")
removeTask.forEach(function(item){
    item.addEventListener("click",)
})*/