var mysql = require('mysql');
const { GET } = require('./employee-get')
const { POST } = require('./employee-post')
const Request = require('./request')
const Response = require('./response')
const config = require('./config.json')

var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

const apiCall = function(event, callback) {
    const request = new Request(event)
    const response = new Response(event)
    switch (event.httpMethod) {
        case 'GET':
            console.log('get called')
            GET(request, response, connection,callback)
            break;
        case 'POST':
            console.log('post called')
            POST(request, response, connection,callback)
            break;
    }
}

exports.handler = function(event, context, callback) {
    console.log('Event==', event)
    context.callbackWaitsForEmptyEventLoop= false

    apiCall(event,callback)
    // switch (event.httpMethod) {
    //     case 'GET':
    //         console.log('get called')
    //         connection.query('SELECT * from employee', function(error, results, fields) {

    //             response.setBody(results)
    //             // return response.build()
    //             console.log('results===', response.build())
    //             // const res = {
    //             //     statusCode:200,
    //             //     body:JSON.stringify(results),
    //             //     headers:{'Access-Control-Allow-Origin': '*'}
    //             // }
    //             callback(null, response.build())
    //         });
    //         break;
    //     case 'POST':
    //         const employeeData = request.body || []
    //         let query = 'INSERT into employee (first_name,last_name) VALUES'
    //         employeeData.map(({ firstName, lastName }, index) => {
    //             query = query.concat(`('${firstName}','${lastName}')${index<employeeData.length-1?',':''}`)
    //         })
    //         console.log('query', query)

    //         //return new Promise((resolve, reject) => {
    //         //return
    //         connection.query(query, function(error, results, fields) {
    //             console.log('results===', results)
    //             response.setBody(results)
    //             //callback.apply(null, response.build())
    //             return response.build()
    //         });
    //         break;
    // }
}
