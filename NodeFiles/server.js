const http = require('http');
// http.createServer((req,res)=>{
    // res.write("Hello from server");
    // res.end();
// }).listen(4500);.

function dataFunc(req,res){
    res.write("Hello from dataFunc");
    res.end();
}

http.createServer(dataFunc).listen(4500);
 
function test(a,b)
{
    return a+b;
}

console.log("Sum : " ,test(2,5));