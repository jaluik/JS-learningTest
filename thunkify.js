function thunkify(fn){
    return function(){
        var ctx = this
        var args = Array.from(arguments)
        return function(callback){
            var done
            args.push(function(){
                if(done) return 
                done = true
                callback.apply(null, arguments)
            })
            try{
                fn.apply(ctx, args)
            }catch(err){
                callback(err)
            }
        }
    }
}


// 示例
function f(a, b, callback){
    var sum = a + b;
    callback(sum);
    callback(sum);
  }
  
var ft = thunkify(f);
var print = console.log.bind(console);
ft(1, 2)(print);