const GET = function(request, response, connection, callback) {

    // Use the connection
    //return new Promise((resolve, reject) => {
    //return
    return connection.query('SELECT * from employee', function(error, results, fields) {
        console.log('results===', results)
        response.setBody(results)
        // response.build()
        callback(null, response.build())
    });
}

module.exports = {
    GET
}
