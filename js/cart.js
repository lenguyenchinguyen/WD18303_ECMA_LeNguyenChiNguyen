async function list () {
    if (localStorage.getItem ("myCart") != null) {
        const myCart = JSON.parse (localStorage.getItem ("myCart"))
        let add = ''
        myCart.forEach (productData => {
            add += 
            `
                <tr>
                    <td style = "width: 22%">
                        <div class="media">
                            <div class="d-flex">
                                <img style="width: 90%" src="site/img/${productData.img}" alt="">
                            </div>
                            <div class="media-body">
                                <p>${productData.name}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>${productData.price}</h5>
                    </td>
                    <td>
                        <div class="product_count">
                            <input type="text" name="qty" id = 'sst${productData.id}' maxlength="12" value="${productData.quantity}" title="Quantity:"
                                class="input-text qty">
                            <button onclick="var result = document.getElementById('sst${productData.id}'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                            <button onclick="var result = document.getElementById('sst${productData.id}'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                        </div>
                    </td>
                    <td>
                        <h5>${(productData.price * productData.quantity)}</h5>
                    </td>
                    <td>
                        <button onclick="updata('${productData.id}')"
                        style = " 
                        background-color: #ccc;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        padding: 5px 10px;
                        font-size: 16px;
                        background-color: #999;" >cập nhật</button>

                        <button  onclick="deleteProduct('${productData.id}')"
                        style = " 
                        background-color: #ccc;
                        border: none;
                        color: #fff;
                        cursor: pointer;
                        padding: 5px 10px;
                        font-size: 16px;
                        background-color: #999;" >Xóa</button>
                    </td>
                </tr>
            `
            document.getElementById ('myCart').innerHTML = add
        })
        
        document.getElementById('myCart').innerHTML += 
        `
        <tr class="out_button_area">
        <td>

        </td id="">
        <td>

        </td>
        <td>

        </td>
        <td>
            <div class="checkout_btn_inner d-flex align-items-center">
                <a class="gray_btn" href="./category.html">Tiếp tục mua sắm</a>
                <a class="primary-btn" href="./checkout.html">Thanh toán</a>
            </div>
        </td>
    </tr>
        `
    } else {
        document.getElementById('myCart').innerHTML = "<div style='text-align: center; margin-left:100px; padding-top:100px'>không có sản phẩm nào trong giỏ hàng</div>";
    }
} 

list ()

async function updata (id) {
    const myCart = JSON.parse (localStorage.getItem("myCart"))
    await myCart.forEach (myCart => {
        if (myCart.id == id) {
            const sl = document.getElementById (`sst${myCart.id}`).value
            myCart.quantity = sl
        }
    })
    await localStorage.setItem ("myCart" , JSON.stringify (myCart))
    await list ()
}


async function deleteProduct(id){
	const myCart = JSON.parse (localStorage.getItem ("myCart"))
    for(let i = 0; i< myCart.length;i++){
        if(myCart[i].id == id){
            await myCart.splice(i,1);
        }
    }
    if (myCart.length > 0) {
        await localStorage.setItem("myCart",JSON.stringify(myCart));
        list ()
    } else {
        await localStorage.removeItem ("myCart")
        list ()
    }
}
var value,
quantity = document.getElementsByClassName('quantity-container');

function createBindings(quantityContainer) {
var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
var increase = quantityContainer.getElementsByClassName('increase')[0];
var decrease = quantityContainer.getElementsByClassName('decrease')[0];
increase.addEventListener('click', function () { increaseValue(quantityAmount); });
decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
}

function init() {
for (var i = 0; i < quantity.length; i++ ) {
    createBindings(quantity[i]);
}
};

function increaseValue(quantityAmount) {
value = parseInt(quantityAmount.value, 10);

console.log(quantityAmount, quantityAmount.value);

value = isNaN(value) ? 0 : value;
value++;
quantityAmount.value = value;
}

function decreaseValue(quantityAmount) {
value = parseInt(quantityAmount.value, 10);

value = isNaN(value) ? 0 : value;
if (value > 0) value--;

quantityAmount.value = value;
}

init();

