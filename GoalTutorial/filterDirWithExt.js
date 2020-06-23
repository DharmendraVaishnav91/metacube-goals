const fs = require('fs')
const path = require('path')

module.exports = function (dirPath, extensionSuffix, callback) {
    const extension = '.' + extensionSuffix
    fs.readdir(dirPath, (err, list) => {
        if(err){
            callback(err,null)
        }else{
            const filteredFiles = list.filter((file) => {
                return path.extname(file) === extension
            })
            callback(null,filteredFiles)
        }
    })
}