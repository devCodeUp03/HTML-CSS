// /* console.log("I am a leader");

// greeting = "Hello";
// greeting = "Namaste"; variable overriding just like in css
// console.log(greeting, "Bruce Lee");

// var title = "mern" advice: try to not use var
// let duration = "3 months"
// const price = "Rs 16000"
//  */

// /* data types
//     primitive data types
//     string, integer, boolean
//     undefined // data type is not sure alot of it is found in javaScript
//     null // empty 


//     non-primitive data types/ collections/ reference types
//         -array(note: in core array is also an object in js)
//         >usually collection of similar data types but it works in js even if the data types of the elements are not same
//         note: it isn't the right way
//         -object

//         let <variable> = [<element1>, <element2>, <element3>] 
// */
// /* 
// let course1 = "mern";
// let course2 = "machine Learning";

// let courses = [course1, course2, "graphics design", "qa"];

// console.log(courses); */

// let myUninitializedArray;
// myUninitializedArray = [1, 2, 3, 4, 5];

// let myPhilosophy = [];
// // console.log(myPhilosophy[0]);
// // console.log(myPhilosophy[2]);
// // console.log(myPhilosophy.length);

// myPhilosophy.push("thought");
// myPhilosophy.push("desire");
// myPhilosophy.pop();
// myPhilosophy.push("faith");

// // console.log(myPhilosophy);

// let myPhilosophyObject = {
//   1: "one",
//   goal: "leader",
//   myP: myPhilosophy,
// };

// // console.log(myPhilosophyObject[1]);

// let books = [
//   "Think and Grow Rich",
//   "How to win friends and influence people",
//   "The art of public speaking",
//   "Atomic habits",
// ];
// console.log(books);

// let evenNumbers = [2, 4, "six", 8];
// evenNumbers[2] = 6;
// console.log("even numbers:", evenNumbers);

// let fruits = ["apple", null, "carrot"];
// // console.log(fruits);
// // fruits[1] = "kiwi";
// // console.log(fruits);
// fruits[3] = "banana";
// console.log(fruits[3]);

// /* object */
// // let courses = [["mern", "3-4", 3, true], ["qa", "4-5", 2, false]];

let course1 = {
  title: "Mern",
  price: 16000,
  startTime: "3pm",
  endTime: "4pm",
  status: true
};


let course2 = {
  title: "QA",
  price: 12000,
  startTime: "4pm", 
  endTime: "5pm", 
  status: false
}


// let courses = [course1, course2];
// console.log(courses);

let livingRoom = {
  title: "living room",
  lengthInFeet: 20,
  widthInFeet: 10,
  color: "blue", 
  windowsCount: 1
};

let diningRoom = {
  title: "Dining Room",
  lengthInFeet: 15,
  widthInFeet: 12,
  color: "green",
  windowsCount: 2
}

// let rooms = [livingRoom, diningRoom];
// console.log(rooms);

let rooms = [
  {
    title: "living room",
    area: "200 sq feet",
    color: "yellow",
  },

  {
    title: "kitchen",
    area: "150 sq feet",
    color: "green",
  }
];

// console.log(rooms[1].title)


rooms[1].title = "dining room";
console.log(rooms);


// console.log(rooms);