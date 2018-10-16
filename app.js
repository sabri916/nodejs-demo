console.log("Starting app...");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const add = require('./add');

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}!! You are ${notes.age}`,
//     function (error) {
//         if(error) {
//             console.log('error writing to file!');
//         }
//     });

var res = notes.addNote("My note");
console.log(res);

var sum = add.addNumbers(5, -2);
console.log(`The sum is: ${sum}`);