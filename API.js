let priorityDictionnary = {
    Low : " is-success",
    Medium : "is-primary",
    High : "is-warning",
    Urgent: "is-danger"
}
let tasksContainer = {
    title : "",
    list : [],
    nodeName : {}
}
let task = {
    content:"",
    responsible :"",
    priority :"",
    nodeName: {},
    nodeType:"",
    nodeClass:"",
    addTask : function(){
        tasksContainer.list.push(task);
        this.nodeName = document.createElement(this.nodeType)
        this.nodeName.classList.add(this.nodeClass)
        this.nodeName.classList.add(this.priority)
        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        this.nodeName.appendChild(deleteBtn)
        let contentlabel=document.createElement("label")
        contentlabel.innerText=this.content
        this.nodeName.appendChild(contentlabel)
        this.nodeName.appendChild(document.createElement("br"))
        let span=document.createElement("span")
        span.classList.add("tag")
        span.innerText=this.responsible
        this.nodeName.appendChild(span)
        this.nodeName.appendChild(document.createElement("br"))
        let em=document.createElement("em")
        em.innerText=this.priority
        this.nodeName.appendChild(em)

        tasksContainer.nodeName.appendChild(this.nodeName)
    },
    removeTask : function (){
        this.nodeName.parentNode.classList.add("remove")
        let rem=document.querySelector(".remove")
        tasksContainer.list.forEach(function(item,index){
            if (item.nodeName.classList.contains("remove")){
                let up = tasksContainer.list.slice(0,index)
                let down = tasksContainer.list.slice(index,length(tasksContainer.list))
                down.shift()
                tasksContainer.list = [...up,...down]
                this.nodeName.parentNode.innerHtml=""
            }
        })
    }
}