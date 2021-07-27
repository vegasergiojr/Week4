
 

function isPalindrome(word) {

    let reversedWord = ""

    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i])
        reversedWord = reversedWord + (word[i])
    }

    console.log(reversedWord)

    // condition 
    if (word == reversedWord) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("cat"))
console.log(isPalindrome("dog")) 
console.log(isPalindrome("dad")) 


function doSomething() {

    let a = 10 

    if(1 == 1) {
        let a = 20 
        console.log(a) // 20 
    }

    console.log(a)
}

doSomething() 


