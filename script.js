


//Bài 3
// fetch("https://api.publicapis.org/entries")
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//         });

//     })

fetch("https://api.publicapis.org/entries")
.then(function(response){
    response.json().then(function(data){
        console.log(data);
        let array = data.entries;

        let html = document.getElementById('pc05635')

        child_html = `<ul><li><strong>COUNT: </strong> ${data.count}</li>`;
        // html.innerHTML = data.count;

        array.forEach(element => {
            console.log(element);
            child_html += `<li> ${element.Description} </li>`;
        });

        child_html += '</ul>';
        html.innerHTML = child_html;
    });
})


