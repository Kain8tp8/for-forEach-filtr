"use strict";
// import { type } from "os";
let users = [
    { name: 'Javohir', age: 14 },
    { name: "Olimjan", age: 13 },
    {
        name: "juratbek",
        age: 17
    },
    {
        name: "Abrorbek",
        age: 22
    },
    {
        name: 'Temurbek',
        age: 20
    }
];
// for (let i=0;i<5;i++){
//     const element=users[i];
//     console.log(element);
// };
let grownUsers = [];
for (const element of users) {
    if (element.age > 17 || element.age > 20) {
        grownUsers.push(element);
    }
}
console.log(grownUsers);
