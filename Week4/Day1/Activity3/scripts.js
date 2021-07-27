console.log("Hello")

class BankAccount {
    constructor(balance, accountType){
        this.balance = balance
        this.accountType = accountType
    }
    deposit(amount){
        this.balance += amount
        console.log(newBalance)
    }
    withdraw() {
        if(amount < this.balance){
            this.balance -= amount
        }
    }
}
let bankAccount = new BankAccount(100, "A302349")
bankAccount.deposit(100)
bankAccount.withdraw(50)
console.log(bankAccount.balance)
