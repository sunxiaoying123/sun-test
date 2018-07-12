
//es8  values和entries函数
const obj = { music: 'mine', author:'jk' };
Object.values(obj);// ['mine','jk'];

Object.values('es8');// ['e','s','8']

const obj1 = { 3: 'a',2: 'b',1: 'c'}
console.log(Object.entries(obj1));// [['1','c'],['2','b'],['3','a']]
console.log(Object.entries('es8')); //[['0','e'],['1','s'],['2','8']]

//getOwnPropertyDescriptor
const obj2 = {
    get es7() { return 7 },
    get es8() {return 8 }
   }
Object.getOwnPropertyDescriptor(obj2);


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
