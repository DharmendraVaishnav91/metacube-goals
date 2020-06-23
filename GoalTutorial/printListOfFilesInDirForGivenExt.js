const readDir = require('./filterDirWithExt')

readDir(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
        console.log(err)
    } else {
        list.map((fileName) => {
            console.log(fileName)
        })
    }
})