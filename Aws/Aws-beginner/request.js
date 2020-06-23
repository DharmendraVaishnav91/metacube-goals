class Request {

    constructor(event) {
        this.event = event
        this.method = event.httpMethod
        this.headers = event.headers || {}
        this.body = this._parseBodyFromEvent(event)
        this.queryStringParameters = event.queryStringParameters || {}
        this.pathParameters = event.pathParameters || {}
    }

    _parseBodyFromEvent(event) {
        if (!event.body) {
            return {}
        }

        return JSON.parse(event.body)
    }

}

module.exports = Request
