let promise = new Promise(function(resolve, reject){
    resolve(1);
    setTimeout(()=>resolve(2),2000);
})
promise.then(alert);// kết quả hiển thị là : 1