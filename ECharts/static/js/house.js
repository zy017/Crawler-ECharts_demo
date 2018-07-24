var store = (function() {
    var chartStore = {
        pie: null,
        bar: null,
        line: null,
    }

    var o = {
        get: function(key) {
            return chartStore[key]
        },
        set: function(key, value) {
            chartStore[key] = value
        }
    }

    return o
})()

const optionForPie = function(data) {
    var option = {
        title: {
            text: '郑州楼盘（新房）地区占比',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '地区占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    return option
}

const optionForArea = function(area) {
    const data = _.map(area, (v, k) => {
        const o = {
            name: k,
            value: v.length,
        }
        return o
    })
    const option = optionForPie(data)
    return option
}

const optionForBar = function(data) {
    const option = {
        title: {
            text: '郑州各类型楼盘（新房）数量',
        },
        tooltip: {
            trigger: 'axis',
            // trigger: 'item',
            // formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            data: ['楼盘数量']
        },
        xAxis: {
            data: data.axis,
            name: '类型',
            axisLabel: {
                textStyle: {
                    color: '#000'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
        },
        yAxis: {
            name: '楼盘数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                animation: false
            },
            {
                name: '数量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
                data: data.data
            }
        ]
    }
    return option
}

const optionForType = function(type) {
    const data = {
        axis: [],
        data: [],
    }
    _.each(type, (v, k) => {
        data.axis.push(k)
        data.data.push(v.length)
    })
    const option = optionForBar(data)
    return option
}

const optionForLine = function(data) {
    const option = {
        title: {
            text: '郑州各区域楼盘（新房）均价',
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                formatter: function(value, index) {
                    debugger
                    if (index % 2 != 0) {
                        return '\n\n' + value;
                    } else {
                        return value;
                    }
                }
            },
            name: '区域',
            boundaryGap: true,
            type: 'category',
            data: data.name
        },
        yAxis: {
            name: '楼盘价格（元/平方米）',
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [{
            name: '均价',
            data: data.value,
            type: 'line',
            smooth: true
        }]
    };
    return option
}

const optionForYear = function(year) {
    var data = _.map(year, (v, k) => {
        const avg = _.meanBy(v, 'averagePrice')
        const o = {}
        o[k] = avg.toFixed(2)
        return o
    })
    data = Object.assign(...data)
    var key = Object.keys(data)
    var value = key.map(k => data[k])
    var data_1 = {}
    data_1['name'] = key
    data_1['value'] = value
    const option = optionForLine(data_1)
    return option
}

const renderChart = function(d) {
    const data = d

    const area = _.groupBy(data, 'location')
    const areaOption = optionForArea(area)
    const pie = store.get('pie')
    pie.setOption(areaOption)

    const type = _.groupBy(data, 'type')
    const typeOption = optionForType(type)
    const bar = store.get('bar')
    bar.setOption(typeOption)

    const year = _.groupBy(data, 'location')
    const yearOption = optionForYear(year)
    const line = store.get('line')
    line.setOption(yearOption)
}

const fetchHouse = function() {
    const protocol = location.protocol
    if (protocol === 'http:') {
        // 使用 ajax 动态获取数据
        api.fetchHouse(function (d) {
            d = JSON.parse(d)
            renderChart(d)
        })
    } else {
        // 直接使用 JSON 数据 不从后台获取
        var d = houseJSON()
        renderChart(d)
    }
}

const initedChart = function() {
    var stores = [
        'pie',
        'bar',
        'line',
    ]
    _.each(stores, (e, i) => {
        const selector = '#' + e
        const element = document.querySelector(selector)
        const chart = echarts.init(element)
        store.set(e, chart)
    })
}

const __main = function() {
    initedChart()
    fetchHouse()
}

$(document).ready(function() {
    __main()
})
