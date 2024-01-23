// let books = [
//   {
//     title: "Think and Grow Rich",
//     price: 200,
//   },
//   {
//     title: "Atomic Habits",
//     price: 300,
//   },

//   {
//     title: "How to win friends and influence people",
//     price: 250,
//   },
// ];

// // books.forEach((item) => item.price);
// // let bookNames = books.map((book) => book.title);
// // console.log(bookNames);
// // // console.log(booksPrice);

// // let expensiveBooks = books.filter((book) => book.price > 200);
// // console.log(expensiveBooks);

// // books.sort((b1, b2) =>{
// //     return b1.price - b2.price;
// // });

// // console.log(books);

// // let courses = [
// //   {
// //     course: "mern",
// //     courseDuration: "3 months",
// //     courseTime: "3pm - 4pm",
// //     courseStatus: true,
// //   },

// //   {
// //     course: "qa",
// //     courseDuration: "2 months",
// //     courseTime: "4pm - 5pm",
// //     courseStatus: false,
// //   },
// // ];

// // console.log("courses", courses);

// // /* functions */
// // function add(a, b) {
// //   c = 5;
// //   return a + b;
// // }

// // const sum = add(1, 3);
// // console.log("Sum:", sum);
// // console.log(c);

// // let person = {
// //   heightInFeet: 5.8,
// //   weight: "60kg",
// //   sing : ()=>{
// //     console.log("I can sing");
// //   }
// // };

// // console.log(person.heightInFeet);
// // person.sing();




// // let dance = () => console.log("I can dance");
// // dance();


// // for(let i = 0; i<5; i++){
// //   if(i == 3)
// //   continue;
// //   console.log(i);
// //   console.log("Hello, World");
// // }


// // let books = ["Think and Grow Rich", "How to win friends and influence people", "The art of public speaking", "Atomic habits", "Panchatantra"];
// // // console.log(books);
// // // let sliceBooks = books.slice(0, 2);
// // // // console.log(sliceBooks);
// // // console.log(books.splice(1, 0, "The power of subconscious mind", "The power of thoughts"));
// // // console.log(books);


// // console.log(books);
// // books.forEach((item, index, array) => {
// //   console.log("index :" + index, "item :" + item);
// //   console.log(array);
// // });






// /* string and string method */

// let stringOne = "Hi my name is Devashish my Upreti"
// let stringTwo = "             My age is      20 years     ";

// // let char = stringOne.charCodeAt(1);
// // console.log("Char at index:" ,char);

// // console.log(stringOne.concat(" ",stringTwo));
// // console.log(stringOne.endsWith("Upreti"));
// // console.log(stringOne.includes("ash"));
// // console.log(stringOne.replaceAll("my", "Mine"));

// // console.log(stringTwo.length);
// // console.log(stringTwo)
// console.log(stringTwo.trim());
// console.log(stringTwo.length);
// // document.write(stringTwo); 



// function multiply(a, b){
//   return a*b;
// }

// let product = multiply(2, 3);
// console.log("Product: ",product);


// function mul(a, b){
//   console.log("Product: ", a*b);
// }

// mul(3, 4);

/* arrow function */
// let multiply = (a, b) => {console.log("Product: ", a*b);}
// multiply(4, 5);

// let mul = (a, b) => console.log("Product: ", a*b);
// mul(2, 3);

// let print = a => console.log(a, "world!");
// print("Hello");

/* conditionals */

// if(23){
//   console.log("Desire the first steps to all achievments");
//   console.log("Faith to add spiritual power to that desire");
// }
// else {
//   console.log("followed by autosuggestion");
// }

//this points to the object that is currently calling the function
//note: the scope of the function depends on where it is defined
//however the value of this keyword is determined by how a function is
//  called(runtime binding)

//in case of arrow function the value of this keyword is determined by where the function in defined
// console.log(this); 
// var q = "Do you learn something of value from all mistakes ?";

// function showQuestion(){
//   console.log(this.q);
//   console.log(this);
// }

// // questions();


// let question = {
//   q : "Has today added anything of value to your stock of knowledge or state of mind ?",
//   sQuestion: showQuestion,
//   nestedQuestion: {
//     q : "If we are related, we shall meet",
//     sQuestion: showQuestion,
//   }
// }

// question.nestedQuestion.sQuestion();



// function customTypeof(value) {
//   return "STRING";
//   return undefined;
// }

// console.log(customTypeof(true));

// console.log(typeof true);






// let array = [1, 2, 3, 4, 5];
// let key = 5;

// function binarySearch(arr, key){
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = start + Math.floor((end - start) / 2);
//   while(start <= end){
//     if(arr[mid] === key){
//       return mid;
//     }
//     if(arr[mid] > key){
//       end = mid - 1;
//     }else {
//       start = mid + 1;
//     }
//     mid = start + Math.floor((end - start) / 2);
//   }
//   return -1;
// }

// let index = binarySearch(array, key);
// console.log(`Your key ${key} is at index: ${index}`);



// let age = {
//   myAge: 21,
//   printMyAge: function (){
//     console.log(this.myAge);
//     console.log(this);
//     let print = ()=>{
//       console.log(this.myAge);
//       console.log(this);
//     }
//     print();
//   }
// }


// age.printMyAge();

// creating a variable, there are three ways: var, let const
//data types: primitive type: string, number, boolean, null, undefined non-primitive: array, object
//nesting of array and object
//accessing and updating the values of arrays and object namely index, and . operator respectively
//string literal: `` backtick
//function, parameters and arguments, return type


// let student = {
//   name: "Devashish",
//   id: 35,
//   emails: [
//     "devashish.upreti10@gmail.com",
//     "devashup68@gmail.com"
//   ]
// }

// console.log(student.emails[0]);

//arrays and their operations

function printArray(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let books = ["Atomic Habits", "Think and grow rich", "The art of Public speaking", "How to win friends and influence people"];
// console.log(books);

// books.push("Status game");
// books.push("The expection effect");
// books.pop();
// books.unshift("The expection effect");
// books.shift();
// let slice = books.slice(0, 2); //only remove two elements starting from 0
// console.log(slice);

// let splice = books.splice(0, 2, "My", "Hello", "world",); //remove two elements starting from index 0 and returns to array made from the removed elements
// books.splice(2, 0, "thought", "is", "supreme") //remove no element only add the mentioned element starting from the starting mentioned index
// console.log(splice);
// console.log(books);

// printArray(boo;ks);

books.forEach(function(element) {
  console.log(element);
});

printArray(books);





