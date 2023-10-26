class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`A/c No.: ${accountNumber}`);
        console.log(`Opening Balance: $${balance}`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        }
        else {
            console.log(`Want to withdrawn: $${amount}`);
            console.log('Insufficient balance');
        }
    }
    displayBalance() {
        console.log(`Account Balance: $${this.balance}`);
    }
}
// Create an instance of the BankAccount class
const account = new Account('SB-123', 1500);
// Deposit money into the account
account.deposit(500);
// Withdraw money from the account
account.withdraw(400);
// Display the account balance
account.displayBalance();
// Withdraw money from the account
account.withdraw(1800);
// Display the account balance
account.displayBalance();
