class user {
    constructor(name){
        this.name = name;
    }
    sayHello (){
        console.log(` Xin chào tôi là ${this.name}`);
    }
}
let user1 = new user ("Lê Nguyễn Chí Nguyên");

user1.sayHello();