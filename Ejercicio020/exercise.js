class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    if(figure instanceof Square){
      const area = figure.side*figure.side
      return area
    }else if(figure instanceof Rectangle){
      const area = figure.width*figure.height;
      return area
    }else if(figure instanceof Circle){
      const area = Math.PI*(figure.radius**2);
      return area
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);


console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));