let multiply = (num1, num2) => num1 * num2;


let toCelsius = (fahrenheit) => (5/9)*(fahrenheit -32);

let padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen
    for (let i=1; i < numZeros; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}

let power = (base, exponment) => {
    let result = 1;
    for (let i =0; i< exponment ; i++){
        result *= base;
    }
    return result;
}

let greet = (who) => console.log("Hello" + who);