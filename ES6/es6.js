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

    优点： 不需要遍历整个数组 就能找到自己寻找的元素
    缺点： find helper只可以找到第一次出现的某个元素并且返回

        var users=[
            { name: 'Jill'},
            { name: 'Alex'},
            { name: 'Bill'},
            // { name: 'Alex'},    //这个不会被find helper找到的
        ];

        users.find(function(user){
            return user.name === 'Alex';    // 必须有 return！
            // if(user.name === 'Alex'){   //和这个一样 但是这个写起来繁琐
            //     return true;
            // }
        });

        console.log(user);

        // var user;

        // for(var i= 0;i < users.length; i++){        //需要遍历整个组 来得到这个名为Alex的对象
        //     if(users[i].name === 'Alex'){
        //         user = users[i];
        //         break;  //表示一旦找到Alex就停止搜索 省的浪费时间
        //     }
        // }

        example1:
            function Car(model){
                this.model = model;
            }

            var cars =[
                new Car('Buick'),
                new Car('Camaro'),
                new Car('Focus')
            ];

            cars.find(function(car){
                return car.model==='Focus';
            });



var posts = [
    { id:1, title:'new post'},
    { id:2, title:'old post'}
];

var comment = { postId:1, content: 'Great Post'};

function postForComment(posts, comment){
    return posts.find(function(post){       //why Cannot read property 'find' of undefined???
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts.comment));
 */


/** The Every Helper & the Some Helper
 * sample1:
        var computers=[
            { name: 'Apple', ram: 24},
            { name: 'Compaq', ram: 4},
            { name: 'HP', ram: 32},
        ];

        computers.every(function(computer){     // 更简洁 易懂
            return computer.ram > 16;   //1. return关键字 2. 查看是不是所有的computer的ram都>16  
        });

        computers.some(function(computer){
            return computer.ram >16;    //1. return关键字!!! 2. 查看是不是存在的computer的ram都>16 
        });
        // var allComputersCanRunProgram = true;
        // var onlySomeComputersCanRunProgram = false;

        // for(var i = 0; i < computers.length; i ++){
        //     var computer = computers[i];

        //     if(computer.ram < 16){
        //         allComputersCanRunProgram = false;
        //     } else{
        //         onlySomeComputersCanRunProgram = true;
        //     }
        // }

    sample2:
        var names = [
            "Alexandria",
            "Matthew",
            "Joe"
        ];

        names.every(function(name){
            return name.length > 4;
        });

        names.some(function(name){
            return name.length > 4;
        });
    

    //practice 当验证一个表格的时候，有username，有passport， 有birthday等一系列的数据字段进来，用every helper就很好
        function Field(value){
            this.value = value;
        }

        Field.prototype.validate = function(){
            return this.value.length > 0;
        }

        var username = new Field("BigGirl");
        var password = new Field("my_password");
        var birthday = new Field("10/10/2010");

        // console.log(username.validate() && password.validate());     //为避免&& 每一个字段 所以选用every helper

        var fields = [username, password, birthday];

        var formIsvalid = fields.every(function(field){
            return field.validate();
        });         // console.log(formIsvalid);

        if(formIsvalid){
            //allow user to submit!
        }else{
            //show an error message
        }
*/

/** The reduce helper
        sample1:
            var numbers = [10,20,30];
            var sum = 0;

            for(var i = 0; i < numbers.length; i++){
                sum += numbers[i];
            }

            console.log(sum);

            console.log(numbers.reduce(function(sum, number){   //sum takes the initial value
                return sum + number;
            }, 0));     // 0 is initial value
        
        sample2:
            var primaryColors = [
                { color: "red"},
                { color: "green"},
                { color: "blue"}
            ];

            var now = primaryColors.reduce(function(previous, primaryColor){        //use previous/accumulator
                previous.push(primaryColor.color);

                return previous;    // 记得return关键字！！！
            }, []);     // 起始是个空数组

            console.log(now);

        sample3:
        // reduce有很多用途 不止是做sum， 举例： 判断字符串中的括号是否平衡(JOB ~~~~)
        // 注意 reduce是针对一个array的，所以要把字符串转换为array

        function balancedParens(string){
            return !string.split("").reduce(function(previous, char){    // 为了让他返回的是个boolean，加一个！
                if(previous < 0){ return previous;} //要求不能以后括号开头
                if(char === "("){ return ++previous;}
                if(char === ")"){ return --previous;}

                return previous;
            }, 0);
        }

        console.log(balancedParens("((((asfqeq)"));   // return 3 which means unbalanced / false
        console.log(balancedParens("(())"));    //true
        console.log(balancedParens(")("));    //false, 


    // hardmode question: Write a function that will remove all duplicate values from an array: use reduce and find helper
        function unique(array) {
            return array.reduce(function(previous, item){
                if(!previous.find(function(i){
                    return i === item;
                })){
                    previous.push(item);
                }
                return previous;
            }, []);
        }
        
        var numbers = [1,1,2,3,4,4];
        console.log(unique(numbers));
*/


/** Const / Let 
    ES6 中 不再使用var 来声明变量，会使用Const 或者 Let！ 会使代码更易读

    Const: 常量， 其值永远不会改变     //读别人代码时， 可以放心的知道这个值的意义，并且它不会改变
    Let: 变量，值可以改变

        // var name = "Jill";
        // var title = "Software Engineer";
        var hourlyWage = 40;

        //ES6
        const name = "Jill";
        let title = "Software Engineer"; 
        title = "Senior Software Engineer";
        let hourlyWage = 45;
        // name = "Bill";       // error, cannot assign new value to a const
        // console.log(name);
        console.log(title);

    // what Const / Let solve...

*/

/** Template strings
 * 
 * Sample1：
        function getMessage(){
            // const year = new Date().getFullYear();
            // // return "The year is " + year;   //es5
            // return `The year is ${year + 1}`;   //ES6 template string, 改双引号为back ticks
            return `The year is ${ new Date().getFullYear() }`;

            //所有的合法的js表达式 都可以放到${}这个里面！
        }

        console.log(getMessage());

    sample2：
        mydata = {
            device_id: '001',
            guid: '1234',
            username: 'jenny'
        }

        function show(data){
            return `device_id: ${data.device_id}, guid: ${data.guid}, username: ${data.username}.`;
        }

        console.log(show(mydata));


        const year = 2016;
        const yearMessage = `The year is ${year}`;  
        // const yearMessage = `${year}`;  //NO！！！注意 如果只想把year的值给yearMessage，不要“The year is ”这串文字，那么就直接用year赋值就行
 */

/** Fat Arrow Functions 

    // const add = function(a, b){ //es5
    //     return a + b;
    // }


    const add = (a, b) => { //es6, use => instead of function key word
        return a + b;
    }
    ---------------------

    // 如果 function里面只有一个js短语句，则可以这样简写
    const add = (a, b) => a + b;
    console.log(add(1,2));

    // const double = number => {  //如果函数参数只有一个 可以省去（）
    //     return 2 * number;
    // };
    const double = number => 2 * number;
    console.log(double(10));

    const numbers = [1,2,3];
    numbers.map(number => 2 * number);  //可以简写成这样
    // numbers.map(function(number){
    //     return 2 * number;
    // });
    -----------------------

    //When to use arrow function

    const team = {
        members: ['jane', 'bill'],
        teamName: 'Superem',
        teamSummary: function(){
            // this === team(因为=>)
            return this.members.map(member =>{
                return `${member} is on ${team.teamName}`;  //team.teamName == this.teamName
            });
        }
    }
    console.log(team.teamSummary());
*/

/** Enhanced Object Literals
 * 
    // Sample： bookstore
        function createBookShop(inventory){
            return {
                // inventory: inventory,   // what we pass into this funtion
                // inventoryValue: function(){
                //     return this.inventory.reduce((total,book) => total + book.price,0);
                // },
                // priceForTitle: function(title){
                //     return this.inventory.find(book => book.title === title).price;
                // }

                inventory,  //es6
                inventoryValue(){   // Enhanced Object Literals(去掉function，直接写在属性后面 当成一个function)
                        return this.inventory.reduce((total,book) => total + book.price,0);
                },
                priceForTitle(title){
                    return this.inventory.find(book => book.title === title).price;
                }
            };
        }


        const inventory = [
            { title: 'Harry Potter', price: 10},
            { title: 'Javascript DOM', price: 15}
        ]

        const bookShop = createBookShop(inventory);

        console.log(bookShop.inventoryValue());
        console.log();
        console.log(bookShop.priceForTitle('Harry Potter'));

    sample2:
        function saveFile(url, data){
            // $.ajax({ method: 'POST', url: url, data: data });
            // $.ajax({ method: 'POST', url, data });
            $.ajax({ 
                url, 
                data, 
                method: 'POST' 
            });
        }

        const url = "http://fileupload.com";
        const data = { color: 'red'};

        saveFile(url, data);

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
