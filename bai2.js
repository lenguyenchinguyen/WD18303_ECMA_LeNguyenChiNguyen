//Bài 2
let name = "Le Nguyen Chi Nguyen";

let birthday = "2004/06/05";

//arow functio
let sayHello = () => {
  console.log(`I'm ${name},${birthday}`)
}

// chuyển birthday sang date để tính toán
let date = new Date(birthday);

let age = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24 * 365.25));

let sayage = () => {
  console.log(`Tuổi của bạn là ${age}`);
}

sayHello();
sayage();