// // // console.log("js linked");

// // // console.log(__filename);
// // // // console.log(__dirname);
// // // console.log("express js");
// // const bcrypt = require("bcrypt");
// // const saltRounds = 12;

// // function signup(username, email, password) {
// //     bcrypt.hash(password, saltRounds, function(err, hash) {
// //         // Store hash in your password DB.
// //         password = hash;

// //     })
// //     .then((password) => {

// //         console.log(password);
// //         let data = {
// //             username: username,
// //             email,
// //             password,
// //           };
// //           console.log(data);
// //     });

// // //   console.log(password);

// // }

// // signup("ram", "ram@gmail.com", "dev123");
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



const express = require('express'); //function is being imported
const app = express(); //when function in being called the data is being stored in app

app.get('/api/todos', (request, response) => {
    console.log("Hello, World");
    let todos = ["html", "css", "js"];
    response.send(todos);
}); //This is an api wow

app.listen(8000, () => {
    console.log("server has started");
});