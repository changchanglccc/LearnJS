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

// var foo = 'bar';
// var obj = {
//     foo: 1,
//     bar: 2
// };

// console.log(obj.foo);
// console.log(obj['foo']);
// console.log(obj[foo]);

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

/* 属性的赋值：点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。
*  JavaScript 允许属性的“后绑定”, 即你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

var obj= {};

obj.foo = 'hello';
obj['bar'] = 2;

console.log(obj['bar']);
console.log(Object.keys(obj));

delete obj.bar;     //注意，删除一个不存在的属性，delete不报错，而且返回true。只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除。
//需要注意的是，delete命令只能删除对象本身的属性，无法删除继承的属性
console.log(Object.keys(obj));

// in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。

// for...in循环用来遍历一个对象的全部属性。

var obj = {a:1, b:2, c:3};
for(var i in obj){
    console.log(obj[i]);
}
    
//----------

var obj ={
    x:1,
    y:2
};

var props = [];
var i = 0;
for(var p in obj){
    props[i++] = p;
}

console.log(props);

// for...in循环有两个使用注意点。
//     它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
//     它不仅遍历对象自身的属性，还遍历继承的属性。

// 对象都继承了toString属性(是不可遍历的)，但是for...in循环不会遍历到这个属性。

// 一般情况下，都是只想遍历对象自身的属性，所以使用for...in的时候，应该结合使用hasOwnProperty方法，在循环内部判断一下，某个属性是否为对象自身的属性。
var person = {name:'Mr.Zhang'};
for(var key in person){
    if(person.hasOwnProperty(key)){
        console.log(key);
    }
}
*/

/* With 语句 它的作用是操作同一个对象的多个属性时，提供一些书写的方便。

with (对象) {
    语句;
}

// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);

注意，如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。
但是因为无法判断变量是全局变量与否，只能留到运行时才能判断，运行速度不佳，所以建议不要使用with语句，可以考虑用一个临时变量代替

var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
*/

/* === 数组 === */
/*
任何类型的数据，都可以放入数组。
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];

arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}
// 上面数组arr的3个成员依次是对象、数组、函数。

// 数组的元素还是数组，就形成了多维数组

console.log(typeof [1,2,3]);    //object, 所以数组是一种特殊的对象

var arr = ['a','b','c'];
console.log(Object.keys(arr));  //数组的keys(键名)就是表示次序的整数

// JavaScript 语言规定，对象的键名一律为字符串，
// 所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。
var arr = ['a', 'b', 'c'];

arr['0'] // 'a'
arr[0] // 'a'

//对象有两种读取成员的方法：点结构（object.key）和方括号结构（object[key]）。但是，对于数值的键名，不能使用点结构。
    var arr = [1, 2, 3];
 // arr.0 // SyntaxError

// length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到length设置的值。

var arr = [ 'a', 'b', 'c' ];
arr.length // 3

arr.length = 2;
console.log(arr); // ["a", "b"]

// 上面代码表示，当数组的length属性设为2（即最大的整数键只能是1）那么整数键2（值为c）就已经不在数组中了，被自动删除了。

// 清空数组的一个有效方法，就是将length属性设为0。

var a = [];

a['p'] = 'abc';
a.length // 0

a[2.1] = 'abc';
a.length // 0
上面代码将数组的键分别设为字符串和小数，结果都不影响length属性。
因为，length属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以length属性保持为0。

var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';

arr.length // 0
arr[-1] // "a"
arr[4294967296] // "b"
上面代码中，我们为数组arr添加了两个不合法的数字键，结果length属性没有发生变化。
这些数字键都变成了字符串键名。最后两行之所以会取到值，是因为取键值时，数字键名会默认转为字符串。

// in 是用来检查某个键名是否存在的运算符，适用于对象和数组
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false
// 上面代码表明，数组存在键名为2的键。由于键名都是字符串，所以数值2会自动转成字符串

var arr = [ 'a', 'b', 'c' ];
console.log('a' in arr);  // false  

数组是一组特殊的对象，它的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2…）。

var arr = ['a', 'b', 'c'];

Object.keys(arr)
// ["0", "1", "2"]

注意，如果数组的某个位置是空位，in运算符返回false。

var arr = [];
arr[100] = 'a';

100 in arr // true
1 in arr // false
// 上面代码中，数组arr只有一个成员arr[100]，其他位置的键名都会返回false。


// for...in不仅会遍历数组所有的数字键，还会遍历非数字键. 所以不推荐for...in遍历数组
var arr = [1,2,3];
arr.foo = 'doo';

for(var k in arr){
    console.log(k);
}
// 所以不推荐for...in遍历数组； 

// 可以考虑 for循环或者while循环来遍历数组，纯比较数字时，但是感觉后面es6的时候会用到forEach() 方法

var colors = ['red','green','blue'];
colors.forEach(function(color){
    console.log(color);
});

// 当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。
var a = [1, , 1];
a.length // 3
// 上面代码表明，数组的空位不影响length属性。
// 需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。
// 数组的空位是可以读取的，返回undefined。

var a = [,,8,];
console.log(a[0]);
console.log(a.length);

// 使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。
// 也就是说，length属性不过滤空位。所以，使用length属性进行数组遍历，一定要非常小心
delete a[2];
console.log(a);
console.log(a.length);

// 数组的某个位置是空位，与某个位置是undefined，是不一样的。
// 如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。
// 如果某个位置是undefined，遍历的时候就不会被跳过。
a.forEach(function(x,i){
    console.log(i + '. ' + x);
});// 不产生任何输出
console.log('---------');

for(var i in a){
    console.log(i);
}// 不产生任何输出

console.log( Object.keys(a));

a[1] = undefined;
a.push('Haha');
console.log(a);
console.log(Object.keys(a));

//类似数组的对象：如果一个对象的所有键名都是正整数或零，并且有length属性，那么这个对象就很像数组，语法上称为“类似数组的对象”（array-like object）。
//对象obj没有数组的push方法，使用该方法就会报错。

// 类似数组的对象”的根本特征，就是具有length属性！！！！

// 只要有length属性，就可以认为这个对象类似于数组。但是有一个问题，这种length属性不是动态值，不会随着成员的变化而变化。
var obj = {
    length: 0,
};
console.log(obj.length);
obj[3] = 'haha';
console.log(obj.length);    //为对象obj添加了一个数字键，但是length属性没变。这就说明了obj不是数组。
console.log(obj);

// 典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串
//所以要仔细区分 数组 和 对象 

//argument对象, 类似数组的对象
function args(){
    return arguments;
}
var arrayLike = args('a','b');
console.log(arrayLike[0]);
console.log(arrayLike.length);
console.log(arrayLike instanceof Array);

// DOM元素集， 类似数组的对象
var elts = document.getElementsByTagName('h3');
console.log(elts.length);
console.log(elts instanceof Array);

//字符串， 类似数组的对象
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false

// 数组的slice方法可以将“类似数组的对象”变成真正的数组。
// 除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过call()把数组的方法放到对象上面。

// 这种方法比直接使用数组原生的forEach要慢, 最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。
function args(){
    return arguments;
}
var arrayLike = args('a','b');
var arr = Array.prototype.slice.call(arrayLike);

console.log(arr instanceof Array);

arr.forEach(function(chr) { //然后再直接调用数组的forEach方法。
    console.log(chr)
});
*/

/** 函数 Function *****************************************************************/

//函数声明：1） function命令 2）函数表达式 3）Function构造函数
/*
1）function print(s) {
    console.log(s);
  }
2）var print = function(s) {
    console.log(s);
  };
3）var add = new Function(       //声明函数的方式不直观 ， 几乎无人使用
    'x',
    'y',
    'return x + y'
  );
  
  // 等同于
  function add(x, y) {
    return x + y;
  }
// Function构造函数接受三个参数，除了最后一个参数是add函数的“函数体”，其他参数都是add函数的参数。
// 你可以传递任意数量的参数给Function构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

// 采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
var print = function x(){
  console.log(typeof x);
};
x       // ReferenceError: x is not defined
print()         // function

上面代码在函数表达式中，加入了函数名x。这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数）。因此，下面的形式声明函数也非常常见。

var f = function f() {};
需要注意的是，函数的表达式需要在语句的结尾加上分号，表示语句结束。而函数的声明在结尾的大括号后面不用加分号。总的来说，这两种声明函数的方式，差别很细微，可以近似认为是等价的。

var print = function (s){
    console.log(s);
};
print('haha');
*/
// 如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。

/*
JavaScript 引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。所以，下面的代码不会报错。
f();
function f() {}
但是，如果采用赋值语句定义函数，JavaScript 就会报错。
var f;
f();
f = function () {};
上面代码第二行，调用f的时候，f只是被声明了，还没有被赋值，等于undefined，所以会报错。

因此，如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义!!!

var f = function(){
    console.log("1");
}

function f(){
    console.log("2");
}

f();            // 1, 如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义!!!
*/



//不能在条件语句中声明函数
// 要达到在条件语句中定义函数的目的，只有使用函数表达式。

/**
 * 函数的属性和方法
 * 
 * name属性 + length属性（返回函数参数的个数，定义时的参数个数）
 *  
 * length属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“（overload）。
 * 
 * toString()方法： 返回一个字符串，内容是函数的源码，函数内部的注释也可以返回
 */

 /**
  * 函数作用域

//   函数内部定义的变量，会在该作用域内覆盖同名全局变量！
//   注意，对于var命令来说，局部变量只能在函数内部声明，在其他区块中(比如 条件判断语句中)声明，一律都是全局变量。 e.g:变量x在条件判断区块之中声明，结果就是一个全局变量，可以在区块之外读取。

// var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。

// 函数本身作用域： 函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。

// 很容易犯错的一点是，如果函数A调用函数B，却没考虑到函数B不会引用函数A的内部变量。!!!
var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x) 
*/

// ReferenceError: a is not defined
// 上面代码将函数x作为参数，传入函数y。但是，函数x是在函数y体外声明的，作用域绑定外层，因此找不到函数y的内部变量a，导致报错。


 /**
  * 参数

//  需要注意的是，函数的length属性与实际传入的参数个数无关，只反映函数预期传入的参数个数。
//  但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined。

// 传递方式：
    函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。
    这意味着，在函数体内修改参数值，不会影响到函数外部。

    但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。
    也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

    注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

var obj = [1, 2, 3];
function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj         // [1, 2, 3]、
    在函数f内部，参数对象obj被整个替换成另一个值。这时不会影响到原始值。
    这是因为，形式参数（o）的值实际是参数obj的地址，重新对o赋值导致o指向另一个地址，保存在原地址上的值当然不受影响。

//同名参数-----
    // 有同名参数，取最后出现的那个的值 eg： function f(a,a){return a;} f(1,2)---> 返回2,里面a有1和2两个值，但是取最后出现的那个值

    //调用函数f的时候，没有提供第二个参数，a的取值就变成了undefined。这时，如果要获得第一个a的值，可以使用arguments对象。
function f(a, a) {
  console.log(arguments[0]);
}

f(1) // 1

// argument 对象
可以在函数体内部读取所有参数。这就是arguments对象的由来。

arguments对象包含了函数运行时的所有参数，
arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用。

var f = function(a, b) {
  'use strict'; // 开启严格模式
  arguments[0] = 3; // 无效
  arguments[1] = 2; // 无效
  return a + b;
}

f(1, 1) // 2
上面代码中，函数体内是严格模式，这时修改arguments对象就是无效的。

example2: 
var f = function(a,b){
    'use strict';
    console.log(arguments[0]);
    console.log(arguments[1]); 
    
    arguments[0] = 5;
    return a + b;
}

console.log(f(1,2,3)); 

// 通过arguments对象的length属性，可以判断函数调用时到底带几个参数。

// 函数的其他知识点
// 闭包！closure：  变量作用域

function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999

闭包就是函数f2，即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”
闭包最大的特点，就是它可以“记住”诞生的环境，比如f2记住了它诞生的环境f1，所以从f2可以得到f1的内部变量。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

// 链式作用域
function f1(){
    var n = 999;
    function f2(){      //这时 f1内的所有局部变量，对f2 都是可见的
        // console.log(n);
        return n
    };
    return f2;
}

var result = f1();
// result();   //999
console.log(result());
//在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。

// 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。
// 请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。

function createIncrementor(start) {
    return function () {
      return start++;
    };
  }
  
  var inc = createIncrementor(5);
  inc() // 5
  inc() // 6
  inc() // 7
// 上面代码中，start是函数createIncrementor的内部变量。通过闭包，start的状态被保留了，每一次调用都是在上一次调用的基础上进行计算。从中可以看到，闭包inc使得函数createIncrementor的内部环境，一直存在。
// 所以，闭包可以看作是函数内部作用域的一个接口。
// 为什么会这样呢？原因就在于inc始终在内存中，而inc的存在依赖于createIncrementor，因此也始终在内存中，不会在调用结束后，被垃圾回收机制回收。

// 闭包的另一个用处，是封装对象的私有属性和私有方法。
function Person(name){
    var _age;
    function setAge(n){
        _age = n;
    };
    function getAge(){
        return _age;
    };
    return{
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}

var p1 = Person('Bob');
p1.setAge(25);
console.log(p1.getAge());
注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。
因此不能滥用闭包，否则会造成网页的性能问题！！！
*/

/**
 * Immediately-invoked function expression 立即调用函数表达式
 */

 /*
(function(){ ... }());
// 或者
(function(){ ...})();   // 最后的分号都是必须的

// 上面两种写法都是以圆括号开头，引擎就会认为后面跟的是一个表示式，而不是函数定义语句，所以就避免了错误。
// 这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称 IIFE。

// 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。
// 它的目的有两个：一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
// 上面代码中，写法二比写法一更好，因为完全避免了污染全局变量。
*/

/**
 * eval 命令：将字符串当作语句执行
 * 
 * eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。

 * JavaScript 规定，如果使用严格模式，eval内部声明的变量，不会影响到外部作用域。

 * 不建议使用
 */

//------------------------------
// var jsonp = 'foo({"id": 42})';

// var f = new Function('foo', jsonp);     //Function构造函数，与eval作用类似
//     // 相当于定义了如下函数
//     // function f(foo) {
//     //   foo({"id":42});
//     // }
// f(function(json){
//     console.log(json.id);
// })

// jsonp是一个字符串，Function构造函数将这个字符串，变成了函数体。调用该函数的时候，jsonp就会执行。
// 这种写法的实质是将代码放到函数作用域执行，避免对全局作用域造成影响。
// 不过，new Function()的写法也可以读写全局作用域，所以也是应该避免使用它。



/** 运算符 */
/*
只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。
加法运算符是在运行时决定，到底是执行相加，还是执行连接。
也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"     //由于从左到右的运算次序，字符串的位置不同会导致不同的结果。
// 除了加法运算符，其他算数运算符都不会出现重载，都会把字符串转为数值再计算

// 如果运算子是对象，必须先转成原始类型的值（使用valueOf方法 + toString方法），然后再相加。 注意 valueOf一般返回对象本身
// 所以我们可以自己定义 valueOf或者toString方法 ， 实现运算

var obj = {
    valueOf: function(){
        return 1;
    },
    toString: function(){
        return 'Hello';
    }

};

console.log(obj.toString() + 2);    //3, 因为valueOf会先与toString 执行

example2: 
var obj = {p:1};

var obj1 = {
    valueOf: function(){
        return 1;
    }
}
console.log(obj.valueOf());
console.log(obj.valueOf().toString());

console.log(obj1);
console.log(obj1.valueOf());
// console.log(obj1.valueOf().toString());     // 这个例子中，由于valueOf方法直接返回一个原始类型的值，所以不再调用toString方法。

// 注意，toString方法也可以自己定义, 如下
var obj1 = {
    toString: function(){
        return "hello";
    }
};
// 不过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。

// 这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。
var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

obj + 2 // "hello2

// 余数运算符 % ； 需要注意的是，运算结果的正负号由第一个运算子的正负号决定。
-1 % 2 // -1
1 % -2 // 1

// 字符串的比较
// 字符串按照字典顺序进行比较。

// 非字符串的比较
1.原始类型： == 和 === ； 其他比较运算符都是转成数值再比较
特殊情况：任何置包括（NaN本身） 与 NaN比较，返回的都是false

2.对象： 会转成原始类型的值，再比较
对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法。

var x = [2];
console.log(x > '11');// true
// 等同于 [2].valueOf().toString() > '11'
// 即 '2' > '11'     字符串比较大小， 按照字典顺序比较
console.log('2' > '12');

x.valueOf = function(){
    return '1';
}
console.log(x > '11');// false
// 等同于 [2].valueOf() > '11'
// 即 '1' > '11'

// 注意，Date 对象实例用于比较时，是先调用toString方法。如果返回的不是原始类型的值，再接着对返回值调用valueOf方法。

// 严格相等运算符
// NaN === NaN; // false
// +0 === -0; //true

符合类型值（ 对象，数组，函数）的数据比较时，是比较他们是否指向同一个地址
{}==={};    //false
[] ===[];   //false
(function (){} === function () {}); //false

如果两个变量引用用一个对象， 则它们相等

var v1 = {}
var v2 = v1;
console.log(v1 === v2);     //注意，对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。

console.log(new Date() > new Date()); // false
console.log(new Date() < new Date()); // false
console.log(new Date() === new Date()); // false
// 上面的三个表达式，前两个比较的是值，最后一个比较的是地址，所以都返回false。

// undefined 和 null ,两者与自身严格相等
undefined === undefined // true
null === null // true

// 由于变量声明后默认值是undefined，因此两个只声明未赋值的变量是相等的。

var v1;
var v2;
v1 === v2 // true

// 严格不相等 运算符（ !== ）： 先求严格相等运算结果，再返回其相反值 

//相等运算符
在比较相同类型的数据时 和===一样
比较不同类型的数据时，会现将数据类型转换，再用===比较

转换规则：
1. 原始类型的值：原始类型的数据会转换成数值类型再进行比较。

    1 == true // true           // 等同于 1 === Number(true)

    'true' == true // false         // 等同于 Number('true') === Number(true)
                                    // 等同于 NaN === 1

    '\n  123  \t' == 123 // true        // 因为字符串转为数字时，省略前置和后置的空格

2. 对象与原始类型值比较：对象转化成原始类型的值，再进行比较。  
    [1] == 1 // true
    // 等同于 Number([1]) == 1

    [1] == '1' // true
    // 等同于 String([1]) == Number('1')

    [1] == true // true
    // 等同于 Number([1]) == Number(true)


console.log([1] == '1');    //???

3.undefined 和 null
    undefined和null与其他类型的值比较时，结果都为false，它们互相比较时结果为true。
        绝大多数情况下，对象与undefined和null比较，都返回false。只有在对象转为原始值得到undefined时，才会返回true，这种情况是非常罕见的。

4.相等运算符的缺点

    相等运算符隐藏的类型转换，会带来一些违反直觉的结果。最好只使用严格相等运算符（===）。

// 不相等运算符  !=

// 布尔运算符
    取反运算符：!
    且运算符：&&
    或运算符：||
    三元运算符：?:

    // 取反运算符
        以下六个值取反后为true，其他值都为false。

        undefined
        null
        false
        0
        NaN
        空字符串（''）

!!x    // 等同于Boolean(x)， 两次取反就是将一个值转为布尔值的简便写法。   

    // 且运算符（&&）往往用于多个表达式的求值。
        它的运算规则是：如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
        如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。
            't' && '' // ""
            't' && 'f' // "f"
            't' && (1 + 2) // 3
            '' && 'f' // ""
            '' && '' // ""

            var x = 1;
            (1 - 1) && ( x += 1) // 0， 由于且运算符的第一个运算子的布尔值为false，则直接返回它的值0
            x // 1
    
        且运算符可以多个连用，这时返回第一个布尔值为false的表达式的值。
            true && 'foo' && '' && 4 && 'foo' && true           // ''
            上面代码中，第一个布尔值为false的表达式为第三个表达式，所以得到一个空字符串。

    // 或运算符（||）也用于多个表达式的求值。它的运算规则是：如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；
        如果第一个运算子的布尔值为false，则返回第二个运算子的值。

            console.log('t' || '');
            console.log(''||'f');

            var x = 1;
            console.log(true || (x = 2)); // true
            console.log((x = 2) || true); // 2
            console.log(false || (x == 2)); // 2,第一个算子是false， 所以 返回第二个算子的x的值； 注意是=， 而且前一步已经把x赋值成2了
            console.log(x); // 1

        或运算符可以多个连用，这时返回第一个布尔值为true的表达式的值。
            false || 0 || '' || 4 || 'foo' || true              // 4


        用例：运算符常用于为一个变量设置默认值。
            function saveText(text) {
            text = text || '';
            // ...
            }

            // 或者写成
            saveText(this.text || '')
            上面代码表示，如果函数调用时，没有提供参数，则该参数默认设置为空字符串。


    // 三元条件运算符由问号（?）和冒号（:）组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。
    如果第一个表达式的布尔值为true，则返回第二个表达式的值，否则返回第三个表达式的值。

    if...else是语句，没有返回值；三元条件表达式是表达式，具有返回值。
    所以，在需要返回值的场合，只能使用三元条件表达式，而不能使用if..else。
        console.log(true ? 'T' : 'F');
        上面代码中，console.log方法的参数必须是一个表达式，这时就只能使用三元条件表达式。

// 位运算符

    位运算符用于直接对二进制位进行计算，一共有7个。

    二进制或运算符（or）：符号为|，表示若两个二进制位都为0，则结果为0，否则为1。
    二进制与运算符（and）：符号为&，表示若两个二进制位都为1，则结果为1，否则为0。
    二进制否运算符（not）：符号为~，表示对一个二进制位取反。
    异或运算符（xor）：符号为^，表示若两个二进制位不相同，则结果为1，否则为0。
    左移运算符（left shift）：符号为<<，详见下文解释。
    右移运算符（right shift）：符号为>>，详见下文解释。
    带符号位的右移运算符（zero filled right shift）：符号为>>>，详见下文解释。

    有一点需要特别注意，位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。
    另外，虽然在 JavaScript 内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。

    异或运算： 异或运算（^）在两个二进制位不同时返回1，相同时返回0
        “异或运算”有一个特殊运用，连续对两个数a和b进行三次异或运算，a^=b; b^=a; a^=b;，可以互换它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。

        var a = 10;
        var b = 99;

        a ^= b, b ^= a, a ^= b;

        a // 99
        b // 10
            
        //这是互换两个变量的值的最快方法。

        异或运算也可以用来取整。
                12.9 ^ 0 // 12

    
    左移运算符（<<）表示将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方（最高位即符号位不参与移动）。
        // 4 的二进制形式为100，左移一位为1000（即十进制的8）,相当于乘以2的1次方
        4 << 1      // 8
        -4 << 1     // -8
        上面代码中，-4左移一位得到-8，是因为-4的二进制形式是11111111111111111111111111111100，左移一位后得到11111111111111111111111111111000，该数转为十进制（减去1后取反，再加上负号）即为-8。

        如果左移0位，就相当于将该数值转为32位整数，等同于取整，对于正数和负数都有效。
        13.5 << 0       // 13
        -13.5 << 0      // -13

        左移运算符用于二进制数值非常方便。
        例子： 使用左移运算符，将颜色的 RGB 值转为 HEX 值。（略）
    
    右移运算符：右移运算符（>>）表示将一个数的二进制值向右移动指定的位数，头部补0，即除以2的指定次方（最高位即符号位不参与移动）。
        右移运算可以模拟 2 的整除运算。
    
    带符号位的右移运算符（>>>）：表示将一个数的二进制形式向右移动，包括符号位也参与移动，头部补0。
        所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（>>）完全一致，区别主要在于负数。

    // 开关作用：
        位运算符可以用作设置对象属性的开关。

            假定某个对象有四个开关，每个开关都是一个变量。那么，可以设置一个四位的二进制数，它的每个位对应一个开关。

            var FLAG_A = 1; // 0001
            var FLAG_B = 2; // 0010
            var FLAG_C = 4; // 0100
            var FLAG_D = 8; // 1000
            上面代码设置 A、B、C、D 四个开关，每个开关分别占有一个二进制位。

            现在假设需要打开A、B、D三个开关，我们可以构造一个掩码变量。

            var mask = FLAG_A | FLAG_B | FLAG_D;
            // 0001 | 0010 | 1000 => 1011
            上面代码对A、B、D三个变量进行二进制或运算，得到掩码值为二进制的1011。

            有了掩码，二进制或运算可以确保打开指定的开关。

            flags = flags | mask;
            二进制与运算可以将当前设置中凡是与开关设置不一样的项，全部关闭。

            flags = flags & mask;

            异或运算可以切换（toggle）当前设置，即第一次执行可以得到当前设置的相反值，再执行一次又得到原来的值。

            flags = flags ^ mask;
            二进制否运算可以翻转当前设置，即原设置为0，运算后变为1；原设置为1，运算后变为0。

            flags = ~flags;
    // 其他运算符
        void： 这个运算符的主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。（具体代码 略）

        逗号运算符：用于对两个表达式求值，并返回后一个表达式的值。
            'a', 'b' // "b"

            var x = 0;
            var y = (x++, 10);
            x // 1
            y // 10

        
    // 运算顺序：
        operator precedence, 用圆括号解决，没必要记

        // 大部分是左结合，只有赋值=，和三元运算符（? : ）才是右结合
    
*/  

/** 错误处理机制 */
/*
// 注意：null转为数值时为0，而undefined转为数值时为NaN。
// 总结
// 以上这6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个函数，代表错误提示信息（message）。

// var err1 = new Error('出错了！');
// var err2 = new RangeError('出错了，变量超出有效范围！');
// var err3 = new TypeError('出错了，变量类型无效！');

// err1.message // "出错了！"
// err2.message // "出错了，变量超出有效范围！"
// err3.message // "出错了，变量类型无效！"


// 除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象。
// function UserError(message) {
//   this.message = message || '默认信息';
//   this.name = 'UserError';
// }
// UserError.prototype = new Error();
// UserError.prototype.constructor = UserError;
// 上面代码自定义一个错误对象UserError，让它继承Error对象。然后，就可以生成这种自定义类型的错误了

// throw语句的作用是手动中断程序执行，抛出一个错误。

var x = -1;
if(x < 0){
    throw new Error('x 必须为正数');
}

// throw也可以抛出自定义错误。
// 实际上，throw可以抛出任何类型的值。也就是说，它的参数可以是任何值。

// JavaScript 提供了try...catch结构，允许对错误进行处理，选择是否往下执行。
// try代码块抛出错误（上例用的是throw语句），JavaScript 引擎就立即把代码的执行，转到catch代码块，或者说错误被catch代码块捕获了。catch接受一个参数，表示try代码块抛出的值。
// catch代码块捕获错误之后，程序不会中断，会按照正常流程继续执行下去。
  try {
    throw "出错了";
  } catch (e) {
    console.log(111);
  }
  console.log(222);
  // 111
  // 222

// try...catch结构允许在最后添加一个finally代码块，表示不管是否出现错误，都必需在最后运行的语句。

// 下面是finally代码块用法的典型场景。
openFile(); 

try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}
// 上面代码首先打开一个文件，然后在try代码块中写入文件，如果没有发生错误，则运行finally代码块关闭文件；
// 一旦发生错误，则先使用catch代码块处理错误，再使用finally代码块关闭文件。

// 下面的例子充分反映了try...catch...finally这三者之间的执行顺序。

function f() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; // 这句原本会延迟到 finally 代码块结束再执行
    console.log(2); // 不会运行
  } finally {
    console.log(3);
    return false; // 这句会覆盖掉前面那句 return
    console.log(4); // 不会运行
  }

  console.log(5); // 不会运行
}

var result = f();
// 0
// 1
// 3

result
// false

// catch代码块之中，触发转入finally代码快的标志，不仅有return语句，还有throw语句！！！

function f(){
    try{
        throw '出错啦';
    }catch(e){
        console.log('捕捉内部错误');
        throw e;
    }finally{
        console.log('finally');
        return false;
    }
}

try{
    f();
}catch(e){
    console.log('外面');
}

// 捕捉内部错误
// finally

// 上面代码中，进入catch代码块之后，一遇到throw语句，就会去执行finally代码块，
// 其中有return false语句，因此就直接返回了，不再会回去执行catch代码块剩下的部分了。

// 注意：try代码块抛出错误（上例用的是throw语句），JavaScript 引擎就立即把代码的执行，转到catch代码块

// do...while循环是有分号的。

// 所有的++运算符都可以用+= 1代替。

// switch...case 结构
function doAction(action) {
    var actions = {
      'hack': function () {
        return 'hack';
      },
      'slash': function () {
        return 'slash';
      },
      'run': function () {
        return 'run';
      }
    };
  
    if (typeof actions[action] !== 'function') {
      throw new Error('Invalid action.');
    }
  
    return actions[action]();
  }
//   因此，建议switch...case结构可以用对象结构代替。
*/


/** 标准库 （略） */

/** 面向对象编程（OOP） -----------------------------------------------*/

/** 构造函数与new命令 */
/*
构造函数就是一个普通的函数，但是有自己的特征和用法。

var Vehicle = function () {
  this.price = 1000;
};
上面代码中，Vehicle就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。

构造函数的特点有两个:
    函数体内部使用了this关键字，代表了所要生成的对象实例。
    生成对象的时候，必须使用new命令。

为了保证构造函数必须与new命令一起使用，
一个解决办法是，构造函数内部使用严格模式，即第一行加上use strict。这样的话，一旦忘了使用new命令，直接调用构造函数就会报错。

function Fubar(foo, bar){
  'use strict';     // 函数内部的this不能指向全局对象，默认等于undefined,js不允许对undefined添加属性
  this._foo = foo;
  this._bar = bar;
}

Fubar()
// TypeError: Cannot set property '_foo' of undefined

另一个解决办法，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。

function Fubar(foo, bar) {
  if (!(this instanceof Fubar)) {
    return new Fubar(foo, bar);
  }

  this._foo = foo;
  this._bar = bar;
}

Fubar(1, 2)._foo // 1
(new Fubar(1, 2))._foo // 1

// new命令的原理：
使用new命令时，它后面的函数依次执行下面的步骤。
    1.创建一个空对象，作为将要返回的对象实例。
    2.将这个空对象的原型，指向构造函数的prototype属性。
    3.将这个空对象赋值给函数内部的this关键字。
    4.开始执行构造函数内部的代码。
    5.也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。

如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

// 另一方面，如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
// 这是因为new命令总是返回一个对象，要么是实例对象，要么是return语句指定的对象

// new.target
函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined。
使用这个属性，可以判断函数调用的时候，是否使用new命令。
function f() {
  if (!new.target) {
    throw new Error('请使用 new 命令调用！');
  }
  // ...
}

f()     // Uncaught Error: 请使用 new 命令调用！

//Object.create() 创建实例对象
构造函数作为模板，可以生成实例对象。但是，有时拿不到构造函数，只能拿到一个现有的对象。
我们希望以这个现有的对象作为模板，生成新的实例对象，这时就可以使用Object.create()方法。

var person1 = {
    name: 'Bob',
    age: 38,
    greeting: function(){
        console.log('Hi, I\'m ' + this.name + '.');
    }
};

var person2 = Object.create(person1);

console.log(person2.name);
console.log(person2.greeting());        //注意 console.log 里还有一个consoke.log， 这时候会有一个undefined的变量打印出来
*********************************************************************************************************
未完待续
*/

/** 面向对象编程 OOP */
/** this 关键字 ：总返回一个对象---》 简单说： this就是属性或方法“当前”所在的对象
 * 
 * 由于对象的属性可以赋给另一个对象，所以属性所在的当前对象是可变的，即this的指向是可变的。

 

var A = {
    name : 'Adam',
    describe: function(){
        return 'name : ' + this.name;
    }
};
var B = {
    name : 'Bob'
};

B.describe = A.describe
console.log(B.describe());      //Name: Bob;   B的describe方法，B.describe()!!!
// A.describe属性被赋给B，于是B.describe就表示describe方法所在的当前对象是B，所以this.name就指向B.name。

function f(){
    return 'Name: ' + this.name;
}

var A = {
    name : 'Adam',
    describe: f
};
var B = {
    name : 'Bob',
    describe:f
};

console.log(A.describe());
console.log(B.describe());      //函数f内部使用了this关键字，随着f所在的对象不同，this的指向也不同。


//只要函数被赋给另一个变量，this的指向就会变。

// var A = {
//     name: '张三',
//     describe: function () {
//       return '姓名：'+ this.name;
//     }
//   };

// var name = '李四';

// var f= A.describe;
// console.log(f()); // "姓名：李四"

// function f() {
//     console.log(this === window);
//   }
// f() // true

var obj = {
    foo: function(){
        console.log(this);
    }
};
obj.foo();

避免多层this:
绑定this的方法: call, apply, bind 来切换/固定this的指向
略。。。以后再看
*
*
*
*
*
*
*
*
*/

/*
// JavaScript 规定，每个函数都有一个prototype属性，指向一个对象。
function Animal(name){
    this.name = name;
}
Animal.prototype.color = 'yellow';  
//构造函数Animal的prototype属性，就是实例对象cat1和cat2的原型对象。原型对象上添加一个color属性，结果，实例对象都共享了该属性。
var cat1 = new Animal('A');
var cat2 = new Animal('B');
// cat2.color = 'black';
console.log(cat1.color + ', ' + cat2.color);
// 如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。

// 总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。

Animal.prototype.walk = function(){
    console.log(this.name + ' is walking');
};

cat1.walk();
*/
// console.log(Object.getPrototypeOf(Object.prototype));   //原型链的尽头就是null
// 如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

// prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
// function P() {}
// console.log(P.prototype.constructor === P); // true
// 由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。

/** 异步操作的模式 ES5
 * 
 * 回调函数 + 事件监听 + 发布/订阅 publish/subscribe pattern
 * 
 */

 /** 异步操作的流程控制
  * 


// function async(arg, callback) {
//     console.log('参数为 ' + arg +' , 1秒后返回结果');
//     setTimeout(function () { callback(arg * 2); }, 1000);
// }
//   上面代码的async函数是一个异步任务，非常耗时，每次执行需要1秒才能完成，然后再调用回调函数。

//如果有六个这样的异步任务，需要全部完成后，才能执行最后的final函数。请问应该如何安排操作流程？(嵌套执行 写起来麻烦 且难以维护)

// 1) 串行执行：
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
  console.log('参数为 ' + arg +' , 1秒后返回结果');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

function series(item) {
  if(item) {
    async( item, function(result) {
      results.push(result);
      return series(items.shift());
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift());

// 2) 并行执行
// 但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。
items.forEach(function(item) {      //forEach方法会同时发起六个异步任务，等到它们全部完成以后，才会执行final函数
    async(item, function(result){
        results.push(result);
        if(results.length === items.length) {
        final(results[results.length - 1]);
        }
    })
});

// 3)并行与串行的结合
// 并行与串行的结合，就是设置一个门槛，每次最多只能并行执行n个异步任务，这样就避免了过分占用系统资源。

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log('参数为 ' + arg +' , 1秒后返回结果');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log('完成: ', value);
}

function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      } else if(running == 0) {
        final(results);
      }
    });
    running++;
  }
}

launcher();
// 上面代码中，最多只能同时运行两个异步任务。变量running记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于0，就表示所有任务都执行完了，这时就执行final函数。
// 这段代码需要三秒完成整个脚本，处在串行执行和并行执行之间。通过调节limit变量，达到效率和资源的最佳平衡。

*/

/** promise 对象 
Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。
    异步操作未完成（pending）
    异步操作成功（resolved）
    异步操作失败（rejected）

这三种的状态的变化途径只有两种。
    从“未完成”到“成功”
    从“未完成”到“失败”
Promise 实例的状态变化只可能发生一次。

异步操作成功，Promise 实例传回一个值（value），状态变为resolved。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。


var p1 = new Promise(function (resolve, reject) {
    resolve('成功');
});
p1.then(console.log, console.error);
// "成功"

var p2 = new Promise(function (resolve, reject) {
    reject(new Error('失败'));
});
p2.then(console.log, console.error);
// Error: 失败

// p1和p2都是Promise 实例，它们的then方法绑定两个回调函数：
// 成功时的回调函数console.log，失败时的回调函数console.error（可以省略）。p1的状态变为成功，p2的状态变为失败，
// 对应的回调函数会收到异步操作传回的值，然后在控制台输出。

// then方法可以链式使用。
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
*/



/* ====================  Udemy ES6 JS: The complete developer's Guide ========= */
/**
 * Array Helper Methods: forEach + map + filter + find + every + some + reduce
 */

/** The forEach Helper --- Array helper Methods
 
colors = ['red','blue','green'];
colors.forEach(function(color){     //对于每一个数组中的元素， 都用forEach这个Iterator Function来做处理
    console.log(color);
});

其效果等同于 用 for 循环来实现，但是forEach更直观，不用声明（var i）等多余的逻辑变量

// Where to use forEach Helper???
// 举例： gmail批量删除spam emails, 在Spam folder文件夹中， 勾选要删除的email，
// 会把要删除的email的identity放入一个名为emails的array中，然后对这个数组用forEach来删除邮件

emails.forEach(function(email){
    deleteEmail(email);
});
//这里不用for loop是因为，for loop 写起来不简洁，而且跟forEach比起来也没有什么特别的地方
*/

/** The map Helper 
// 使用map helper 来建一个新的数组，但是不更改原有数组
//注意， return语句必须有
var numbers = [1,2,3];
var doubleNumbers = [];

var doubled = numbers.map(function(number){
    return number * 2;      //return 就会把执行后的数存在一个新的array中，必须有！
    //number* 2;   没有return时，系统只会建一个[null,null,null]的数组
});
doubled;     //[2,4,6]
// //等同于
// for(var i = 0; i < numbers.length; i++){
//     doubleNumbers.push(numbers[i] * 2);
// }
// doubleNumbers;  //[2,4,6] 

var cars = [
    {model: 'Buick', price:'Cheap'},
    {model: 'Camero', price: 'Expensive'}
];

var price = cars.map(function(car){
    return car.price;
});

console.log(price);

//Where map is used?
// Eg: webpage, rendering lots of data, like facebook, list ur friends posts(profile+words+...)from backend server
// 不需要改变server端数据信息，就用map分到前端页面

//practice；
function pluck(array, property) {
    var result = array.map(function(item){
       return item[property]; 
    });
    return result;
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
console.log(pluck(paints, 'color'));
*/

/** The filter Helper   -- u wanna do any type of filter

 var products = [
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruit'}
 ];

//filter: fruit returns true(add in); vegetable returns false(give it up)
var filterd = products.filter(function(product){
    return product.type === 'fruit';    //1) return!!! 2)判断true/false语句 3）如果用if语句，来return true,多此一举，所以要避免
});

console.log(filterd);
//  // use for loop    -- 但是 将来别人看代码的时候，全是forloop不好读，所以不适合开发一个long-term project
//  var fileterProducts = [];      //subset for products array, just store the product in type of fruit（不更改原数组）
//  for(var i = 0; i < products.length; i ++){
//     if(products[i].type === 'fruit'){
//         fileterProducts.push(products[i]);
//     }
// }
// console.log(fileterProducts);

// more on filtering
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 8 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
 ];

 var filterd = products.filter(function(product){
    return product.type === 'vegetable' 
    && product.quantity > 0 
    && product.price < 10;
 });

 console.log(filterd);

 // When to filter?
 // eg: 找出和新post相同id的comment  ==》 当处理相关的数据集的时候 + 在client 端，需要拿到一些条件过滤的数据
 var post = {id: 4, title: 'New Post'};
 var comments = [
     { postId: 4, content: 'awesome post' },
     { postId: 3, content: 'it was ok' },
     { postId: 4, content: 'neat' },
 ];

 function commentForPost(post, comments){
     return comments.filter(function(comment){
         return comment.postId === post.id;
     });
 }
 console.log(commentForPost(post, comments));

// practice
function reject(array, iteratorFunction) {
    return array.filter(function(item){
        return (! iteratorFunction(item));
    });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
console.log(lessThanFifteen);

*/

/** The find Helper

 */

 /** Promises */
//  terminology of promise
/* 3 state of promises:
1) 'unresolved': waiting for sth to finish
2) 'resolved': sth finished and it all went ok
3) 'rejected': sth finished and sth went bad

2-1) promise--(everything worked out)--> resolved --->then （callback）
3-1) promise--(sth bad happended) --> rejected --> catch(callbacks)

// create Promises
promise = new Promise((resolve, reject) => {    //在浏览器 window里面写
    // resolve();
    reject();
});

promise
    .then(() => {
        console.log('finally finished!');       //resolve() + then()
    })
    .then(() => console.log(' i was also ran!'))     //then chain 可以的，这样写格式也是对的（去掉只包含一行内容的{}）
    .catch(() => console.log('Oh oh'));     //用reject() 才行
*/
/** asynchronous code: 异步编程部分！！！ 


promise = new Promise((resolve, reject) => {  
    //simulating some long running process here
    setTimeout(() => {
        resolve();
    }, 3000);       //wait 3 s 
    // reject();
});

promise
    .then(() => {
        console.log('finally finished!');       
    })
    .then(() => console.log(' i was also ran!'))     
    .catch(() => console.log('Oh oh'));     

// ------------      ----------------
var p1 = new Promise(function (resolve, reject) {
    resolve('成功');
});
p1.then(console.log, console.error);
    // "成功"
    
var p2 = new Promise(function (resolve, reject) {
    reject(new Error('失败'));
});
p2.then(console.log, console.error);
    // Error: 失败
*/

// var arr = [ 'a', 'b', 'c' ];
// arr.forEach(function(i){
//     console.log(i);
// });

// console.log(arr.keys);  // false