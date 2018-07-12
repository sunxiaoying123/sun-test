/** AMD写法 **/
define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
    // 等于在最前面声明并初始化了要用到的所有模块
   a.doSomething();
   if (false) {
       // 即便没用到某个模块 b，但 b 还是提前执行了
       b.doSomething()
   } 
});

/** CMD写法 **/
define(function(require, exports, module) {
   var a = require('./a'); //在需要时申明
   a.doSomething();
   if (false) {
       var b = require('./b');
       b.doSomething();
   }
});

/** sea.js **/
// 定义模块 math.js
define(function(require, exports, module) {
   var $ = require('jquery.js');
   var add = function(a,b){
       return a+b;
   }
   exports.add = add;
});
// 加载模块
seajs.use(['math.js'], function(math){
   var sum = math.add(1+2);
});


