// let playing = true;
// let maximum = parseInt(prompt("Enter a maximum number:"));
// let attempts = 0;

// while ( playing ) {
//     while (!maximum) {
//         maximum = parseInt(prompt("Enter a valid number:"));
//     };
//     const random = Math.floor( Math.random() * maximum + 1 );
//     console.log(`The random number is: ${random}`);

//     let guessing = true;


//     while ( guessing ) {
//         attempts++;
//         let guess = parseInt(prompt("Guess the random number:"));
        
//         while ( !guess ) {
//             guess = parseInt(prompt("Guess a valid number:"));
//         };

//         if ( guess === random ) {
//             console.log("Congratulations!");
//             guessing = false;
//             break;
//         } else if ( guess < random ) {
//             console.log("Too low!");
//         } else {
//             console.log("Too high!");
//         };
//     };

//     break;
// };

// console.log(`Game over! It took you ${attempts} guesses to get it right.`);

const scores = {
    john: 20,
    gill: 40,
    caleb: 10,
    tessa: 50
}

let total = 0;

for (let score of Object.values(scores) ) {
    total += score;

    console.log(total);
}