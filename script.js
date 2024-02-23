//câu 1
//câu 2
//câu 3 
const API_URL = "https://nguyenlncpc05635-default-rtdb.asia-southeast1.firebasedatabase.app/";

// json-server 
let getProduct = async () => {
    let reponsive = await fetch(API_URL + `products.json`);

    return await reponsive.json();
};
getProduct().then((products) => {
    //
    let html = '';
    let tbody = document.getElementById('table')
    Object.entries(products).forEach(([key, element]) => {
        html += `
    <tr class="">
    <td scope="row">${element.name}</td>
    <td scope="row">${element.price}</td>
    <td scope="row">${element.sale}</td>
    <td><button class="btn btn-primary"onclick="productEdit('${key}')">Sửa</button></td>
    <td><button class="btn btn-danger"onclick=" productDelete('${key}')">Xóa</button></td>
    </tr>
    `
    });
    tbody.innerHTML = html;
})
    .catch((error) => {
        console.log(error);
    })
// delete product
let productDelete = (id) => {
    let deleteOneProduct = async (id) => {
        let response = await fetch(API_URL + 'products/' + id + '.json', {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('Xóa thành công');
            location.reload();
        } else {
            console.log('Xóa thất bại');
        }
    };
    deleteOneProduct(id);
};
// Edit product
let productEdit = (id) => {
    let form = document.getElementById("formEditProduct");
    let getOneProduct = async (id) => {
        let response = await fetch(API_URL + 'products/' + id + '.json')
        return await response.json();
    }
    getOneProduct(id).then((pro) => {
        console.log(pro);
        //thêm dữ liệu vào form
        document.querySelector('input[name="nameEdit"]').value = pro.name
        document.querySelector('input[name="priceEdit"]').value = pro.price
        document.querySelector('input[name="saleEdit"]').value = pro.sale
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let data = new FormData(form);
        let object = {
            name: data.get("nameEdit"),
            price: data.get("priceEdit"),
            sale: data.get("saleEdit")
        };
        data.forEach((value, key) => {
            object[key] = value;
        });

        fetch(API_URL + 'products/' + id + '.json', {
            method: 'PUT',
            body: JSON.stringify(object)
        }).then(() => {
            location.reload();
        })
    })
}

// add product
let createProduct = (form) => {
    let data = new FormData(form);
    console.log(data.values());
    let objetct = {
        name: data.get("name"),
        price: data.get("price"),
        sale: data.get("sale")
    }
    // 
    let reponsive = fetch(API_URL + `products.json`, {
        method: 'POST',
        body: JSON.stringify(objetct)
    });
};



