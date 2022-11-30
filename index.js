const http = require('http')
const data =require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type': 'application\json'});
    res.write(JSON.stringify(data));
    console.log(res,"res")
    res.end();
}).listen(4500)