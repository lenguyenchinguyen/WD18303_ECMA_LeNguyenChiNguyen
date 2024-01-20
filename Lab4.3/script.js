var fs = require('fs');
var axios = require('axios');

fs.readFile(
    './data.json',
    { encoding: 'utf8' },
    function (err, data) {
        console.log('Dât loaded from disk', data);

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (res) {
                console.log('Data downleaded from url', res.data);
            });
    }
);

// code dc viết lại 

async function loadData() {
    try {
        const diskData = await fs.readFile('./data.json', 'utf8');
        console.log('Dât loaded from disk', diskData);

        const urlData = await axios.get('https://jsonplaceholder.typicode.com/todo/1');
        console.log('Data downleaded from url', urlData.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

loadData();