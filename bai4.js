//Bài 4
//bài 4.1
  // fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   let array = data.data;

  //   let html = document.getElementById('table');

  //   let child_html = `<table class="table">
  //     <thead>
  //       <tr>
  //         <th scope="col">#</th> 
  //         <th scope="col">Nation</th>
  //         <th scope="col">Year</th>
  //         <th scope="col">Population</th>
  //       </tr>
  //     </thead>`;

  //   let index = 1; // Khai báo chứ không chạy không ra

  //   array.forEach(element => {
  //     console.log(element);
  //     child_html += `
  //       <tbody>
  //         <tr>
  //           <td>${index++}</td> 
  //           <td>${element.Nation}</td>
  //           <td>${element.Year}</td>
  //           <td>${element.Population}</td>
  //         </tr>
  //       </tbody>`;
  //   });

  //   child_html += `</table>`;
  //   html.innerHTML = child_html;
  // });

  fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then(response => response.json())
  .then(({ data: list }) => {
    console.log(list);

    let html = document.getElementById('table');

    let child_html = `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nation</th>
          <th scope="col">Year</th>
          <th scope="col">Population</th>
        </tr>
      </thead>`;

    let STT = 1;

    for (let { Nation, Year, Population } of list) { 
      child_html += `
        <tbody>
          <tr>
            <td>${STT++}</td>
            <td>${Nation}</td>
            <td>${Year}</td>
            <td>${Population}</td>
          </tr>
        </tbody>`;
    }

    child_html += `</table>`;
    html.innerHTML = child_html;
  });
  
