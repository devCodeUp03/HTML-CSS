// // /* console.log("I am a leader");

// // greeting = "Hello";
// // greeting = "Namaste"; variable overriding just like in css
// // console.log(greeting, "Bruce Lee");

// // var title = "mern" advice: try to not use var
// // let duration = "3 months"
// // const price = "Rs 16000"
// //  */

// // /* data types
// //     primitive data types
// //     string, integer, boolean
// //     undefined // data type is not sure alot of it is found in javaScript
// //     null // empty

// //     non-primitive data types/ collections/ reference types
// //         -array(note: in core array is also an object in js)
// //         >usually collection of similar data types but it works in js even if the data types of the elements are not same
// //         note: it isn't the right way
// //         -object

// //         let <variable> = [<element1>, <element2>, <element3>]
// // */
// // /*
// // let course1 = "mern";
// // let course2 = "machine Learning";

// // let courses = [course1, course2, "graphics design", "qa"];

// // console.log(courses); */

// // let myUninitializedArray;
// // myUninitializedArray = [1, 2, 3, 4, 5];

// // let myPhilosophy = [];
// // // console.log(myPhilosophy[0]);
// // // console.log(myPhilosophy[2]);
// // // console.log(myPhilosophy.length);

// // myPhilosophy.push("thought");
// // myPhilosophy.push("desire");
// // myPhilosophy.pop();
// // myPhilosophy.push("faith");

// // // console.log(myPhilosophy);

// // let myPhilosophyObject = {
// //   1: "one",
// //   goal: "leader",
// //   myP: myPhilosophy,
// // };

// // // console.log(myPhilosophyObject[1]);

// // let books = [
// //   "Think and Grow Rich",
// //   "How to win friends and influence people",
// //   "The art of public speaking",
// //   "Atomic habits",
// // ];
// // console.log(books);

// // let evenNumbers = [2, 4, "six", 8];
// // evenNumbers[2] = 6;
// // console.log("even numbers:", evenNumbers);

// // let fruits = ["apple", null, "carrot"];
// // // console.log(fruits);
// // // fruits[1] = "kiwi";
// // // console.log(fruits);
// // fruits[3] = "banana";
// // console.log(fruits[3]);

// // /* object */
// // // let courses = [["mern", "3-4", 3, true], ["qa", "4-5", 2, false]];

// let course1 = {
//   title: "Mern",
//   price: 16000,
//   startTime: "3pm",
//   endTime: "4pm",
//   status: true
// };

// let course2 = {
//   title: "QA",
//   price: 12000,
//   startTime: "4pm",
//   endTime: "5pm",
//   status: false
// }

// // let courses = [course1, course2];
// // console.log(courses);

// let livingRoom = {
//   title: "living room",
//   lengthInFeet: 20,
//   widthInFeet: 10,
//   color: "blue",
//   windowsCount: 1
// };

// let diningRoom = {
//   title: "Dining Room",
//   lengthInFeet: 15,
//   widthInFeet: 12,
//   color: "green",
//   windowsCount: 2
// }

// // let rooms = [livingRoom, diningRoom];
// // console.log(rooms);

// let rooms = [
//   {
//     title: "living room",
//     area: "200 sq feet",
//     color: "yellow",
//   },

//   {
//     title: "kitchen",
//     area: "150 sq feet",
//     color: "green",
//   }
// ];

// // console.log(rooms[1].title)

// rooms[1].title = "dining room";
// console.log(rooms);

// // // console.log(rooms);
// let user1 = {
//   firstName: "Dev", //change Dev to Devashish
//   middleName: null,
//   lastName: "Upreti",
//   address: {
//     district: "Kathmandu",
//     provice: 3, //change 3 into Bagmati
//   },

//   phones: [
//     {
//       phone: 9841, //change into 9810148768
//       activeDate: "2014",
//     },

//     {
//       phone: 9842,
//       activeDate: "2018",
//     },
//   ],
// };

// // console.log(user1.firstName);
// // user1.firstName = "Devashish";
// // console.log(user1.firstName);
// console.log(user1);

// // console.log(user1.address.provice);
// user1.address.provice = "Bagmati";
// // console.log(user1.address.provice);
// // console.log(user1);

// console.log(user1.phones[0].phone);
// user1.phones[0].phone = 9810148768;
// console.log(user1.phones[0].phone);

let todosApiData = {
  data: {
    todos: [
      {
        title: "html",
        status: "pending",
      },
      {
        title: "Css",
        status: "completed",
      },
      {
        title: "js",
        status: "completed", //changed completed into pending
      },
    ],
  },
};

// console.log(todosApiData.data.todos[2].status);
// todosApiData.data.todos[2].status = "pending";
// // console.log(todosApiData);

// // console.log(todosApiData.data.todos[0].title, "is", todosApiData.data.todos[0].status);
// console.log(todosApiData.data.todos[1].title, "is", todosApiData.data.todos[1].status);
// console.log(todosApiData.data.todos[2].title, "is", todosApiData.data.todos[2].status);

// function print(title, status){
//   console.log(title, "is", status);
// }

// print(todosApiData.data.todos[0].title, todosApiData.data.todos[0].status);

// console.log(todos);

// todos.forEach(printTitle);

// function printTitle(todos){
//   console.log(todos.title, "is", todos.status);
// }

// const todos = todosApiData.data.todos;
// todos.forEach((item) => console.log(item.title, "is", item.status));

// /* using for loop */
// console.log(".............using for loop.............");
// for(let i = 0; i<todos.length; i++){
//   console.log(todos[i].title, "is", todos[i].status);
// }

// console.log("...............", "using while loop", "...............");
// let i = 0;
// while(i<todos.length){
//   console.log(todos[i].title, "is", todos[i].status);
//   i++;
// }

// console.log(".............using do while loop.............");
// i = 0;
// do{
//   console.log(todos[i].title, "is", todos[i].status);
//   i++;
// } while(i<todos.length);

// let users = [
//   {
//     name: "ram",
//     address: {
//       permanentAddress: {
//         city: "Kathmandu",
//         wardNo: 1,
//       },

//       temporaryAddress: {
//         city: "Chitwan",
//         wardNo: 4,
//       },
//     },
//   },
//   {
//     name: "sita",
//     address: {
//       permanentAddress: {
//         city: "Pokhara",
//         wardNo: 2,
//       },
//       temporaryAddress: {
//         city: "Dhading",
//         wardNo: 10,
//       }
//     }
//   }
// ];

// let users = [
//   {
//     name: "ram",
//     addresses: [
//       {
//         address: "temporary",
//         district: "Kathmandu",
//         wardNo: 5,
//       },
//       {
//         address: "permanent",
//         district: "Pokhara",
//         wardNo: 2
//       }
//     ],
//   }
// ];
// console.log(users);

let courses = [
  {
    title: "mern",
    duration: "3 months",
    timing: "3pm - 4pm",
    students: [
      {
        name: "ram",
        phones: [9842, 9841],
        educations: [
          {
            level: "SEE",
            gpa: 4.0,
            year: 2078,
          },
          {
            level: "+2",
            gpa: 3.8,
            year: 2080,
          },
        ],
      },
    ],
  },
];

console.log(courses);
