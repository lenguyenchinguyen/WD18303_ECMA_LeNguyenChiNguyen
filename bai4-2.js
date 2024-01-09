// bài 4.2
fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
.then(response => response.json())
.then(data => {
  console.log(data);
  let array = data;

  let html = document.getElementById('table');

  let child_html = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th> 
        <th scope="col">avatar</th>
        <th scope="col">name</th>
        <th scope="col">createdAt</th>
      </tr>
    </thead>`;

  let STT = 1; // Initialize counter for row numbers

  array.forEach(element => {
    console.log(element);
    child_html += `
      <tbody>
        <tr>
          <td>${STT++}</td> 
          <td><img src="${element.avatar}" alt="${element.name}"></td>
          <td>${element.name}</td>
          <td>${element.createdAt}</td>
        </tr>
      </tbody>`;
  });

  child_html += `</table>`;
  html.innerHTML = child_html;
});
