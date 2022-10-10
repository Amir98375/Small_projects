// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        console.log("promise 1 has resolve")
        resolve(30)
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise 2 reolve')
          resolve(20)
    },2000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise 3 has resolved')
        resolve(10)
    })
})


Promise.all([p1,p2,p3])
.then((res)=>{
    res.reduce((acc,cur)=> val=acc+cur)
    console.log(val)
})


//

const p11=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise p11 has been resolve')
         resolve(30)
    },3000)
})
const p12=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise p12 has been resolve')
         reject(30)
    },3000)
})

const p21=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise p21 has been rejected')
        resolve(100)
    },5000)
})
const p22=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise p22 has been rejected')
        resolve(20)
    },5000)
})

Promise.all([p11,p12,p21,p22])
.then((res)=>{
      res.reduce((acc,cur)=>val=acc+cur)
    console.log(val,"com")
  console.log(res)
})
.catch((err)=>{
  
    console.log(err)
})
.catch((err3)=>console.log(err3))


// if one of the  promise has been  rejected it shows the rejected first else it shows the all resolve promise 

