// 用于研究学习iterator属性和generator函数


// 简单的generator函数
// function *foo(){
//     yield 'hello'
//     yield 'world'
//     return 'nice'
// }

// let it = foo()

// for(let i=0; i<3; i++){
//     console.log(it.next())
// }

// 设置默认的iterator接口
// function makeIterary(arr){
//     let index = 0
//     return {
//         next: function(){
//             return index < arr.length ? 
//                 { value : arr[index++]} :
//                 { done: true }
//         }
//     }
// }
// let arr = [1,3, 6, 7]
// let it = makeIterary(arr)
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// for...of循环
// const obj = {
//     [Symbol.iterator]: function (){
//         let index = 0
//         return {            
//             next(){
//                 return index < 5 ? 
//                 {value: index++ } : 
//                 {done: true}
//             }
//         }
//     }
// }
// for (let i of obj){
//     console.log(i)
// }

// 数组的iterator实现
// let arr = [1, 2, 3, '23231']
// let it = arr[Symbol.iterator]()

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// 由于对象不支持for of循环，自己手动设置循环来创建一个可以for of的对象
// class SetRange{
//     constructor(start, stop){
//         if(Number(start) < Number(stop)){
//             this.start = start
//             this.stop = stop
//         }else{
//             throw error('初始值必须小于最大值')
//         }
//         this.index = this.start
//     }
//     [Symbol.iterator](){
//         return this
//     }

//     next(){
//         if(this.index <= this.stop){
//             return {value: this.index++}
//         }else{
//             return {done: true}
//         }
//     }
// }
// let newObj = new SetRange(9, 20)
// for(let i of newObj){
//     console.log(i)
// }

// 在原型链上构建[Symbol.iterator]
// function Obj(start, stop){
//     if(start <= stop){
//         this.start = start 
//         this.stop = stop
//     }else{
//         throw Error('数字有误')
//     }
// }

// Obj.prototype[Symbol.iterator] = function(){
//     const current = this
//     let value = current.start
//     return { next: next}
//     function next(){
//         return value <= current.stop ? 
//             {value : value++} : 
//             { done : true}
//     }
// }

// let obj1 = new Obj(1,3)
// for(let i of obj1){
//     console.log(i)
// }

// let obj2 = new Obj(15,38)
// for(let i of obj2){
//     console.log(i)
// }


// 字符串的iterator接口
// let string = 'hello1wq'
// let it = string[Symbol.iterator]()
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// 重写字符串的iterator接口
// let str = new String('hello')
// str[Symbol.iterator] = function(){
//     return {
//         _first: true,
//         next: function(){
//             if(this._first){
//                 this._first = false
//                 return { value : 'bye'}
//             }else{
//                 return { done: true}
//             }
//         }
//     }
// }
// console.log([...str])

// iterator与generator函数的实现
// let generateIterator = {
//     [Symbol.iterator]: function *(){
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }
// let generateIterator={
//     *[Symbol.iterator](){
//         yield 'a'
//         yield 'b'
//     }
// }
// console.log([...generateIterator])


// 数组默认绑定了iterator函数
// let arr = ['hello', 'hi']
// let obj = {}
// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
// for (let i of obj){
//     console.log(i);
// }

// const obj = {
//     [Symbol.iterator]: function(){
//         return {
//             next(){
//                 return {
//                     value: 1,
//                     done: false
//                 }
//             }
//         }
//     }
// }

// for(key of obj){
//     console.log(key);
// }

// let arr = [1, 3, 5, 6]
// let it = arr[Symbol.iterator]()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// var arr = [1, 3, [1, 4, 5],[1,[2,5],10]]

// const flat = function* (a){
//     for(let i=0; i< a.length; i++){
//         if(typeof(a[i]) !== 'number'){
//             yield* flat(a[i])
//         }else{
//             yield a[i]
//         }
//     }
// }

// for(let i of flat(arr)){
//     console.log(i);
// }

// var myIterable = {}
// myIterable[Symbol.iterator] = function* (){
//     yield 1
//     yield 2
//     yield 3
// }
// for(let i of myIterable){
//     console.log(i);
// }

function* gen(){
    yield 1
}

var g = gen()
console.log(g[Symbol.iterator]() === g)
