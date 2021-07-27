
console.log("test")

const submitButton = document.getElementById("submitButton")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const nameHeading = document.getElementById("nameHeading")

document.get

submitButton.addEventListener("click", function() {
    //have to pass the global variable into the functions variable.
    const first = firstName.value
    const last = lastName.value
    const name = first +" "+ last
    //assign the value from textbox to h1
    nameHeading.innerHTML = name
})