const fs = require('fs')


fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(data){

        const noOfLines = data.toString().split('\n').length - 1
        console.log(noOfLines)
        
    }
})
