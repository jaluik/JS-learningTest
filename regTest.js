// let reg = /ab{3,5}c/g
// let string = 'abc abbc abbbc abbbbc  abbbbbbbbcdde'

// console.log(string.match(reg))

// let reg = /a[bcadea]f/
// let str = 'asabfaefadefefeadadefesfadefv'

// console.log(str.match(reg))

// let reg = /\d{2,6}?/g

// let str = '12332141254152 323  2312  2312 22 123'

// console.log(str.match(reg))

// let reg = /^#[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/g

// let str = "#ffbbad #Fc01DF #FFF #ffE"

// console.log(str.match(reg))

// let reg = /^([01][0-9])|(2[0-3]):[0-5][0-9]/g

// let reg = /[a-zA-Z]:\\([\w]+\\)+/g
// let str = 'F:\study\javascript\regex\regular expression.pdf F:\study\javascript\regex\ F:\study\javascript'
// console.log(str.match(reg))

// 匹配位置
// 1.
// let result = 'hello'.replace(/^|$/g, '#').replace(/^|$/g, '%')
// console.log(result);
// let result = 'I\nlove\njavascript'.replace(/^|$/gm, '#')
// console.log(result)

// 2.\b表示 \w与\W之间的边界
// let result = '[JS] Lesson_01.mp4'.replace(/\B/g, '#')
// console.log(result)
