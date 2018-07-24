var fs = require('fs')

var request = require('sync-request')
var cheerio = require('cheerio')

class House {
    constructor() {
        this.name = ''
        this.averagePrice = 0
        this.type = 0
        this.location = ''
        this.detailedLocation = ''
        this.area = ''
    }
}

var log = console.log.bind(console)

var houseFromDiv = (div) => {
    var e = cheerio.load(div)

    var house = new House()
    var infos = e('.infos')
    house.name = infos.find('.items-name').text()
    house.type = infos.find('.wuyetp').text()
    house.averagePrice = Number(e('.favor-pos').find('span').text())

    var ad = infos.find('.list-map').text().split(' ')
    house.location = ad[1]
    house.detailedLocation = ad[2] + ' ' + ad[4]
    house.area = infos.find('.huxing').children().last().text()
    return house
}

var ensurePath = (path) => {
    var exists = fs.existsSync(path)
    if (!exists) {
        fs.mkdirSync(path)
    }
}

var cachedUrl = (url) => {
    // 确定缓存的文件名
    var path = 'cached_html'
    // 确保文件夹存在
    ensurePath(path)
    var name = url.split('all/')[1].split('/')[0]
    var cacheFile = `${path}/${name}.html`

    // 检查缓存文件是否存在
    // 如果存在就读取缓存文件
    // 如果不存在就下载并且写入缓存文件
    var exists = fs.existsSync(cacheFile)
    if (exists) {
        var data = fs.readFileSync(cacheFile)
        return data
    } else {
        // 用 GET 方法获取 url 链接的内容
        var r = request('GET', url)
        // utf-8 是网页文件的文本编码
        var body = r.getBody('utf-8')
        // 写入缓存
        fs.writeFileSync(cacheFile, body)
        return body
    }
}

var houseFromUrl = (url) => {
    var body = cachedUrl(url)
    // cheerio.load 用来把 HTML 文本(字符串)解析为一个可以操作的 DOM(树)
    var e = cheerio.load(body)
    var houseDivs = e('.key-list').find('.item-mod')
    var house = []
    for (var i = 0; i < houseDivs.length; i++) {
        var div = houseDivs[i]
        var m = houseFromDiv(div)
        house.push(m)
    }
    return house
}

var saveHouse = (house) => {
    var s = JSON.stringify(house, null, 2)
    // 把 json 格式字符串写入到 文件 中
    var fs = require('fs')
    var path = 'house.txt'
    fs.writeFileSync(path, s)
}

var __main = () => {
    var house = []
    for (var i = 0; i < 21; i++) {
        var start = i + 1
        var url = `https://zz.fang.anjuke.com/loupan/all/p${start}/`
        var houseInPage = houseFromUrl(url)
        house = [...house, ...houseInPage]
    }
    saveHouse(house)
}

__main()
