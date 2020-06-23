const http = require('http')

const makeGetApiCall = (url) => {
    http.get(url, (response) => {

        response.setEncoding('utf8')
        let rawData = ''

        response.on('data', (data) => {
            rawData += data
        })

        response.on('end', () => {

            // const parsedData = JSON.parse(rawData)
            console.log(rawData.length)
            console.log(rawData)
        })
    })
}

makeGetApiCall(process.argv[2])