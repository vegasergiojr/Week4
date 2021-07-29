
const dishesUL = document.getElementById("dishesUL")
const courseSelect = document.getElementById("courseSelect")

courseSelect.addEventListener("change", function() {
    
    const selectedCourse = this.value // All/Entrees/Starters/Desserts
    if(selectedCourse == "All") {
        displayDishes(dishes)
    } else {
        const filteredDishes = dishes.filter(function(dish) {
            return dish.course == selectedCourse
        })
    
        displayDishes(filteredDishes)
    }
})

function displayDishes(dishesToDisplay) {
    let allDishes = dishesToDisplay.map(function(dish) {
        return `<li>
            <img src="${dish.imageURL}" class = "dish-photo" />
            <b>${dish.title}</b>
            <p>${dish.description}</p>
            <p>$${dish.price}</p>
        
        </li>`
    })
    
    dishesUL.innerHTML = allDishes.join("")
}

displayDishes(dishes)



