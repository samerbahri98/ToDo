
tasksContainer.nodeName=document.querySelector(".tasksList")
let addTask = document.querySelector("#addTask")
addTask.addEventListener('click',function(){
    task.nodeType="div"
    task.nodeClass="notification"
    task.priorityClass=priorityDictionnary.getPriority()
    task.content=document.querySelector("#taskContent").value
    task.responsible=document.querySelector("#responsible").value
    task.addTask()
})
