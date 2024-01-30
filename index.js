// // // /* console.log("I am a leader");

// // // greeting = "Hello";
// // // greeting = "Namaste"; variable overriding just like in css
// // // console.log(greeting, "Bruce Lee");

// // // var title = "mern" advice: try to not use var
// // // let duration = "3 months"
// // // const price = "Rs 16000"
// // //  */

// // // /* data types
// // //     primitive data types
// // //     string, integer, boolean
// // //     undefined // data type is not sure alot of it is found in javaScript
// // //     null // empty

// // //     non-primitive data types/ collections/ reference types
// // //         -array(note: in core array is also an object in js)
// // //         >usually collection of similar data types but it works in js even if the data types of the elements are not same
// // //         note: it isn't the right way
// // //         -object

// // //         let <variable> = [<element1>, <element2>, <element3>]
// // // */
// // // /*
// // // let course1 = "mern";
// // // let course2 = "machine Learning";

// // // let courses = [course1, course2, "graphics design", "qa"];

// // // console.log(courses); */

// // // let myUninitializedArray;
// // // myUninitializedArray = [1, 2, 3, 4, 5];

// // // let myPhilosophy = [];
// // // // console.log(myPhilosophy[0]);
// // // // console.log(myPhilosophy[2]);
// // // // console.log(myPhilosophy.length);

// // // myPhilosophy.push("thought");
// // // myPhilosophy.push("desire");
// // // myPhilosophy.pop();
// // // myPhilosophy.push("faith");

// // // // console.log(myPhilosophy);

// // // let myPhilosophyObject ={
// // //   1: "one",
// // //   goal: "leader",
// // //   myP: myPhilosophy,
// // // };

// // // // console.log(myPhilosophyObject[1]);

// // // let books = [
// // //   "Think and Grow Rich",
// // //   "How to win friends and influence people",
// // //   "The art of public speaking",
// // //   "Atomic habits",
// // // ];
// // // console.log(books);

// // // let evenNumbers = [2, 4, "six", 8];
// // // evenNumbers[2] = 6;
// // // console.log("even numbers:", evenNumbers);

// // // let fruits = ["apple", null, "carrot"];
// // // // console.log(fruits);
// // // // fruits[1] = "kiwi";
// // // // console.log(fruits);
// // // fruits[3] = "banana";
// // // console.log(fruits[3]);

// // // /* object */
// // // // let courses = [["mern", "3-4", 3, true], ["qa", "4-5", 2, false]];

// // let course1 = {
// //   title: "Mern",
// //   price: 16000,
// //   startTime: "3pm",
// //   endTime: "4pm",
// //   status: true
// // };

// // let course2 = {
// //   title: "QA",
// //   price: 12000,
// //   startTime: "4pm",
// //   endTime: "5pm",
// //   status: false
// // }

// // // let courses = [course1, course2];
// // // console.log(courses);

// // let livingRoom = {
// //   title: "living room",
// //   lengthInFeet: 20,
// //   widthInFeet: 10,
// //   color: "blue",
// //   windowsCount: 1
// // };

// // let diningRoom = {
// //   title: "Dining Room",
// //   lengthInFeet: 15,
// //   widthInFeet: 12,
// //   color: "green",
// //   windowsCount: 2
// // }

// // // let rooms = [livingRoom, diningRoom];
// // // console.log(rooms);

// // let rooms = [
// //   {
// //     title: "living room",
// //     area: "200 sq feet",
// //     color: "yellow",
// //   },

// //   {
// //     title: "kitchen",
// //     area: "150 sq feet",
// //     color: "green",
// //   }
// // ];

// // // console.log(rooms[1].title)

// // rooms[1].title = "dining room";
// // console.log(rooms);

// // // // console.log(rooms);
// // let user1 = {
// //   firstName: "Dev", //change Dev to Devashish
// //   middleName: null,
// //   lastName: "Upreti",
// //   address: {
// //     district: "Kathmandu",
// //     provice: 3, //change 3 into Bagmati
// //   },

// //   phones: [
// //     {
// //       phone: 9841, //change into 9810148768
// //       activeDate: "2014",
// //     },

// //     {
// //       phone: 9842,
// //       activeDate: "2018",
// //     },
// //   ],
// // };

// // // console.log(user1.firstName);
// // // user1.firstName = "Devashish";
// // // console.log(user1.firstName);
// // console.log(user1);

// // // console.log(user1.address.provice);
// // user1.address.provice = "Bagmati";
// // // console.log(user1.address.provice);
// // // console.log(user1);

// // console.log(user1.phones[0].phone);
// // user1.phones[0].phone = 9810148768;
// // console.log(user1.phones[0].phone);

// // console.log(todosApiData.data.todos[2].status);
// // todosApiData.data.todos[2].status = "pending";
// // // console.log(todosApiData);

// // // console.log(todosApiData.data.todos[0].title, "is", todosApiData.data.todos[0].status);
// // console.log(todosApiData.data.todos[1].title, "is", todosApiData.data.todos[1].status);
// // console.log(todosApiData.data.todos[2].title, "is", todosApiData.data.todos[2].status);

// // function print(title, status){
// //   console.log(title, "is", status);
// // }

// // print(todosApiData.data.todos[0].title, todosApiData.data.todos[0].status);

// // console.log(todos);

// // todos.forEach(printTitle);

// // function printTitle(todos){
// //   console.log(todos.title, "is", todos.status);
// // }

// // const todos = todosApiData.data.todos;
// // todos.forEach((item) => console.log(item.title, "is", item.status));

// // /* using for loop */
// // console.log(".............using for loop.............");
// // for(let i = 0; i<todos.length; i++){
// //   console.log(todos[i].title, "is", todos[i].status);
// // }

// // console.log("...............", "using while loop", "...............");
// // let i = 0;
// // while(i<todos.length){
// //   console.log(todos[i].title, "is", todos[i].status);
// //   i++;
// // }

// // console.log(".............using do while loop.............");
// // i = 0;
// // do{
// //   console.log(todos[i].title, "is", todos[i].status);
// //   i++;
// // } while(i<todos.length);

// // let users = [
// //   {
// //     name: "ram",
// //     address: {
// //       permanentAddress: {
// //         city: "Kathmandu",
// //         wardNo: 1,
// //       },

// //       temporaryAddress: {
// //         city: "Chitwan",
// //         wardNo: 4,
// //       },
// //     },
// //   },
// //   {
// //     name: "sita",
// //     address: {
// //       permanentAddress: {
// //         city: "Pokhara",
// //         wardNo: 2,
// //       },
// //       temporaryAddress: {
// //         city: "Dhading",
// //         wardNo: 10,
// //       }
// //     }
// //   }
// // ];

// // let users = [
// //   {
// //     name: "ram",
// //     addresses: [
// //       {
// //         address: "temporary",
// //         district: "Kathmandu",
// //         wardNo: 5,
// //       },
// //       {
// //         address: "permanent",
// //         district: "Pokhara",
// //         wardNo: 2
// //       }
// //     ],
// //   }
// // ];
// // // console.log(users);

// // let courses = [
// //   {
// //     title: "mern",
// //     duration: "3 months",
// //     timing: "3pm - 4pm",
// //     students: [
// //       {
// //         name: "ram",
// //         phones: [9842, 9841],
// //         educations: [
// //           {
// //             level: "SEE",
// //             gpa: 4.0,
// //             year: 2078,
// //           },
// //           {
// //             level: "+2",
// //             gpa: 3.8,
// //             year: 2080,
// //           },
// //         ],
// //       },
// //     ],
// //   },
// //   {
// //     title: "web design",
// //     duration: "2 months",
// //     timing: "2pm - 3pm",
// //     students: [
// //       {
// //         name: "sita",
// //         phones: [5145, 6233],
// //         educations: [
// //           {
// //             level: "SEE",
// //             gpa: 3.8,
// //             year: 2074,
// //           },
// //           {
// //             level: "+2",
// //             gpa: 4.0,
// //             year: 2076,
// //           },
// //           {
// //             level: "Bachelors",
// //             gpa: 4.0,
// //             year: 2080
// //           }
// //         ],
// //       },
// //     ],
// //   },
// // ];

// // // courses[0].students[0].name = "Ram";
// // // console.log(courses[0].students[0].name);
// // // courses[0].students[0].educations[1].gpa = 4.0;
// // // console.log(courses[0].students[0].educations[1].gpa);

// // console.log(courses);

// // let firstName = "hari";
// // let lastName ="Shyam";
// // let fullName = `${firstName} ${lastName}`;
// // console.log(fullName);

// // console.log(`${todos[0].title} is ${todos[0].status}`);

// // console.log(`1 + 2 = ${1+2}`);
// // console.log(`2 + 2 = ${2+2}`);
// // console.log(`3 + 10 = ${3+10}`);
// // console.log(`5 + 4 = ${5+4}`);

// /* function */
// //block scope variables //parameter

// /**
//  * this function calculates sum of two number
//  * @param {number} input1
//  * @param {number} input2  *
// */
// function add(input1, input2){ //let input1 = 1, input2 = 2;
//   console.log(`${input1} + ${input2} = ${input1 + input2}`);
// }

// // add(1, 2);
// // add(2,2);
// // add(3,5);

// // console.log("Hello", "World!");

// // function calcDiff(input1, input2){
// //   console.log(`The difference between ${input1} and ${input2} is ${input1-input2}`);
// // }

// // calcDiff(5, 3);

// // let todosApiData = {
// //   data: {
// //     todos: [
// //       {
// //         title: "html",
// //         status: "pending",
// //       },
// //       {
// //         title: "Css",
// //         status: "completed",
// //       },
// //       {
// //         title: "js",
// //         status: "completed", //changed completed into pending
// //       },
// //     ],
// //   },
// // };

// // let titles = todosApiData.data.todos;
// // let statuses = todosApiData.data.todos;

// // // function printTodos(index){
// //   //   console.log(`${titles[index].title} is ${statuses[index].status}`);
// //   //   // console.log(index)
// //   // }

// // printTodos(0);
// // printTodos(1);
// // printTodos(2);

// //   let printTodos = (index) => {
// //     console.log(`${titles[index].title} is ${statuses[index].status}`);
// //   }

// // printTodos(titles[0].title, titles[0].status);
// // printTodos(titles[1].title, titles[1].status);
// // printTodos(titles[2].title, titles[2].status);

// // let heading = document.getElementById('heading');
// // let isRed = false;
// // heading.addEventListener('click', function (){
// //   isRed = !isRed;
// //   this.style.color = isRed ? "red" : "black";
// // })
// // console.log(heading);
// // let color = "red";

// // console.log(this);

// let todos = [
//   { createdAt: "2080-09-09", name: "html", status: "completed" },
//   { createdAt: "2080-09-08", name: "css", status: "completed" },
//   { createdAt: "2080-09-07", name: "js", status: "pending" },
//   { createdAt: "2080-09-07", name: "react", status: "pending" },// TODO: change this status to pending
// ];

// // function printTodos(index){
// //   let name = todos[index].name;
// //   let status = todos[index].status;
// //   console.log(`${name} is ${status}`);
// // }

// // printTodos(0);
// // printTodos(1);
// // printTodos(2);
// // printTodos(3);

// function printTodos(todo){
//   console.log(`${todo.name} is created at ${todo.createdAt} ${todo.status}`);
// }

// printTodos(todos[0]); // passing a complete object
// printTodos(todos[1]);
// printTodos(todos[2]);

// let blogs = [
//     {
//       title: "Exploring Tomorrow",
//       created_at: "2024-01-19T13:01:03.486205+05:45",
//     },
//     {
//       title: "Career in Web ",
//       created_at: "2024-01-18T15:02:21.353832+05:45",
//     },
//     {
//       title: "Degrees Dying",
//       created_at: "2024-01-17T14:06:24.457394+05:45",
//     },
//     {
//       title: "Career in Digital Marketing",
//       created_at: "2024-01-17T11:02:40.936608+05:45",
//     },
//   ];

//   "Exploring Tomorrow :2024-01-19 "
//   "Career in Web : 2024-01-18 "
//   "..."
//   "..."

//   function something() {
//     console.log("Do something");
//   }

//   function formatDate(date) {
//     return date.substring(0, 10);
//   }

//   let user= {
//       name:"ram",
//       age:12,
//       work: something,
//       format:  formatDate
//   }

//   user.work();

//   console.log(blogs[0].title);
//   console.log(formatDate(blogs[0].created_at));

//   function printTitle(index) {
//     let blog = blogs[index];
//     let {title, created_at} = blog;
//     console.log(`${title}: ${user.format(created_at)}`);
//   }

//   printTitle(0);
//   printTitle(1);
//   printTitle(2);
//   printTitle(3);

//   let title = "mern";
//   let ourCourse = {
//     title, //instead of title: title,
//     duration: 3
//   }

// so can use the above concept like so
// let count = 5;
// //console.log({count: count});
// console.log({count});

// let raining = false;
// let probability = true;

// if (raining) {
//   console.log("Take an umbrella or else you will get wet");
// } else {
//   if (probability) {
//     console.log("You might have to.");
//   } else {
//     console.log("Not needed");
//   }
// }

// let student = {
//   name: "ram",
//   paidStatus: false,
//   hasScholarship: true,
// };

// let { name, paidStatus, hasScholarship } = student;

// if(hasScholarship) {
//     console.log(`${name} can give exam`);
// } else {
//     if(paidStatus) {
//         console.log(`${name} can give exam`);
//     } else {
//         console.log(`Sorry ${name}. You cannot give exam`);
//     }
// }

// the above code can be replaced with if else-if
// if (hasScholarship) {
//   console.log(`${name} can give exam`);
// } else if (paidStatus) {
//   console.log(`${name} can give exam`);
// } else {
//   console.log(`Sorry ${name}. You can't give exam`);
// }

// function getMonth(month) {
//     if(month == 1) {
//         return "Jan";
//     }else if(month == 2) {
//         return "Feb";
//     }else if(month == 3) {
//         return "Mar";
//     }else if(month == 4) {
//         return "April";
//     }else if(month == 5) {
//         return "May";
//     }else if(month == 6) {
//         return "June";
//     }else if(month == 7) {
//         return "July";
//     }else if(month == 8) {
//         return "August";
//     }else if(month == 9) {
//         return "Sep";
//     }else if(month == 10) {
//         return "Oct";
//     }else if(month == 11) {
//         return "Nov";
//     }else if(month == 12) {
//         return "Dec";
//     } else {
//         if(typeof(month) == 'number') {
//             return "Invalid number, type number between [1-12]";
//         } else {
//             return "Invalid type: please type number";
//         }
//     }
// }
// console.log(getMonth(8));
// console.log(getMonth());

// function getMonth(month) {
//   switch (month) {
//     case 1:
//       return "Jan";

//     case 2:
//       return "Feb";

//     case 3:
//       return "Mar";

//     case 4:
//       return "April";

//     case 5:
//       return "May";

//     case 6:
//       return "June";

//     case 7:
//       return "July";

//     case 8:
//       return "August";

//     case 9:
//       return "Sep";

//     case 10:
//       return "Oct";

//     case 11:
//       return "Nov";

//     case 12:
//       return "Dec";
//     default:
//       if (typeof month == "number") {
//         return "Type number between 1 - 12";
//       } else {
//         return "Enter valid type: number";
//       }
//   }
// }
//The above program is correct however it can be optimized in the sense that we can check the type of the input first and only then check for the valid numbers which will reduce time complexity

// function getMonth(month) {
//   if (typeof month == "number") {
//     if (month >= 1 && month <= 12) {
//       switch (month) {
//         case 1:
//           return "Jan";

//         case 2:
//           return "Feb";

//         case 3:
//           return "Mar";

//         case 4:
//           return "April";

//         case 5:
//           return "May";

//         case 6:
//           return "June";

//         case 7:
//           return "July";

//         case 8:
//           return "August";

//         case 9:
//           return "Sep";

//         case 10:
//           return "Oct";

//         case 11:
//           return "Nov";

//         case 12:
//           return "Dec";
//       }
//     } else {
//       return "Enter a number from 1 - 12";
//     }
//   } else {
//     return "Enter valid type: number";
//   }
// }

// console.log(getMonth(5));

// function getMonth(month) {
//   let ouput = null;
//   if (typeof month == "number") {
//     if (month >= 1 && month <= 12) {
//       switch (month) {
//         case 1:
//           output = "Jan";
//           break;

//         case 2:
//           ouput = "Feb";
//           break;

//         case 3:
//           ouput = "Mar";
//           break;

//         case 4:
//           ouput = "April";
//           break;

//         case 5:
//           ouput = "May";
//           break;

//         case 6:
//           ouput = "June";
//           break;

//         case 7:
//           ouput = "July";
//           break;

//         case 8:
//           ouput = "August";
//           break;

//         case 9:
//           ouput = "Sep";
//           break;

//         case 10:
//           ouput = "Oct";
//           break;

//         case 11:
//           ouput = "Nov";
//           break;

//         case 12:
//           ouput = "Dec";
//           break;
//       }
//     } else {
//       return "Enter a number from 1 - 12";
//     }
//   } else {
//     return "Enter valid type: number";
//   }
//   return ouput;
// }

// let todos = [
//   {
//     title: "html",
//     status: true
//   },
//   {
//     title: "js",
//     status: false
//   },
//   {
//     title: "react",
//     status: false
//   }
// ];

//ouput: html is completed
//js is pending
//react is pending

//concepts i will be using here function, object destructuring, if-else or ternary operator

// function print(course) {
//   let {title, status} = course;
//   // if(status) {
//   //   console.log(`${title} is completed`);
//   // } else {
//   //   console.log(`${title} is pending`);
//   // }

//   status ? console.log(`${title} is completed`) : console.log(`${title} is pending`);
// }

// print(todos[0]);
// for(let index = 0; index < todos.length; index++) {
//   print(todos[index]);
// }

// for(let number = -5; number < 6; number++) {
//   console.log(number);
// }
/**
 * 
//  * @param {*} multiplicand 
//  * @param {*} from 
//  * @param {*} to 
//  */
// function findMultiplication(multiplicand, from, to) {
//   for(let multiplier = from; multiplier <= to; multiplier++) {
//     console.log(`${multiplicand} * ${multiplier} = ${multiplicand * multiplier}`);
//   }
// }

// findMultiplication(5, 6, 10);

// let user1 = {
//   username: "ram",
//   password: "123456"
// };

// let user2 = {
//   username: "hari",
//   password: "987654"
// };

// function login(user, username, password) {
//   if(user.username == username && user.password == password){
//     console.log(`${username} can login`);
//   } else {
//     console.log(`${username} cannot login`);
//   }
// }

// login(user2, "harikrishna", "987654");

// let users = [
//   {
//     username: "ram",
//     password: "password",
//   },
//   {
//     username: "hari",
//     password: "12345",
//   },
//   {
//     username: "shyam",
//     password: "54321",
//   },
// ];

// function signIn(username, password) {
//   let match = 0;
//   for (let user = 0; user < users.length; user++) {
//     if (users[user].username == username && users[user].password == password) {
//       match++;
//     }
//   }

//   if (match == 1) {
//     console.log("Login Successful");
//   } else {
//     console.log("Invalid Credentials");
//   }
// }

// signIn("ram", "password"); // "login successful" in case of both username and password being correct else "invalid credentials"
// //concept required to be used is loop
// if (hasScholarship) {
//   console.log(`${name} can give exam`);
// } else {
//   if (paidStatus) {
//     console.log(`${name} can give exam`);
//   } else {
//     console.log(`${name} cannot give exam`);
//   }
// }

// let student = {
//   name: "ram",
//   paidStatus: false,
//   hasScholarship: false,
//   fulfillAttendance: false
// };

// let { name, paidStatus, hasScholarship, fulfillAttendance } = student;

// if((paidStatus || hasScholarship) && fulfillAttendance) {
//   console.log("Can give exam");
// } else {
//   console.log("Cannot give exam");
// }

/* arrow function */
// const sum = (...rest) => {
//   let sum = 0;
//   for (let i = 0; i < rest.length; i++) {
//     sum += rest[i];
//   }
//   return sum;
// };

// console.log(sum(2, 3, 5, 6));

// console.log(course)
// let course = "mern";

// function doubleTheArray(arr) {
//   let doubles = [];
//   for(let index = 0; index < arr.length; index++) {
//     let double = arr[index] * 2;
//     doubles.push(double);
//   }
//   return doubles;
// }

// let newArray = doubleTheArray([1, 2, 3]);
// console.log(newArray);

// const doubleTheArray = arr => {
//   let doubles = [];
//   for(let index = 0; index < arr.length; index++) {
//     let double = arr[index] * 2;
//     doubles.push(double);
//   }
//   return doubles;
// }

// let newArray = doubleTheArray([1, 2, 3, 4]);
// console.log(newArray);

// const doubleArray = arr => {
//   for(let index = 0; index < arr.length; index++) {
//    arr[index] *= 2;
//   }
//   return arr;
// }

// let array = doubleArray([1, 2, 3, 4]);
// console.log(array);

//task: get separate arrays of status "completed" and "pending" from the given
// let todos = [
//   {
//     title: "variable",
//     status: "completed",
//     createAt: "2024-01-03",
//   },
//   {
//     title: "array",
//     status: "completed",
//     createAt: "2024-01-05",
//   },
//   {
//     title: "object",
//     status: "completed",
//     createAt: "2024-01-07",
//   },
//   {
//     title: "loop",
//     status: "pending",
//     createAt: "2024-01-09",
//   },
//   {
//     title: "function",
//     status: "pending",
//     createAt: "2024-01-10",
//   },
// ];

// let completedTodos = [], pendingTodos = [];

// for(let index = 0; index < todos.length; index++) {
//   let status = todos[index].status;
//   if(status == "completed") {
//     completedTodos.push(todos[index]);
//   } else { //if it is not "completed" then obviously it is "pending"
//       pendingTodos.push(todos[index]);
//   }
// }

// // console.log(index);
// console.log(completedTodos); // []
// console.log(pendingTodos);

//Task

// const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

// let dummyUsers = [];
// // function createDummyUsers(users) {
// //   for (let index = 0; index < users.length; index++) {
// //     let user = {
// //       name: users[index],
// //       email: `${users[index].toLowerCase()}@gmail.com`,
// //       password: `${users[index].toLowerCase()}${index}`,
// //     };
// //     dummyUsers.push(user); //can directly make an object inside the push
// //   }
// // }
// // createDummyUsers(nepaliNames);
// // for output look at the console

// dummyUsers = nepaliNames.map((user, index) => (
//   {
//   name: user,
//   email: `${user.toLowerCase()}@gmail.com`,
//   password: `${user.toLowerCase()}${index}`
//   }
// ));
// console.log(dummyUsers);

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

// for (let index = 0; index < nepaliNames.length; index++) {
//   console.log(nepaliNames[index]);
// }

// const popUp = () => {
//   console.log("Pop Up");
// };

// setTimeout(popUp, 2000); //here popUp is a call back function
// //or
// setTimeout(() => {
//   console.log("Pop Up");
// }, 3000); //call me back after 3 second is passed


// setTimeout(function () {
//   console.log("Pop Up");
// }, 4000);

// const printName = (name) => { //each element of the array is automatically passed
//   console.log(name);
// }

// // nepaliNames.forEach(printName);

// nepaliNames.forEach((el, i) => {
//   console.log(el, i);
// });

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach((el) => {
//   sum+=el;
// })

// console.log(sum);


// let todos = [
//   {
//     title: "html",
//     status: true
//   }, 
//   {
//     title: "js",
//     status: false
//   }, 
//   {
//     title: "react",
//     status: false
//   }
// ]

//output 
//html is completed
//js is pending
//react is pending

// todos.forEach((el) => {
//   // if(el.status) {
//   //   console.log(`${el.title} is completed`);
//   // } else {
//   //   console.log(`${el.title} is pending`);
//   // }
//   let print = el.status ? `${el.title} is completed`: `${el.title} is pending`;
//   console.log(print);

// });


/*
  array functions
    -forEach
    -map
    -filter
    -find
*/


// let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map((el) => el%2==0);//notice the difference between map and filter
// console.log(doubles);

// let evenNumbers = numbers.filter((el) => el%2 == 0);
// console.log(evenNumbers);

