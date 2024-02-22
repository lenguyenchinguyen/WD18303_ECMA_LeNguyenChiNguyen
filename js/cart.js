listCart = () => {
    let cart=localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[];
    let pr = ''
    cart.forEach((productData, index ) => {
        pr +=
        `
        <tr>
            <td>${index+1}</td>
            <td>${productData.name}</td>
            <td><img style="width: 20%" src="../image/${productData.img}" alt="" /></td>
            <td>${productData.price}</td>
            <td>${productData.quantity}</td>
            <td>${productData.quantity*productData.price}</td>
            <td
                <button class="delPro" onclick="deleteCart (${productData.id})">Xóa</button>
            </td>
        </tr>
        `
    });

    document.querySelector('tbody').innerHTML = pr

    // tổng tiền
    let sum = 0;
    cart.forEach(productData => {
        sum+= productData.sale*productData.qty
    })
    document.getElementById('sumMoney').innerHTML=sum;
}

listCart ()

async function deleteCart (id) {
    let cart = JSON.parse (localStorage.getItem ('cart'))
    for (let i = 0 ; i < cart.length ; i++) {
        if (cart [i].id == id) {
            cart.splice (i , 1)
        }
    }
    await localStorage.setItem ('cart' , JSON.stringify (cart))
    await listCart ()
}
