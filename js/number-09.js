class Bank {
    constructor() {
        this.bankName = '';
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
        console.log(`${branch} added successfully.`);
    }

    removeBranch(branch) {
        const index = this.branches.indexOf(branch);
        if (index !== -1) {
            this.branches.splice(index, 1);
            console.log(`Branch ${branch} removed successfully.`);
        }
        else {
            console.log(`Branch "${branch}" does not exist.`);
        }
    }

    displayBranches() {
        if (this.branches.length === 0) {
            console.log('No branches available.');
        } else {
            console.log('List of Bank Branches:');
            this.branches.forEach((branch, index) => {
                console.log(`${index + 1}. ${branch}`);
            });
        }
    }
}
// Create an instance of the Bank class
const bank = new Bank();
// Add branches
bank.addBranch('Branch A');
bank.addBranch('Branch B');
bank.addBranch('Branch C');
// Display all branches
bank.displayBranches();
// Remove a branch
bank.removeBranch('Branch B');
// Display all branches again
bank.displayBranches();
