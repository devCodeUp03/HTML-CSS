// // // console.log("js linked");

// // // console.log(__filename);
// // // // console.log(__dirname);
// // // console.log("express js");

//hashing the password using bcrypt
// const bcrypt = require("bcrypt");
// // // const saltRounds = 12;

// function signup(username, email, password) {
//     bcrypt.hash(password, 10, (err, hash) => {
//         // console.log(hash);
//         let user = {
//             username,
//             email,
//             password : hash
//         }
//         console.log(user);
//     });

// }

// function login(username, email, password) {
//     let hash = '$2b$10$6lvvyh38u7zhoyPQTahchutwdSnJyd0N5P1EpLssOzw9bthFl8Zyy';
//     bcrypt.compare(password, hash, (err, result) => {
//         if(result) {
//             console.log("Login successful");
//         } else {
//             console.log("Login Failed!");
//         }
//     });
// }

const auth = require('./auth.js'); //{signup, login}


auth.signup("ram", "ram@gmail.com", "dev123");
auth.login("ram", "ram@gmail.com", "dev123");


// const path = require('path'); //core module
// console.log(path.join(__dirname, "uploads"));


// function print() {
//     console.log("Hello, World!"); 
// }
// /* named exports */
// let user = {
//     username: "Devashish",
//     password: "Upreti",
//     print
// }

// module.exports = user;



// const express = require('express'); //function is being imported () => {}
// const app = express(); //when function in being called the data is being stored in app

// app.get('/api/todos', (request, response) => {
//     console.log("Hello, World");
//     let todos = ["html", "css", "js"];
//     response.send(todos);
// }); //This is an api wow

// app.listen(8000, () => {
//     console.log("server has started");
// });