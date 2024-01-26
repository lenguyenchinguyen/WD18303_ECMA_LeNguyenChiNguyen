// Shape.prototype.move = function (x,y){
//     this.x=x;
//     this.y=y;
// };


class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
// em không biết có bị dư code hay không tại nhìn y chang nhưng mà khi chạy không có constructor thì chạy không ra

    // test
    //   hcn() {
    //     console.log(`Hình chữ nhật có chiều dài x: ${this.x}`);
    //     console.log(`Hình chữ nhật có chiều rộng y: ${this.y}`);
    //   }
}
// let hcn = new Shape(2, 3);
// hcn.hcn();
