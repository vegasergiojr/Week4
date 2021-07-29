//Why callback functions are important -- research this
// A callback function is a fcuntion passed to anothe function that will be called sometime in the future. 
const result = getStockQuote('GOOG')
console.log(result)

const stocks = document.getElementById("availableStocks")
const retrieveQoute = document.getElementById("getQoute")
const display = document.getElementById("stockQouteDisplay")

window.setInterval(function(){
    const result = getStockQuote(stocks.value)
    display.innerText = result.price
    console.log(result)
}, 2000)






const result = getStockQuote('GOOG')
console.log(result)

console.log()
