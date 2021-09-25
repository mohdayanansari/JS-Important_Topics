// !== Spread Oprator !==

// * with Array's-->
var arr = [1, 2, 3, 4, 5];

var secondArr = [6, 7, 8, 9, 10];

var sumArr = [0, ...arr, ...secondArr];

var nextArr = [24, 54, ...sumArr, 59, 75, 98];
// console.log(nextArr);
// * with Array's-->

// * with Object's-->
let info = {
  name: "Ayan",
  class: "10",
  favSub: "Computer",
};
// todo:::So this is how u can change things in objects using spread oprator
let updateInfo = { ...info, name: "Arun Sharma" };

console.log(updateInfo);
// * with Object's-->
