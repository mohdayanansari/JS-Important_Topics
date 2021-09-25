// !== JavaScript Destructuring !==
// let's create a object
let info = {
  name: "Ayan",
  gender: "male",
  age: "21",
  hobby: "Singing",
};
// todo:: we have to assign each value from info object as a variable. Here's what we can do without using destructuring-->

// let nameNew = info.name;
// let genderNew = info.gender;
// let ageNew = info.age;
// let hobbyNew = info.hobby;

// console.log(nameNew, genderNew, ageNew, hobbyNew);

//  todo:: By using destructuring-->

let { nameNew, genderNew, ageNew, hobbyNew } = info;

console.log(nameNew, genderNew, ageNew, hobbyNew);
