// let courses = ["react", "express", "mongodb"];
// outputList+=courses[0];
// outputList+=courses[1];
// outputList+=courses[2];

// for(let index = 0; index < courses.length; index++) {
//     outputList += ` ${courses[index]}`;
// }

// // // console.log(todos);

// // // // let outputList = ``;

// // // //code here

// // // for(let index = 0; index < todos.length; index++) {
// // //     outputList = outputList + `<li>${todos[index]}</li>`;
// // // }

// // // todos.forEach(el => {
// // //     document.getElementById("todos-list").innerHTML = `<li>${el}</li>`;
// // // });

// // // let numbers = [1, 2, 3, 4, 5, 6];
// // // let totalSum = 0;
// // // for(let index = 0; index < numbers.length; index++) {
// // //     totalSum = totalSum + numbers[index];
// // // }

// // // //code
// // // console.log(totalSum);

// // // let outputList = ``;
// // // let courses = ["react", "express", "mongodb"];
// // // outputList+=courses[0];
// // // outputList+=courses[1];
// // // outputList+=courses[2];

// // // for(let index = 0; index < courses.length; index++) {
// // //     outputList += ` ${courses[index]}`;
// // // }

// // // courses.forEach(el => {
// // //     outputList += ` ${el}`;
// // // })

// // // console.log(outputList);

// let ul = document.querySelector('#todos-list');
// console.log(ul);

// let todos = [];
// function addTodo(event) {
//     event.preventDefault();
//     const input = document.getElementById("input-title").value;
//     todos.push(input);

//     let outputList = ``;
//     todos.forEach((input, index)=> {
//         outputList += `<li>${input}<button onclick ="deleteTodo(${index})>delete</button></li>`;
//     });

//     document.getElementById("todos-list").innerHTML = outputList;
// }

// const addBtn = document.getElementById("input-btn");
// addBtn.addEventListener("click", (event) => {
//   event.preventDefault(); //prevents the page from reloading when add button is clicked which is the default behavior
//   const input = document.getElementById("input-title").value;
//   todos.push(input);
//   changeList();
// });

// // let todos = [];
// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// const ul = document.getElementById("todos-list");

// function addTodo(event) {
//   event.preventDefault();
//   const input = document.getElementById("input-title").value;
//   document.getElementById("input-title").value = "";
//   todos.push(input);
//   saveTodos();
//   changeList();
// }

// function changeList() {
//   let outputList = ``;
//   todos.forEach((input, index) => {
//     outputList += `<li>${input} <button onclick="deleteTodo(${index})">delete</button></li>`;
//   });
//   ul.innerHTML = outputList;
// }

// function deleteTodo(index) {
//   //   todos.splice(index, 1);
//   // todos = todos.filter((el, idx) => {
//   //    if(idx == index) {
//   //     return false;
//   //    } else {
//   //     return true;
//   //    }
//   // });

//   todos = todos.filter((el, idx) => idx != index);
//   saveTodos();

//   changeList();
// }

// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// changeList();









