// Задача №1. Форматтер чисел

function parseCount(element) {
    const parsed = Number.parseFloat(element);
    if (isNaN(parsed)) {
      throw new Error("Невалидное значение");
    }
    return parsed;
  }
  
function validateCount(element) {
    try{
      return parseCount(element);
    } catch(error) {
      return error;
    }
}
  
// Задача №2. Треугольник
  
class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
        if ((side1 + side2) < side3 || (side1 + side3) < side2 || (side2 + side3) < side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    
    get perimeter() {
        this._perimeter = this.side1 + this.side2 + this.side3;
        return this._perimeter;
    }

    get area() {
        let halfPerimeter = this.perimeter/2;
        this._area = Number(Math.sqrt((halfPerimeter)*(halfPerimeter - this.side1)*(halfPerimeter - this.side2)*(halfPerimeter - this.side3)).toFixed(3));
        return this._area;
    }
}
  
function getTriangle(side1, side2, side3){

    try {
      return new Triangle(side1, side2, side3);
    } catch {

      return {
        get perimeter() {
            return 'Ошибка! Треугольник не существует'
        },   
        get area() {
            return 'Ошибка! Треугольник не существует'
        }
      }
    }
}

let triangle = new Triangle(1, 2, 3);
console.log(triangle)