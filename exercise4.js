console.log('Program Started')
function Problem4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({data:"hello friend!", error:null})
        }, 5000);
    });
}
function sub1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('first promise chain completed')
        },2000)
    });
}
function sub2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Second promise cahin completed')
        },10000)
    })
}
const program=Problem4();
console.log('program in progress...',program)

program
    .then(value=>{
        console.log('first chain resolved value: ',value)
        return sub1();
    })
    .then(value=>{
        console.log(value)
    });
program
    .then(value=>{
        console.log('Second cahin resolved value: ',value)
        return sub2();
    })
    .then(value=>{
        console.log(value)
    })
    .catch(err=>{
        console.error(err);
        console.log('Program is failed')
    })
















// console.log('Program Started');

// function problem4() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ data: "Hello, friend!", error: null });
//         }, 5000);
//     });
// }
// function sub1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("First promise chain complete!");
//         }, 2000);
//     });
// }
// function sub2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Second promise chain complete!");
//         }, 10000);
//     });
// }

// const program = problem4();
// console.log('Program in progress...', program);

// program
//     .then(value => {
//         console.log('First chain resolved value:', value);
//         return sub1(); 
//     })
//     .then(value => {
//         console.log(value); 
//     });

// program
//     .then(value => {
//         console.log('Second chain resolved value:', value);
//         return sub2();
//     })
//     .then(value => {
//         console.log(value); 
//     })
//     .catch(err => {
//         console.error(err);
//         console.log('Program is failed');
//     });
