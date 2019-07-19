// function timeout(ms) {
//     return new Promise( (res, rej) => {
//         setTimeout(res, ms, 'done')
//     })
// }

// timeout(5000).then( (value) => {
//     console.log(value)
// })

// let promise = new Promise( (resolve, reject) => {
//     console.log('Promise');
//     resolve()
// })

// promise.then( () => {
//     console.log('resolved.');
// })

// console.log('Hi');

// const getJson = function(url){
//     const promise = new Promise( (resolve, reject)=> {
//         const handler = function() {
//             if(this.readystate !== 4){
//                 return
//             }
//             if (this.status === 2000){
//                 resolve(this.response)
//             }else {
//                 reject(new Error(this.statusText))
//             }
//         }
//         const client = new XMLHttpRequest()
//         client.open('GET', url)
//         client.onreadystatechange = handler
//         client.responseType = 'json'
//         client.setRequestHeader('Accept', 'application/json')
//         client.send()
//     })
//     return promise
// }

// getJson('http://ip.taobao.com/service/getIpInfo.php?ip=63.223.108.42').then( (json) => {
//     console.log('content:' + json0)

// }, (err) => {
//     console.log(err);
// })

// const someAsync = function(){
//     return new Promise( (res, rej) => [
//         res(x + 1)
//     ])
// }
// someAsync().then( () => {
//     console.log('evertutejhi');
// }).catch( (err) => {
//     console.log(err);
// })

// setTimeout( ( ) => { console.log('123')}, 1000)

// const p = Promise.race([
//     new Promise((resolve, reject) => {
//         axios.get('/a.json').then( (data) => {
//             if (data.body && data.body.status === 200){
//                 return resolve(data)
//             }
//         }).catch((err) => {
//             return reject(err)
//         })
//     }),
//     new Promise( (resolve, reject) => {
//         setTimeout( ()=> reject(new Error('request timeout')), 5000)
//     })
// ])
// p
// .then((data) => console.log(data))
// .catch( (err) => console.log(err))

// console.log([...new Set([...'abcsdaeerada'])])

// function* helloWorld(){
//     const a = 1
//     yield a+1
//     yield 'world'
//     return 'ending'

// }

// var gw = helloWorld()

// console.log(gw.next())
// console.log(gw.next())
// console.log(gw.next())
// console.log(gw.next())


// let a = 1
// function* f(){
//     a++
//     console.log(`执行了${a}次`)
//     const generator = f()
//     setInterval(() => {
//         generator.next()
//     },1000)

// }
// f().next()

// const b = {a :1 , b:2}
// b[Symbol.iterator] = function* (){
//     yield 1
//     yield 2
//     yield 3
// }
// console.log([...b]);