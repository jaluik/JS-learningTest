// 手动实现Promise结构


// 简单的promise
// let time = new Promise( (res, rej) => {
//     setTimeout(()=> {
//         res('fulfilled')
//     },1000)
// }).then(value => console.log(value))

function isFunction(fn){
    return typeof fn === 'function'
}

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise{
    constructor(handle){
        if(!isFunction(handle)){
            throw new Error('传入的参数必须是一个函数')
        }
        this._status = PENDING
        this._value = undefined
        this._fulfilledQueues = []
        this._rejectedQueues = []
        try{
            handle(this._resolve.bind(this))
            handle(this._reject.bind(this))            
        }catch(err){
            this._reject(err)
        }
    }
    _resolve(val){
        if(this._status !== PENDING) return 
        const run = ()=> {
            this._status = FULFILLED
            this._value = val
            let cb;
            while (cb = this._fulfilledQueues.shift()){
                cb(val)
            }
        }
        setTimeout( ()=> run(), 0)
    }

    _reject(err){
        if(this._status !== PENDING) return 
        const run = () => {
            this._status = REJECTED
            this._value = err
            let cb;
            while(cb = this._rejectedQueues.shift()){
                cb(err)
            }
        }
        setTimeout( ()=> run(), 0)
    }

    then(onFulfilled, onRejected){
        const { _value, _status} = this
        return new MyPromise( (onFulfieldNext, onRejectedNext) => {
            // 封装一个执行成功的函数
            let fulfilled  = value => {
                try {
                    if(!isFunction(onFulfilled)){
                        onFulfieldNext(value)
                    }else{
                        let res = onFulfilled(value)
                        if(res instanceof MyPromise){
                            res.then(onFulfieldNext, onRejectedNext)
                        }else{
                            onFulfieldNext(res)
                        }
                    }
                } catch(err){
                    onRejected(err)
                }
            }

            let rejected = err => {
                try {
                    if(!isFunction(onRejected)){
                        onRejectedNext(err)
                    }else{
                        let res = onRejected(err)
                        if(res instanceof MyPromise){
                            res.then(onFulfieldNext, onRejectedNext)
                        }else{
                            onFulfieldNext(res)
                        }
                    }

                }catch(error){
                    onRejectedNext(error)
                }
            }
            switch (_status){
                case PENDING: 
                    this._fulfilledQueues.push(onFulfilled)
                    this._rejectedQueues.push(onRejected)
                    break
                case FULFIELD: 
                    fulfilled(_value)
                    break
                case REJECTED:
                    rejected(_value)
                    break
            }
            
        })
    }
}

let a = new MyPromise((res, rej) => {
    setTimeout( ()=>{
        res('hahaha ')
    },2000)
}).then((val)=> {
    console.log(val)
})