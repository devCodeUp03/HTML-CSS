// // find element in rotated array
// let arr = [1, 2, 3, 4, 5, 6];
// let key = 1;
// function findPivot(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = start + Math.trunc((end - start) / 2);
//   while (start < end) {
//     if (arr[mid] >= arr[0]) {
//       start = mid + 1;
//     } else {
//       end = mid;
//     }
//     mid = start + Math.trunc((end - start) / 2);
//   }
//   return mid;
// }

// let pivot = findPivot(arr);
// console.log(`pivot is at index: ${pivot}`);

// function bS(arr, key, start, end) {
//   let mid = start + Math.trunc((end - start) / 2);
//   while (start <= end) {
//     if (arr[mid] == key) {
//       return mid;
//     }

//     if (key < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//     mid = start + Math.trunc((end - start) / 2);
//   }
//   return -1;
// }

// let elementIndex;
// if (arr[pivot] <= key && key <= arr[arr.length - 1]) {
//   elementIndex = bS(arr, key, pivot, arr.length - 1);
// } else {
//   console.log("Hello, World!");
//   elementIndex = bS(arr, key, 0, pivot - 1);
// }

// console.log(`The element ${key} is at index: ${elementIndex}`);

// const friends = [
//   {
//     name: "Sahil",
//     age: 20,
//     job: "React developer",
//   },
//   {
//     name: "Anupam",
//     age: 21,
//     job: "Mern Stack developer",
//   },
//   {
//     name: "Binod",
//     age: 19,
//     job: "full stack",
//   },
// ];

// const jobs = friends.map(friend => {
//   return friend.job;
// });
// console.log(jobs);

// const notTeens = friends.filter(friend => {
//   return friend.age > 19;
// }).map(friend => {
//   return friend.name;
// });

// console.log(notTeens);

// const x = document.getElementById('x');
// console.log(x);
// let value = false;

// x.addEventListener('click', function() {
//   value = !value;
//   if(value)
//   x.innerText = 'O';
//   else
//   x.innerText = 'X';

// })
