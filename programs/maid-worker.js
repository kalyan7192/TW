self.onmessage = () => {
    let sum = 0;
    let a = 1; 
    let b = 1000;
    for (var i=a;i<=b;i++){
        sum += i;
    }
    self.postMessage(sum)
};