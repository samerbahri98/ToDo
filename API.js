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


//Priority
let priorityDictionnary = {
    list:[{
        actualPriority:"Low",
        classPriority:"is-success"
    },
    {
        actualPriority:"Medium",
        classPriority:"is-primary"
    },
    {
        actualPriority:"High",
        classPriority:"is-warning"
    },
    {
        actualPriority:"Urgent",
        classPriority:"is-danger"
    }],
    
    getPriority:function(){
        let Priority
        let selections = document.querySelectorAll(".selection")
        selections.forEach(function(selection){
            if(selection.selected===true){
                task.priorityName=selection.innerText
                priorityDictionnary.list.forEach(function(p){
                    if(selection.innerText===p.actualPriority){
                        Priority= p.classPriority
                    }
                })
            }
        })
        return Priority
    }
    
}

//Manage tasks
let tasksContainer = {
    title : "",
    list : [],
    nodeName : {}
}
let task = {
    content:"",
    responsible :"",
    priorityClass :"",
    priorityName :"",
    nodeName: {},
    nodeType:"",
    nodeClass:"",
    addTask : function(){
        //creation

        this.nodeName = document.createElement(this.nodeType)
        this.nodeName.classList.add("Task")
        this.nodeName.classList.add(this.nodeClass)
        this.nodeName.classList.add(this.priorityClass)
        this.nodeName.setAttribute("draggable","true")
        //delete button
        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        this.nodeName.appendChild(deleteBtn)
        //content
        let contentlabel=document.createElement("label")
        contentlabel.innerText=this.content
        this.nodeName.appendChild(contentlabel)
        this.nodeName.appendChild(document.createElement("br"))
        //responsible
        let span=document.createElement("span")
        span.classList.add("tag")
        span.innerText=this.responsible
        this.nodeName.appendChild(span)
        this.nodeName.appendChild(document.createElement("br"))
        //priority
        let em=document.createElement("em")
        em.innerText=this.priorityName
        this.nodeName.appendChild(em)
        //Finishing creation
        tasksContainer.nodeName.appendChild(this.nodeName)


        //deletion
        deleteBtn.addEventListener("click",function(e){
            e.target.parentNode.id="deletion"
            task.removeTask()
        })

    },
    updateDisplay: function(){
        let TasksList = document.querySelectorAll(".Task")
        TasksList.forEach(function(destination){
            if(destination.classList.contains("isDraggedOn")){
                TasksList.forEach(function(draggedTask){
                    if(draggedTask.classList.contains("isDragging")){
                        destination.parentNode.insertBefore(draggedTask,destination.nextSibling)
                    }
                })
                destination.classList.remove("isDraggedOn")
            }
        })
    },

    removeTask : function (){
        let TasksList = document.querySelectorAll(".Task")
        TasksList.forEach(function(Taskelem){
            if(Taskelem.id==="deletion"){
                //e.parentNode.parentNode.removeChild(e.parentElement)
                Taskelem.parentNode.removeChild(Taskelem)
            }
        })
    }

}
