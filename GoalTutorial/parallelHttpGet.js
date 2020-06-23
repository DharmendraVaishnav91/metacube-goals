const http = require('http')
const async = require('async')


const printResults = (finalData) => {
    Object.keys(finalData).map((data) => {
        console.log(finalData[data])
    })
}

const multipleApisGet = (urls) => {
    let count = 0
    const finalData = {}
    urls.map((url, index) => {
        http.get(url, (res) => {
            finalData[index] = ''
            let rawData = ''
            res.setEncoding('utf8')

            res.on('data', (data) => {
                rawData += data
            })

            res.on('end', () => {
                finalData[index] = rawData
                count++
                if (count == urls.length) {

                    printResults(finalData)
                }

            })
        })
    })
}


multipleApisGet([process.argv[2], process.argv[3], process.argv[4]])