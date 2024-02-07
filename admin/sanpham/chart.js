const API_URL = 'http://localhost:3000/';

async function getData() {
  const response = await axios.get(API_URL);
  const data = response.data;
  return data;
}

async function createChart() {
  const data = await getData();

  // Lấy dữ liệu 2 loại
  const category1Data = data.products.filter(product => product.categoryId === 1);
  const category2Data = data.products.filter(product => product.categoryId === 2);

  // Tạo canvas cho biểu đồ
  const canvas = document.querySelector('#myChart');
  const ctx = canvas.getContext('2d');

  // Tạo dữ liệu cho biểu đồ
  const labels = [
    category1Data[0].categoryName,
    category2Data[0].categoryName
  ];
  const dataValues = [
    category1Data.length,
    category2Data.length
  ];

  // Tạo biểu đồ
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: dataValues,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
      }]
    },
    options: {
      title: {
        text: 'Biểu đồ thống kê số sản phẩm theo 2 loại'
      }
    }
  });
}

createChart();