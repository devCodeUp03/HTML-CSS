// const express = require('express'); 
// /* () => {
//     return {
//         get,
//         post
//     }
// } */


// const express = () => {
//     return {
//         get,
//         post
//     }
// }

// const app = express();
// {
//     get,
//     post
// }

// app.get('/', (request, response) => {
//     response.send('Hello, World');
// });
// const http = require('http');

// http.createServer((req, res) => {
//     if(req.url == '/' && req.method == 'GET') {
//         res.write('Hello, World');
//         res.end();
//     } else if(req.url == '/api' && req.method == 'GET') {
//         let api = ['html', 'css', 'js'];
//         res.write(JSON.stringify(api));
//         res.end();
//     } else if(req.url =='/api' && req.method == 'POST') {
//         // let api = ['html', 'css', 'js'];
//         let postData = '';
//         req.on('data', chunk => {
//             postData += chunk;
//         });

//         req.on('end', () => {
//             jsonData = JSON.parse(postData);
//             console.log(jsonData.name);
//         });


//         // res.write(postData);
//         res.end();
//     }
// }).listen(8000, () => {
//     console.log('Http server has started in port 8000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post('/api', (req, res) => {
    // const jsonData = JSON.parse(res.body);
    console.log(req.body);
    res.send('POST request made');
});


app.listen(8000, () => {
    console.log("The server at port 8000 has started");
});

