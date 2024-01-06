/* console.log("I am a leader");

greeting = "Hello";
greeting = "Namaste"; variable overriding just like in css
console.log(greeting, "Bruce Lee");

var title = "mern" advice: try to not use var
let duration = "3 months"
const price = "Rs 16000"
 */

/* data types
    primitive data types
    string, integer, boolean
    undefined // data type is not sure alot of it is found in javaScript
    null // empty 


    non-primitive data types/ collections/ reference types
        -array(note: in core array is also an object in js)
        >usually collection of similar data types but it works in js
        note: it isn't the right way
        -object

        let <variable> = [<element1>, <element2>, <element3>] 
*/
/* 
let course1 = "mern";
let course2 = "machine Learning";

let courses = [course1, course2, "graphics design", "qa"];

console.log(courses); */

let myUninitializedArray;
myUninitializedArray = [1, 2, 3, 4, 5];

let myPhilosophy = [];
// console.log(myPhilosophy[0]);
// console.log(myPhilosophy[2]);
// console.log(myPhilosophy.length);

myPhilosophy.push("thought");
myPhilosophy.push("desire");
myPhilosophy.pop();
myPhilosophy.push("faith");

console.log(myPhilosophy);

let myPhilosophyObject = {
  1: "one",
  goal: "leader",
  myP: myPhilosophy,
};

console.log(myPhilosophyObject[0]);

