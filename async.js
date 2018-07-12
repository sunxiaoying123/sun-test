var async = require('async');
//series 串行执行  按照顺序一次执行。
/*async.series({
	one: function(callback){
		callback(null, 1);
	},
	two: function(callback){
		callback(null, 2);
	}
},function(err, results) {
	console.log(results);
});*/  //{ one: 1, two: 2 }


//每个函数产生的值，都将传给下一个函数
/*async.waterfall([
	function(callback){
		callback(null, 'one', 'two');
	},
	function(arg1, arg2,callback){
	  // arg1 now equals 'one' and arg2 now equals 'two'
		callback(null, 'three');
	},
	function(arg1, callback){
		// arg1 now equals 'three'
		callback(null, 'done');
	}
], function (err, result) {
   // result now equals 'done'
   if(err){
   	return console.log(err);
   }
   console.log(result);
});*/  //done

//parallel函数是并行执行多个函数，每个函数都是立即执行，不需要等待其它函数先执行。
/*async.parallel([
	function(callback){
		callback(null, 'one');
	},
	function(callback){
		callback(null, 'two');
	}
],
function(err, results){
	if(err){
   	return console.log(err);
   }
   console.log(results);
}); */ //[ 'one', 'two' ]


//parallelLimit函数和parallel类似，但是它多了一个参数limit。
//limit参数限制任务只能同时并发一定数量，而不是无限制并发，示例如下：
async.parallelLimit([
	function(callback){
		callback(null, 'one');
	},
	function(callback){
		for(let i=0;i<30;i++){
			console.log('i=',i);
		}
		callback(null, 'two');
	},
	function(callback){
		callback(null, 'three');
	}

],
2,
function(err, results){
	console.log(results);
});




