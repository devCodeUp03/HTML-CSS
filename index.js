/* asynchronous */

// console.log(1);
// console.log(2);
// console.log(3);

// const sum = (input1, input2) => input1 + input2;

// for(let index = 0; index < 5; index++) {
//     console.log("index: ", index);
// }

// let total = sum(10, 20);
// console.log(total);

/* promise */


// let promise1 = new Promise ((resolve, reject) => {
//     resolve({name: "Devashish", age: 20});
//     // reject("Something went wrong");
// });

// promise1.then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log(err);
// });


// try {
//     let a = b + c;
// }catch(err) {
//     console.log(err);
// }


// console.log("Hello World");


// let promise = new Promise((resolve, reject) => {
//     resolve()
// })

// function getUsers(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//         .then((response) => {
//             return response.json();
//         }).then( json => resolve(json))
//         .catch((err) => {
//             console.log(err);
//         })
//     });
// }

// let url = "https://jsonplaceholder.typicode.com/users";

// function onSuccess(data) {
//     console.log(`Data: ${JSON.stringify(data)}`);
//     console.log(data);//see the differnet between string literal and non string literal in the console(this is crazy)
// }

// function onError(err) {
//     console.log(err);
// }

// getUsers(url)
// .then(onSuccess)
// .catch(onError)


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(json => console.log(json));

// let {data} = [
//     {
//         name: "Napolean"
//     }, 
//     {
//         name: "Dale Carnegie"
//     },
//     {
//         name: "Joseph Murphy"
//     }
// ];
// console.log(data);


// let user = {
//     name: "Nopolean",
//     book: "Think and Grow Rich"
// };


// console.log(`My user ${JSON.stringify(user)}`);

// let users = ["Napolean Hill", "Dale Carnegie", "Joseph Murphy"];
// console.log(`My users ${users}`);


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(json => console.log(json));

// async function getData(url) {
//     const data = await fetch(url);
//     const json = await data.json();
//     console.log(json[0].address.city);
// }

// getData('https://jsonplaceholder.typicode.com/users');




