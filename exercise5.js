let promise2= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(10)  
    },3000)
})
   

let promise1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20)
    },5000)
})

Promise.all([promise1,promise2])
    .then(value=>{
        const sum=value[0]+value[1];
        console.log('sun of two promises :',sum);
    })
    .catch(error =>{
        console.error('an error occured :',error);
    })