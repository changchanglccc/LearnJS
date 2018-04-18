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