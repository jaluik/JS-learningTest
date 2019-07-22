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

// 2.\b表示 \w与\W之间的边界,包括了开头
// let result = '[JS] Lesson_01.mp4'.replace(/\B/g, '#')
// console.log(result)

// 3. (?=p) p前面的位置
// let result = 'ewaefaeagae'.replace(/(?=a)/g, '#')
// console.log(result);

// 4.不匹配任何东西的正则
// console.log(/.^/.test('adaeaav'))

// 5.匹配千分位
// let reg = /(?!\b)(?=(\d{3})+\b)/g
// let result = '123312125123'
// console.log(result.replace(reg, ','))

// 6.密码验证，密码长度必须为6-12位且由数字大小写至少两种组成
// let reg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[a-z])(?=.*[A-Z])|(?=.*[0-9])(?=.*[A-Z]))^[0-9a-zA-Z]{6,12}$/
// console.log( reg.test("1234567") ); // false 全是数字
// console.log( reg.test("abcdef") ); // false 全是小写字母
// console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
// console.log( reg.test("ab23C") ); // false 不足6位
// console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
// console.log( reg.test("abcdEF234") ); // true 三者都有


// 正则表达式括号的作用：括号提供了分组，便于我们引用它
// 1.
// let reg = /(ab)+/g
// let str = 'ababa abbb ababab'
// console.log(str.match(reg))

// 2.带g和不带g时match返回格式不一样;但是reg.exec(str)返回一样
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/g
// let str = '2017-06-12'
// console.log(str.match(reg))
// console.log(reg.exec(str))
// reg.exec(str)
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);
// console.log(str.replace(reg, '$2/$3/$1'))

// 3.可以在正则中匹配前一项，直接用\1表示
// let reg = /\d{4}(-|\.|\/)\d{2}\1\d{2}/
// var string1 = "2017-06-12";
// var string2 = "2017/06/12";
// var string3 = "2017.06.12";
// var string4 = "2016-06/12";
// console.log( reg.test(string1) ); // true
// console.log( reg.test(string2) ); // true
// console.log( reg.test(string3) ); // true
// console.log( reg.test(string4) ); // false