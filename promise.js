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
const FULFILED = 'FULFILED'
const REJECTED = 'REJECTED'

class MyPromise{
    constructor(handle){
        if(!isFunction(fn)){
            throw new Error('传入的参数必须是一个函数')
        }
        this._status = PENDING
        this._value = undefined
        this._fulfiledQueues = []
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
        this._status = FULFILED
        this._value = val
    }

    _reject(err){
        if(this._status !== PENDING) return 
        this._status = REJECTED
        this._value = err
    }

    then(onFulfiled, onRejected){
        const { _value, _status} = this
        switch (_status){
            case PENDING: 
                this._fulfiledQueues.push(onFulfiled)
                this._rejectedQueues.push(onRejected)
                break
            case FULFIELD: 
                onFulfiled(_value)
                break
            case REJECTED:
                onRejected(_value)
                break
        }
        return new MyPromise( (onFulfieldNext, onRejectedNext) => {
            
        })
    }
}