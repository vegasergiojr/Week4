console.log(this)
const submitButton = document.getElementById("submitButton")
const taskBox = document.getElementById("taskBox")
const taskUl = document.getElementById("myUl")

document.get 

submitButton.addEventListener("click", function(){
    const task = taskBox.value
    const nameLI = document.createElement("li")
    nameLI.myUl = task
    myUl.appendChild(nameLI)
    //Display Text in HTML
    nameLI.innerHTML = task

    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", function(){
        taskUl.removeChild(this.parentElement)
    })

    removeButton.innerHTML = "Remove"
    nameLI.appendChild(removeButton)
    taskUl.appendChild(nameLI)

})
