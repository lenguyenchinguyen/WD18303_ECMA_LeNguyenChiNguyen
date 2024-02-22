const API_URL = 'http://localhost:3000/products/';

async function getListProducts() {
  const categories = await axios.get('http://localhost:3000/categories');
  const products = await axios.get(API_URL);

  const tbody = document.querySelector('tbody');
  products.data.forEach((product) => {
    let categoryName = '';
    categories.data.forEach((category) => {
      if (product.category === category._id || product.category === category.id) {
        categoryName = category.name;
      }
    });

    tbody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td><img src='../image/${product.image}' width="100px"></td>
        <td>${product.price}</td>
        <td>${product.sale}</td>
        
        <td>${product.description}</td>
        <th>
          <div class="button-container">
            <button onclick="editProduct(${product.id})" class="bt1">
              <a>Sửa</a>
            </button>
            <button class="bt2" onclick="deleteProduct(${product.id})">Xóa</button>
          </div>
        </th>
      </tr>
    `;
  });
}

getListProducts();

function deleteProduct(id) {
  const API_URL = "http://localhost:3000/products/";

  // Hiển thị thông báo xác nhận
  if (!confirm("Bạn có muốn xóa sản phẩm này?")) {
    return; // Dừng việc xóa nếu người dùng chọn "Hủy"
  }

  // Gửi yêu cầu xóa đến API
  axios.delete(API_URL + id)
    .then(() => {
      // Xử lý thành công
      alert("Xóa sản phẩm thành công!");
      // Cập nhật giao diện sau khi xóa (tùy theo ứng dụng)
    })
    .catch((error) => {
      // Xử lý lỗi
      alert("Có lỗi xảy ra khi xóa sản phẩm!");
      console.error(error);
    });
}

function editProduct(id) {
  localStorage.setItem('id-sp', id);
  window.location = 'update.html';
}