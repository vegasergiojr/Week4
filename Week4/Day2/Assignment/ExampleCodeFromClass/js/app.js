
console.log(this)

// DOM 
// Document Object Model 

// access the button using the id  
const submitButton = document.getElementById("submitButton")
const nameTextBox = document.getElementById("nameTextBox")
const ageTextBox = document.getElementById("ageTextBox")
const nameHeading = document.getElementById("nameHeading")
const namesUL = document.getElementById("namesUL")

// FOR IMAGES 
const imagesUL = document.getElementById("imagesUL")
const imageTextBox = document.getElementById("imageTextBox")
const addImageButton = document.getElementById("addImageButton")

addImageButton.addEventListener("click", function() {
    const imageURL = imageTextBox.value 
    const imageLI = document.createElement("li")
    const imgElement = document.createElement("img")
    imgElement.setAttribute("src", imageURL)

    imageLI.appendChild(imgElement)
    imagesUL.append(imageLI)
})


submitButton.addEventListener("click", function () {


    console.log(this)
    // get the value of the textbox 
    const name = nameTextBox.value
    // get the value from age textbox 
    const age = ageTextBox.value
    // assign the value from textbox to H1 
    nameHeading.innerHTML = name + " " + age

    // create a name LI 
    const nameLI = document.createElement("li")
    nameLI.innerHTML = name
    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", function () {
        
        // this = removeButton 
        // this.parentElement = LI 
        // this.parentElement.parentElement = UL 
        namesUL.removeChild(this.parentElement)
        //console.log(this.parentElement)
    })


    removeButton.innerHTML = "Remove"
    nameLI.appendChild(removeButton)

    // append nameLI to namesUL 
    namesUL.appendChild(nameLI)

    // add a div element to the body 
    /*
    const divElement = document.createElement("div")
    divElement.innerHTML = "HELLO WORLD"
    // add div element to the body 
    document.body.appendChild(divElement) */

})

/*
function submitButtonClicked() {
    console.log("submitButtonClicked")
}
*/




