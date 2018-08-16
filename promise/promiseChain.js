function start() {
    return new Promise((resolve, reject) => {
      resolve('start');
    });
  }
  
  start()
    .then(data => {
      // promise start
      console.log('result of start: ', data);
      return Promise.resolve(1); // p1
    })
    .then(data => {
      // promise p1
      console.log('result of p1: ', data);
      return Promise.reject({
          notRealPromiseException:true
      }); // p2
    })
    .then(data => {
      // promise p2
      console.log('result of p2: ', data);
      return Promise.resolve(3); // p3
    })
    .catch(ex => {
      // promise p3
      console.log('ex: ', ex);
      if(ex.notRealPromiseException){
          //说明正常中止,也即是中止promise p2的执行
          return true
      }
      //真正发生异常
      return false
      // return Promise.resolve(4); // p4
    })
    // .then(data => {
    //   // promise p4
    //   console.log('result of p4: ', data);
    // });