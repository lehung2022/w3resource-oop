class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
        } else {
            console.log(`Insufficient balance in account ${this.accountNumber}.`);
        }
    }

    transfer(amount, recipientAccount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipientAccount.deposit(amount);
            console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
        } else {
            console.log(`Insufficient balance in account ${this.accountNumber} for transfer.`);
        }
    }

    displayBalance() {
        console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
    }
}

// Create multiple instances of the BankAccount class
const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
const account2 = new BankAccount('SB-019', 'Phokas Intan', 3000);

// Transactions on the bank accounts
account1.displayBalance(); // Account SB-012 balance: $2000
account2.displayBalance(); // Account SB-019 balance: $3000

account1.deposit(500); // Amount $500 deposited into account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2500

account1.withdraw(200); // Amount $200 withdrawn from account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2300

account1.transfer(700, account2); // Amount $700 transferred from account SB-01 to account SB-019.
account1.displayBalance(); // Account SB-012 balance: $1600
account2.displayBalance(); // Account SB-019 balance: $3700
