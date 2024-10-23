//      1

//  function  asyncTask1():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 1')
//             resolve('Task 1 Complete')
//         }, 1000)
//     })
// }
//  function  asyncTask2():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 2')
//             resolve('Task 2 Complete')
//         }, 1500)
//     })
// }

//  function  asyncTask3():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 3')
//             resolve('Task 3 Complete')
//         }, 2000)
//     })
// }

// async function runTask():Promise<void> {
//     try{
//         // const result = await Promise.all ([asyncTask1(), asyncTask2(),asyncTask3()])
//         const result1 = await asyncTask1()
//         const result2 = await asyncTask2()
//         const result3 = await asyncTask3()
//         console.log(result1)
//         console.log(result2)
//         console.log(result3)

//     }catch(error){
//         console.log(error)
//     }
// }
// runTask()


//      2

// async function taskToUpperCase(str:string):Promise<string>{
//     return new Promise((resolve) =>{
//         setTimeout(() =>{
//             resolve(str.toUpperCase())
//         },1000)
//     })
// }
//    async function arrString(strings: string[]):Promise<void>{
//     try{
//         const strProcess = await Promise.all(strings.map(taskToUpperCase))
//         console.log(strProcess)
//     }catch(error){
//         console.log(error)
//     }
//    }
//    const strings = ['one','two','three']
//    arrString(strings)


//      3


//  function  asyncTask1():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 1')
//             resolve('Task 1 Complete')
//         }, 1000)
//     })
// }
//  function  asyncTask2():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('Task 2')
//             resolve('Task 2 Complete')
//         }, 1500)
//     })
// }

//  function  asyncTask3():Promise<string>{
//     return new Promise((_, reject)=>{
//         setTimeout(()=>{
//             // console.log('Task 3')
//             // resolve('Task 3 Complete')
//             reject(new Error('Error in Task 3'))
//         }, 2000)
//     })
// }

// async function runTask():Promise<void> {
//     try{
//         const result = await Promise.all ([asyncTask1(), asyncTask2(),asyncTask3()])
//         console.log(result)
//     }catch(error){
//         console.log(error)
//     }
// }
// runTask()


//      4


async function delay(ms:number):Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Completed after ${ms} miliseconds`)
        },1000)
    })
}
   async function processDelay(numbers: number[]):Promise<void>{
    try{
        const promises = await Promise.all(numbers.map(delay))
        console.log(promises)
    }catch(error){
        console.log(error)
    }
   }
   const numbers = [1000, 1500, 1500]
   processDelay(numbers)