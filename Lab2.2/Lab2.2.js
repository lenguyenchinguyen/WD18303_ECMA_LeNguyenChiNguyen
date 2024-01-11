const source = [1,2,3,4,5,6,7,8,9,10];
function removeFistTwo(list) {
    const [a, b, ...arr] = list; 
    return arr;
}
const arr = removeFistTwo(source);
console.log(arr) 
console.log(source) 