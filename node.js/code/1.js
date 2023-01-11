const fs = require('fs')
fs.readFile('./code/files/11.txt','utf-8',function(err,dateStr){
    console.log(err)
    console.log('----')
    console.log(dateStr)
})