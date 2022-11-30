// const {x,y} =require('./data')
const fs = require('fs')
// const writeFile = require('fs').writeFileSync; 
const data =require('./data')

//To Create new file : 
// fs.writeFileSync("hello.txt","File created by fs.writeFileSync")
// console.log("Directory Name : " , __dirname," , File Name :",__filename)
// writeFile("NewFile.txt","New Text")
console.log("Hello World",data.x+data.y)
// console.log("Hello World",x+y)

console.log(data.z() ,":addition")

let res= data.arr.filter((i)=>{
    return i>=4
})

console.log(res)