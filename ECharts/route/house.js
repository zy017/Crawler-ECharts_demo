const house = require('../model/house')


var all = {
    path: '/api/house/all',
    method: 'get',
    func: function(request, response) {
        var ms = house.all()
        var r = JSON.stringify(ms)
        response.send(r)
    }
}

var routes = [
    all,
]

module.exports.routes = routes
