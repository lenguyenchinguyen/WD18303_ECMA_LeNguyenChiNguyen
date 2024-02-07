let cart=localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[];
cart.forEach((productData, index ) => {
    document.querySelector('tbody').innerHTML +=
    `
    <tr>
        <td>${index+1}</td>
        <td>${productData.name}</td>
        <td><img style="width: 20%" src="../image/${productData.img}" alt="" /></td>
        <td>${productData.price}</td>
        <td>${productData.quantity}</td>
        <td>${productData.quantity*productData.price}</td>
        <td
            <button class="delPro" data-id="${productData.id}">Xóa</button>
        </td>
    </tr>
    `
});

// tổng tiền
let sum = 0;
cart.forEach(productData => {
    sum+= productData.sale*productData.qty
})
document.getElementById('sumMoney').innerHTML=sum;
// xóa sp
