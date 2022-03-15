// import { type } from "os";

// type User ={
//     name: string,
//     age:number,
// }

// let users: User[]=[
//     {
//         name: 'Alisher',
//         age: 14,
//     },
//     {
//         name: 'Olimjan',
//         age:13,
//     },
//     {
//         name: 'Jalol',
//         age:15,
//     },
//     {
//         name: 'Mloll', age:20,
//     }
// ]

// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     console.log(element);
// }

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  
  { name: 'Javohir',age: 14  },
    
  { name: "Olimjan",  age: 13 },
    
  {
    name: "juratbek",
    age: 17
  },
  {
    name: "Abrorbek",
    age: 22
  },
  {
    name:'Temurbek',
    age: 20
  }
];
// for (let i=0;i<5;i++){
//     const element=users[i];
//     console.log(element);
// };
let grownUsers:(User)[]=[]

for(const element of users){
    if(element.age > 17 ||element.age > 20  ){ 
        grownUsers.push (element);
    }
}
 console.log(grownUsers);