console.log("Hello World!") // console.log is used to print out to the terminal. 
//variables
let age = 45 // use the declaration let, to make a variable that can change. Something to note is that once a variable is declared you do not have to write the declaration again just the variable name. example. 
age = 39
var name = "John" 
const pi = 3.142 // constant variables cannot be changed. const is what defines a constant variable
//JS uses camel casing. 
let isPublished = true 
//Arrays
let friends = ["Jugo", "Edgar", "Angel"]
console.log(friends)
//Loops
//for(starting value, condition, how you increment the index)
//the condition meaning where it ends
for(let index = 0; index < friends.length; index++) {
    //console.log(index)
    //the index after friends is what access the friends in the array
    console.log(friends[index])
}
//Functions can also be called from the top before the function is created. 
sayHello()
//Functions -  should do one thing and one thing only
function sayHello(){
    console.log("Hello")
}
sayHello()
//passing a name
function displayName(name){
    console.log(name)
}
displayName("Marry Doe")
//math
function add(a, b) {
    return a+b
}
let result = add(4,5)
add()
console.log(result)
// Array
let tasks = [] //empty ray
tasks.push("Clean")
tasks.push("Shower")
tasks.push("Sweep")
console.log(tasks)
//delete from array
let deletedItem = tasks.pop() // removes last item from the array. 
console.log(tasks)
//delete item based on an index
delete tasks[1]
console.log(tasks)
//deleting range of items
tasks.splice(0, 3) // (starting index, number of items to delete)
console.log(tasks) 
//while Loop
let counter = 0 
while(counter <= 10){
    if(counter % 2 == 0){  //if the counter reaches a number divisible by 2 then break.
        break
    }
}
// conditions
let version = 3
let os = "version"
if(version == 3) {
    console.log("version is 3")
} else if(version == 2) {
    console.log("version is 2")
} else {
    console.log("some other os.")
}
//Activity 2
let a = 50
let b = 60
result = a+b
console.log(result)
if(result < 80 && and > 50){
    console.log("65")
} else {
    console.log(80)
}
//Activity 3
//Vowels A, E, I, O, U, Y, W
//var input = prompt("Please enter a character: ")
//if(input == "a" || input == "e" || input == "i" || input == "o" || input == "u" || //input == "y" || input == "w") {
//    console.log("is a vowel.")
//} else {
//    console.log("is not a vowel.")
//}
//classes There are No classes in JavaScript
function Car(make, model) {
    this.make = make
    this.model = model
    this.vin = ""
}
function drive(){
    console.log("car is driving...")
}
function brake(){
    console.log("Brake*SCREEEAACHHH*")
}
Car.prototype.driveTheCar = drive
Car.prototype.brake = brake
//anonymous function dont have a name, the ony way to call the function is to call change gear. 
Car.prototype.changeGear = function(){
    console.log("gear changed")
}
// car = Car("Honda", "Accord") //Python similar
let car = new Car("Honda", "Accord")
console.log(car)
car.driveTheCar()
car.brake()
car.changeGear()
// technically there are no dictionaries in JS
// modern class syntax, eliminates the use of prototype
class ElectricCar {
    constructor(make, model, range){
        this.make = make
        this.model = model
        this.range = range 
    }
    drive(){
        this.speed += 10
    }
    brake() {
    }
}

let elctricCar = new ElectricCar("Tesla", "Model-X", 300)