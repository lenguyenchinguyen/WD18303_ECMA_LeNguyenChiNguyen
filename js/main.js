
// var pro_tivi = data.filter(function (item) {
//     return item.category == "Tivi";
// }).slice(0,5);
// console.log(pro_tivi);
// var pro_tulanh = data.filter(function (item) {
//     return item.category == "tủ lạnh";
// }).slice(0,5);
// console.log(pro_tulanh);


// const cate_tivi = document.querySelector("#tivi");
// const cate_tulanh = document.querySelector("#tulanh");



// pro_tivi.forEach(function (item) {
//     cate_tivi.innerHTML += `
//     <div class="sanpham border-green">
//     <span class="label-tragop">Trả góp 1%</span>
//     <img src="image/${item.image}" alt="" />
//     <span class="label-sale"
//       ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
//     >
//     <br />
//     <span>${item.name}</span>
//     <br />
//     <p class="gia">${item.price}<del> ${item.sale} đ</del></p>
//     <p class="online-gia-re">Online giá rẻ</p>
//     <p class="sao">${item.star} <i class="fa-solid fa-star"></i></p>
//   </div>`
// })

// pro_tulanh.forEach(function (item) {
//     cate_tulanh.innerHTML += `
//     <div class="sanpham border-red">
//     <span class="label-tragop">Trả góp 1%</span>
//     <img src="image/${item.image}" alt="" />
//     <span class="label-sale"
//       ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
//     >
//     <br />
//     <span>${item.name}</span>
//     <br />
//     <p class="gia">${item.price}<del> ${item.sale} đ</del></p>
//     <p class="online-gia-re">Online giá rẻ</p>
//     <p class="sao">${item.star} <i class="fa-solid fa-star"></i></p>
//   </div>`
// })

let HTML = document.getElementById('hotdeal');
let tulanHTMLElement = document.getElementById('tulanh');
let tiviHTMLElement = document.getElementById('tivi');

function detail_product(id) {
  localStorage.setItem('id_sp', id)
  console.log(localStorage.getItem('id_sp'));
  window.location = 'single-product.html'
}

function listProductCategories1 (id, targetElement) {
  fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
          let product = '';
            // lấy 5 sản phẩm đầu tiên để hiển thị
          let filteredData = data.filter(productData => productData.category == id).slice(0, 5);
          filteredData.forEach(productData => {
              if (productData.category == id) {
                  product +=  `
                    <div class="sanpham border-red">
                    <span class="label-tragop">Trả góp 1%</span>
                    <img src="image/${productData.image}" alt="" />
                    <span class="label-sale"
                      ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
                    >
                    <br />
                    <span>${productData.name}</span>
                    <br />
                    <p class="gia">${productData.price}<del> ${productData.sale} đ</del></p>

                 
                    <div class = "div_btn_buy">
                        <button data-id = "${productData.id}" class= "btn_buy"><a href = "site/cart.html">Mua ngay </a></button>
                    </div>
                  </div>
              `;
          }
      });
      targetElement.innerHTML = product;
  });
}


function listProductCategories2 (id, targetElement) {
  fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
          let product = '';
          // lấy 5 sản phẩm đầu tiên để hiển thị
          let filteredData = data.filter(productData => productData.category == id).slice(0, 5);
          filteredData.forEach(productData => {
              if (productData.category === id) {
                  product +=  `
                    <div class="sanpham border-green">
                    <span class="label-tragop">Trả góp 1%</span>
                    <img src="image/${productData.image}" alt="" />
                    <span class="label-sale"
                      ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
                    >
                    <br />
                    <span>${productData.name}</span>
                    <br />
                    <p class="gia">${productData.price}<del> ${productData.sale} đ</del></p>
                    
                   
                    <div class = "div_btn_buy">
                        <button data-id = "${productData.id}" class= "btn_buy">Mua ngay </button>
                    </div>
                  </div>
                `;
              }
          });
          targetElement.innerHTML = product;
      });
}
listProductCategories1 (1, tiviHTMLElement);
listProductCategories1 (2, tulanHTMLElement);


document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn_buy')) {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    const product = await producService.getDataById(id);
    console.log(product);
    // kiem tra co cart co trong localstoge hay khong co thi lay ra khog co thi rong
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const index = cart.findIndex(productData => productData.id == product.id);
    if (index == -1) {
      product.qty = 1;
      cart.push(product);
    } else {
      cart[index].qty += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cart')));
  }
});


