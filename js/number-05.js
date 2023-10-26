class Shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be overridden in subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class RectangleOne extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Create an instance of the Circle class
const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

// Create an instance of the Rectangle class
const rectangleOne = new RectangleOne(8, 9);
const rectangleArea = rectangle.calculateArea();
console.log(`Rectangle Area: ${rectangleArea}`);
