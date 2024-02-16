async function greet() {

    setTimeout(() => {
        console.log("hello world");
    }, 4000);
}

async function greetUser() {
    const greeting = await greet();
    console.log(greeting);
}

greetUser();

// async function greet() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("hello world");
//         }, 4000);
//     });
// }

// async function greetUser() {
//     const greeting = await greet();
//     console.log(greeting);
// }

// greetUser();