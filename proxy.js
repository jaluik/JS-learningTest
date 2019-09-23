// let m = {
//     double(x){
//        return x * 2
//     },
//     pow(x){
//         return x ** 2
//     },
// }
// var pipe = (function(){
//     return function (value){
//         var funStack = [] 
//         var oproxy = new Proxy({},{
//             get: function (target, property){
//                 if (property === 'get'){
//                     return funStack.reduce( (val, fn) => {
//                         return fn(val)
//                     }, value)
//                 }
//                 funStack.push(m[property])
//                 return oproxy
//             }
//         })
//         return oproxy
//     }
// })()
// console.log(pipe(3).double.pow.get)

const target = Object.defineProperties({}, {
    foo: {
        value: 'foo111',
        writable: false,
        configurable: false,
    },
    hi: {
        value: 'hi',
        writable: true,
        configurable: true,
    }
})

let proxy = new Proxy(target, {
    get: function(target, property){
        return 'nihao'
    }
})

console.log(proxy.foo)