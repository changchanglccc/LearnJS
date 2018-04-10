// function add(x,y){
//     return x + y;
// }

// // var operator = add;

// function a(op){
//     return op;
// }

// console.log(a(add(1,1)));


// function f(a,a){
//     console.log(arguments[0]);
// }

// f(1,5);

//------------------------------

// var f = function(a,b){
//     'use strict';
//     console.log(arguments[0]);
//     console.log(arguments[1]); 
    
//     arguments[0] = 5;
//     return a + b;
// }

// console.log(f(1,2,3)); 

//------------------------------
// function f1(){
//     var a = 99;
//     function f2(){
//         return a;
//     }
//     return f2;
// }

// var result = f1();      //拿变量result接着这个函数表达式（函数f1的返回值就是函数f2），然后通过result() 来得到值
// console.log(result());

// console.log(f1()());    //没见到这么写的

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

//------------------------------
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
// console.log(obj1.valueOf().toString());