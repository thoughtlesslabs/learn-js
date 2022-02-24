// // Ask for an action
// const todo = [];
// let action = prompt("What would you like to do?");

// while ( action !== 'quit' && action !== 'q') {
// // Check if action exists
//     if ( action === "new" || action === 'n') {
//         const newItem = prompt("What is the task you want to add?");
//         todo.push(newItem)
//         console.log(`Added ${newItem} to your list`);
//     } else if ( action === "delete" || action === 'd') {
//         const delItem = prompt("What is the task or index number you want to delete?");
//         todo.splice( delItem, 1 );
//         console.log(`Removed ${delItem} from your list`);
//     } else if ( action === "list" ) {
//         console.log("Here is your todo list:")
//         for ( listItem in todo ) {
//             console.log(`${listItem}: ${todo[listItem]}`);
//         };
//     } else {
//         console.log("Invalid entry");
//     }
//     action = prompt("What would you like to do?");
// }

// console.log("You have quit");

// function capitalize(word) {
//     let fl = word.slice(0,1).toUpperCase();
//     let rest = word.slice(1, word.length);
//     return fl + rest;
// }

// console.log(capitalize('hippo'));


// function sumArray(array) {
//     let sum = 0;

//     for ( let i in array ) {
//         sum += array[i];
//     }

//     return sum;
// }

// console.log(sumArray([1,2,3]));

// function returnDay(num) {
//     const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
//     if ( num < 1 || num > 7 ) {
//         return null;
//     } else {
//         return days[num-1];
//     }
// }

// console.log(returnDay(1) + returnDay(2) + returnDay(3) + returnDay(8) + returnDay(0));

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++;
//         console.log("EGG");
//     }
// };

// hen.layAnEgg();
// console.log(hen.name);

// ARROW FUNCTIONS

// const add = (x,y) => x*y;


// console.log(add(1,5));

// const lessThanTen = x => x.filter(s => s.length < 10 )

// console.log(lessThanTen(["jkklkamnfkak", "aksjheju",102983,103894832839,"test"]))

// const myFamily = { 
//     first: 'Caleb',
//     last: 'Dietrich',
//     fullName: function () {
//         console.log(`${this.first} ${this.last}`)
//     },
//     shoutName: function () {
//         setTimeout (() => {
//             console.log(this.fullName())}, 3000)
//         // console.log(this)
//     },
// }

// myFamily.shoutName();

// function sum(...test) {
//     console.log(test.reduce((total, num) => total + num))
// }

// sum(6,45,43,4,5,45)

