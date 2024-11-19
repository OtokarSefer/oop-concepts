class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getArea() {
        throw new Error("Shape-is NO work here ! :(");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    print() {
        return `Circle => (r: ${this.radius}, c: ${this.color})`;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }

    print() {
        return `Square ==> (ar: ${this.side}, co: ${this.color})`;
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    print() {
        return `Rectangle ===> (lenght: ${this.length}, width: ${this.width}, color: ${this.color})`;
    }
}

class Paint {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getShapes() {
        return this.shapes;
    }

    calculateTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }

    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle);
    }

    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square);
    }

    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }
}

//info
const paint = new Paint();
const circle = new Circle("red", 5);
const square = new Square("blue", 4);
const rectangle = new Rectangle("green", 6, 3);

//lisamine
paint.addShape(circle);
paint.addShape(square);
paint.addShape(rectangle);

//keeruline osa
console.log(paint.getShapes().map(shape => shape.print())); 


// ala ja saju
console.log(paint.calculateTotalArea()); 
console.log(paint.getCircles());         
console.log(paint.getSquares());         
console.log(paint.getRectangles());      
