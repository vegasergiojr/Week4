const appetizerButton = document.getElementById("starterButton")
const entreeButton = document.getElementById("entreeButton")
const dessertButton = document.getElementById("dessertButton")
const content = document.getElementById("content")
let appetizers = dishes.filter((dish)=>dish.course === 'Starters')
let entrees = dishes.filter((dish)=>dish.course === 'Entrees')
let desserts = dishes.filter((dish)=>dish.course === 'Desserts')


appetizerButton.addEventListener("click", () => {
    content.innerHTML=""
    appetizers.map((dish) => {
        const appetizerMeals = `
        <div>
            <div>
                <h3>${dish.title} : $ ${dish.price}</h3>
                <img src = ${dish.imageURL} width=200px height=autopx/>
                <p>${dish.description}</p>
            </div>
        </div>
        `
        content.insertAdjacentHTML('beforeend', appetizerMeals)
    })
})

entreeButton.addEventListener("click", () => {
    content.innerHTML=""
    entrees.map((dish) => {
        const entreeMeals = `
        <div>
            <div>
                <h3>${dish.title} : $ ${dish.price}</h3>
                <img src = ${dish.imageURL} width=200px height=autopx/>
                <p>${dish.description}</p>
            </div>
        </div>
        `
        content.insertAdjacentHTML('beforeend', entreeMeals)
    })
})

dessertButton.addEventListener("click", () => {
    content.innerHTML=""
    desserts.map((dish) => {
        const dessertMeals = `
        <div>
            <div>
                <h3>${dish.title} : $ ${dish.price}</h3>
                <img src = ${dish.imageURL} width=200px height=autopx/>    
                <p>${dish.description}</p>
            </div>
        </div>
        `
        content.insertAdjacentHTML('beforeend', dessertMeals)
    })
})
// Display the whole menu
let dishies = dishes
for(let i = 0; i < dishes.length; i++){
    const allMenu = dishes[i]

    const menuContent = `
    <div>
        <h3>${allMenu.title} : $ ${allMenu.price}</h3>
        <img src = ${allMenu.imageURL} width=200px height=autopx/>    
        <p>${allMenu.description}</p>
    </div>
    `
    content.insertAdjacentHTML('beforeend', menuContent)
}