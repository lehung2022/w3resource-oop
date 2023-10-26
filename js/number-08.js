class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makeSound() {
        super.makeSound();
        console.log(`Color: ${this.color}`);
    }
}

// Create an instance of the Dog class
const dog = new Dog('Dog', 'Woof woof!', 'Brown');

// Make the dog make its sound
dog.makeSound();
