// // Question: Create an object named student with the following properties: name (string),
// //  age (number), grades (array of numbers), and school (object with properties: name and location).
// //  Access the age property of the student object and log it to the console.

// let student = {
//   name: "Suman",
//   age: 25,
//   grades: [45, 34, 78],
//   school: {
//     name: "AIMS",
//     location: "Dhangadhi",
//   },
// };

// console.log(student.age);

// Question: Create an object called calculator with methods add, subtract, multiply, and divide.
//  Implement these methods to perform basic arithmetic operations.
//  For example, add(5, 3) should return 8.

// let calculator = {
//   add: (a, b) => a + b,

//   subtract: (a, b) => a - b,
//   multiply: (c, d) => c * d,
//   divide: (e, f) => {
//     if (f == 0) {
//       console.log("Error! Division by zero is not allowed.");
//     } else return e / f;
//   },
// };

// console.log(calculator.divide(9, 2));

// let circle = {
//   radius: 5,

//   area: function () {
//     return Math.PI * this.radius * this.radius;
//   },
// };

// console.log(circle.area());

// Question: Given the object car with properties make, model, and year,
// write a function listCarDetails that accepts
// the car object as an argument and logs all the key-value pairs of the object to the console.

// let car = {
//   make: "Honda",
//   model: "Civic",
//   year: 2016,
// };

// const listCarDetails = (carDetail) => {
//   Object.entries(carDetail).forEach(([key, value]) => {
//     console.log(`${key}:${value}`);
//   });
// };

// listCarDetails(car);

// Create an object named user with properties name (string) and email (string).
//  Add a method called updateEmail to the user object that takes
//   a new email as an argument and updates the email property.

// let user = {
//   name: "Suman",
//   email: "bksuman@gmail.com",

//   updateEmail: function (data) {
//     user.email = data;
//   },
// };

// user.updateEmail("sumanbk@gmail.com");
// console.log(user.email);

// Create a constructor function Person that takes name (string) and age (number) as arguments.
//  Add a method greet to the prototype of Person that logs a greeting message
//  including the name and age of the person.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello my name is ${this.name} and i am ${this.age} years old.`);
// };

// let person1 = new Person("Alice", 32);

// person1.greet();

// Write a function that checks if a given string is a palindrome.

// function checkPalindrome(str) {
//   let clearStr = str.toLowerCase();

//   return clearStr === clearStr.split("").reverse().join("");
// }

// console.log(checkPalindrome("racecar"));

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));

// const array = [23, 4, 5, 22, 1, 53, 2, 4, 9];

// function findGreaterOne(value) {
//   let largest = 0;

//   value.forEach((element) => {
//     if (element > largest) {
//       largest = element;
//     }
//   });

//   console.log(largest);
// }

// findGreaterOne(array);

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }

//     return true;
//   }
// }

// console.log(isPrime(7));

// const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 6, 9, 8, 7];

// function removeDuplicate(number) {
//   return Array.from(new Set(number));
// }

// console.log(removeDuplicate(array));

// function clickHandle() {
//   let clickMeButton = document.getElementById("clickme");
//   clickMeButton.addEventListener("click", () => {
//     clickMeButton.style.backgroundColor = "green";
//   });
// }

// clickHandle();

// You're building a social media-like application where users can post messages.
//  You want to dynamically render these messages on the page as they are created.

// document.getElementById("message").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const messageType = document.getElementById("messageType").value;
//   // console.log(messageType);

//   const message = {
//     message: messageType,
//   };

//   console.log(message.message);

// About Promise
// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const sucess = false;
//     if (sucess) {
//       data = {
//         id: 1,
//         name: "Suman",
//       };

//       resolve(data);
//     } else {
//       reject("Error has occured during operation");
//     }
//   }, 1000);
// });

// promiseOne
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log("Error:" + err);
//   });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const sucess = false;

//     if (sucess) {
//       data = {
//         Name: "Suman",
//         Email: "suma@gmail.com",
//       };

//       resolve(data);
//     } else {
//       reject("Error has occured during operation");
//     }
//   }, 2000);
// });

// async function getUsersData() {
//   try {
//     const response = await promiseTwo;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// Form validation

// const validateUsername = (username) => {
//   const usernameRegex = ;
//   return usernameRegex.test(username);
// };

// const validatePassword = (password) => {
//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%&?])[a-zA-Z\d!@#$%?]{8,}$/;
//   return passwordRegex.test(password);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();

//   let isValid = true;

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (!validateUsername(username)) {
//     alert("Username must be alphanumeric and between 3-20 characters");
//     isValid = false;
//   }
//   if (!validatePassword(password)) {
//     alert("Password must be more than 8 characters");
//     isValid = false;
//   }

//   if (isValid) {
//     alert("You have successfully registered");
//     console.log(username);
//     console.log(password);
//     document.getElementById("myform").reset();
//   }
// };

// const myForm = document.getElementById("myform");
// myForm.addEventListener("submit", handleSubmit);

// for (let i = 0; i <= 60; i++) {
//   let flag;

//   if (i == 0 || i == 1) {
//     flag = false;
//   } else if (i % 1 == 0 && i % 1 == 0) {
//     flag = true;
//   }

//   if (flag) {
//     console.log(i);
//   }
// }

// Given an array and a value, use a for loop to count the number of occurrences of that value in the array.

// let array = [1, 2, 3, 4, 5, 5, 4, 3, 4, 3, 4, 4, 4];

// let number = 4;

// let count = 0;

// for (let i = 0; i <= array.length; i++) {
//   if (number == array[i]) {
//     count++;
//   }
// }
// console.log(`"the number occured ${count} times"`);

// Multiplaication using array

// for (let i = 1; i <= 10; i++) {
//   // console.log(i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// Rotate the array

// let arr = [1, 2, 3, 4, 5];

// function rotateArray(arr, d) {
//   let newArr = [];

//   for (let i = 0; i < d; i++) {
//     newArr.push(arr[i]);
//   }
// }
