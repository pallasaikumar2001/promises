
console.log('Program started');

function problem2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('program is completed');
        }, 3000);
        setTimeout(() => {
            reject('program failure');
        }, 2000);
    });
}

const program = problem2();
console.log('program in progress...', program);
program
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.error(err);
        console.log('Program is failed');
    });
