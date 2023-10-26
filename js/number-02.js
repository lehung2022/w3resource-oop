class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(12, 10);

// Calculate area and perimeter of the rectangle
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

// Display the results
console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);
