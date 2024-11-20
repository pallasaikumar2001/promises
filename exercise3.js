console.log('Program Started')
function problem3(){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Step 1 is complete')
        },3000)
    })
}
function sub(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Step 2 is complete')
        },3000)
    })
}
const program = problem3(sub);
console.log('program in progress...', program);
program
    .then(value => {
        console.log(value);
        return sub();
    })
    .then(value => {
        console.log(value);
    })
    .catch(err => {
        console.error(err);
        console.log('Program is failed');
    });