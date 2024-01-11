function generateTableHeader(headerTitles) {
    if (!headerTitles || headerTitles.length === 0) {
        return "";
    }
    let html = ``;

    headerTitles.forEach(element => {
        html += `<th>${element}</th>`

    });
    return `<thread><tr>${html}</tr></thread>`;
}

// 1 dòng
function generateTableRow(object) {
    if (!object || object.length === 0) {
        return "";
    }
    return `
        <tr>
            <td>${object.id}</td>        
            <td> ${object.name} </td>
            <td> <img src=" ${object.avatar}" height ="80"> </td>
            <td> ${object.createAt} </td>
        </tr>`;
}

let list = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/01"
    },
    {
        id: 2,
        name: "Nguyễn Văn A",
        avatar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/01"
    }
]
// document.write(generateTableRow(obj));
// full
function generateTable(headers, data) {
    let headerRow = generateTableHeader(headers);

    let html = '';

    data.forEach(element => {
        // tạo 1 tr
        html += generateTableRow(element)
    })

    return `<table>${headerRow}<tbody> ${html} </tbody></table>`;
};
let header = [
    "ID",
    "Họ và tên",
    "Ảnh đại diện",
    "Ngày tạo"
]
document.write(generateTable(header, list))

