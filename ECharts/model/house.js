var fs = require('fs')

var houseFilePath = 'db/house.json'

const loadHouse = () => {
    const content = fs.readFileSync(houseFilePath, 'utf8')
    const ms = JSON.parse(content)
    return ms
}

var m = {
    data: loadHouse()
}

m.all = function() {
    var ms = this.data
    return ms
}

module.exports = m
