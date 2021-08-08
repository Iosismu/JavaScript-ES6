class Shape {

  // fields
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return width * this.height;
  }
}

// 상속과 다양성
class Rectangle extends Shape {

}

class Triangle extends Shape {
  // 오버라이딩(overiding) -> 삼각형의 너비를 구하는 식은 사각형과 달라서 따로 재정의가 필요 그래서 overiding이 있다.

  draw() {
    // 공통으로 정의된 것도 그려주고 싶고 새롭게 정의도 하고 싶다. 그때 super
    super.draw();
    console.log('삼각형');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());

// JavaScript MDN Reference 에서 다양한 Object들을 확인 할 수 있다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference