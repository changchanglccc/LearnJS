//按照阮一峰js教程学习

/*
var message = "Hello world";
var meaasgeAsBoolean = Boolean(message)

console.log(typeof message)
console.log(typeof meaasgeAsBoolean)
console.log(meaasgeAsBoolean)
*/

// 为什么优先采用“严格相等运算符”（===），而不是“相等运算符”（==），请参考《运算符》章节。
// var m = 3;
// if(m === 3 ){
//     console.log("yes");
// }

/*
//practice switch grammar
//注意 case语句中的 break；否则不会跳出switch语句
var x = 1;
switch(x){
    case 1:
        console.log("x = 1");
        break;
    case 2:
        console.log("x = 2");
        break;
    default:
        console.log(" x = others");
}
//switch语句部分和case语句部分，都可以使用表达式。
switch(1 + 3) {
    case 2 + 2:
      f();
      break;
    default:
      neverHappens();
  }
//   上面代码的default部分，是永远不会执行到的。
//   需要注意的是，switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===）
//   而不是相等运算符（==），这意味着比较时不会发生类型转换

switch语句内部采用的是“严格相等运算符”
*/

//三元运算符 ？：   eg： var msg = '数字' + n + '是' + (n % 2 === 0 ? '偶数' : '奇数');

/*
//注意 do...while循环 do
  do  
    语句
  while (条件);
  
  // 或者
  do {
    语句
  } while (条件);
  不管条件是否为真，do...while循环至少运行一次，这是这种结构最大的特点。另外，while语句后面的分号注意不要省略。
*/

// break语句用于跳出代码块或循环。
// continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环

/*
标签（label）:语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置
label:
    语句
标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。
标签通常与break语句和continue语句配合使用，跳出特定的循环。

top:        //代表标签
    for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        if (i === 1 && j === 1) break top;
        console.log('i=' + i + ', j=' + j);
    }
    }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

top:
    for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        if (i === 1 && j === 1) continue top;   //表示跳过i===1 && j===1这个内层循环
        console.log('i=' + i + ', j=' + j);
    }
    }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2

*/
/*
JavaScript 有三种方法，可以确定一个值到底是什么类型。
    typeof运算符
    instanceof运算符
    Object.prototype.toString方法
typeof运算符可以返回一个值的数据类型。
instanceof运算符可以区分数组和对象。
console.log(typeof window);
*/

/*
var o = {};
var a = [];
console.log(o instanceof Array);

console.log(typeof null);

Number(null);//0
console.log(5 + null);//5

Number(undefined);//NaN
console.log(5 + undefined);//NaN
// 区别是这样的：null是一个表示“空”的对象，转为数值时为0；undefined是一个表示”此处无定义”的原始值，转为数值时为NaN

// undefined表示“未定义”，下面是返回undefined的典型场景。

// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined

// 如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。

    undefined
    null
    false
    0
    NaN
    ""或''（空字符串）

!!注意，空数组（[]）和空对象（{}）对应的布尔值，都是true。
*/

// JavaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个范围的数无法表示。
// 如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity。
// Math.pow(2, 1024) // Infinity

// // 如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。

// Math.pow(2, -1075) // 0

// JavaScript 提供Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值。

// Number.MAX_VALUE // 1.7976931348623157e+308
// Number.MIN_VALUE // 5e-324

/*
使用字面量（literal）直接表示一个数值时，JavaScript 对整数提供四种进制的表示方法：十进制、十六进制、八进制、二进制。

十进制：没有前导0的数值。
八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
十六进制：有前缀0x或0X的数值。
二进制：有前缀0b或0B的数值。
通常来说，有前导0的数值会被视为八进制，但是如果前导0后面有数字8和9，则该数值被视为十进制。
*/

// 唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的。
// (1 / +0) === (1 / -0) // false
// 上面的代码之所以出现这样结果，是因为除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的

/*
NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。
5 - 'x' // NaN
上面代码运行时，会自动将字符串x转为数值，但是由于x不是数值，所以最后得到结果为NaN，表示它是“非数字”（NaN）。

另外，一些数学函数的运算结果会出现NaN。

Math.acos(2) // NaN
Math.log(-1) // NaN
Math.sqrt(-1) // NaN
0除以0也会得到NaN。

0 / 0 // NaN
需要注意的是，NaN不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于Number
// NaN不等于任何值，包括它本身。
// NaN与任何数（包括它自己）的运算，得到的都是NaN。
// 数组的indexOf方法内部使用的是严格相等运算符，所以该方法对NaN不成立。

*/

/**
 * Infinity
 * Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity。

// 场景一
Math.pow(2, 1024)
// Infinity

// 场景二
0 / 0 // NaN
1 / 0 // Infinity
上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回Infinity。第二个场景是0除以0会得到NaN，而非0数值除以0，会返回Infinity。

Infinity有正负之分，Infinity表示正的无穷，-Infinity表示负的无穷，但是二者不相等。===
 * 
 * Infinity大于一切数值（除了NaN），-Infinity小于一切数值（除了NaN）。
 * Infinity与NaN比较，总是返回false。
 * 
 * 5 / Infinity     // 0
 * 
0 * Infinity // NaN
0 / Infinity // 0
Infinity / 0 // Infinity

Infinity加上或乘以Infinity，返回的还是Infinity。
Infinity减去或除以Infinity，得到NaN。
Infinity与null计算时，null会转成0，等同于与0的计算。
Infinity与undefined计算，返回的都是NaN
 */

// parseInt方法用于将字符串转为整数。如果parseInt的参数不是字符串，则会先转为字符串再转换。
// 字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。
// 如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN
// 所以，parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。

// 如果字符串以0x开头，parseInt会按十六进制数解析
// 以0开头， 按照十进制解析
// 对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。
// parseInt('8e-7') // 8

// parseInt方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。
// 默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。
// 如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。
// 如果第二个参数是0、undefined和null，则直接忽略

// 如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回NaN。
// parseInt('1546', 2) // 1
// parseInt('546', 2) // NaN

//----??????????????????????????????????????????????????????????????那把十进制转换为二进制怎么办？？？？？？
//先转成十进制数字， 再转2进制的字符串（如果有需要了，再转成十进制的数字呗）
// console.log(typeof parseInt('1546').toString(2));

// parseFloat方法用于将一个字符串转为浮点数。
// parseFloat方法会自动过滤字符串前导的空格。
// 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN
// 尤其值得注意，parseFloat会将空字符串转为NaN。
// parseFloat('') // NaN
// Number('') // 0

/*
isNaN方法可以用来判断一个值是否为NaN
使用isNaN之前，最好判断一下数据类型。
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。！！！！！
function myIsNaN(value) {
  return value !== value;
}
*/

/*
isFinite方法返回一个布尔值，表示某个值是否为正常的数值。
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(-1) // true
除了Infinity、-Infinity和NaN这三个值会返回false，isFinite对于其他的数值都会返回true。
*/

// console.log(0.1 + 0.3 === 0.4);  //true

/** 字符串 */
// 如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。
//'Did she say \'Hello\'?'      // == "Did she say 'Hello'?"
//长字符串分行， 也用反斜杠 \;  连接运算符（+）可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。
// var longString = 'Long '
// + 'long '
// + 'long '
// + 'string';

// 由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号
/*
\0 ：null（\u0000）
\b ：后退键（\u0008）
\f ：换页符（\u000C）
\n ：换行符（\u000A）
\r ：回车键（\u000D）
\t ：制表符（\u0009）
\v ：垂直制表符（\u000B）
\' ：单引号（\u0027）
\" ：双引号（\u0022）
\\ ：反斜杠（\u005C）
*/

// 字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符； 字符串内部的单个字符无法改变和增删，这些操作会默默地失败。
// length属性返回字符串的长度，该属性也是无法改变的。

//js采用Unicode字符集
//每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。
// 对于码点在U+10000到U+10FFFF之间的字符，JavaScript 总是认为它们是两个字符（length属性为2）。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。

// Base64转码
// 文本里面包含一些不可打印的符号，比如 ASCII 码0到31的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。
// 另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

// JavaScript 原生提供两个 Base64 相关的方法。
//     btoa()：任意值转为 Base64 编码
//     atob()：Base64 编码转为原来的值
// 注意，这两个方法不适合非 ASCII 码的字符，会报错。
/*
要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('你好') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"   */

/** 对象 */
/*
对象是js语言的核心概念 也是最重要的数据类型。
对象是一组key-value的集合，是一种无序的复合数据集合。

对象所有的键名都是字符串 ,ES6加入 Symbol值；（键名是数值的 会被自动转为字符串） + 如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。
如果一个属性的 值 为 函数，通常把这个属性称为“方法”，它可以像函数那样调用。

var obj = {
    p: function(x){
        return 2 * x;
    }
};

console.log(obj.p(1));
对象obj的属性p，就指向一个函数。

如果属性的值还是一个对象，就形成了链式引用。

var o1 = {};
var o2 = {
    bar: "Hello"
};

o1.foo = o2;    //属性可以动态创建，不必在对象声明时就指定。直接对obj对象的foo属性赋值，结果就在运行时创建了foo属性。
console.log(o1.foo.bar);

对象的属性之间用逗号分隔，最后一个属性后面可以加逗号（trailing comma），也可以不加。
*/

// === 对象的引用 ===
// 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。
/*
var obj = {
    p: 'hello world'
};

console.log(obj.p);
console.log(obj['p']);
*/

var foo = 'bar';
var obj = {
    foo: 1,
    bar: 2
};

console.log(obj.foo);
console.log(obj['foo']);
console.log(obj[foo]);

// 请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。
// 上面代码中，引用对象obj的foo属性时，如果使用点运算符，foo就是字符串；
// 如果使用方括号运算符，但是不使用引号，那么foo就是一个变量，指向字符串bar。


/*  数字键可以不加引号，因为会自动转成字符串。
    注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。
var obj = {
    123: 'hello world'
};

obj.123 // 报错
obj[123] // "hello world"
*/








