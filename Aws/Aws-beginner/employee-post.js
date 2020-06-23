const POST = function(request, response, connection, callback) {
    console.log('post called')
    // Use the connection

    const employeeData = request.body || []
    let query = 'INSERT into employees (first_name,last_name) VALUES'
    employeeData.map(({ firstName, lastName }) => {
        query = query.concat(`(${firstName},${lastName})`)
    })


    //return new Promise((resolve, reject) => {
    //return
    return connection.query(query, function(error, results, fields) {
        console.log('results===', results)
        response.setBody(results)
        callback(null, response.build())
        // return response.build()
    });

}

module.exports = {
    POST
}
