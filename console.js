var counter = 10;

console.log("Counter: %d", counter);
setTimeout(()=>{
	console.log('yanchi  6 miao');
},6000);

console.time("Getting data");
//make a database call to retrive the data
setTimeout(()=>{
	console.log('yanchi  5 miao');
},5000);
//getDataFromDataBase();
console.timeEnd('Getting data');

console.info("Program Ended!")