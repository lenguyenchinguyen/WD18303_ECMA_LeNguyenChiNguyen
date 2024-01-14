let convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        return (temperature * 9 / 5) + 32;
    } else if (unit === "F") {
        return (temperature - 32) * 5 / 9;
    } else {
        throw new Error("Đơn vị nhiệt độ không hợp lệ");
    }
};
console.log(convertTemperature(50, "F"));