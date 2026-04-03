function parseCount(count) {
    if (Number.isNaN(Number.parseFloat(count))) {
        throw new Error("Невалидное значение");
    }
        
    else
        return Number.parseFloat(count);
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error){
        return error;
    }
}

class Triangle {
    constructor (right, left, down) {
        this.right = right;
        this.left = left;
        this.down = down;

        if (right +  left < down || down +  left < right || right +  down < left) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.right + this.left + this.down;
    }

    get area() {
        let p = this.perimeter / 2;
        return parseFloat(
            Math.sqrt(p*(p-this.right)*(p-this.left)*(p-this.down))
            .toFixed(3))
    }
}

function getTriangle(right, left, down) {
    try {
        return new Triangle(right, left, down);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}