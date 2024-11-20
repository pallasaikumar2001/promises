console.log('program is started')
function problem1(){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('program completed')
        },3000)
    })
}
console.log('program in progress...',problem1())

problem1()
.then(value=>{console.log(value)})