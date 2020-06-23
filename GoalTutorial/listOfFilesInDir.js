const fs = require('fs')
const path = require('path')

const listFilesInDir = (dirPath, extensionSuffix) =>{
    const extension = '.'+ extensionSuffix
    fs.readdir(dirPath, (err, list) => {
        const filteredFiles = list.filter((file) => {
            const matched = path.extname(file) === extension
            if(matched){
                 console.log(file)
                 return matched
             }
        })

    })
}

listFilesInDir(process.argv[2],process.argv[3])