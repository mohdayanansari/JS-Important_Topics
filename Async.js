// !== Async JS !==
// console.log("Ayan is a good boy");

// setTimeout(() => {
//   console.log("Ayan is in setTimeout");
// }, 4000);

// console.log("Ayan is after setTimeout but running before setTimeout");

// !== PROMISES & ASYNC AWAIT !==
//* require file system module which is a module in node to read files--
// let fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     console.log(err, data);
// });

// * Promisses
// let fs = require("fs/promises");

// let promise =  fs.readFile("file.txt", "utf-8");
// promise.then((data) =>{
//     console.log(data);
// })

// * Async Await-->
//! To run things in sequence
let fs = require("fs/promises");

const readFiveFiles = async (file1, file2, file3, file4, file5) => {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let a3 = fs.readFile(file3, "utf-8");
  let a4 = fs.readFile(file4, "utf-8");
  let a5 = fs.readFile(file5, "utf-8");
  // -----This is the order if u change the order the function will run accordingly (Synchronusly)
  let content1 = await a1;
  console.log(content1);
  let content2 = await a2;
  console.log(content2);
  let content3 = await a3;
  console.log(content3);
  let content4 = await a4;

  
  console.log(content4);
  let content5 = await a5;
  console.log(content5);
};

readFiveFiles("file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt");
