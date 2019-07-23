// 用于测试JS数组中的push，unshift的执行效率
// function unshiftFn(){
//     const a = []

//     console.time('unshift')
//     for( let i=0; i<100000;i++){
//         a.unshift(1)
//     }
//     console.timeEnd('unshift')
// }

// function pushFn(){

//     const a = []
//     console.time('push')

//     for(let i=0; i<100000;i++){
//         a.push(1)
//     }
//     console.timeEnd('push')
// }
// unshiftFn()
// pushFn()

// function unshiftContinuty(){
//     const a = new Array(10000)

//     a.push('这是string')

//     console.time('continuty')
//     for(let i = 0; i< 10000; i++){
//         a.unshift(i)
//     }
//     console.timeEnd('conti')
// }