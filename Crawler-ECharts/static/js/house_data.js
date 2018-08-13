const houseJSON = function() {
    var d = [
  {
    "name": "保利文化广场",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 郑州市高新区科学大道与银屏路交汇处",
    "area": "建筑面积：33-157㎡"
  },
  {
    "name": "普罗理想国",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道与雁鸣大道交会处",
    "area": "建筑面积：129-307㎡"
  },
  {
    "name": "亚新海棠公馆",
    "averagePrice": 17500,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经南九路与经开十八大街交汇处",
    "area": "建筑面积：140-200㎡"
  },
  {
    "name": "世茂云尚城",
    "averagePrice": 16500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 航海东路城东路交汇处",
    "area": "建筑面积：44-127㎡"
  },
  {
    "name": "和昌湾景国际",
    "averagePrice": 10500,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "中原万达 汝河路,近西三环",
    "area": "建筑面积：39-142㎡"
  },
  {
    "name": "居易西郡原著",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路",
    "area": "建筑面积：148-222.95㎡"
  },
  {
    "name": "融创中永中原大观",
    "averagePrice": 21700,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 郑州市中州大道北三环交会处西北",
    "area": "建筑面积：107-150㎡"
  },
  {
    "name": "融创城开中原宸院",
    "averagePrice": 15512,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 开元路与天河路交叉口路西",
    "area": "建筑面积：89-143㎡"
  },
  {
    "name": "佳兆业悦峰",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 文化路与中兴路交会处",
    "area": "建筑面积：99-167㎡"
  },
  {
    "name": "福晟谦祥钱隆城",
    "averagePrice": 0,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道",
    "area": "建筑面积：87-142㎡"
  },
  {
    "name": "金地格林小城",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 桃贾路",
    "area": "建筑面积：87.73-152.95㎡"
  },
  {
    "name": "金地名悦",
    "averagePrice": 12800,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海东路与凤栖路交汇处",
    "area": "建筑面积：89-140㎡"
  },
  {
    "name": "融信城市之窗（郑州）",
    "averagePrice": 12360,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑开大道与文通路交会处北400米路东",
    "area": "建筑面积：23-51㎡"
  },
  {
    "name": "朗悦公园府",
    "averagePrice": 15800,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 科学大道与雪松路交会处南500米",
    "area": "建筑面积：76-160㎡"
  },
  {
    "name": "新城郡望府",
    "averagePrice": 8410,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑州荥阳市郑上路与飞龙路交会处西南角",
    "area": "建筑面积：95-140㎡"
  },
  {
    "name": "华润悦景湾",
    "averagePrice": 11572,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "科学大道 高新区科学大道与红松路交叉口北1500米",
    "area": "建筑面积：78-120㎡"
  },
  {
    "name": "豫发白鹭源春晓",
    "averagePrice": 9800,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州市航空港区太湖路与长安路交会处北...",
    "area": "建筑面积：71.51-149.5㎡"
  },
  {
    "name": "正弘中央公园",
    "averagePrice": 9800,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 雍州路太湖路交汇处",
    "area": "建筑面积：88-143㎡"
  },
  {
    "name": "万科长基云庐",
    "averagePrice": 11150,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 雁鸣大道与雁月大道交汇处",
    "area": "建筑面积：172-360㎡"
  },
  {
    "name": "龙湖锦艺城",
    "averagePrice": 8500,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖东道2号",
    "area": "建筑面积：33-183㎡"
  },
  {
    "name": "九龙城",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 桐柏路",
    "area": "建筑面积：83.09-148.1㎡"
  },
  {
    "name": "万科百荣万商国际荣寓",
    "averagePrice": 9000,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "二七 郑州市二七区大学南路南四环交会处东南",
    "area": "建筑面积：25㎡"
  },
  {
    "name": "康桥悦蓉园",
    "averagePrice": 18000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 华夏大道与经南十二路交汇处西300米",
    "area": "建筑面积：90-185㎡"
  },
  {
    "name": "绿城明月江南",
    "averagePrice": 7900,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥泽大道汜河路交叉口",
    "area": "建筑面积：95-165㎡"
  },
  {
    "name": "碧桂园龙城天悦",
    "averagePrice": 8500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路与荥泽大道交汇处东北角",
    "area": "建筑面积：96-273㎡"
  },
  {
    "name": "万科溪望",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 郑东商都路凤凰大街向南500米",
    "area": "建筑面积：95-143㎡"
  },
  {
    "name": "万科城",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 科学大道与红松路交会处向北700余米",
    "area": "建筑面积：31-143㎡"
  },
  {
    "name": "金科城",
    "averagePrice": 15800,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 月桂路21号",
    "area": "建筑面积：117.4-144㎡"
  },
  {
    "name": "锦绣山河",
    "averagePrice": 11000,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "嵩山南路 庆泰路7号",
    "area": "建筑面积：50-368.7㎡"
  },
  {
    "name": "亚星盛世云水居",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 嵩山南路",
    "area": "建筑面积：101.13-178.37㎡"
  },
  {
    "name": "恒大城",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 白桦路,近银杏路",
    "area": "建筑面积：81.85-141.46㎡"
  },
  {
    "name": "朗悦公园道1号",
    "averagePrice": 10500,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 雪松路",
    "area": "建筑面积：38-171㎡"
  },
  {
    "name": "荣盛祝福花语水岸",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "化工路 高新区农业西路与西四环交会处北500米",
    "area": "建筑面积：72-133㎡"
  },
  {
    "name": "花漾里",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 南阳路兴隆铺路交会处向西500米路南",
    "area": "建筑面积：39.39-143.59㎡"
  },
  {
    "name": "永威逸阳溪畔",
    "averagePrice": 8500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 科学大道,近建设路",
    "area": "建筑面积：113.42-194.47㎡"
  },
  {
    "name": "信保春风十里",
    "averagePrice": 17000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 华夏大道",
    "area": "建筑面积：84-113㎡"
  },
  {
    "name": "鑫苑名城",
    "averagePrice": 10300,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山南路",
    "area": "建筑面积：22-150㎡"
  },
  {
    "name": "阳光城丽景湾",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 中华路,近城郊线",
    "area": "建筑面积：77-133㎡"
  },
  {
    "name": "建业春天里",
    "averagePrice": 12820,
    "type": "别墅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 万三公路",
    "area": "建筑面积：426.2-578.53㎡"
  },
  {
    "name": "华瑞紫韵城",
    "averagePrice": 13600,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 建设西路,近长椿路",
    "area": "建筑面积：75-143㎡"
  },
  {
    "name": "鑫苑国际新城",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 紫荆山路",
    "area": "建筑面积：51-186㎡"
  },
  {
    "name": "航美国际智慧城",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "薛店 京港澳高速薛店出口西3公里",
    "area": "建筑面积：80-190㎡"
  },
  {
    "name": "路劲国际城",
    "averagePrice": 9600,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道2996号",
    "area": "建筑面积：78.54-165.56㎡"
  },
  {
    "name": "鸿盛新城4期·青春里",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 许昌路西段26号",
    "area": "建筑面积：42-140㎡"
  },
  {
    "name": "亚星金运外滩",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 嵩山南路",
    "area": "建筑面积：82-143㎡"
  },
  {
    "name": "昌建君悦府",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与南四环交会处东200米路南",
    "area": "建筑面积：120-143㎡"
  },
  {
    "name": "九龙新城",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 新安路",
    "area": "建筑面积：88.99-145㎡"
  },
  {
    "name": "正商智慧城",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路南水北调河向南300米路西",
    "area": "建筑面积：88.37-182.92㎡"
  },
  {
    "name": "亚新嵩山路新公馆",
    "averagePrice": 9700,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与南三环交叉口向南2000米路西",
    "area": "建筑面积：28-37㎡"
  },
  {
    "name": "融侨悦澜庭",
    "averagePrice": 12900,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山南路,近006乡道",
    "area": "建筑面积：46-125.99㎡"
  },
  {
    "name": "建业比华利庄园",
    "averagePrice": 7200,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原大道与郑新大道交汇处",
    "area": "建筑面积：85-142㎡"
  },
  {
    "name": "华润紫云府",
    "averagePrice": 19000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 东风南路与陇海路交叉口向南800m",
    "area": "建筑面积：80-155㎡"
  },
  {
    "name": "融创美盛象湖壹号",
    "averagePrice": 18500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与雁鸣路交会处",
    "area": "建筑面积：135-190㎡"
  },
  {
    "name": "融创华夏观澜壹号",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 广惠街,近郑汴物流通道",
    "area": "建筑面积：105-195㎡"
  },
  {
    "name": "华南城中园",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 创新路,近双湖大道",
    "area": "建筑面积：76.5-140.53㎡"
  },
  {
    "name": "郑北孔雀城",
    "averagePrice": 4700,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "武陟 郑焦城铁武陟高铁站东2000米",
    "area": "建筑面积：75-180.17㎡"
  },
  {
    "name": "碧桂园西湖",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 中国·郑州·西流湖（农业路西三环，雕...",
    "area": "建筑面积：88-142㎡"
  },
  {
    "name": "旭辉正荣首府",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山南路,近南四环",
    "area": "建筑面积：89-134㎡"
  },
  {
    "name": "雅居乐春森湖畔",
    "averagePrice": 12200,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 金水东路与屏华路交叉口南200米",
    "area": "建筑面积：96-151㎡"
  },
  {
    "name": "永威城",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 中州大道",
    "area": "建筑面积：89.15-166.78㎡"
  },
  {
    "name": "新芒果春天双糖公寓",
    "averagePrice": 11750,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道与长椿路交叉口南300米路西",
    "area": "建筑面积：38.91-63.41㎡"
  },
  {
    "name": "融创金林金水府",
    "averagePrice": 18900,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 未来路与福元路交汇处",
    "area": "建筑面积：113-190㎡"
  },
  {
    "name": "万科美景魅力之城",
    "averagePrice": 10500,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 雍州路飞航路交会处",
    "area": "建筑面积：89-115㎡"
  },
  {
    "name": "润丰聚尚",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "薛店 世纪大道与金河大道交汇处西200米",
    "area": "建筑面积：79-135㎡"
  },
  {
    "name": "蓝光凤湖长岛国际社区",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 中州大道和长江大道交汇处往东300米路...",
    "area": "建筑面积：96-180㎡"
  },
  {
    "name": "银基国际旅游度假区",
    "averagePrice": 8500,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 观老路,近X028",
    "area": "建筑面积：90-152㎡"
  },
  {
    "name": "泰山誉景",
    "averagePrice": 17000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 花园路与北三环交会处东100米路北",
    "area": "建筑面积：83.13-118.81㎡"
  },
  {
    "name": "谦祥福晟兴隆城",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 兴隆铺路",
    "area": "建筑面积：66-128㎡"
  },
  {
    "name": "东熙汇",
    "averagePrice": 11000,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海东路与前程大道交汇处西北角",
    "area": "建筑面积：23-44.51㎡"
  },
  {
    "name": "鑫苑德润珺园",
    "averagePrice": 14980,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 二七区南三环与行云路交会处东北角",
    "area": "建筑面积：78-157㎡"
  },
  {
    "name": "郑西鑫苑名家",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路",
    "area": "建筑面积：87.71-149.85㎡"
  },
  {
    "name": "恒大金碧天下半城湖",
    "averagePrice": 8500,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 长江大道与太行大道交汇处西南角",
    "area": "建筑面积：84-146㎡"
  },
  {
    "name": "泰宏建业国际城",
    "averagePrice": 13700,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 荆胡街9号",
    "area": "建筑面积：77.37-160.16㎡"
  },
  {
    "name": "亚星观邸",
    "averagePrice": 18000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山南路与南三环交汇处向南300米路东",
    "area": "建筑面积：233.35-368.7㎡"
  },
  {
    "name": "绿地公园城",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 郑新路南四环向南1000米",
    "area": "建筑面积：78-183㎡"
  },
  {
    "name": "中岳俪景湾",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 鼎瑞街,近文治路",
    "area": "建筑面积：75.57-124.75㎡"
  },
  {
    "name": "亚星江南小镇",
    "averagePrice": 7600,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 许昌路与淮阳路交汇处东100米",
    "area": "建筑面积：92.24-225.87㎡"
  },
  {
    "name": "清华城",
    "averagePrice": 17500,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 中州大道与货站街交汇处西",
    "area": "建筑面积：45-65㎡"
  },
  {
    "name": "长江一号宏图",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 京广南路,近赣江路",
    "area": "建筑面积：77.99-144㎡"
  },
  {
    "name": "万科天伦紫台",
    "averagePrice": 15800,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 大河路,近文化北路",
    "area": "建筑面积：86-143㎡"
  },
  {
    "name": "碧桂园天玺",
    "averagePrice": 22000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经开第一大街,近经北三路",
    "area": "建筑面积：82-140㎡"
  },
  {
    "name": "碧桂园龙城",
    "averagePrice": 7800,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 索河路,近荥泽大道",
    "area": "建筑面积：95-274㎡"
  },
  {
    "name": "清华大溪地",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 商隐路",
    "area": "建筑面积：86-143㎡"
  },
  {
    "name": "正弘高新数码港",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 科学大道",
    "area": "建筑面积：86.57-88.47㎡"
  },
  {
    "name": "阳光城丽景公馆",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 西三环,近中原西路",
    "area": "建筑面积：72-113㎡"
  },
  {
    "name": "蓝城桃源春晓",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 丹江路86号",
    "area": "建筑面积：134-270㎡"
  },
  {
    "name": "正商林语溪岸",
    "averagePrice": 12500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 大河路",
    "area": "建筑面积：37.33-140㎡"
  },
  {
    "name": "谦祥万和城",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "科学大道 长椿路",
    "area": "建筑面积：32.38-185㎡"
  },
  {
    "name": "东润玺城",
    "averagePrice": 8800,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路",
    "area": "建筑面积：88.62-110.26㎡"
  },
  {
    "name": "经开万锦城",
    "averagePrice": 17000,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海路",
    "area": "建筑面积：21-124.9㎡"
  },
  {
    "name": "鸿园VILLA-X",
    "averagePrice": 40000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 鸿宝路鸿苑路交叉口向北800米",
    "area": "建筑面积：246264㎡"
  },
  {
    "name": "东润城",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 商都大道,近福佑路",
    "area": "建筑面积：95-112㎡"
  },
  {
    "name": "汇泉西悦城",
    "averagePrice": 12600,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 西四环",
    "area": "建筑面积：75-128㎡"
  },
  {
    "name": "恒大山水城",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 陇海西路",
    "area": "建筑面积：95-195㎡"
  },
  {
    "name": "万科荣成兰乔圣菲",
    "averagePrice": 11500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 广惠街,近郑汴物流通道",
    "area": "建筑面积：124-170㎡"
  },
  {
    "name": "蓝天商务花园",
    "averagePrice": 14000,
    "type": "别墅",
    "location": "航空港区",
    "detailedLocation": "航空港 云港路",
    "area": "建筑面积：276.73-276.73㎡"
  },
  {
    "name": "碧桂园万山湖壹号",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 陇海快速路索河湿地公园（丁店水库）西...",
    "area": "建筑面积：115-310㎡"
  },
  {
    "name": "永威南樾",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港四街",
    "area": "建筑面积：82.67-139.52㎡"
  },
  {
    "name": "郑东碧桂园",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 人文路,近郑开大道",
    "area": "建筑面积：118-266㎡"
  },
  {
    "name": "英协生生银河居",
    "averagePrice": 23000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 相济路,近熊儿河路",
    "area": "建筑面积：96.9-144.68㎡"
  },
  {
    "name": "名门紫园",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 人文路",
    "area": "建筑面积：105.45-302.95㎡"
  },
  {
    "name": "万科民安云城",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 开元路金河路交叉口向北约1公里",
    "area": "建筑面积：89-141㎡"
  },
  {
    "name": "正商滨河铭筑",
    "averagePrice": 11500,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经开十五大街与经南九路",
    "area": "建筑面积：36-43㎡"
  },
  {
    "name": "盛世卧龙城",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 华山路28号",
    "area": "建筑面积：85.01-170.66㎡"
  },
  {
    "name": "青风公园",
    "averagePrice": 17500,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经开十七大街,近经南十二路",
    "area": "建筑面积：97-129㎡"
  },
  {
    "name": "永丰乐城",
    "averagePrice": 10500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥云路",
    "area": "建筑面积：97.45-115㎡"
  },
  {
    "name": "正商城",
    "averagePrice": 13600,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 航海路与碧云路交叉口东北角",
    "area": "建筑面积：43.27-138.19㎡"
  },
  {
    "name": "融创中原壹号院",
    "averagePrice": 60000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 如意东路朝阳路",
    "area": "建筑面积：191-319㎡"
  },
  {
    "name": "康桥东麓园",
    "averagePrice": 22000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水区东三环杨金路交汇处向西500米路...",
    "area": "建筑面积：129-142㎡"
  },
  {
    "name": "正弘城丽汀公寓",
    "averagePrice": 26000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 东风路花园路交会处西南角",
    "area": "建筑面积：58-111㎡"
  },
  {
    "name": "宏光合园",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 第七大街99号",
    "area": "建筑面积：56.99-128㎡"
  },
  {
    "name": "海亮时代ONE",
    "averagePrice": 12000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 花园路与宏康路交会处向西约700米路南",
    "area": "建筑面积：33-45㎡"
  },
  {
    "name": "国宾中心喜堂",
    "averagePrice": 17000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "森林公园 中州大道与天伦路交叉口",
    "area": "建筑面积：39-83.3㎡"
  },
  {
    "name": "万科美景世玠",
    "averagePrice": 34000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水区黄河路南阳路向北100米",
    "area": "建筑面积：127-276㎡"
  },
  {
    "name": "龙源世纪龙城",
    "averagePrice": 16900,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 石化路9号",
    "area": "建筑面积：87-142.77㎡"
  },
  {
    "name": "开封恒大帝景",
    "averagePrice": 9800,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 郑开大道与九大街交会处向北500米",
    "area": "建筑面积：102-143㎡"
  },
  {
    "name": "恒大悦龙台",
    "averagePrice": 35000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 北湖外环路,近龙翔八街",
    "area": "建筑面积：139-200㎡"
  },
  {
    "name": "荣盛华府",
    "averagePrice": 45000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区九如路朝阳路交汇处",
    "area": "建筑面积：180-200㎡"
  },
  {
    "name": "开封恒大文化旅游城",
    "averagePrice": 9900,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 郑开新区，开封自贸区",
    "area": "建筑面积：82-179㎡"
  },
  {
    "name": "名门翠园",
    "averagePrice": 16500,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 丰庆路三全路交汇处向西100米路北",
    "area": "建筑面积：42.79-156.61㎡"
  },
  {
    "name": "中昂朗悦",
    "averagePrice": 7000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区太行大道与平安大道交叉口西北...",
    "area": "建筑面积：83-125㎡"
  },
  {
    "name": "新郑碧桂园",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 中兴路政通路交汇处向北400米路东",
    "area": "建筑面积：142-268㎡"
  },
  {
    "name": "北龙湖金茂府",
    "averagePrice": 80000,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 朝阳路九如东路交汇处东100米",
    "area": "建筑面积：160000㎡"
  },
  {
    "name": "永威上和郡",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 锦荣路,近人文路",
    "area": "建筑面积：142.06-320.51㎡"
  },
  {
    "name": "茉莉公馆",
    "averagePrice": 38000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 龙湖外环东路",
    "area": "建筑面积：133.54-220.51㎡"
  },
  {
    "name": "升龙御玺",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 陇海路桐柏路交叉口向西800米",
    "area": "建筑面积：80-131㎡"
  },
  {
    "name": "碧桂园思念翡翠城",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 沿黄快速路,近江南路",
    "area": "建筑面积：95-267㎡"
  },
  {
    "name": "正商双湖湾",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道与雁鸣大道交叉口向北（雁鸣景...",
    "area": "建筑面积：180-272.41㎡"
  },
  {
    "name": "城市之光",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 西三环,近颖河西路",
    "area": "建筑面积：35-87㎡"
  },
  {
    "name": "鼎天東尚",
    "averagePrice": 19500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 博学路与薛夏北街交汇处东南角",
    "area": "建筑面积：87.34-179.88㎡"
  },
  {
    "name": "锦艺金水湾",
    "averagePrice": 15646,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 文化路",
    "area": "建筑面积：86.17-142.55㎡"
  },
  {
    "name": "正商家河家",
    "averagePrice": 14600,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 京广路与开元路交叉口向西1000米",
    "area": "建筑面积：88-140.5㎡"
  },
  {
    "name": "领创天誉华庭",
    "averagePrice": 15300,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 冉屯东路",
    "area": "建筑面积：47.84-118㎡"
  },
  {
    "name": "正商汇航铭筑",
    "averagePrice": 15500,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海东路与东三环交会处往东1000米西北...",
    "area": "建筑面积：45㎡"
  },
  {
    "name": "D+公寓设计师工场",
    "averagePrice": 11750,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 郑州市科学大道红松路向南800米",
    "area": "建筑面积：26.73-58.08㎡"
  },
  {
    "name": "绿都广场二环里",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 郑汴路未来路交叉口西北角",
    "area": "建筑面积：39-124㎡"
  },
  {
    "name": "永威森林花语",
    "averagePrice": 22000,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 万三公路,近郑汴物流通道",
    "area": "建筑面积：99.11-246.84㎡"
  },
  {
    "name": "世豫西西里传说",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原大道,近滨湖大道",
    "area": "建筑面积：133.61-307㎡"
  },
  {
    "name": "盛澳金尊府",
    "averagePrice": 0,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 航海路与腾飞路交汇处向南300米",
    "area": "建筑面积：119-202㎡"
  },
  {
    "name": "兴忠启程",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 中州大道,近航海东路",
    "area": "建筑面积：75-89㎡"
  },
  {
    "name": "台隆合园",
    "averagePrice": 13900,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 南阳路弘润路交会处西北角",
    "area": "建筑面积：85-142㎡"
  },
  {
    "name": "瀚宇天悦湾",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路",
    "area": "建筑面积：85.66-298.76㎡"
  },
  {
    "name": "安恒品邸",
    "averagePrice": 7600,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 解放大道与翠竹路交汇处",
    "area": "建筑面积：78-109㎡"
  },
  {
    "name": "浩创梧桐春晓",
    "averagePrice": 7900,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 新郑快速通道,近s102",
    "area": "建筑面积：79-123㎡"
  },
  {
    "name": "万科美景龙门",
    "averagePrice": 14000,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "管南片 郑州市管城区中州大道与航海东路交汇处",
    "area": "建筑面积：37-70.05㎡"
  },
  {
    "name": "锦美南华福",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 长江路淮南街南700米",
    "area": "建筑面积：59.68-133.86㎡"
  },
  {
    "name": "富力建业尚悦居",
    "averagePrice": 16500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 中州大道,近贾鲁河",
    "area": "建筑面积：78-133㎡"
  },
  {
    "name": "豫发国园玖号院",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州市航空港区郑港四街与盛祥路交会处",
    "area": "建筑面积：115.2-165.34㎡"
  },
  {
    "name": "裕华光合世界",
    "averagePrice": 15300,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 工人路伊河路交叉口",
    "area": "建筑面积：55.76-134.14㎡"
  },
  {
    "name": "郑西理想城",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路",
    "area": "建筑面积：60.35-125㎡"
  },
  {
    "name": "华润悦府",
    "averagePrice": 18000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水路南阳路交叉口往南500米路东",
    "area": "建筑面积：85-312.9㎡"
  },
  {
    "name": "润丰新尚",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "薛店 解放路",
    "area": "建筑面积：20-128㎡"
  },
  {
    "name": "正升阳光城",
    "averagePrice": 7800,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 溱水路东段溱水桥西侧",
    "area": "建筑面积：80.03-137.87㎡"
  },
  {
    "name": "升龙天汇广场",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "碧沙岗 农业路,近朱屯东路",
    "area": "建筑面积：54.46-145.56㎡"
  },
  {
    "name": "新密碧桂园",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 溱水路与政通路交叉口东北角",
    "area": "建筑面积：119-220㎡"
  },
  {
    "name": "裕华满园",
    "averagePrice": 9200,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 莲花街,近西四环",
    "area": "建筑面积：31.6-119㎡"
  },
  {
    "name": "亚新美好香颂",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 九州路,近人文路",
    "area": "建筑面积：110-179㎡"
  },
  {
    "name": "正商河峪洲",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 沿黄快速路,近民生路",
    "area": "建筑面积：89.8-132.43㎡"
  },
  {
    "name": "恒大御景湾",
    "averagePrice": 8800,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 滨湖大道,近太行大道",
    "area": "建筑面积：77.92-332㎡"
  },
  {
    "name": "正商创富欣城",
    "averagePrice": 11500,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "二七 二七区长江路与连云路交叉口西北角",
    "area": "建筑面积：45.75-63.69㎡"
  },
  {
    "name": "光明索河湾",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 兴华路88号",
    "area": "建筑面积：98.86-225.26㎡"
  },
  {
    "name": "和昌林与城",
    "averagePrice": 12500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 绿源路,近天河路",
    "area": "建筑面积：87-143㎡"
  },
  {
    "name": "万科民安星辰",
    "averagePrice": 11500,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "中原万达 航海路与桐柏路交叉口西南",
    "area": "建筑面积：21-28㎡"
  },
  {
    "name": "五龙新城",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 五龙口南路",
    "area": "建筑面积：78.47-132.83㎡"
  },
  {
    "name": "安纳西庄园",
    "averagePrice": 9800,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港六街,近郑港七街",
    "area": "建筑面积：82.29-134.39㎡"
  },
  {
    "name": "建海绿荫半岛",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路",
    "area": "建筑面积：81.4-377.31㎡"
  },
  {
    "name": "物华国际",
    "averagePrice": 15800,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 南阳路285号",
    "area": "建筑面积：41-141.31㎡"
  },
  {
    "name": "奥兰和园",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 城东南路",
    "area": "建筑面积：87-143㎡"
  },
  {
    "name": "鑫苑二七鑫中心",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学路南四环交汇处西南角",
    "area": "建筑面积：41-114.23㎡"
  },
  {
    "name": "星联湾",
    "averagePrice": 27000,
    "type": "别墅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 雁鸣路",
    "area": "建筑面积：90.18-347.29㎡"
  },
  {
    "name": "恒大金碧天下",
    "averagePrice": 8600,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 长江大道与太行大道交汇处",
    "area": "建筑面积：45-218㎡"
  },
  {
    "name": "亚新美好城邦",
    "averagePrice": 19300,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 农业路,近沙口路",
    "area": "建筑面积：80-141㎡"
  },
  {
    "name": "碧桂园豪园",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 福顺街,近人文路",
    "area": "建筑面积：99-170㎡"
  },
  {
    "name": "正弘澜庭叙",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 花园路英才街交汇处东50米",
    "area": "建筑面积：75.3-141.7㎡"
  },
  {
    "name": "翰林国际城",
    "averagePrice": 10000,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 莲花街",
    "area": "建筑面积：25-159.61㎡"
  },
  {
    "name": "万科大都会",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 大学南路,近南四环",
    "area": "建筑面积：78-140㎡"
  },
  {
    "name": "东原晴天见",
    "averagePrice": 12500,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 嵩山路与南三环交汇处向南约2000米路西",
    "area": "建筑面积：89-118㎡"
  },
  {
    "name": "亚新美好艺境",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑汴物流通道,近人文路",
    "area": "建筑面积：99-169㎡"
  },
  {
    "name": "清华忆江南",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 伴山东路",
    "area": "建筑面积：86.25-201㎡"
  },
  {
    "name": "正商善水上境",
    "averagePrice": 32000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区平安大道与东风南路交会处向东...",
    "area": "建筑面积：180-200㎡"
  },
  {
    "name": "阳光城",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 中州大道航海路口南300米",
    "area": "建筑面积：85-163㎡"
  },
  {
    "name": "美景美地麟洲",
    "averagePrice": 8900,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 新安路（南三环）与前程大道交汇处",
    "area": "建筑面积：38-59㎡"
  },
  {
    "name": "正弘悦云庄",
    "averagePrice": 10700,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 311省道,近京深线",
    "area": "建筑面积：90-227㎡"
  },
  {
    "name": "润丰新宸",
    "averagePrice": 0,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "薛店 省道102与世纪大道交汇处向北200米路西",
    "area": "建筑面积：193-201㎡"
  },
  {
    "name": "郑州绿地城",
    "averagePrice": 12700,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 郑密路,近南三环",
    "area": "建筑面积：78-138㎡"
  },
  {
    "name": "万向湖畔晓风",
    "averagePrice": 20000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 博学路与薛夏北街交汇处东北角",
    "area": "建筑面积：110.9-207.68㎡"
  },
  {
    "name": "中业星荟",
    "averagePrice": 16000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 东风路与经三路交汇处东南角",
    "area": "建筑面积：102㎡"
  },
  {
    "name": "海龙钰苑",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 索河路与织机路交叉口西北角",
    "area": "建筑面积：107-288㎡"
  },
  {
    "name": "绿地璀璨星座",
    "averagePrice": 15500,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 北三环与江山路交汇处东北角",
    "area": "建筑面积：40.26-62.11㎡"
  },
  {
    "name": "紫檀华都住宅",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 金水区东风路与天明路交汇处南210米",
    "area": "建筑面积：88.69-138.52㎡"
  },
  {
    "name": "金苑阳光里",
    "averagePrice": 8400,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 索河路五一路交汇处",
    "area": "建筑面积：94.69-124.29㎡"
  },
  {
    "name": "豫发国园捌号院",
    "averagePrice": 10700,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区雍州路与归航路交叉口",
    "area": "建筑面积：114.93-148.02㎡"
  },
  {
    "name": "恒大未来城",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 开封郑开大道与十四大街至十七大街",
    "area": "建筑面积：87.45-130.03㎡"
  },
  {
    "name": "橄榄城新公馆",
    "averagePrice": 11500,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "南三环 连云路与漓江路交叉口西南角",
    "area": "建筑面积：37-42㎡"
  },
  {
    "name": "美景芳华",
    "averagePrice": 16000,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第三大街与南三环交会处西北角",
    "area": "建筑面积：41.7-53.28㎡"
  },
  {
    "name": "长基雁月湾",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 雁鸣大道",
    "area": "建筑面积：119.47-376.72㎡"
  },
  {
    "name": "正商书香铭筑",
    "averagePrice": 15000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与京港澳高速交会处向东1000米...",
    "area": "建筑面积：66.27-71.23㎡"
  },
  {
    "name": "碧桂园翡翠湾",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 新安路",
    "area": "建筑面积：136-273㎡"
  },
  {
    "name": "丰乐奥体公馆",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 三全路金杯路交叉口向东280米路北",
    "area": "建筑面积：77.46-127.28㎡"
  },
  {
    "name": "正商中州城",
    "averagePrice": 11500,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "管南片 郑新公路",
    "area": "建筑面积：53.67-142.67㎡"
  },
  {
    "name": "正商华钻汇景公寓",
    "averagePrice": 12000,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "管南片 南三环,近中州大道",
    "area": "建筑面积：41-45㎡"
  },
  {
    "name": "汉飞壹号华府",
    "averagePrice": 7300,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 汜河路",
    "area": "建筑面积：86-125㎡"
  },
  {
    "name": "宏江中央广场",
    "averagePrice": 17500,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "碧沙岗 棉纺西路,近嵩山北路",
    "area": "建筑面积：49-286㎡"
  },
  {
    "name": "悦湖会",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 泰安街,近商都大道",
    "area": "建筑面积：87.19-196.91㎡"
  },
  {
    "name": "正商四大铭筑",
    "averagePrice": 15000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 博学路,近平安大道",
    "area": "建筑面积：2090.43-3978.41㎡"
  },
  {
    "name": "五建新街坊",
    "averagePrice": 15550,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 建设路",
    "area": "建筑面积：76-140.31㎡"
  },
  {
    "name": "绿城凤湖玫瑰园",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区滨湖大道与太行大道交叉口",
    "area": "建筑面积：108-220㎡"
  },
  {
    "name": "碧桂园凤凰湾",
    "averagePrice": 7700,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 滨湖大道,近卫河路",
    "area": "建筑面积：99-252㎡"
  },
  {
    "name": "康桥林语镇",
    "averagePrice": 12500,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 双湖大道",
    "area": "建筑面积：105-178㎡"
  },
  {
    "name": "绿都广场商铺",
    "averagePrice": 45000,
    "type": "店铺",
    "location": "管城",
    "detailedLocation": "管城 郑汴路未来路交叉口西北角",
    "area": "建筑面积：2449.49㎡"
  },
  {
    "name": "正商启盛华庭",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 江山路与坡阳路交汇处东北角",
    "area": "建筑面积：84.14-129.59㎡"
  },
  {
    "name": "正金金泉大厦",
    "averagePrice": 8800,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 绿博大道与人文路交汇处东南角（绿博园...",
    "area": "建筑面积：52.83-56.49㎡"
  },
  {
    "name": "美景麟起城",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 英才街",
    "area": "建筑面积：68-125㎡"
  },
  {
    "name": "瀚海尔湾",
    "averagePrice": 21700,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 鸿宝路与鸿苑路交会处西北角（东三环与...",
    "area": "建筑面积：86-172㎡"
  },
  {
    "name": "美景美境",
    "averagePrice": 17266,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 国基路渠东路交汇处东北角",
    "area": "建筑面积：300000㎡"
  },
  {
    "name": "华润悦玺",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 南阳路与兴隆铺路交叉口向东500米路北",
    "area": "建筑面积：78-115㎡"
  },
  {
    "name": "融创瀚海大河宸院",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 郑州市大河路天河路交会处（中国大运河...",
    "area": "建筑面积：143-143㎡"
  },
  {
    "name": "阳光城檀悦",
    "averagePrice": 19000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海东路与经开第一大街交汇处",
    "area": "建筑面积：88-140㎡"
  },
  {
    "name": "恒基水榭华城",
    "averagePrice": 10750,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与双湖大道交汇处向东2000米",
    "area": "建筑面积：83-160㎡"
  },
  {
    "name": "威龙中心城",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 文昌路",
    "area": "建筑面积：89.39-156.89㎡"
  },
  {
    "name": "云瓴国际",
    "averagePrice": 10000,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港 四港联动大道与郑港一路交叉口西侧",
    "area": "建筑面积：55.35-67㎡"
  },
  {
    "name": "江泰美寓",
    "averagePrice": 16000,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "二七 京广快速路与长江路交汇处北50米",
    "area": "建筑面积：27-37㎡"
  },
  {
    "name": "锦荣UI公寓",
    "averagePrice": 10800,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "南三环 漓江路,近郑平公路",
    "area": "建筑面积：37.96-92.37㎡"
  },
  {
    "name": "民安尚郡",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 帆布厂街",
    "area": "建筑面积：84-129㎡"
  },
  {
    "name": "新城尚郡",
    "averagePrice": 8600,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路",
    "area": "建筑面积：93-143㎡"
  },
  {
    "name": "吉地澜花语",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑开大道",
    "area": "建筑面积：83-138㎡"
  },
  {
    "name": "西雅图总部湾",
    "averagePrice": 7000,
    "type": "别墅",
    "location": "高新区",
    "detailedLocation": "高新区 科学大道与绕城高速交叉口西300米",
    "area": "建筑面积：210-400㎡"
  },
  {
    "name": "浩创梧桐郡",
    "averagePrice": 10643,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 宜居教育城新郑快速路与祥和路交汇处",
    "area": "建筑面积：84.41-126.36㎡"
  },
  {
    "name": "融创城开瓏府",
    "averagePrice": 16282,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 惠济区文化路英才街交汇处西800米（贾...",
    "area": "建筑面积：89-143㎡"
  },
  {
    "name": "富田九鼎公馆",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 南三环金岱路交汇处",
    "area": "建筑面积：88-142㎡"
  },
  {
    "name": "蓝城玫瑰园",
    "averagePrice": 18500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 绿博大道与雁鸣路交会处西南角",
    "area": "建筑面积：126.86-249.9㎡"
  },
  {
    "name": "亚星盛世",
    "averagePrice": 13414,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路和长江路交汇处",
    "area": "建筑面积：78.48-154.15㎡"
  },
  {
    "name": "正弘府",
    "averagePrice": 21250,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 花园路英才街交汇处",
    "area": "建筑面积：89.46-141.57㎡"
  },
  {
    "name": "康桥香溪郡",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道,近紫寰路",
    "area": "建筑面积：92-182㎡"
  },
  {
    "name": "郑东龙湖一号",
    "averagePrice": 20000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 中州大道与杨金路交汇处东500米",
    "area": "建筑面积：243.65-318㎡"
  },
  {
    "name": "正道和苑",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 农业路天明路交会处北200米",
    "area": "建筑面积：85.79-128.66㎡"
  },
  {
    "name": "世纪城",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 中原区金水西路秦岭路交叉口向北50米路...",
    "area": "建筑面积：86.69-125.4㎡"
  },
  {
    "name": "保利心语",
    "averagePrice": 16521,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与华山路交汇处",
    "area": "建筑面积：46.6-154.83㎡"
  },
  {
    "name": "奥伦达部落五云山",
    "averagePrice": 6800,
    "type": "别墅",
    "location": "上街",
    "detailedLocation": "上街 五云山大道001号",
    "area": "建筑面积：96㎡"
  },
  {
    "name": "绿地泰晤士新城",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 长江大道,近湖滨大道",
    "area": "建筑面积：78.37-125㎡"
  },
  {
    "name": "绿地璀璨天城",
    "averagePrice": 0,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 北三环与江山路交汇处西北角",
    "area": "建筑面积：51.72-144㎡"
  },
  {
    "name": "城果",
    "averagePrice": 20167,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 东明路与商城路北100米路东",
    "area": "建筑面积：50.43-120.89㎡"
  },
  {
    "name": "郑东碧桂园海洋世界",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道与广惠街交汇处向东500米",
    "area": "建筑面积：98-240㎡"
  },
  {
    "name": "紫荆之星",
    "averagePrice": 12000,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "陇海东路 紫荆山路陇海路交叉口",
    "area": "建筑面积：45.11-52.63㎡"
  },
  {
    "name": "正商红溪谷",
    "averagePrice": 9750,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 宏达路",
    "area": "建筑面积：255-349㎡"
  },
  {
    "name": "碧源月湖",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 文化路与开元路交汇处向北200米路西",
    "area": "建筑面积：40.81-141.56㎡"
  },
  {
    "name": "浩创优尚",
    "averagePrice": 14000,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开十八大街与经南八路交叉口",
    "area": "建筑面积：35-48㎡"
  },
  {
    "name": "升龙城壹公馆",
    "averagePrice": 12700,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "二七 淮河路与嵩山路交叉口",
    "area": "建筑面积：40-56㎡"
  },
  {
    "name": "永恒理想世界",
    "averagePrice": 16500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 紫荆山路与航海路交叉口",
    "area": "建筑面积：54.95-102㎡"
  },
  {
    "name": "凤湖梧桐湾",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 雅砻江路与昆仑山路交汇处",
    "area": "建筑面积：95-123㎡"
  },
  {
    "name": "龙栖湾",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路,近天安街",
    "area": "建筑面积：44-96.04㎡"
  },
  {
    "name": "新田城南山",
    "averagePrice": 10500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 洞林湖风景区",
    "area": "建筑面积：84.92-208.76㎡"
  },
  {
    "name": "和昌珑悦",
    "averagePrice": 16500,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 郑州市北三环与丰华路交汇处西南角",
    "area": "建筑面积：27-52㎡"
  },
  {
    "name": "正商公主湖",
    "averagePrice": 0,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与新村大道交叉口向北200米...",
    "area": "建筑面积：113.66-180.47㎡"
  },
  {
    "name": "荣邦城",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 牡丹路莲花街交汇处",
    "area": "建筑面积：88.28-157.61㎡"
  },
  {
    "name": "东润银基望京",
    "averagePrice": 9900,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 郑开大道与十一大街 交会处西南",
    "area": "建筑面积：121-201㎡"
  },
  {
    "name": "美盛象湖100",
    "averagePrice": 15538,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与凤栖街（原雁鸣路）交会处",
    "area": "建筑面积：28-38㎡"
  },
  {
    "name": "金源大都汇",
    "averagePrice": 15514,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "医学院 金水路与建设东路交汇处东北角",
    "area": "建筑面积：50-127.69㎡"
  },
  {
    "name": "锦荣米兰小镇",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路与S321交汇处",
    "area": "建筑面积：83-125㎡"
  },
  {
    "name": "瀚海航城",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州航空港荆州路和思存路交叉口",
    "area": "建筑面积：70-140㎡"
  },
  {
    "name": "永威西郡",
    "averagePrice": 13554,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "陇海西路 郑州市中原路与西四环交汇处向南500米...",
    "area": "建筑面积：88.42-140.91㎡"
  },
  {
    "name": "金科御府",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 中兴路与中华路交会处向北200米路西",
    "area": "建筑面积：105-160㎡"
  },
  {
    "name": "正商航海广场",
    "averagePrice": 13500,
    "type": "办公楼",
    "location": "二七",
    "detailedLocation": "二七 航海路紫荆山路交会处西1000米",
    "area": "建筑面积：263㎡"
  },
  {
    "name": "路劲九郡",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 文博路与新圃街交叉口向东200米",
    "area": "建筑面积：84-189㎡"
  },
  {
    "name": "兴达密登堡",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 富民路",
    "area": "建筑面积：103.97-133.43㎡"
  },
  {
    "name": "溱水上河府",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 曲梁镇密杞大道与裕中路交汇处南200米",
    "area": "建筑面积：76.77-120.7㎡"
  },
  {
    "name": "和昌盛世城邦",
    "averagePrice": 7000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 十一路与航兴路交叉口",
    "area": "建筑面积：95-180㎡"
  },
  {
    "name": "浩金元芳邻华庭",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 郑登快速通道与华韦路交叉口",
    "area": "建筑面积：42-122㎡"
  },
  {
    "name": "浩创梧桐花语",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区薛店神州路与枣园路交会处",
    "area": "建筑面积：89-125㎡"
  },
  {
    "name": "锦荣广场",
    "averagePrice": 9000,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港 雍州路与洞庭湖路以北（地铁2号线兰河...",
    "area": "建筑面积：36.93-43.71㎡"
  },
  {
    "name": "万科福晟万科誉",
    "averagePrice": 17500,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "七里河 商都路与普惠路交叉口",
    "area": "建筑面积：22-65㎡"
  },
  {
    "name": "豫发大运城/蓝山公馆",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港四街",
    "area": "建筑面积：133-180㎡"
  },
  {
    "name": "碧桂园国控天誉",
    "averagePrice": 26500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 郑州市中州大道与杨金路交会处东北",
    "area": "建筑面积：60-188㎡"
  },
  {
    "name": "亚新紫藤公馆",
    "averagePrice": 25000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑开大道与郑信路交叉口向南300米路西",
    "area": "建筑面积：141-218㎡"
  },
  {
    "name": "中海万锦公馆",
    "averagePrice": 17500,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经南八路与华夏大道交汇处",
    "area": "建筑面积：89-140㎡"
  },
  {
    "name": "云松金域华府",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区太行大道与嘉陵江路交汇处西北...",
    "area": "建筑面积：120-182㎡"
  },
  {
    "name": "盛润运河城",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 大学南路与鼎盛大道交汇处东北角",
    "area": "建筑面积：88.13-127.81㎡"
  },
  {
    "name": "锦雍水之郡",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 姚桥路与德慧街交汇处",
    "area": "建筑面积：90-148㎡"
  },
  {
    "name": "郑地璞园",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 金水西路与秦岭路交会处",
    "area": "建筑面积：88.65-130.45㎡"
  },
  {
    "name": "中益滨河广场",
    "averagePrice": 13965,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第十七大街与潮河西南角交汇处",
    "area": "建筑面积：37.69-48.14㎡"
  },
  {
    "name": "星联御象湖",
    "averagePrice": 24136,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区金水东路与贺庄路向南300米",
    "area": "建筑面积：141㎡"
  },
  {
    "name": "郑州金马凯旋家居CBD",
    "averagePrice": 13771,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "陇海西路 西四环与陇海西路",
    "area": "建筑面积：44-55㎡"
  },
  {
    "name": "融信江湾城",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 沿黄快速路与江山路交会处西",
    "area": "建筑面积：90-140㎡"
  },
  {
    "name": "启盟时代",
    "averagePrice": 8150,
    "type": "商住",
    "location": "新密市",
    "detailedLocation": "新密市 大学路与风尚街交叉口东北角",
    "area": "建筑面积：47.97-58.45㎡"
  },
  {
    "name": "郑地美景东望",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑开大道与贺庄路交叉口向南800米路东",
    "area": "建筑面积：89-400㎡"
  },
  {
    "name": "永威上和院",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 九如东路与龙湖外环南路交会处",
    "area": "建筑面积：261㎡"
  },
  {
    "name": "中金智谷",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学路密杞路交汇处东北角",
    "area": "建筑面积：75㎡"
  },
  {
    "name": "蓝城凤起梧桐",
    "averagePrice": 25350,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 中州大道与杨金路交会处东360米",
    "area": "建筑面积：600000㎡"
  },
  {
    "name": "石佛艺术公社",
    "averagePrice": 9500,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道与西三环交汇处西800米路南",
    "area": "建筑面积：38-47.24㎡"
  },
  {
    "name": "大正鲲府",
    "averagePrice": 11750,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道与须水河东路向南200米",
    "area": "建筑面积：76.4-94.7㎡"
  },
  {
    "name": "中州东晟中心翡翠华府",
    "averagePrice": 24136,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与郑信路交汇处（贾鲁河轻轨站...",
    "area": "建筑面积：104-133㎡"
  },
  {
    "name": "中建森林上郡",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港一路",
    "area": "建筑面积：75-145㎡"
  },
  {
    "name": "国控云庭",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥阳市荥密路与G310国道交叉口东北侧",
    "area": "建筑面积：85-125㎡"
  },
  {
    "name": "远洋风景",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙湖大道与淮海路交叉口向南800米路西...",
    "area": "建筑面积：89-124㎡"
  },
  {
    "name": "瀚海观象",
    "averagePrice": 30635,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 豫兴大道与锦绣路交会处西北角（金水东...",
    "area": "建筑面积：163-335㎡"
  },
  {
    "name": "双鹤湖壹号",
    "averagePrice": 8500,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港南 志洋路与双鹤三街交汇处",
    "area": "建筑面积：55-110㎡"
  },
  {
    "name": "万锦熙岸",
    "averagePrice": 14155,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新区科学大道与创新大道交汇处北800...",
    "area": "建筑面积：88-143㎡"
  },
  {
    "name": "中浩鸿鹄郡",
    "averagePrice": 10400,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道和紫荆山南路（鸿鹄路）交叉口...",
    "area": "建筑面积：94.63-151.52㎡"
  },
  {
    "name": "华润平原府",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区（新乡市与郑州市交接处）天山...",
    "area": "建筑面积：95-142㎡"
  },
  {
    "name": "新田城海豚湾",
    "averagePrice": 9000,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 洞林湖风景区",
    "area": "建筑面积：32-189.56㎡"
  },
  {
    "name": "融创御湖宸院",
    "averagePrice": 16532,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 航海路桐柏路向南500米路东",
    "area": "建筑面积：109-255㎡"
  },
  {
    "name": "锦艺四季城",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 天河路",
    "area": "建筑面积：87.22-140.38㎡"
  },
  {
    "name": "中森蓝山玖玥",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 索河路与棋源路交会处",
    "area": "建筑面积：99.07-182.58㎡"
  },
  {
    "name": "玉兰先禾",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "科学大道 高新区科学大道银屏路交叉口向南200米...",
    "area": "建筑面积：76.42-125.66㎡"
  },
  {
    "name": "裕华行园",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与万山路交会处向南800米路东",
    "area": "建筑面积：79.97-119.25㎡"
  },
  {
    "name": "泰禾中州院子",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 中州大道黄河大道交汇处西1千米",
    "area": "建筑面积：183-187㎡"
  },
  {
    "name": "万向桃源居",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 龙子湖博学路薛夏南街往东300米路南",
    "area": "建筑面积：90-122㎡"
  },
  {
    "name": "国控碧桂园天澜",
    "averagePrice": 14577,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 惠济区天河路与大运河索须河交汇处北2...",
    "area": "建筑面积：120-140㎡"
  },
  {
    "name": "郑州孔雀城",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新快速路与107国道连接线交汇处西南",
    "area": "建筑面积：600806㎡"
  },
  {
    "name": "蓝山溪语",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 广惠街与牟山路交叉口",
    "area": "建筑面积：89.37㎡"
  },
  {
    "name": "金石国际",
    "averagePrice": 8441,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑州市荥阳市荥泽大道与康泰路向西100...",
    "area": "建筑面积：75224㎡"
  },
  {
    "name": "泰宏建业国际城商铺",
    "averagePrice": 12529,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "南三环 大学路与南三环交汇处向南700米",
    "area": "建筑面积：101-109㎡"
  },
  {
    "name": "未来华庭",
    "averagePrice": 22000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 文苑南路",
    "area": "建筑面积：86.7-139.85㎡"
  },
  {
    "name": "新田印象",
    "averagePrice": 15538,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与前程路东500米（象湖畔）",
    "area": "建筑面积：37㎡"
  },
  {
    "name": "蓝城桃花源",
    "averagePrice": 8150,
    "type": "别墅",
    "location": "新密市",
    "detailedLocation": "新密市 新密市西南五环生态保护区",
    "area": ""
  },
  {
    "name": "正商经开广场",
    "averagePrice": 14800,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海路与第九大街交会处东100米经开广...",
    "area": "建筑面积：296000㎡"
  },
  {
    "name": "星光汇商铺",
    "averagePrice": 17000,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "二七 建设路嵩山路交汇处东南",
    "area": "建筑面积：180000㎡"
  },
  {
    "name": "绿城智慧公园",
    "averagePrice": 18531,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "其他 中州大道杨金路向东4公里",
    "area": "建筑面积：20000㎡"
  },
  {
    "name": "嘉祥领仕馆",
    "averagePrice": 6200,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "管城 鼎尚街17号",
    "area": "建筑面积：70000㎡"
  },
  {
    "name": "永和龙子湖广场",
    "averagePrice": 18000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 平安大道(原祭城路)与博学路交叉口东2...",
    "area": "建筑面积：389000㎡"
  },
  {
    "name": "郑东绿地中心",
    "averagePrice": 30000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 东风南路与创业路交汇处",
    "area": "建筑面积：682082㎡"
  },
  {
    "name": "朗悦公园茂",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "高新区",
    "detailedLocation": "高新区 雪松路",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "浩创悦府",
    "averagePrice": 9550,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 孟庄镇、北港",
    "area": "建筑面积：25713㎡"
  },
  {
    "name": "同赢企业总部港",
    "averagePrice": 8150,
    "type": "商住",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路与劳动街交汇处西北角",
    "area": "建筑面积：96794㎡"
  },
  {
    "name": "局外",
    "averagePrice": 18000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 平安大道（原祭城路）与博学路交汇处",
    "area": "建筑面积：90377㎡"
  },
  {
    "name": "正商国际大厦",
    "averagePrice": 25632,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区七里河南路与莆田西路交会处",
    "area": "建筑面积：139558㎡"
  },
  {
    "name": "UPPARK公园尚",
    "averagePrice": 50000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 东风路与花园路交汇处",
    "area": "建筑面积：22900㎡"
  },
  {
    "name": "正弘城正弘中心",
    "averagePrice": 19000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "金水区 东风路与花园路交会处",
    "area": "建筑面积：65000㎡"
  },
  {
    "name": "上街碧桂园",
    "averagePrice": 6989,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 登封路和锦江北路交汇处西侧",
    "area": "建筑面积：148000㎡"
  },
  {
    "name": "永威上和府",
    "averagePrice": 11150,
    "type": "别墅",
    "location": "中牟县",
    "detailedLocation": "中牟县 雁鸣大道与连霍高速交叉口向北1000m",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "远洋万和四季",
    "averagePrice": 11150,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 琼花路与文通路交叉口向西200米",
    "area": "建筑面积：49088㎡"
  },
  {
    "name": "中海盛唐坊",
    "averagePrice": 16333,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经南八路与华夏大道交汇处",
    "area": "建筑面积：204458㎡"
  },
  {
    "name": "新郑恒大悦龙湾",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新快速路与新村大道交叉口东北角",
    "area": ""
  },
  {
    "name": "金科博翠书院小镇",
    "averagePrice": 11150,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 广惠街与琼花路交汇处",
    "area": "建筑面积：102320㎡"
  },
  {
    "name": "建业电影小镇之橙园",
    "averagePrice": 11150,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑东绿博建业华谊兄弟电影小镇路北200...",
    "area": "建筑面积：219625㎡"
  },
  {
    "name": "上东国际",
    "averagePrice": 22050,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路郑信路交叉口",
    "area": "建筑面积：156000㎡"
  },
  {
    "name": "中晟柒号院",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 长江路与西三环交汇处向西500米",
    "area": ""
  },
  {
    "name": "紫荆半岛",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥和路与鸿鹄路交叉口",
    "area": "建筑面积：6133㎡"
  },
  {
    "name": "楷林IFC",
    "averagePrice": 22000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 金水东路与心怡路交汇口",
    "area": "建筑面积：234842㎡"
  },
  {
    "name": "正商兰庭华府",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新快速路与祥云路交会处东南角",
    "area": ""
  },
  {
    "name": "碧桂园双湖城",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 南龙湖双湖大道地铁站",
    "area": "建筑面积：760000㎡"
  },
  {
    "name": "中晟Park公寓",
    "averagePrice": 15033,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "西流湖 长江路与西三环交汇处向西500米",
    "area": "建筑面积：105000㎡"
  },
  {
    "name": "新都万象城",
    "averagePrice": 4500,
    "type": "住宅",
    "location": "登封市",
    "detailedLocation": "登封市 嵩山路南段与郑少洛高速交汇处南200米",
    "area": "建筑面积：960000㎡"
  },
  {
    "name": "绿都澜湾",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 宇通路",
    "area": "建筑面积：24-143㎡"
  },
  {
    "name": "碧桂园峯景",
    "averagePrice": 11616,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海东路与凤栖路向东200米路北",
    "area": "建筑面积：98-143㎡"
  },
  {
    "name": "西郡原著莱蒙郡",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上新区中原西路与织机路交汇处向南2...",
    "area": "建筑面积：89-125㎡"
  },
  {
    "name": "六合公寓",
    "averagePrice": 16250,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "碧沙岗 建设路秦岭路交汇处",
    "area": "建筑面积：37.39-69.6㎡"
  },
  {
    "name": "浩创悦城",
    "averagePrice": 8400,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 孟祥路,近郑港三路",
    "area": "建筑面积：86.37-130.07㎡"
  },
  {
    "name": "裕鸿世界港",
    "averagePrice": 19000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 国际机场北（四港联动大道与郑港六路交...",
    "area": "建筑面积：192.41-396.03㎡"
  },
  {
    "name": "东方鼎盛花样城",
    "averagePrice": 15180,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 未来路与石化路交叉口向西300米路南",
    "area": "建筑面积：88.64-138.76㎡"
  },
  {
    "name": "森海正阳门",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 金华路95号",
    "area": "建筑面积：92-136.95㎡"
  },
  {
    "name": "万创都市公馆",
    "averagePrice": 16100,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 天明路",
    "area": "建筑面积：35.53-86.98㎡"
  },
  {
    "name": "太极华夏城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 中华南路与黄河路交叉口",
    "area": "建筑面积：59.29-142㎡"
  },
  {
    "name": "瀚海东韩里",
    "averagePrice": 21188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 经二路与红旗路交叉口（省人民医院附近...",
    "area": "建筑面积：105.05-141.02㎡"
  },
  {
    "name": "国控东宸",
    "averagePrice": 22000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 黄河南路与正光路交汇处向东20米",
    "area": "建筑面积：42㎡"
  },
  {
    "name": "恒升1号庄园",
    "averagePrice": 8300,
    "type": "别墅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区郑新大道（G107辅道）与黄河大...",
    "area": "建筑面积：278-410㎡"
  },
  {
    "name": "中森林语美墅",
    "averagePrice": 14000,
    "type": "别墅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥泽大道",
    "area": "建筑面积：88.04-409.97㎡"
  },
  {
    "name": "中信广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路西三环交汇处向东200米路南",
    "area": "建筑面积：49.73-93.72㎡"
  },
  {
    "name": "东城半岛",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 密州大道,近溱水路",
    "area": "建筑面积：86.75-211.28㎡"
  },
  {
    "name": "绿都紫荆华庭",
    "averagePrice": 0,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 南三环",
    "area": "建筑面积：58-130㎡"
  },
  {
    "name": "和昌都汇广场",
    "averagePrice": 6700,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 金屏路以东、金华路以西、济源路以南、...",
    "area": "建筑面积：110-120㎡"
  },
  {
    "name": "嘉韵公园里",
    "averagePrice": 6400,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 淮阳路,近许昌路",
    "area": "建筑面积：123.9-213.31㎡"
  },
  {
    "name": "天伦庄园",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 开元路",
    "area": "建筑面积：156-383㎡"
  },
  {
    "name": "金沙湖高尔夫观邸",
    "averagePrice": 55000,
    "type": "别墅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经南八路",
    "area": "建筑面积：77.2-401㎡"
  },
  {
    "name": "中力龙湾公馆",
    "averagePrice": 33150,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 九如路,近天韵街",
    "area": "建筑面积：140.83-312.3㎡"
  },
  {
    "name": "祝福红城",
    "averagePrice": 12700,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 碧桃路",
    "area": "建筑面积：76.89-128.29㎡"
  },
  {
    "name": "春江家园",
    "averagePrice": 13500,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 碧云路",
    "area": "建筑面积：39.44-126㎡"
  },
  {
    "name": "翰林华府",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 鸿鹄路,近泰山路",
    "area": "建筑面积：72.52-159.83㎡"
  },
  {
    "name": "盈盛龙栖湾",
    "averagePrice": 12000,
    "type": "别墅",
    "location": "上街",
    "detailedLocation": "上街 工业路",
    "area": "建筑面积：90-346.68㎡"
  },
  {
    "name": "辉龙阳光美墅",
    "averagePrice": 10000,
    "type": "别墅",
    "location": "郑州周边",
    "detailedLocation": "其他 新城大道",
    "area": "建筑面积：250-323.6㎡"
  },
  {
    "name": "法兰原著",
    "averagePrice": 10420,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新路与祥安路交汇处向西300米路北",
    "area": "建筑面积：78-181.03㎡"
  },
  {
    "name": "华美仟企汇",
    "averagePrice": 13965,
    "type": "商住",
    "location": "经济开发区",
    "detailedLocation": "经开区 经南五路商英街口东北角",
    "area": "建筑面积：85.44-149.47㎡"
  },
  {
    "name": "晨胧华庭",
    "averagePrice": 12900,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 学苑路",
    "area": "建筑面积：136-140㎡"
  },
  {
    "name": "民安北郡",
    "averagePrice": 15239,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 文化路开元路西•惠济区政府东",
    "area": "建筑面积：67.59-170.43㎡"
  },
  {
    "name": "轩辕湖壹號",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 轩辕湖",
    "area": "建筑面积：129-221㎡"
  },
  {
    "name": "荣汇国际大厦",
    "averagePrice": 13500,
    "type": "办公楼",
    "location": "管城",
    "detailedLocation": "陇海东路 紫荆山路与陇海路北200米路东",
    "area": "建筑面积：1800㎡"
  },
  {
    "name": "九裕龙城",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "薛店 神州路,近天途路",
    "area": "建筑面积：89-129㎡"
  },
  {
    "name": "海龙时代明都",
    "averagePrice": 7000,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 科学大道与荥泽大道交汇处向南3公里",
    "area": "建筑面积：37-78㎡"
  },
  {
    "name": "方圆经纬",
    "averagePrice": 14500,
    "type": "商住",
    "location": "中原",
    "detailedLocation": "碧沙岗 桐柏路与棉纺路交会处东北角(原国棉三...",
    "area": "建筑面积：79.33-166.55㎡"
  },
  {
    "name": "华尔中心",
    "averagePrice": 20190,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "国贸 经三路广电南路交汇处西北角",
    "area": "建筑面积：33.43-45㎡"
  },
  {
    "name": "正商兴汉花园",
    "averagePrice": 14577,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 郑州市大河路（北四环）与古须路（西四...",
    "area": "建筑面积：88.37-111.5㎡"
  },
  {
    "name": "光之谷",
    "averagePrice": 13763,
    "type": "商住",
    "location": "管城",
    "detailedLocation": "管南片 南三环与金岱路交口向南800米路西",
    "area": "建筑面积：40.78-54.98㎡"
  },
  {
    "name": "汇港铭都",
    "averagePrice": 8000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 薛店镇薛店大道与天途路交汇处西北角",
    "area": "建筑面积：67-122㎡"
  },
  {
    "name": "壹号公馆",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学路密杞路西800米路南",
    "area": "建筑面积：78-91㎡"
  },
  {
    "name": "壹号公园",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与新圃街交叉口路南",
    "area": "建筑面积：88.88-137.9㎡"
  },
  {
    "name": "永威金域上院",
    "averagePrice": 7800,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 溱水路与金凤路交汇处东北角",
    "area": "建筑面积：135-178㎡"
  },
  {
    "name": "悦府尚书房",
    "averagePrice": 10513,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖大道与淮河路交汇处（升达大学西门...",
    "area": "建筑面积：86.72-123.68㎡"
  },
  {
    "name": "德宝幸福里",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 济源路",
    "area": "建筑面积：85.79-121㎡"
  },
  {
    "name": "郑南孔雀城",
    "averagePrice": 12483,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "长葛 长葛市魏武大道与双洎河交会处东南角",
    "area": "建筑面积：78-140㎡"
  },
  {
    "name": "西泰山南山花园",
    "averagePrice": 10913,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 大学路南四环向南5公里路西",
    "area": "建筑面积：240.5-310.5㎡"
  },
  {
    "name": "格林上东",
    "averagePrice": 10600,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与通惠路交汇处向北200米",
    "area": "建筑面积：86.56-118.5㎡"
  },
  {
    "name": "东润泰和",
    "averagePrice": 28000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 文劳路",
    "area": "建筑面积：82.89-270㎡"
  },
  {
    "name": "富田兴龙湾",
    "averagePrice": 1000,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 泰山路",
    "area": "建筑面积：115.24-240㎡"
  },
  {
    "name": "荣立鸿鹄嘉苑",
    "averagePrice": 10600,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 湖滨路",
    "area": "建筑面积：87.14-124㎡"
  },
  {
    "name": "金科天籁城",
    "averagePrice": 12500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道与锦荣路交汇处向南100米路东",
    "area": "建筑面积：105-210㎡"
  },
  {
    "name": "郑东商业中心",
    "averagePrice": 26000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 商都路与农业南路交汇处向东200米",
    "area": "建筑面积：39-42㎡"
  },
  {
    "name": "德宝方顶",
    "averagePrice": 6800,
    "type": "别墅",
    "location": "上街",
    "detailedLocation": "上街 峡窝镇淮阳路与五云路交汇处西",
    "area": "建筑面积：88.28-209.74㎡"
  },
  {
    "name": "恒祥百悦城",
    "averagePrice": 19000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "国贸 红旗路",
    "area": "建筑面积：38-64.97㎡"
  },
  {
    "name": "思念果岭国际社区",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 黄河南岸86号",
    "area": "建筑面积：90.63-398㎡"
  },
  {
    "name": "瑞士酒店公寓",
    "averagePrice": 17000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 铭功路",
    "area": "建筑面积：30-50㎡"
  },
  {
    "name": "旭瑞和昌溱水壹号",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 青屏大街与惠丰街交会处西南角",
    "area": "建筑面积：78-136㎡"
  },
  {
    "name": "翡翠明珠",
    "averagePrice": 9600,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 文通路",
    "area": "建筑面积：123.46-201.97㎡"
  },
  {
    "name": "郑东尚庭",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 商都路与通惠路交叉口向北600米路东",
    "area": "建筑面积：87.68-118.16㎡"
  },
  {
    "name": "金玺总部港",
    "averagePrice": 6800,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 莲花街,近红楠路",
    "area": "建筑面积：80-130㎡"
  },
  {
    "name": "星光汇",
    "averagePrice": 15154,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "医学院 嵩山路和建设路交叉口",
    "area": "建筑面积：49.24-213.5㎡"
  },
  {
    "name": "德兴北尚",
    "averagePrice": 11000,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 惠济区大河路与丰业街交汇处北300米路...",
    "area": "建筑面积：42-42㎡"
  },
  {
    "name": "中国中部纺织服装品牌中心",
    "averagePrice": 42000,
    "type": "店铺",
    "location": "中原",
    "detailedLocation": "西流湖 郑上路",
    "area": "建筑面积：90-145㎡"
  },
  {
    "name": "绿地滨湖国际城",
    "averagePrice": 12529,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学南路",
    "area": "建筑面积：88-139㎡"
  },
  {
    "name": "新密建业壹号城邦",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 未来大道与互助街交汇处向西200米",
    "area": "建筑面积：88-175㎡"
  },
  {
    "name": "英地金台府邸",
    "averagePrice": 25000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 东风南路与永平路交汇处西北角",
    "area": "建筑面积：86.1-201.45㎡"
  },
  {
    "name": "中盟财富中心",
    "averagePrice": 6800,
    "type": "商住",
    "location": "上街",
    "detailedLocation": "上街 许昌路与登封路交汇处西南",
    "area": "建筑面积：47.01-61.26㎡"
  },
  {
    "name": "浩创剑桥郡",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 少典路和弘远路交叉口",
    "area": "建筑面积：82-145㎡"
  },
  {
    "name": "龙湖壹克拉",
    "averagePrice": 10750,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州龙湖镇龙湖大道与育才路交汇处西北...",
    "area": "建筑面积：47.85-53.57㎡"
  },
  {
    "name": "华祥名仕公馆",
    "averagePrice": 10513,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道与龙湖大道交会处（地铁2号线...",
    "area": "建筑面积：69-105㎡"
  },
  {
    "name": "香江龙湾",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 新郑市人民路（新密路西段）与蓝晶路交...",
    "area": "建筑面积：86.61-139.25㎡"
  },
  {
    "name": "拓丰祥和居",
    "averagePrice": 16333,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 十五大街与南三环交汇处向南300米路西",
    "area": "建筑面积：89.18-186.46㎡"
  },
  {
    "name": "同赢汉堡公寓",
    "averagePrice": 8150,
    "type": "商住",
    "location": "新密市",
    "detailedLocation": "新密市 大学路高洼街西",
    "area": "建筑面积：46-74㎡"
  },
  {
    "name": "龙中金源",
    "averagePrice": 10607,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州航空港区雍州路与护航路交会处西北...",
    "area": "建筑面积：170000㎡"
  },
  {
    "name": "龙湖一号公馆",
    "averagePrice": 10478,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 南龙湖祥云路与湖滨路交汇处",
    "area": "建筑面积：85-128㎡"
  },
  {
    "name": "同德悦庭",
    "averagePrice": 14000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 长江路工人路交汇处西300米路南",
    "area": "建筑面积：80.64-111.1㎡"
  },
  {
    "name": "冠景君悦湖",
    "averagePrice": 31650,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 众意路与朝阳路交汇处向西300米路南",
    "area": "建筑面积：165.25-205.9㎡"
  },
  {
    "name": "升龙天玺",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 大学路淮河路南200米",
    "area": "建筑面积：42.19-134.52㎡"
  },
  {
    "name": "富田兴和湾",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 鸿苑路",
    "area": "建筑面积：80.55-143.5㎡"
  },
  {
    "name": "新嘉苑润府",
    "averagePrice": 9600,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖大道 （老107国道）与祥安路交叉口...",
    "area": "建筑面积：85.9-118㎡"
  },
  {
    "name": "志强理想名城",
    "averagePrice": 8400,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 许昌路与金华路交汇处",
    "area": "建筑面积：83.35-141.71㎡"
  },
  {
    "name": "伟业龙湖上城",
    "averagePrice": 17300,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 杨金路",
    "area": "建筑面积：89-169㎡"
  },
  {
    "name": "瀚海晴宇",
    "averagePrice": 45000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "七里河 金水东路",
    "area": "建筑面积：183.67-760㎡"
  },
  {
    "name": "正商红河谷",
    "averagePrice": 26000,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 107国道",
    "area": "建筑面积：351-363㎡"
  },
  {
    "name": "金领九如意",
    "averagePrice": 43000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 九如路56号",
    "area": "建筑面积：196.73-513.06㎡"
  },
  {
    "name": "瑞隆城三期麒麟山",
    "averagePrice": 18500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 沙口路",
    "area": "建筑面积：95.4-172㎡"
  },
  {
    "name": "裕鸿世界港",
    "averagePrice": 19000,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 国际机场北（四港联动大道与郑港六路交...",
    "area": "建筑面积：192.41-396.03㎡"
  },
  {
    "name": "新城壹号",
    "averagePrice": 8100,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 清阳街,近广惠街",
    "area": "建筑面积：101.72-135.89㎡"
  },
  {
    "name": "绿地香颂",
    "averagePrice": 15000,
    "type": "别墅",
    "location": "中牟县",
    "detailedLocation": "中牟县 高尔夫路,近雁鸣大道",
    "area": "建筑面积：141-260㎡"
  },
  {
    "name": "龙熙湖畔",
    "averagePrice": 9550,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新路与祥云路交汇处",
    "area": "建筑面积：88-123㎡"
  },
  {
    "name": "开祥御龙城",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 东风路与天明路交汇处（绿荫公园西）",
    "area": "建筑面积：90-165㎡"
  },
  {
    "name": "东方鼎盛花样城",
    "averagePrice": 15180,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 未来路与石化路交叉口向西300米路南",
    "area": "建筑面积：88.64-138.76㎡"
  },
  {
    "name": "三和里",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道,近湖滨路",
    "area": "建筑面积：84.67-143.7㎡"
  },
  {
    "name": "森海正阳门",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 金华路95号",
    "area": "建筑面积：92-136.95㎡"
  },
  {
    "name": "龙吟世家",
    "averagePrice": 7500,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 金华路",
    "area": "建筑面积：96.37-148.56㎡"
  },
  {
    "name": "中建观湖国际",
    "averagePrice": 14472,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开十五大街",
    "area": "建筑面积：87.82-172.14㎡"
  },
  {
    "name": "和润林湖美景",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 郑州市西三环与建设路交会处北200米路...",
    "area": "建筑面积：69-126㎡"
  },
  {
    "name": "万创都市公馆",
    "averagePrice": 16100,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 天明路",
    "area": "建筑面积：35.53-86.98㎡"
  },
  {
    "name": "太极华夏城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 中华南路与黄河路交叉口",
    "area": "建筑面积：59.29-142㎡"
  },
  {
    "name": "瀚海东韩里",
    "averagePrice": 21188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 经二路与红旗路交叉口（省人民医院附近...",
    "area": "建筑面积：105.05-141.02㎡"
  },
  {
    "name": "国控东宸",
    "averagePrice": 22000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 黄河南路与正光路交汇处向东20米",
    "area": "建筑面积：42㎡"
  },
  {
    "name": "世航四合院",
    "averagePrice": 15000,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州航空港区四港联动大道与迎宾大道交...",
    "area": "建筑面积：227.8-234.64㎡"
  },
  {
    "name": "恒升1号庄园",
    "averagePrice": 8300,
    "type": "别墅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区郑新大道（G107辅道）与黄河大...",
    "area": "建筑面积：278-410㎡"
  },
  {
    "name": "华强城市广场",
    "averagePrice": 15450,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "化工路 秦岭路与东风路交汇处",
    "area": "建筑面积：35-77㎡"
  },
  {
    "name": "建业天筑",
    "averagePrice": 40000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 康宁街,近东风东路",
    "area": "建筑面积：158-610㎡"
  },
  {
    "name": "中森林语美墅",
    "averagePrice": 14000,
    "type": "别墅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥泽大道",
    "area": "建筑面积：88.04-409.97㎡"
  },
  {
    "name": "中信广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路西三环交汇处向东200米路南",
    "area": "建筑面积：49.73-93.72㎡"
  },
  {
    "name": "瀚海思念城",
    "averagePrice": 17393,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 国基路渠东路交汇处东南",
    "area": "建筑面积：89-124㎡"
  },
  {
    "name": "东城半岛",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 密州大道,近溱水路",
    "area": "建筑面积：86.75-211.28㎡"
  },
  {
    "name": "绿都紫荆华庭",
    "averagePrice": 0,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 南三环",
    "area": "建筑面积：58-130㎡"
  },
  {
    "name": "国泰ONE",
    "averagePrice": 21188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 花园路北环交叉口向东500米路北",
    "area": "建筑面积：195.56㎡"
  },
  {
    "name": "锦尚新城",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 玉发大道",
    "area": "建筑面积：89.08-137㎡"
  },
  {
    "name": "悦府海棠",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 文昌路",
    "area": "建筑面积：80.06-131.33㎡"
  },
  {
    "name": "栖水湾",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 大学路绕城高速向南4公里",
    "area": "建筑面积：88.6㎡"
  },
  {
    "name": "象湖里",
    "averagePrice": 15538,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 绿博大道与康庄路交会处东南角",
    "area": "建筑面积：47.27-59.7㎡"
  },
  {
    "name": "尚东郡",
    "averagePrice": 10607,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港薛店高速路西侧",
    "area": "建筑面积：82.12-128.22㎡"
  },
  {
    "name": "康桥溪棠",
    "averagePrice": 10200,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥安路",
    "area": "建筑面积：85-129㎡"
  },
  {
    "name": "碧桂园山河郡",
    "averagePrice": 8510,
    "type": "别墅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 江山路与沿黄快速路西",
    "area": "建筑面积：117-262㎡"
  },
  {
    "name": "广电天韵",
    "averagePrice": 25500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 姚桥路,近京深线",
    "area": "建筑面积：86-179㎡"
  },
  {
    "name": "佳林国际",
    "averagePrice": 77000,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开区第十五大街与南三环交汇处",
    "area": "建筑面积：133513㎡"
  },
  {
    "name": "招商轩辕华府",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 政通路中兴路交会处向北500米路东",
    "area": "建筑面积：47000㎡"
  },
  {
    "name": "升龙广场",
    "averagePrice": 18000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区东风东路与广场南路交叉路口",
    "area": "建筑面积：540000㎡"
  },
  {
    "name": "四季广场",
    "averagePrice": 17688,
    "type": "店铺",
    "location": "金水",
    "detailedLocation": "金水区 北三环与文化路",
    "area": "建筑面积：143012㎡"
  },
  {
    "name": "公园1872",
    "averagePrice": 13586,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "其他 西四环萍湖路交汇处向南约1000米",
    "area": "建筑面积：117-143㎡"
  },
  {
    "name": "河南省国家大学科技园东区",
    "averagePrice": 15475,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "高新区 西三环与北环交汇处向南300米路东",
    "area": "建筑面积：2100000㎡"
  },
  {
    "name": "郑港新坐标",
    "averagePrice": 15000,
    "type": "店铺",
    "location": "航空港区",
    "detailedLocation": "航空港 四港联动大道和郑港六路交叉口向东，郑...",
    "area": "建筑面积：110000㎡"
  },
  {
    "name": "民安城市之光",
    "averagePrice": 6989,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 济源路与金华路交汇处东300米",
    "area": "建筑面积：338000㎡"
  },
  {
    "name": "万创河医缤纷商业广场",
    "averagePrice": 15603,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "医学院 京广路与中原路交会处向北200米路西（...",
    "area": "建筑面积：76000㎡"
  },
  {
    "name": "高新企业加速器产业园",
    "averagePrice": 15475,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "高新区 长椿路与冬青街交汇处",
    "area": "建筑面积：88268㎡"
  },
  {
    "name": "滨河国际中心",
    "averagePrice": 16333,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 第十五大街和经南八路交汇处东南",
    "area": "建筑面积：171419㎡"
  },
  {
    "name": "中德产业园",
    "averagePrice": 10700,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港 京港澳高速薛店收费站西2公里路南",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "万华V世界",
    "averagePrice": 11020,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 文通路与渠南路西南角",
    "area": "建筑面积：80000㎡"
  },
  {
    "name": "美盛北龙台",
    "averagePrice": 20500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 龙湖北岸中央大道与杨金路交叉口",
    "area": "建筑面积：128936㎡"
  },
  {
    "name": "建业LA VIE半英里",
    "averagePrice": 23167,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 熊儿河路盛和街交叉口南100米",
    "area": "建筑面积：19005㎡"
  },
  {
    "name": "国际青年公社",
    "averagePrice": 15000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区中州大道与杨金路交汇处东400...",
    "area": "建筑面积：75000㎡"
  },
  {
    "name": "浩创优谷",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 新华路街道郑新快速路与祥和路交汇处",
    "area": "建筑面积：80249㎡"
  },
  {
    "name": "兰馨桂府",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 平原新区中州大道西，农科院示范基地南",
    "area": "建筑面积：88.64-189.3㎡"
  },
  {
    "name": "艾美中心",
    "averagePrice": 8441,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路京城路西南角",
    "area": "建筑面积：45.22-69.73㎡"
  },
  {
    "name": "绿城怡商玉园",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑州市郑东新区九如路龙湖外环",
    "area": "建筑面积：188-308㎡"
  },
  {
    "name": "万祥锦绣花苑",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县顺发路电视塔正西二高对面",
    "area": "建筑面积：92.77-121.27㎡"
  },
  {
    "name": "兰溪上苑",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 九如路与朝阳路交会处东600米路南",
    "area": "建筑面积：160-334㎡"
  },
  {
    "name": "博府华庭",
    "averagePrice": 10453,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 学苑路与大同街交汇处西南角",
    "area": "建筑面积：95.41-144㎡"
  },
  {
    "name": "恒大广场",
    "averagePrice": 13000,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海路与第七大街交叉口向南800米",
    "area": "建筑面积：1834.92㎡"
  },
  {
    "name": "浩创梧桐阳光",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖镇镇区郑新快速通道西侧，阳光大道...",
    "area": "建筑面积：97.35-117㎡"
  },
  {
    "name": "瀚海海尚（商铺）",
    "averagePrice": 35000,
    "type": "店铺",
    "location": "金水",
    "detailedLocation": "东风渠 东风路丰庆路西北角",
    "area": "建筑面积：280000㎡"
  },
  {
    "name": "东方银座",
    "averagePrice": 17000,
    "type": "办公楼",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道永福街交叉口路南200米",
    "area": "建筑面积：38494㎡"
  },
  {
    "name": "雅居乐天域",
    "averagePrice": 10671,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州市中州大道与祥和路交汇处",
    "area": "建筑面积：150000㎡"
  },
  {
    "name": "公园里",
    "averagePrice": 18813,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东商都大道与文通路交汇处",
    "area": "建筑面积：71.4-111.01㎡"
  },
  {
    "name": "锦艺国际中心",
    "averagePrice": 12000,
    "type": "办公楼",
    "location": "中原",
    "detailedLocation": "碧沙岗 中原区桐柏路与棉纺路交汇处",
    "area": "建筑面积：60000㎡"
  },
  {
    "name": "通凯鼎盛名车广场",
    "averagePrice": 10000,
    "type": "店铺",
    "location": "管城",
    "detailedLocation": "管城 南三环与文治路",
    "area": "建筑面积：70000㎡"
  },
  {
    "name": "汇港新城商业",
    "averagePrice": 13429,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "二七 解放路",
    "area": "建筑面积：140000㎡"
  },
  {
    "name": "华兴大厦",
    "averagePrice": 11150,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道文通路北300米（海宁皮革城东...",
    "area": "建筑面积：70576㎡"
  },
  {
    "name": "建业新筑",
    "averagePrice": 25350,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东绿博平安大道与文宗街交汇处西北角",
    "area": "建筑面积：256346㎡"
  },
  {
    "name": "建海国际中心",
    "averagePrice": 14338,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开区航海东路与第八大街交汇处",
    "area": "建筑面积：64000㎡"
  },
  {
    "name": "泰禾大城小院",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 五云路与登封路交汇处向西800米",
    "area": ""
  },
  {
    "name": "建业智慧港",
    "averagePrice": 17875,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 平安大道与明理路交汇处西100米路南",
    "area": "建筑面积：57022㎡"
  },
  {
    "name": "中部港",
    "averagePrice": 20917,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 中州大道与连霍高速交汇处",
    "area": "建筑面积：700000㎡"
  },
  {
    "name": "宝能郑州中心",
    "averagePrice": 24136,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区高铁商务区商鼎路与博学路交汇...",
    "area": "建筑面积：188000㎡"
  },
  {
    "name": "郑州红星国际广场",
    "averagePrice": 12529,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "南三环 大学路南三环交汇处北200米路东",
    "area": "建筑面积：270000㎡"
  },
  {
    "name": "鑫苑金水观城",
    "averagePrice": 20500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水路与未来路交汇处向北300米",
    "area": "建筑面积：88-185㎡"
  },
  {
    "name": "合凯中心广场",
    "averagePrice": 10607,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑州航空港区郑港六路与郑港四街交汇处...",
    "area": "建筑面积：52-146㎡"
  },
  {
    "name": "万众顺和禧",
    "averagePrice": 32682,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区如意西路与龙湖中环路交会处",
    "area": "建筑面积：185-295㎡"
  },
  {
    "name": "正弘瓴",
    "averagePrice": 30792,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 龙湖副CBD九如路和朝阳路交叉口东北角",
    "area": "建筑面积：222-298㎡"
  },
  {
    "name": "正商珑湖上境",
    "averagePrice": 30350,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 众意路与朝阳路交会处东北角",
    "area": "建筑面积：142-209㎡"
  },
  {
    "name": "登封御园",
    "averagePrice": 6151,
    "type": "住宅",
    "location": "登封市",
    "detailedLocation": "登封市 登封市阳城路与颖河路向东300米路南",
    "area": "建筑面积：89.95-341.7㎡"
  },
  {
    "name": "创新广场",
    "averagePrice": 11750,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 高新区金梭路与国槐街交汇处",
    "area": "建筑面积：35.7㎡"
  },
  {
    "name": "正東龙润国际",
    "averagePrice": 17000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 湖心环路尚贤街北",
    "area": "建筑面积：27000㎡"
  },
  {
    "name": "青春GALA",
    "averagePrice": 8300,
    "type": "商住",
    "location": "郑州周边",
    "detailedLocation": "平原新区 中州大道北段与311省道交汇处东北角",
    "area": "建筑面积：38-46㎡"
  },
  {
    "name": "长江一号6街",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "二七 长江路与京广路交会处东南",
    "area": ""
  },
  {
    "name": "世航之窗",
    "averagePrice": 15900,
    "type": "办公楼",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区四港联动大道与云港路交叉口西...",
    "area": "建筑面积：58993㎡"
  },
  {
    "name": "兴瑞汇金国际",
    "averagePrice": 7200,
    "type": "办公楼",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区新港大道(现S223省道与南水北...",
    "area": "建筑面积：237239㎡"
  },
  {
    "name": "郑州1908",
    "averagePrice": 20000,
    "type": "商业街",
    "location": "金水",
    "detailedLocation": "金水区 中方园路与宏达路交汇处西北角",
    "area": "建筑面积：60000㎡"
  },
  {
    "name": "中原新天地",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 中原路与桐柏路交汇处西南侧",
    "area": "建筑面积：39.8-132.71㎡"
  },
  {
    "name": "二七绿地中心",
    "averagePrice": 11000,
    "type": "办公楼",
    "location": "二七",
    "detailedLocation": "南三环 大学路与南三环交叉口南2000米路东",
    "area": "建筑面积：2000000㎡"
  },
  {
    "name": "鸿府壹号",
    "averagePrice": 10790,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与寿圣街交汇处",
    "area": "建筑面积：90.78-123㎡"
  },
  {
    "name": "兰德中心",
    "averagePrice": 18500,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "国贸 花园路与农业路交汇处向南100米",
    "area": "建筑面积：96500㎡"
  },
  {
    "name": "华信米克空间",
    "averagePrice": 10750,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 中华路中兴路交叉口向南100米（轩辕湖...",
    "area": "建筑面积：60000㎡"
  },
  {
    "name": "雅居乐御宾府",
    "averagePrice": 28500,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东龙湖如意东路与朝阳路交会处",
    "area": "建筑面积：74000㎡"
  },
  {
    "name": "象湖郡",
    "averagePrice": 20278,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与前程路交叉口向南800米",
    "area": "建筑面积：120000㎡"
  },
  {
    "name": "郑州托尼洛 兰博基尼中心",
    "averagePrice": 11150,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑开大道北辅道与文通路交汇处东北角",
    "area": "建筑面积：190000㎡"
  },
  {
    "name": "新亚汽车金融广场",
    "averagePrice": 13965,
    "type": "办公楼",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开区南三环与25大街交汇处",
    "area": "建筑面积：480000㎡"
  },
  {
    "name": "新田广场写字楼",
    "averagePrice": 13429,
    "type": "办公楼",
    "location": "二七",
    "detailedLocation": "二七 福寿街以东正兴街以北解放路以南",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "富田九鼎世家",
    "averagePrice": 23000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第五大街",
    "area": "建筑面积：80-230㎡"
  },
  {
    "name": "碧桂园天悦",
    "averagePrice": 18863,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第一大街,近经南六辅路",
    "area": "建筑面积：95-182㎡"
  },
  {
    "name": "康桥康城",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学南路,近001乡道",
    "area": "建筑面积：89-131㎡"
  },
  {
    "name": "和昌悦澜",
    "averagePrice": 35000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "森林公园 宏康路66号",
    "area": "建筑面积：2780000㎡"
  },
  {
    "name": "东鑫凯旋城",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州南龙湖郑新快速与双湖大道交汇处向...",
    "area": "建筑面积：89.23-113.66㎡"
  },
  {
    "name": "海南正商红椰湾",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 海南省文昌市清澜开发区新港路258号",
    "area": "建筑面积：51.48-74.4㎡"
  },
  {
    "name": "唯棠",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 秦岭路与西流湖路交叉口向西200米",
    "area": "建筑面积：83.26-91.37㎡"
  },
  {
    "name": "瀚海海尚",
    "averagePrice": 15500,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "东风渠 东风路与丰庆路交叉口西北角",
    "area": "建筑面积：44-73㎡"
  },
  {
    "name": "绿地澜庭",
    "averagePrice": 14472,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第十八大街与经南八路交叉口向北1...",
    "area": "建筑面积：90-176㎡"
  },
  {
    "name": "中海锦城",
    "averagePrice": 50000,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 南阳路与兴隆铺路交叉口向东400米",
    "area": "建筑面积：89-141㎡"
  },
  {
    "name": "浩创梧桐印象",
    "averagePrice": 10700,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 双湖大道与郑孟路交汇处南300米",
    "area": "建筑面积：97.35-120.96㎡"
  },
  {
    "name": "六合幸福门",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 建设路与秦岭路交汇处东北角",
    "area": "建筑面积：75.9-122.1㎡"
  },
  {
    "name": "伟业象湖国际",
    "averagePrice": 12500,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与锦绣路交会处西南角",
    "area": "建筑面积：111837㎡"
  },
  {
    "name": "龙湖玖號院",
    "averagePrice": 10345,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 泰山路与鸿鹄路交叉口",
    "area": "建筑面积：79-126㎡"
  },
  {
    "name": "龙湖润泽花园",
    "averagePrice": 10400,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道与文昌路交汇处向北300米路东",
    "area": "建筑面积：81.81-126.87㎡"
  },
  {
    "name": "源升金锣湾",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 航海东路",
    "area": "建筑面积：82-121㎡"
  },
  {
    "name": "亿辰山海间",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与政通路交叉口向西50米",
    "area": "建筑面积：60.03-135.5㎡"
  },
  {
    "name": "金盛国际商贸城",
    "averagePrice": 7600,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 321省道,近大学南路",
    "area": "建筑面积：36-105㎡"
  },
  {
    "name": "维也纳湖畔",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙泊南路",
    "area": "建筑面积：90-163㎡"
  },
  {
    "name": "康桥朗城",
    "averagePrice": 17000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 花园路龙门路西500米（八号演播厅西南...",
    "area": "建筑面积：89㎡"
  },
  {
    "name": "怡丰森林湖",
    "averagePrice": 13472,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 天河路北段（惠济区政府向北2000米）",
    "area": "建筑面积：70.81-122㎡"
  },
  {
    "name": "丁香郡",
    "averagePrice": 9400,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道丁香里交会处西南角",
    "area": "建筑面积：36.18-141㎡"
  },
  {
    "name": "永威迎宾府",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 迎宾路银通路交会处向南500米路西",
    "area": "建筑面积：55.43-145㎡"
  },
  {
    "name": "南熙福邸",
    "averagePrice": 15000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "东风东路 金水东路与杨桥路交汇处南300米",
    "area": "建筑面积：50-165.7㎡"
  },
  {
    "name": "一江弘城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 学院路",
    "area": "建筑面积：89-141.94㎡"
  },
  {
    "name": "九锦台",
    "averagePrice": 17317,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 国基路中方园路交汇西北角",
    "area": "建筑面积：89.71-131.29㎡"
  },
  {
    "name": "瀚海璞丽中心",
    "averagePrice": 16000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 黄河路与经二路交会处",
    "area": "建筑面积：38-40㎡"
  },
  {
    "name": "长隆广场",
    "averagePrice": 12529,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学路与南三环交叉口西100米路北",
    "area": "建筑面积：40㎡"
  },
  {
    "name": "龙湖熙岸",
    "averagePrice": 10467,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州·南龙湖鸿鹄路与泰山路向东200米",
    "area": "建筑面积：89-486㎡"
  },
  {
    "name": "翰林华庭",
    "averagePrice": 20167,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 三全路洛阳路新七中向北300米路西",
    "area": "建筑面积：89-129㎡"
  },
  {
    "name": "糖果时光",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 莲花街",
    "area": "建筑面积：62.01-105.56㎡"
  },
  {
    "name": "领航新中原",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区中原路与西三环交汇处东南角",
    "area": "建筑面积：63-134㎡"
  },
  {
    "name": "晖达御景苑",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与西绕城豫龙站交汇处",
    "area": "建筑面积：113-153㎡"
  },
  {
    "name": "海赋国际",
    "averagePrice": 23513,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "新东站 心怡路与福禄路交汇处（福禄路98号）",
    "area": "建筑面积：50-60㎡"
  },
  {
    "name": "正弘湾",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 东风路",
    "area": "建筑面积：207-560㎡"
  },
  {
    "name": "郑上品",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与工业路交汇处北侧",
    "area": "建筑面积：82.5-124.59㎡"
  },
  {
    "name": "宝翔嘉苑",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 飞龙路",
    "area": "建筑面积：77.59-121㎡"
  },
  {
    "name": "理想名家",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 西四环与药厂街交汇处东北角",
    "area": "建筑面积：83-110㎡"
  },
  {
    "name": "明天世纪",
    "averagePrice": 18200,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 农业路与信息学院路交汇处北500米",
    "area": "建筑面积：52.15-129.25㎡"
  },
  {
    "name": "丹成福地",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路与密杞路",
    "area": "建筑面积：46-107.95㎡"
  },
  {
    "name": "健达西西湖",
    "averagePrice": 14332,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "化工路 化工路瑞达路",
    "area": "建筑面积：80.67-135.39㎡"
  },
  {
    "name": "郑报润园",
    "averagePrice": 10607,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港二街与郑港四路交会处东北",
    "area": "建筑面积：77.49-141.02㎡"
  },
  {
    "name": "德风美瑜广场",
    "averagePrice": 15180,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 未来路与德风街交汇处向东100米路北",
    "area": "建筑面积：112.45-129.47㎡"
  },
  {
    "name": "康桥九溪郡",
    "averagePrice": 800,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与双湖大道交汇处",
    "area": "建筑面积：77-200㎡"
  },
  {
    "name": "昆仑望岳",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 华山路与颍河路交会处",
    "area": "建筑面积：128-140㎡"
  },
  {
    "name": "美泽乐居",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 长江大道与华山路交汇处",
    "area": "建筑面积：132-223㎡"
  },
  {
    "name": "伟业巴黎印象",
    "averagePrice": 11500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 福顺街",
    "area": "建筑面积：88.81-123.47㎡"
  },
  {
    "name": "金龙紫东郡",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 康泰路与荥泽大道交汇处向东200米",
    "area": "建筑面积：88-134.22㎡"
  },
  {
    "name": "翡丽公馆",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "国贸 经七路红旗路向北100米路西",
    "area": "建筑面积：35.5-85.88㎡"
  },
  {
    "name": "易元国际",
    "averagePrice": 19000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 商都路与心怡路交汇处北100米路东（新...",
    "area": "建筑面积：1446㎡"
  },
  {
    "name": "惠达金苑",
    "averagePrice": 14321,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区 花园路与英才街交汇处西10米右转",
    "area": "建筑面积：49-72㎡"
  },
  {
    "name": "兰馨壹号院",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 南龙湖双湖大道与文昌路交汇处北50米",
    "area": "建筑面积：89-137㎡"
  },
  {
    "name": "升龙又一城",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新技术开发区科学大道和长椿路交叉口...",
    "area": "建筑面积：50-168㎡"
  },
  {
    "name": "绿博春天",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟商都大道与寿圣街交叉口向西200米...",
    "area": "建筑面积：90-123㎡"
  },
  {
    "name": "恒大翡翠华庭",
    "averagePrice": 18000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 郑州市高新区莲花街与银杏路交叉口北5...",
    "area": "建筑面积：93.58-141.47㎡"
  },
  {
    "name": "美景鸿城",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 管城中州大道与航海路交叉口东200米",
    "area": "建筑面积：53-124㎡"
  },
  {
    "name": "中森悦蓝山",
    "averagePrice": 4800,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥泽大道与郑上路交会处向北200米路东",
    "area": "建筑面积：79-125㎡"
  },
  {
    "name": "伍號院",
    "averagePrice": 12529,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 南三环与连云路交汇处南600米路西",
    "area": "建筑面积：42.83-141.15㎡"
  },
  {
    "name": "正商明钻",
    "averagePrice": 14706,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "五龙口 冉屯西路与秦岭路交汇处北300米",
    "area": "建筑面积：43-127.59㎡"
  },
  {
    "name": "金成时代广场",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "民航路 中州大道与黄河路交汇处",
    "area": "建筑面积：53.88-106㎡"
  },
  {
    "name": "领城公园1857",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道与郑新快速路交汇处东100米",
    "area": "建筑面积：85.31-123.21㎡"
  },
  {
    "name": "东方鼎盛御府",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 农业南路与商鼎路交汇处向东100米路南",
    "area": "建筑面积：89.98-174.57㎡"
  },
  {
    "name": "郑东鑫成美墅三期(七里香溪)",
    "averagePrice": 6000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道路与万三路交叉口向东500米路...",
    "area": "建筑面积：76-150㎡"
  },
  {
    "name": "雅居乐国际花园",
    "averagePrice": 9800,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区郑开大道与康庄路交汇处南（郑...",
    "area": "建筑面积：95-145㎡"
  },
  {
    "name": "永威翡翠城",
    "averagePrice": 20000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 中州大道与金水东路交汇处南500米路东",
    "area": "建筑面积：75.4-160.44㎡"
  },
  {
    "name": "华启金悦府",
    "averagePrice": 15500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 商都路站南路交会处南150米",
    "area": "建筑面积：88-220㎡"
  },
  {
    "name": "怡丰新都汇一期",
    "averagePrice": 17248,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 惠济区农业路天明路交汇处",
    "area": "建筑面积：68.46-123.52㎡"
  },
  {
    "name": "郑州二七万达广场",
    "averagePrice": 14300,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 大学南路与航海路交叉口西南角",
    "area": "建筑面积：85-110㎡"
  },
  {
    "name": "鑫苑现代城",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 二七陇海路与京广路交叉口向西200米（...",
    "area": "建筑面积：54-147㎡"
  },
  {
    "name": "正商恒钻",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 农业路与沙口路交叉口向北400米路东",
    "area": "建筑面积：87-150.7㎡"
  },
  {
    "name": "金印阳光城",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 金水国基路与柳西路交汇处西北",
    "area": "建筑面积：82-129㎡"
  },
  {
    "name": "同汇水木清城",
    "averagePrice": 14833,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "碧沙岗 嵩山路与建设路交叉口天龙大厦B1201",
    "area": ""
  },
  {
    "name": "富田九鼎世家",
    "averagePrice": 23000,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第五大街",
    "area": "建筑面积：80-230㎡"
  },
  {
    "name": "碧桂园天悦",
    "averagePrice": 18863,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第一大街,近经南六辅路",
    "area": "建筑面积：95-182㎡"
  },
  {
    "name": "康桥康城",
    "averagePrice": 13800,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学南路,近001乡道",
    "area": "建筑面积：89-131㎡"
  },
  {
    "name": "和昌悦澜",
    "averagePrice": 35000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "森林公园 宏康路66号",
    "area": "建筑面积：2780000㎡"
  },
  {
    "name": "东鑫凯旋城",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州南龙湖郑新快速与双湖大道交汇处向...",
    "area": "建筑面积：89.23-113.66㎡"
  },
  {
    "name": "海南正商红椰湾",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 海南省文昌市清澜开发区新港路258号",
    "area": "建筑面积：51.48-74.4㎡"
  },
  {
    "name": "唯棠",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 秦岭路与西流湖路交叉口向西200米",
    "area": "建筑面积：83.26-91.37㎡"
  },
  {
    "name": "瀚海海尚",
    "averagePrice": 15500,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "东风渠 东风路与丰庆路交叉口西北角",
    "area": "建筑面积：44-73㎡"
  },
  {
    "name": "绿地澜庭",
    "averagePrice": 14472,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经开第十八大街与经南八路交叉口向北1...",
    "area": "建筑面积：90-176㎡"
  },
  {
    "name": "中海锦城",
    "averagePrice": 50000,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 南阳路与兴隆铺路交叉口向东400米",
    "area": "建筑面积：89-141㎡"
  },
  {
    "name": "浩创梧桐印象",
    "averagePrice": 10700,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 双湖大道与郑孟路交汇处南300米",
    "area": "建筑面积：97.35-120.96㎡"
  },
  {
    "name": "六合幸福门",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 建设路与秦岭路交汇处东北角",
    "area": "建筑面积：75.9-122.1㎡"
  },
  {
    "name": "伟业象湖国际",
    "averagePrice": 12500,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与锦绣路交会处西南角",
    "area": "建筑面积：111837㎡"
  },
  {
    "name": "龙湖玖號院",
    "averagePrice": 10345,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 泰山路与鸿鹄路交叉口",
    "area": "建筑面积：79-126㎡"
  },
  {
    "name": "龙湖润泽花园",
    "averagePrice": 10400,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 双湖大道与文昌路交汇处向北300米路东",
    "area": "建筑面积：81.81-126.87㎡"
  },
  {
    "name": "源升金锣湾",
    "averagePrice": 15000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 航海东路",
    "area": "建筑面积：82-121㎡"
  },
  {
    "name": "亿辰山海间",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与政通路交叉口向西50米",
    "area": "建筑面积：60.03-135.5㎡"
  },
  {
    "name": "金盛国际商贸城",
    "averagePrice": 7600,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 321省道,近大学南路",
    "area": "建筑面积：36-105㎡"
  },
  {
    "name": "维也纳湖畔",
    "averagePrice": 9000,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙泊南路",
    "area": "建筑面积：90-163㎡"
  },
  {
    "name": "康桥朗城",
    "averagePrice": 17000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 花园路龙门路西500米（八号演播厅西南...",
    "area": "建筑面积：89㎡"
  },
  {
    "name": "怡丰森林湖",
    "averagePrice": 13472,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 天河路北段（惠济区政府向北2000米）",
    "area": "建筑面积：70.81-122㎡"
  },
  {
    "name": "豫发国园",
    "averagePrice": 8400,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港综合实验区郑港四街和郑港四路交...",
    "area": "建筑面积：127-208㎡"
  },
  {
    "name": "丁香郡",
    "averagePrice": 9400,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道丁香里交会处西南角",
    "area": "建筑面积：36.18-141㎡"
  },
  {
    "name": "永威迎宾府",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 迎宾路银通路交会处向南500米路西",
    "area": "建筑面积：55.43-145㎡"
  },
  {
    "name": "南熙福邸",
    "averagePrice": 15000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "东风东路 金水东路与杨桥路交汇处南300米",
    "area": "建筑面积：50-165.7㎡"
  },
  {
    "name": "一江弘城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 学院路",
    "area": "建筑面积：89-141.94㎡"
  },
  {
    "name": "九锦台",
    "averagePrice": 17317,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 国基路中方园路交汇西北角",
    "area": "建筑面积：89.71-131.29㎡"
  },
  {
    "name": "瀚海璞丽中心",
    "averagePrice": 16000,
    "type": "商住",
    "location": "金水",
    "detailedLocation": "金水区 黄河路与经二路交会处",
    "area": "建筑面积：38-40㎡"
  },
  {
    "name": "长隆广场",
    "averagePrice": 12529,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学路与南三环交叉口西100米路北",
    "area": "建筑面积：40㎡"
  },
  {
    "name": "龙湖熙岸",
    "averagePrice": 10467,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑州·南龙湖鸿鹄路与泰山路向东200米",
    "area": "建筑面积：89-486㎡"
  },
  {
    "name": "翰林华庭",
    "averagePrice": 20167,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 三全路洛阳路新七中向北300米路西",
    "area": "建筑面积：89-129㎡"
  },
  {
    "name": "糖果时光",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 莲花街",
    "area": "建筑面积：62.01-105.56㎡"
  },
  {
    "name": "领航新中原",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区中原路与西三环交汇处东南角",
    "area": "建筑面积：63-134㎡"
  },
  {
    "name": "晖达御景苑",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与西绕城豫龙站交汇处",
    "area": "建筑面积：113-153㎡"
  },
  {
    "name": "海赋国际",
    "averagePrice": 23513,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "新东站 心怡路与福禄路交汇处（福禄路98号）",
    "area": "建筑面积：50-60㎡"
  },
  {
    "name": "正弘湾",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 东风路",
    "area": "建筑面积：207-560㎡"
  },
  {
    "name": "郑上品",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与工业路交汇处北侧",
    "area": "建筑面积：82.5-124.59㎡"
  },
  {
    "name": "宝翔嘉苑",
    "averagePrice": 8200,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 飞龙路",
    "area": "建筑面积：77.59-121㎡"
  },
  {
    "name": "理想名家",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 西四环与药厂街交汇处东北角",
    "area": "建筑面积：83-110㎡"
  },
  {
    "name": "明天世纪",
    "averagePrice": 18200,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 农业路与信息学院路交汇处北500米",
    "area": "建筑面积：52.15-129.25㎡"
  },
  {
    "name": "丹成福地",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路与密杞路",
    "area": "建筑面积：46-107.95㎡"
  },
  {
    "name": "健达西西湖",
    "averagePrice": 14332,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "化工路 化工路瑞达路",
    "area": "建筑面积：80.67-135.39㎡"
  },
  {
    "name": "郑报润园",
    "averagePrice": 10607,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港二街与郑港四路交会处东北",
    "area": "建筑面积：77.49-141.02㎡"
  },
  {
    "name": "德风美瑜广场",
    "averagePrice": 15180,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 未来路与德风街交汇处向东100米路北",
    "area": "建筑面积：112.45-129.47㎡"
  },
  {
    "name": "康桥九溪郡",
    "averagePrice": 800,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与双湖大道交汇处",
    "area": "建筑面积：77-200㎡"
  },
  {
    "name": "昆仑望岳",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 华山路与颍河路交会处",
    "area": "建筑面积：128-140㎡"
  },
  {
    "name": "美泽乐居",
    "averagePrice": 8300,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 长江大道与华山路交汇处",
    "area": "建筑面积：132-223㎡"
  },
  {
    "name": "伟业巴黎印象",
    "averagePrice": 11500,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 福顺街",
    "area": "建筑面积：88.81-123.47㎡"
  },
  {
    "name": "金龙紫东郡",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 康泰路与荥泽大道交汇处向东200米",
    "area": "建筑面积：88-134.22㎡"
  },
  {
    "name": "总部大观",
    "averagePrice": 11750,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道与西四环交叉口往西2000米",
    "area": "建筑面积：240000㎡"
  },
  {
    "name": "郑东新世界",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县郑汴路和白沙大道交叉口北300米",
    "area": "建筑面积：80-110㎡"
  },
  {
    "name": "中岳大厦",
    "averagePrice": 14519,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 京广路与航海路交汇处向南100米路西",
    "area": "建筑面积：79.33-105.74㎡"
  },
  {
    "name": "泰来怡居",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 中州大道与石化路交会处西300米路北",
    "area": "建筑面积：91.44-128.41㎡"
  },
  {
    "name": "康桥原溪里",
    "averagePrice": 6900,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖镇郑新快速路与祥安路交汇处",
    "area": "建筑面积：85-126㎡"
  },
  {
    "name": "SOHO昆仑公寓",
    "averagePrice": 13475,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 陇海西路与华山路交汇处北50米路西",
    "area": "建筑面积：37.44-50.47㎡"
  },
  {
    "name": "航空港苹果城",
    "averagePrice": 10380,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 省道102与解放大道向南莲花路口",
    "area": "建筑面积：53㎡"
  },
  {
    "name": "嘉亿东方大厦",
    "averagePrice": 13000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 商都路与站南路向北200米（郑东高铁站...",
    "area": "建筑面积：86452㎡"
  },
  {
    "name": "河南外包产业园",
    "averagePrice": 18531,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "森林公园 金水区中州大道与杨金路交汇处向东4公...",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "鹏翔商业中心",
    "averagePrice": 14577,
    "type": "店铺",
    "location": "惠济",
    "detailedLocation": "惠济区 新城路与清华园路交汇处",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "阳光景苑",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原陇海西路与华山路交口向西300米",
    "area": "建筑面积：89.17-89.91㎡"
  },
  {
    "name": "绿都褐石街区",
    "averagePrice": 6300,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 中牟新区文博路与占杨路交汇处（中牟县...",
    "area": "建筑面积：89-118㎡"
  },
  {
    "name": "威尼斯水城三期",
    "averagePrice": 16052,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "五龙口 农业路与桐柏路交会处向北180米路西",
    "area": "建筑面积：48.22-79.75㎡"
  },
  {
    "name": "绿地新都会",
    "averagePrice": 22000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与东风东路交汇处",
    "area": "建筑面积：705192㎡"
  },
  {
    "name": "永恒中心",
    "averagePrice": 15000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "金水区 金水区郑汴路与建业路交会处",
    "area": "建筑面积：600000㎡"
  },
  {
    "name": "华润大厦",
    "averagePrice": 13000,
    "type": "办公楼",
    "location": "二七",
    "detailedLocation": "二七 铭功路以东、西太康路以南、民主路以西...",
    "area": "建筑面积：70000㎡"
  },
  {
    "name": "大商铂悦城",
    "averagePrice": 13429,
    "type": "商住",
    "location": "二七",
    "detailedLocation": "二七 民主路与西太康路交汇处东南角",
    "area": "建筑面积：180000㎡"
  },
  {
    "name": "龙湖壹号总部中心",
    "averagePrice": 29850,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风路九如路向北300米",
    "area": "建筑面积：98000㎡"
  },
  {
    "name": "乐缤纷数码公园",
    "averagePrice": 16744,
    "type": "店铺",
    "location": "金水",
    "detailedLocation": "东风渠 东风路",
    "area": "建筑面积：24000㎡"
  },
  {
    "name": "泰成溪水湾",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑韩路与107国道交汇处西150米（西城大...",
    "area": "建筑面积：275076㎡"
  },
  {
    "name": "美侨世纪广场",
    "averagePrice": 17000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与107辅道交汇处",
    "area": "建筑面积：105307㎡"
  },
  {
    "name": "龙湖里",
    "averagePrice": 50000,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 龙湖中环南路与九如路交汇处西南",
    "area": "建筑面积：45000㎡"
  },
  {
    "name": "德美皇朝",
    "averagePrice": 4186,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学路与密杞路交叉口南300路西",
    "area": "建筑面积：40-143㎡"
  },
  {
    "name": "龙鼎创富中心",
    "averagePrice": 15475,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "高新区 西四环莲花街交叉口向西1000米路北",
    "area": "建筑面积：55000㎡"
  },
  {
    "name": "龙子湖社区",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 姚桥路博学路交叉口",
    "area": "建筑面积：79-135㎡"
  },
  {
    "name": "恒通国际广场",
    "averagePrice": 9000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区郑开大道与郑信路交汇处向东5...",
    "area": "建筑面积：76000㎡"
  },
  {
    "name": "聚方科技园",
    "averagePrice": 17875,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 龙湖外环路与徐庄东路交叉口北900米",
    "area": "建筑面积：89000㎡"
  },
  {
    "name": "嵩林雅苑",
    "averagePrice": 5761,
    "type": "住宅",
    "location": "登封市",
    "detailedLocation": "登封市 嵩阳路与魁星街交叉口西北角",
    "area": "建筑面积：61367㎡"
  },
  {
    "name": "盛驰花园里",
    "averagePrice": 11500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 恒通路与镇兴路交汇处向西300米（郑东...",
    "area": "建筑面积：85000㎡"
  },
  {
    "name": "山顶御和园",
    "averagePrice": 10900,
    "type": "店铺",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区郑港七路与郑港六街交汇处",
    "area": "建筑面积：314877㎡"
  },
  {
    "name": "汇艺悦公馆",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 祭城路博学路交叉口东北角",
    "area": "建筑面积：49682㎡"
  },
  {
    "name": "喜多家",
    "averagePrice": 13414,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与淮河路交汇处向南100米路西",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "东洲鸣翠苑",
    "averagePrice": 16500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 东风东路西、七里河南路南",
    "area": ""
  },
  {
    "name": "郑东宽HOUSE",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑汴大道与白沙大道交汇处北200米路西",
    "area": "建筑面积：1000000㎡"
  },
  {
    "name": "宏光蓝水岸",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 农业东路与如意东路交汇处西南侧.",
    "area": "建筑面积：160000㎡"
  },
  {
    "name": "东方鼎盛中心",
    "averagePrice": 24000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区金水路与众旺路交汇处北500米...",
    "area": "建筑面积：64000㎡"
  },
  {
    "name": "福晟国际",
    "averagePrice": 17000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 金水东路与民生路交汇处",
    "area": "建筑面积：95169㎡"
  },
  {
    "name": "刘砦城中村改造项目",
    "averagePrice": 16717,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 南阳路西、沙口路东、拖厂路南、刘砦路...",
    "area": ""
  },
  {
    "name": "锦绣广场",
    "averagePrice": 14833,
    "type": "店铺",
    "location": "中原",
    "detailedLocation": "碧沙岗 中原区棉纺路工人路交叉口",
    "area": "建筑面积：1000000㎡"
  },
  {
    "name": "御玺大厦",
    "averagePrice": 10100,
    "type": "办公楼",
    "location": "管城",
    "detailedLocation": "管城 东明路与郑汴路交叉口北50米",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "海马公园",
    "averagePrice": 23000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 东风东路与商都路交汇处东北",
    "area": "建筑面积：73.81-162.66㎡"
  },
  {
    "name": "郑州国瑞城",
    "averagePrice": 15500,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥云路",
    "area": "建筑面积：82.17-484㎡"
  },
  {
    "name": "保利罗兰香谷",
    "averagePrice": 16333,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 航海东路与凤凰大街交会处（郑风牡丹园...",
    "area": "建筑面积：89-230㎡"
  },
  {
    "name": "爱丁堡",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 瑞达路合欢街交汇处向西300米",
    "area": "建筑面积：77-118㎡"
  },
  {
    "name": "和黄熙花园",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与西三环交汇处向西200米路北",
    "area": "建筑面积：55-129.08㎡"
  },
  {
    "name": "五洲城",
    "averagePrice": 7000,
    "type": "店铺",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路与荥泽大道交汇处西北角",
    "area": "建筑面积：16000000㎡"
  },
  {
    "name": "鑫川花园",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路密杞交叉口向西500米路南",
    "area": "建筑面积：42-290㎡"
  },
  {
    "name": "康桥悦城",
    "averagePrice": 16700,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经开区南三环与经开十七大街交汇处南5...",
    "area": "建筑面积：80-144㎡"
  },
  {
    "name": "丽景苑",
    "averagePrice": 21188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 经三路",
    "area": "建筑面积：89.46-126.1㎡"
  },
  {
    "name": "华启唐宁1號",
    "averagePrice": 10913,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙泊南路与郑新快速路叉口向西500米路...",
    "area": "建筑面积：89-251㎡"
  },
  {
    "name": "华启唐宁1號",
    "averagePrice": 10913,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙泊南路与郑新快速路叉口向西500米路...",
    "area": "建筑面积：89-251㎡"
  },
  {
    "name": "国泰一品庄园",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 花园路北环交汇处东300米",
    "area": "建筑面积：89.62-124㎡"
  },
  {
    "name": "弘润幸福里",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 东风路与丰乐路交汇处北500米",
    "area": "建筑面积：56-111㎡"
  },
  {
    "name": "中海锦苑",
    "averagePrice": 20000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 金水区信息学院路与文劳路交会处向西3...",
    "area": "建筑面积：89-129㎡"
  },
  {
    "name": "城开·绿园",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 桐柏路与五龙口南路交叉口西南角",
    "area": "建筑面积：87-198.54㎡"
  },
  {
    "name": "永威梅隆公馆",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 开封市汴西新区郑开大道与第九大街交汇...",
    "area": "建筑面积：120-385.62㎡"
  },
  {
    "name": "宾悦龙城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新路与中兴路交汇处",
    "area": "建筑面积：81.05-256.09㎡"
  },
  {
    "name": "智慧城云著",
    "averagePrice": 24136,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区郑开大道与雁鸣路交汇处西北角",
    "area": "建筑面积：88.67-139.68㎡"
  },
  {
    "name": "紫域澜庭",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与飞龙路（荥泽大道东）交叉口北...",
    "area": "建筑面积：84-139㎡"
  },
  {
    "name": "泰成悦府",
    "averagePrice": 8441,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥阳市郑上路与三公路交汇处向北200米...",
    "area": "建筑面积：89.63-133.36㎡"
  },
  {
    "name": "坤达祥龙城",
    "averagePrice": 10350,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥云路",
    "area": "建筑面积：79.7-142㎡"
  },
  {
    "name": "易谷国际",
    "averagePrice": 14577,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 北三环南阳路交叉口向西500米路北",
    "area": "建筑面积：46.8-78.16㎡"
  },
  {
    "name": "金帝新生活",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑汴路与广惠街交汇处",
    "area": "建筑面积：56.2-110.44㎡"
  },
  {
    "name": "豫翠园",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 汝南路与济源路交会处（铝城公园对面）",
    "area": "建筑面积：83-138㎡"
  },
  {
    "name": "中部两岸富海湾",
    "averagePrice": 14321,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 花园北路与大河路（北四环）交汇处东北...",
    "area": "建筑面积：38-62㎡"
  },
  {
    "name": "东方润景三期",
    "averagePrice": 10790,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与文通路交汇处东南角",
    "area": "建筑面积：37-96㎡"
  },
  {
    "name": "阳光花苑润园",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区中原路与西环路交汇处西500米",
    "area": "建筑面积：60-170.7㎡"
  },
  {
    "name": "林溪湾",
    "averagePrice": 1500,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 湖滨路,近祥安路",
    "area": "建筑面积：360.16-450㎡"
  },
  {
    "name": "新颖创客公社",
    "averagePrice": 8441,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路商隐路北500米",
    "area": "建筑面积：31-70㎡"
  },
  {
    "name": "国投玖栋",
    "averagePrice": 31208,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风东路与九如路交叉口西北角",
    "area": "建筑面积：216㎡"
  },
  {
    "name": "金域蓝湾",
    "averagePrice": 15000,
    "type": "别墅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 黄山路,近太行大道",
    "area": "建筑面积：47-602.96㎡"
  },
  {
    "name": "海港城",
    "averagePrice": 12000,
    "type": "办公楼",
    "location": "惠济",
    "detailedLocation": "惠济区 新城路清华园路交汇处",
    "area": "建筑面积：115-121.24㎡"
  },
  {
    "name": "SOLO特区",
    "averagePrice": 15475,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 西四环与化工路交汇处西500米路北",
    "area": "建筑面积：52-52㎡"
  },
  {
    "name": "恒大雅苑",
    "averagePrice": 13965,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 南三环与前程大道交叉口向东50米",
    "area": "建筑面积：119-133㎡"
  },
  {
    "name": "尚合龙湖企业中心",
    "averagePrice": 11000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 中州大道与杨金路交叉口向东2公里路南",
    "area": "建筑面积：79㎡"
  },
  {
    "name": "汉丰双星",
    "averagePrice": 10600,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟万洪路与中兴路交汇处南300米",
    "area": "建筑面积：44㎡"
  },
  {
    "name": "龙湖左岸",
    "averagePrice": 9600,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 新郑龙湖鸿鹄路与泰山路交汇处东南",
    "area": "建筑面积：134㎡"
  },
  {
    "name": "乾宏领秀空间",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 航海西路与秦岭路交汇处",
    "area": "建筑面积：42.95-108.5㎡"
  },
  {
    "name": "升龙凤凰城",
    "averagePrice": 16762,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 未来路与郑汴路交汇处",
    "area": "建筑面积：46.01-143㎡"
  },
  {
    "name": "鑫苑世纪东城",
    "averagePrice": 21347,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区东风东路与安平路交叉口",
    "area": "建筑面积：81-135㎡"
  },
  {
    "name": "中豪汇景湾",
    "averagePrice": 26945,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 七里河北路与心怡路",
    "area": "建筑面积：36.53-474.25㎡"
  },
  {
    "name": "升龙国际中心",
    "averagePrice": 12529,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 大学路与淮河路交叉口南200米",
    "area": "建筑面积：52.03-125.32㎡"
  },
  {
    "name": "康桥溪月",
    "averagePrice": 10671,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与祥和路交会处向西200米",
    "area": "建筑面积：81-121㎡"
  },
  {
    "name": "升龙汇金广场",
    "averagePrice": 9800,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "省体育中心 南阳路与东风路交汇处向北300米路西",
    "area": "建筑面积：70-153㎡"
  },
  {
    "name": "天地湾",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 英才街与花园路交叉口西200米路南",
    "area": "建筑面积：89-146㎡"
  },
  {
    "name": "维也纳森林",
    "averagePrice": 9700,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 中州大道和北环路交会处北100米路西",
    "area": "建筑面积：88.42-193.69㎡"
  },
  {
    "name": "怡丰新都汇",
    "averagePrice": 17248,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 农业路天明路交会处西南角",
    "area": "建筑面积：31.67-93.02㎡"
  },
  {
    "name": "保利百合",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区建设西路与秦岭路交叉口西北角",
    "area": "建筑面积：79.91-132.73㎡"
  },
  {
    "name": "正商东方港湾",
    "averagePrice": 21692,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区东风东路与商都路交汇处。",
    "area": "建筑面积：86-133.07㎡"
  },
  {
    "name": "保利海上五月花",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 花园路英才街西南角",
    "area": "建筑面积：89-143㎡"
  },
  {
    "name": "清水苑",
    "averagePrice": 23628,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 鸿苑路与鸿宝路交叉口",
    "area": "建筑面积：86-163㎡"
  },
  {
    "name": "国瑞优濠斯",
    "averagePrice": 10100,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 新郑市龙湖祥云路与湖滨路交叉口西南角",
    "area": "建筑面积：40.46-80.3㎡"
  },
  {
    "name": "鑫苑逸品香山",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 惠济花园路与英才街交汇处向西500米",
    "area": "建筑面积：71.16-164.07㎡"
  },
  {
    "name": "正商新蓝钻3期",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 航海路与未来路交叉口向西200米路北",
    "area": "建筑面积：77.49-147.63㎡"
  },
  {
    "name": "郑东宽景一品",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道与白沙大道交叉口向北300米路...",
    "area": "建筑面积：90.92-124.13㎡"
  },
  {
    "name": "昌建誉峰",
    "averagePrice": 10529,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 南阳路与博颂路交汇处西南角",
    "area": "建筑面积：86.64-164.19㎡"
  },
  {
    "name": "龙湖御景",
    "averagePrice": 9163,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 双湖大道与鸿鹄路交汇处西南角",
    "area": "建筑面积：96-139㎡"
  },
  {
    "name": "金晨嘉园",
    "averagePrice": 17404,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 金水文化路与北环路交汇处向北200米路...",
    "area": "建筑面积：85.52-132.06㎡"
  },
  {
    "name": "曼哈顿广场",
    "averagePrice": 19438,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水金水路228号（金水路和未来路及中...",
    "area": "建筑面积：121-159㎡"
  },
  {
    "name": "龙泊圣地",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙湖大学城，老107国道与龙湖镇商业路...",
    "area": "建筑面积：162-190㎡"
  },
  {
    "name": "聚方科技园",
    "averagePrice": 17875,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 龙湖外环路与徐庄东路交叉口北900米",
    "area": "建筑面积：89000㎡"
  },
  {
    "name": "嵩林雅苑",
    "averagePrice": 5761,
    "type": "住宅",
    "location": "登封市",
    "detailedLocation": "登封市 嵩阳路与魁星街交叉口西北角",
    "area": "建筑面积：61367㎡"
  },
  {
    "name": "盛驰花园里",
    "averagePrice": 11500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 恒通路与镇兴路交汇处向西300米（郑东...",
    "area": "建筑面积：85000㎡"
  },
  {
    "name": "山顶御和园",
    "averagePrice": 10900,
    "type": "店铺",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港区郑港七路与郑港六街交汇处",
    "area": "建筑面积：314877㎡"
  },
  {
    "name": "汇艺悦公馆",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 祭城路博学路交叉口东北角",
    "area": "建筑面积：49682㎡"
  },
  {
    "name": "喜多家",
    "averagePrice": 13414,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与淮河路交汇处向南100米路西",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "东洲鸣翠苑",
    "averagePrice": 16500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 东风东路西、七里河南路南",
    "area": ""
  },
  {
    "name": "郑东宽HOUSE",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑汴大道与白沙大道交汇处北200米路西",
    "area": "建筑面积：1000000㎡"
  },
  {
    "name": "宏光蓝水岸",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 农业东路与如意东路交汇处西南侧.",
    "area": "建筑面积：160000㎡"
  },
  {
    "name": "东方鼎盛中心",
    "averagePrice": 24000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区金水路与众旺路交汇处北500米...",
    "area": "建筑面积：64000㎡"
  },
  {
    "name": "福晟国际",
    "averagePrice": 17000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 金水东路与民生路交汇处",
    "area": "建筑面积：95169㎡"
  },
  {
    "name": "刘砦城中村改造项目",
    "averagePrice": 16717,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 南阳路西、沙口路东、拖厂路南、刘砦路...",
    "area": ""
  },
  {
    "name": "锦绣广场",
    "averagePrice": 14833,
    "type": "店铺",
    "location": "中原",
    "detailedLocation": "碧沙岗 中原区棉纺路工人路交叉口",
    "area": "建筑面积：1000000㎡"
  },
  {
    "name": "御玺大厦",
    "averagePrice": 10100,
    "type": "办公楼",
    "location": "管城",
    "detailedLocation": "管城 东明路与郑汴路交叉口北50米",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "海马公园",
    "averagePrice": 23000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 东风东路与商都路交汇处东北",
    "area": "建筑面积：73.81-162.66㎡"
  },
  {
    "name": "郑州国瑞城",
    "averagePrice": 15500,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥云路",
    "area": "建筑面积：82.17-484㎡"
  },
  {
    "name": "保利罗兰香谷",
    "averagePrice": 16333,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 航海东路与凤凰大街交会处（郑风牡丹园...",
    "area": "建筑面积：89-230㎡"
  },
  {
    "name": "爱丁堡",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 瑞达路合欢街交汇处向西300米",
    "area": "建筑面积：77-118㎡"
  },
  {
    "name": "和黄熙花园",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与西三环交汇处向西200米路北",
    "area": "建筑面积：55-129.08㎡"
  },
  {
    "name": "五洲城",
    "averagePrice": 7000,
    "type": "店铺",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路与荥泽大道交汇处西北角",
    "area": "建筑面积：16000000㎡"
  },
  {
    "name": "鑫川花园",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路密杞交叉口向西500米路南",
    "area": "建筑面积：42-290㎡"
  },
  {
    "name": "康桥悦城",
    "averagePrice": 16700,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 经开区南三环与经开十七大街交汇处南5...",
    "area": "建筑面积：80-144㎡"
  },
  {
    "name": "丽景苑",
    "averagePrice": 21188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 经三路",
    "area": "建筑面积：89.46-126.1㎡"
  },
  {
    "name": "华启唐宁1號",
    "averagePrice": 10913,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙泊南路与郑新快速路叉口向西500米路...",
    "area": "建筑面积：89-251㎡"
  },
  {
    "name": "国泰一品庄园",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 花园路北环交汇处东300米",
    "area": "建筑面积：89.62-124㎡"
  },
  {
    "name": "弘润幸福里",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 东风路与丰乐路交汇处北500米",
    "area": "建筑面积：56-111㎡"
  },
  {
    "name": "中海锦苑",
    "averagePrice": 20000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 金水区信息学院路与文劳路交会处向西3...",
    "area": "建筑面积：89-129㎡"
  },
  {
    "name": "城开·绿园",
    "averagePrice": 14900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 桐柏路与五龙口南路交叉口西南角",
    "area": "建筑面积：87-198.54㎡"
  },
  {
    "name": "永威梅隆公馆",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "郑州周边",
    "detailedLocation": "其他 开封市汴西新区郑开大道与第九大街交汇...",
    "area": "建筑面积：120-385.62㎡"
  },
  {
    "name": "宾悦龙城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新路与中兴路交汇处",
    "area": "建筑面积：81.05-256.09㎡"
  },
  {
    "name": "智慧城云著",
    "averagePrice": 24136,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 郑东新区郑开大道与雁鸣路交汇处西北角",
    "area": "建筑面积：88.67-139.68㎡"
  },
  {
    "name": "紫域澜庭",
    "averagePrice": 8510,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路与飞龙路（荥泽大道东）交叉口北...",
    "area": "建筑面积：84-139㎡"
  },
  {
    "name": "泰成悦府",
    "averagePrice": 8441,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥阳市郑上路与三公路交汇处向北200米...",
    "area": "建筑面积：89.63-133.36㎡"
  },
  {
    "name": "坤达祥龙城",
    "averagePrice": 10350,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 祥云路",
    "area": "建筑面积：79.7-142㎡"
  },
  {
    "name": "易谷国际",
    "averagePrice": 14577,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 北三环南阳路交叉口向西500米路北",
    "area": "建筑面积：46.8-78.16㎡"
  },
  {
    "name": "金帝新生活",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑汴路与广惠街交汇处",
    "area": "建筑面积：56.2-110.44㎡"
  },
  {
    "name": "豫翠园",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 汝南路与济源路交会处（铝城公园对面）",
    "area": "建筑面积：83-138㎡"
  },
  {
    "name": "中部两岸富海湾",
    "averagePrice": 14321,
    "type": "商住",
    "location": "惠济",
    "detailedLocation": "惠济区 花园北路与大河路（北四环）交汇处东北...",
    "area": "建筑面积：38-62㎡"
  },
  {
    "name": "东方润景三期",
    "averagePrice": 10790,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与文通路交汇处东南角",
    "area": "建筑面积：37-96㎡"
  },
  {
    "name": "阳光花苑润园",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区中原路与西环路交汇处西500米",
    "area": "建筑面积：60-170.7㎡"
  },
  {
    "name": "林溪湾",
    "averagePrice": 1500,
    "type": "别墅",
    "location": "新郑市",
    "detailedLocation": "新郑 湖滨路,近祥安路",
    "area": "建筑面积：360.16-450㎡"
  },
  {
    "name": "新颖创客公社",
    "averagePrice": 8441,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 郑上路商隐路北500米",
    "area": "建筑面积：31-70㎡"
  },
  {
    "name": "国投玖栋",
    "averagePrice": 31208,
    "type": "别墅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风东路与九如路交叉口西北角",
    "area": "建筑面积：216㎡"
  },
  {
    "name": "金域蓝湾",
    "averagePrice": 15000,
    "type": "别墅",
    "location": "郑州周边",
    "detailedLocation": "平原新区 黄山路,近太行大道",
    "area": "建筑面积：47-602.96㎡"
  },
  {
    "name": "海港城",
    "averagePrice": 12000,
    "type": "办公楼",
    "location": "惠济",
    "detailedLocation": "惠济区 新城路清华园路交汇处",
    "area": "建筑面积：115-121.24㎡"
  },
  {
    "name": "SOLO特区",
    "averagePrice": 15475,
    "type": "商住",
    "location": "高新区",
    "detailedLocation": "高新区 西四环与化工路交汇处西500米路北",
    "area": "建筑面积：52-52㎡"
  },
  {
    "name": "恒大雅苑",
    "averagePrice": 13965,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 南三环与前程大道交叉口向东50米",
    "area": "建筑面积：119-133㎡"
  },
  {
    "name": "尚合龙湖企业中心",
    "averagePrice": 11000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 中州大道与杨金路交叉口向东2公里路南",
    "area": "建筑面积：79㎡"
  },
  {
    "name": "汉丰双星",
    "averagePrice": 10600,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟万洪路与中兴路交汇处南300米",
    "area": "建筑面积：44㎡"
  },
  {
    "name": "龙湖左岸",
    "averagePrice": 9600,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 新郑龙湖鸿鹄路与泰山路交汇处东南",
    "area": "建筑面积：134㎡"
  },
  {
    "name": "逸湖名居",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 丹江路与汝南路交叉口向西200米",
    "area": "建筑面积：116.7-160.58㎡"
  },
  {
    "name": "新核心睿智禧园",
    "averagePrice": 15475,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新区瑞达路与梧桐街交汇处西500米",
    "area": "建筑面积：44.64-142.81㎡"
  },
  {
    "name": "东润朗郡",
    "averagePrice": 7000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道寿圣街交会处",
    "area": "建筑面积：99.61-117.18㎡"
  },
  {
    "name": "城开祥和里",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与棉纺路交汇处北200米路东",
    "area": "建筑面积：57-89㎡"
  },
  {
    "name": "森林里",
    "averagePrice": 5622,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与林东路交叉口",
    "area": "建筑面积：108-126㎡"
  },
  {
    "name": "哈佛生活馆",
    "averagePrice": 10330,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙湖文化路（六合路）路北升达大学北邻",
    "area": "建筑面积：122.33-147.67㎡"
  },
  {
    "name": "瞰都铂宫",
    "averagePrice": 10288,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 青年路中段46号（中牟宾馆前）",
    "area": "建筑面积：50-66.28㎡"
  },
  {
    "name": "万丰慧城",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新技术开发区银屏路25号",
    "area": "建筑面积：79.58-128.94㎡"
  },
  {
    "name": "万创学区1号",
    "averagePrice": 13429,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 中原路京广路交叉口向北200米路西",
    "area": "建筑面积：46-99㎡"
  },
  {
    "name": "旭辉佳苑",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与长江路交叉口西南角",
    "area": "建筑面积：85.64-86㎡"
  },
  {
    "name": "银座时代广场",
    "averagePrice": 16689,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "医学院 二七东太康路24号",
    "area": "建筑面积：35.86-58㎡"
  },
  {
    "name": "爱都会",
    "averagePrice": 14300,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 航海路与大学路交汇处向西100米",
    "area": "建筑面积：37-74㎡"
  },
  {
    "name": "宏光协和广场",
    "averagePrice": 28000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "民航路 中州大道金水路北200米",
    "area": "建筑面积：83701㎡"
  },
  {
    "name": "百成国际文化广场",
    "averagePrice": 18700,
    "type": "店铺",
    "location": "管城",
    "detailedLocation": "管城 南三环与文治路向南2.5公里河西路东15...",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "锦润年华",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道与通惠路交叉口向西50米路南",
    "area": "建筑面积：83.41-139.02㎡"
  },
  {
    "name": "格林融熙国际",
    "averagePrice": 21020,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 经三路与广电南路交汇处东南角",
    "area": "建筑面积：48.2-130.26㎡"
  },
  {
    "name": "郑州中原万达广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与秦岭路交叉口西南角",
    "area": "建筑面积：91.35-142.84㎡"
  },
  {
    "name": "大观国贸",
    "averagePrice": 11750,
    "type": "办公楼",
    "location": "管城",
    "detailedLocation": "管城 管城区火车站南100米 （银基商贸城对面...",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "龙宇国际",
    "averagePrice": 14000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风南路与商鼎路交汇处西北角",
    "area": "建筑面积：144000㎡"
  },
  {
    "name": "广汇PAMA",
    "averagePrice": 19438,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水金水路与中州大道交汇处",
    "area": "建筑面积：179-235㎡"
  },
  {
    "name": "紫檀华都商铺",
    "averagePrice": 25500,
    "type": "购物中心",
    "location": "金水",
    "detailedLocation": "天旺广场 金水区东风路与天明路交汇处南220米",
    "area": "建筑面积：210000㎡"
  },
  {
    "name": "河南省电子商务产业园",
    "averagePrice": 15475,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "高新区 长椿路与冬青街交汇处东北角",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "建业凯旋广场",
    "averagePrice": 18000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "国贸 花园路与农科路交汇处",
    "area": "建筑面积：270000㎡"
  },
  {
    "name": "比克汉丰新能源科技产业园",
    "averagePrice": 11150,
    "type": "店铺",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟万洪路与中兴路交汇处向南300米",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "新合鑫睿达广场",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "高新区",
    "detailedLocation": "高新区 瑞达路与梧桐街交叉口东南角",
    "area": "建筑面积：102000㎡"
  },
  {
    "name": "蓝城蘭园",
    "averagePrice": 28500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风东路与如意西路交汇处",
    "area": "建筑面积：130281㎡"
  },
  {
    "name": "中部汽贸港",
    "averagePrice": 11150,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 中国郑州汽车博览园，万邦国际农产品物...",
    "area": "建筑面积：470000㎡"
  },
  {
    "name": "汉飞逛逛街",
    "averagePrice": 8510,
    "type": "商业街",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 三公路与汜河路交汇处汉飞壹号华府",
    "area": "建筑面积：15000㎡"
  },
  {
    "name": "万众大厦",
    "averagePrice": 18700,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 康宁街与中兴南路交叉口西南角",
    "area": "建筑面积：82433㎡"
  },
  {
    "name": "浩创盛世龙城",
    "averagePrice": 10913,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 新郑市丹尼斯向北50米",
    "area": "建筑面积：240823㎡"
  },
  {
    "name": "锦荣悦汇城",
    "averagePrice": 8600,
    "type": "商住",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港四街与郑港七路",
    "area": "建筑面积：330000㎡"
  },
  {
    "name": "苏荷中心",
    "averagePrice": 24264,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 中州大道和农业路交叉口向西300米路北",
    "area": "建筑面积：112045㎡"
  },
  {
    "name": "绿城雁鸣湖玫瑰园",
    "averagePrice": 11578,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 雁鸣湖生态风景区",
    "area": "建筑面积：226700㎡"
  },
  {
    "name": "晖达新领地",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 郑东新区金水大道与中兴路交汇处向北1...",
    "area": "建筑面积：160000㎡"
  },
  {
    "name": "商城路叁号",
    "averagePrice": 10000,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 管城商城东路3号（商城路与建业路交叉...",
    "area": "建筑面积：20472㎡"
  },
  {
    "name": "东林花园",
    "averagePrice": 14916,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 大河路南、清华园路东",
    "area": "建筑面积：508500㎡"
  },
  {
    "name": "甲六院",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 惠济花园路与迎宾路交叉口",
    "area": "建筑面积：59476㎡"
  },
  {
    "name": "新芒果鹤园",
    "averagePrice": 14055,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 惠济江山路与绿源路交叉口向北50米路东",
    "area": "建筑面积：3500㎡"
  },
  {
    "name": "郑州升龙锦绣城",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 管城花寨路与南三环路交汇处",
    "area": "建筑面积：3810000㎡"
  },
  {
    "name": "瀚海领世馆",
    "averagePrice": 25350,
    "type": "店铺",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与心怡路交汇处",
    "area": "建筑面积：66902㎡"
  },
  {
    "name": "隆兴郡临天下",
    "averagePrice": 8441,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 京城路与康泰路交汇处",
    "area": "建筑面积：380000㎡"
  },
  {
    "name": "长铝新街坊",
    "averagePrice": 6800,
    "type": "店铺",
    "location": "上街",
    "detailedLocation": "上街 上街济源路与汝南路交叉口",
    "area": "建筑面积：50000㎡"
  },
  {
    "name": "正商和谐大厦",
    "averagePrice": 30000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 东风路与永平路交汇处向东800米",
    "area": "建筑面积：78242㎡"
  },
  {
    "name": "正大美丽泉",
    "averagePrice": 14833,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "碧沙岗 陇海路与桐柏路交叉口向西20米",
    "area": ""
  },
  {
    "name": "柠檬星座",
    "averagePrice": 16583,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水区郑汴路与玉凤路交叉口北100米路...",
    "area": "建筑面积：27217㎡"
  },
  {
    "name": "基正聚源国际",
    "averagePrice": 14000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 金水东路与聚源路向南500米",
    "area": "建筑面积：55000㎡"
  },
  {
    "name": "正岩铂兹中心",
    "averagePrice": 12000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 商都路心怡路交汇处西南",
    "area": "建筑面积：60490㎡"
  },
  {
    "name": "金地铂悦",
    "averagePrice": 17300,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 航海东路,近城东南路",
    "area": "建筑面积：85.37-134.72㎡"
  },
  {
    "name": "建业运河上院",
    "averagePrice": 14055,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 天河路",
    "area": "建筑面积：140-143㎡"
  },
  {
    "name": "亿嘉未来国际公寓",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 陇海路与未来路向西50米路南",
    "area": "建筑面积：50-90㎡"
  },
  {
    "name": "永和宇宙星",
    "averagePrice": 15300,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 商鼎路与心怡路交叉口东南角",
    "area": "建筑面积：62.44-136.35㎡"
  },
  {
    "name": "琥珀名城",
    "averagePrice": 21562,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 天伦路9号院（花园路与国基路交叉口北...",
    "area": "建筑面积：79.24-127.66㎡"
  },
  {
    "name": "旭日龙园",
    "averagePrice": 22100,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区商都路农业路东路交汇处西北角",
    "area": "建筑面积：82.73-125.81㎡"
  },
  {
    "name": "城市之星",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 管城未来路与映月路交汇处东50米",
    "area": "建筑面积：46.88-81㎡"
  },
  {
    "name": "豫航泊郡",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区黄河东路与熊耳河路交叉口西2...",
    "area": "建筑面积：60.82-140.25㎡"
  },
  {
    "name": "洁云里",
    "averagePrice": 14460,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 京广路与航海路交汇处南300米路东",
    "area": "建筑面积：108.6-127.7㎡"
  },
  {
    "name": "华龙公馆",
    "averagePrice": 15339,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "陇海西路 陇海路与华山路交叉口向东50米路南(华...",
    "area": "建筑面积：48.1-122.33㎡"
  },
  {
    "name": "海德PARK",
    "averagePrice": 5400,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 新郑市南龙湖祥和路与湖滨路交汇处北5...",
    "area": "建筑面积：84.88-110㎡"
  },
  {
    "name": "郑西建业森林半岛",
    "averagePrice": 4100,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 许昌路与金华路交汇处",
    "area": "建筑面积：49.33-156.98㎡"
  },
  {
    "name": "郑州恒大名都",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 金水文化路与东风路交汇处",
    "area": "建筑面积：96.2-140.28㎡"
  },
  {
    "name": "建业密码国际二期",
    "averagePrice": 13414,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与棉纺路交叉口北50米路东",
    "area": "建筑面积：137.81-151.03㎡"
  },
  {
    "name": "美立方",
    "averagePrice": 13885,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 经济技术开发区经济技术开发区朝凤路与...",
    "area": "建筑面积：36.83-55.85㎡"
  },
  {
    "name": "尚品国际公寓",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区农业东路与金水东路交汇处南6...",
    "area": "建筑面积：77-142㎡"
  },
  {
    "name": "东润华景",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都路与通惠路交叉口向西50米路北",
    "area": "建筑面积：122-142㎡"
  },
  {
    "name": "奥兰时代广场",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区郑汴路与东风东路交汇处北",
    "area": "建筑面积：87.17-89.29㎡"
  },
  {
    "name": "晶诚花园",
    "averagePrice": 21467,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "第五大街 经北二路与第十一大街交汇处",
    "area": "建筑面积：89-136㎡"
  },
  {
    "name": "非常国际二期",
    "averagePrice": 23051,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 德亿路8号（中州大道与林科路交汇处西...",
    "area": "建筑面积：87-157㎡"
  },
  {
    "name": "高新锦绣苑",
    "averagePrice": 14155,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新技术开发区银杏路6号（外语中学后...",
    "area": "建筑面积：0-0㎡"
  },
  {
    "name": "万隆广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 万达广场向西600米路北",
    "area": "建筑面积：41.99-82.69㎡"
  },
  {
    "name": "长城阳光新城",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 秦岭路与岗坡路交叉口西南角",
    "area": "建筑面积：73.5-127.85㎡"
  },
  {
    "name": "风和日丽生活印象三期",
    "averagePrice": 15314,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "五龙口 农业路与煤仓北路交汇处",
    "area": "建筑面积：148-180㎡"
  },
  {
    "name": "中鼎翡翠三期晶典",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 航海东路36号（航海东路与未来路交汇处...",
    "area": "建筑面积：40.17-127.18㎡"
  },
  {
    "name": "逸湖名居",
    "averagePrice": 6800,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 丹江路与汝南路交叉口向西200米",
    "area": "建筑面积：116.7-160.58㎡"
  },
  {
    "name": "新核心睿智禧园",
    "averagePrice": 15475,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新区瑞达路与梧桐街交汇处西500米",
    "area": "建筑面积：44.64-142.81㎡"
  },
  {
    "name": "东润朗郡",
    "averagePrice": 7000,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道寿圣街交会处",
    "area": "建筑面积：99.61-117.18㎡"
  },
  {
    "name": "城开祥和里",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与棉纺路交汇处北200米路东",
    "area": "建筑面积：57-89㎡"
  },
  {
    "name": "森林里",
    "averagePrice": 5622,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与林东路交叉口",
    "area": "建筑面积：108-126㎡"
  },
  {
    "name": "哈佛生活馆",
    "averagePrice": 10330,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 龙湖文化路（六合路）路北升达大学北邻",
    "area": "建筑面积：122.33-147.67㎡"
  },
  {
    "name": "瞰都铂宫",
    "averagePrice": 10288,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 青年路中段46号（中牟宾馆前）",
    "area": "建筑面积：50-66.28㎡"
  },
  {
    "name": "万丰慧城",
    "averagePrice": 14033,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 高新技术开发区银屏路25号",
    "area": "建筑面积：79.58-128.94㎡"
  },
  {
    "name": "万创学区1号",
    "averagePrice": 13429,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "二七 中原路京广路交叉口向北200米路西",
    "area": "建筑面积：46-99㎡"
  },
  {
    "name": "旭辉佳苑",
    "averagePrice": 12650,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与长江路交叉口西南角",
    "area": "建筑面积：85.64-86㎡"
  },
  {
    "name": "银座时代广场",
    "averagePrice": 16689,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "医学院 二七东太康路24号",
    "area": "建筑面积：35.86-58㎡"
  },
  {
    "name": "爱都会",
    "averagePrice": 14300,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 航海路与大学路交汇处向西100米",
    "area": "建筑面积：37-74㎡"
  },
  {
    "name": "宏光协和广场",
    "averagePrice": 28000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "民航路 中州大道金水路北200米",
    "area": "建筑面积：83701㎡"
  },
  {
    "name": "百成国际文化广场",
    "averagePrice": 18700,
    "type": "店铺",
    "location": "管城",
    "detailedLocation": "管城 南三环与文治路向南2.5公里河西路东15...",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "锦润年华",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道与通惠路交叉口向西50米路南",
    "area": "建筑面积：83.41-139.02㎡"
  },
  {
    "name": "格林融熙国际",
    "averagePrice": 21020,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 经三路与广电南路交汇处东南角",
    "area": "建筑面积：48.2-130.26㎡"
  },
  {
    "name": "郑州中原万达广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与秦岭路交叉口西南角",
    "area": "建筑面积：91.35-142.84㎡"
  },
  {
    "name": "大观国贸",
    "averagePrice": 11750,
    "type": "办公楼",
    "location": "管城",
    "detailedLocation": "管城 管城区火车站南100米 （银基商贸城对面...",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "龙宇国际",
    "averagePrice": 14000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风南路与商鼎路交汇处西北角",
    "area": "建筑面积：144000㎡"
  },
  {
    "name": "广汇PAMA",
    "averagePrice": 19438,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "金水区 金水金水路与中州大道交汇处",
    "area": "建筑面积：179-235㎡"
  },
  {
    "name": "紫檀华都商铺",
    "averagePrice": 25500,
    "type": "购物中心",
    "location": "金水",
    "detailedLocation": "天旺广场 金水区东风路与天明路交汇处南220米",
    "area": "建筑面积：210000㎡"
  },
  {
    "name": "河南省电子商务产业园",
    "averagePrice": 15475,
    "type": "办公楼",
    "location": "高新区",
    "detailedLocation": "高新区 长椿路与冬青街交汇处东北角",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "建业凯旋广场",
    "averagePrice": 18000,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "国贸 花园路与农科路交汇处",
    "area": "建筑面积：270000㎡"
  },
  {
    "name": "比克汉丰新能源科技产业园",
    "averagePrice": 11150,
    "type": "店铺",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟万洪路与中兴路交汇处向南300米",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "新合鑫睿达广场",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "高新区",
    "detailedLocation": "高新区 瑞达路与梧桐街交叉口东南角",
    "area": "建筑面积：102000㎡"
  },
  {
    "name": "蓝城蘭园",
    "averagePrice": 28500,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 东风东路与如意西路交汇处",
    "area": "建筑面积：130281㎡"
  },
  {
    "name": "中部汽贸港",
    "averagePrice": 11150,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 中国郑州汽车博览园，万邦国际农产品物...",
    "area": "建筑面积：470000㎡"
  },
  {
    "name": "国瑞迈豪斯",
    "averagePrice": 10750,
    "type": "商住",
    "location": "新郑市",
    "detailedLocation": "龙湖 新郑新快速路与祥云路交汇处向西900米...",
    "area": "建筑面积：56.66-72.24㎡"
  },
  {
    "name": "幸福佳苑",
    "averagePrice": 8150,
    "type": "住宅",
    "location": "新密市",
    "detailedLocation": "新密市 大学路密杞路向南500米路东",
    "area": "建筑面积：57.38-120㎡"
  },
  {
    "name": "万通汽车博览园",
    "averagePrice": 10600,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 郑州中牟汽车产业聚集区（郑庵镇）万通...",
    "area": "建筑面积：55.6㎡"
  },
  {
    "name": "新里卢浮公馆",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区东风东路与永平路交汇处",
    "area": "建筑面积：87.29-164.18㎡"
  },
  {
    "name": "非常旺角",
    "averagePrice": 15594,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "五龙口 西环路与电厂南路交叉口东北角",
    "area": "建筑面积：90-135㎡"
  },
  {
    "name": "万科美景龙堂",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 中州大道航海路交叉口",
    "area": "建筑面积：78-140㎡"
  },
  {
    "name": "晶华城升级版",
    "averagePrice": 14742,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "五龙口 农业西路（冉屯路）与秦岭路交汇处",
    "area": "建筑面积：66.33-71.58㎡"
  },
  {
    "name": "汇金玫瑰园",
    "averagePrice": 9500,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 文化路三全路向北200米",
    "area": "建筑面积：86.53-326.7㎡"
  },
  {
    "name": "中森意墅蓝山",
    "averagePrice": 8441,
    "type": "住宅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 中原西路与唐王路交汇处向北1000米",
    "area": "建筑面积：91.65-148.83㎡"
  },
  {
    "name": "永威五月花城",
    "averagePrice": 18000,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 姚桥路与明理路交汇处",
    "area": "建筑面积：86.35-176.83㎡"
  },
  {
    "name": "惠众西城一品",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 棉纺西路与秦岭路交汇处东北角",
    "area": "建筑面积：88.6-120.1㎡"
  },
  {
    "name": "永威东棠",
    "averagePrice": 24289,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区金水东路与黄河南路交会处向南...",
    "area": "建筑面积：88.87-189.24㎡"
  },
  {
    "name": "绿城水岸名苑",
    "averagePrice": 23399,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "民航路 金水路与建业路交汇处",
    "area": "建筑面积：77.93-140.95㎡"
  },
  {
    "name": "德丰麦卡伦",
    "averagePrice": 6500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 郑新快速路与龙泊南路交汇处向西200米",
    "area": "建筑面积：86.72-135㎡"
  },
  {
    "name": "锦棠",
    "averagePrice": 8500,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 紫荆山路与航海路交汇处",
    "area": "建筑面积：51.9-173.7㎡"
  },
  {
    "name": "方圆创世五期",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 紫荆山路和陇海路交汇处",
    "area": "建筑面积：0-0㎡"
  },
  {
    "name": "东方国际城",
    "averagePrice": 16000,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 中州大道金城大道交汇处向东2公里",
    "area": "建筑面积：79.54-117.09㎡"
  },
  {
    "name": "龙湖名郡",
    "averagePrice": 5200,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖镇学府路与中山路交汇处向东500米",
    "area": "建筑面积：91-135.83㎡"
  },
  {
    "name": "正商蓝海港湾",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 管城紫荆山路与二里岗南街交汇处",
    "area": "建筑面积：39.95-140.71㎡"
  },
  {
    "name": "利海托斯卡纳",
    "averagePrice": 15704,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 南阳路北环西500米路南",
    "area": "建筑面积：77-141㎡"
  },
  {
    "name": "康桥悦岛",
    "averagePrice": 9100,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 南三环碧云路交汇处以南运河以北",
    "area": "建筑面积：91-146㎡"
  },
  {
    "name": "龙子湖微时代",
    "averagePrice": 10500,
    "type": "商住",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 郑东新区祭城路与博学路交汇处东南角",
    "area": "建筑面积：41.09-48.23㎡"
  },
  {
    "name": "秀水苑",
    "averagePrice": 23860,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区鸿苑路与鸿宝路交叉口",
    "area": "建筑面积：196-270㎡"
  },
  {
    "name": "龙湖上公馆",
    "averagePrice": 10688,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 南龙湖祥和路与湖滨路交汇处西200米路...",
    "area": "建筑面积：120.16-120.86㎡"
  },
  {
    "name": "金荣盛景濠庭",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 迎宾路与香山路交汇处往北200米路西",
    "area": "建筑面积：80-99.97㎡"
  },
  {
    "name": "中国派",
    "averagePrice": 23476,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 金水经三路与晨旭路交叉口东400米",
    "area": "建筑面积：33.35-101.6㎡"
  },
  {
    "name": "中原国际文化广场",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原路与桐柏路交叉口",
    "area": "建筑面积：53.71-101.18㎡"
  },
  {
    "name": "中州锦绣花苑",
    "averagePrice": 23450,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "其他 金水中州大道与金水路交汇处南100米",
    "area": "建筑面积：47.56-123.98㎡"
  },
  {
    "name": "东方鼎盛时代",
    "averagePrice": 26000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区金水东路与农业东路南600米",
    "area": "建筑面积：35.53-143.41㎡"
  },
  {
    "name": "金林中心",
    "averagePrice": 18885,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "民航路 金水路南侧、未来大道东侧",
    "area": "建筑面积：46-85㎡"
  },
  {
    "name": "祥瑞中心花园",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 商都大道与西二环路交汇处路南",
    "area": "建筑面积：77.01-119.63㎡"
  },
  {
    "name": "新核心睿智楠园",
    "averagePrice": 13477,
    "type": "住宅",
    "location": "高新区",
    "detailedLocation": "高新区 梧桐街与雪松路交汇处",
    "area": "建筑面积：59-140.22㎡"
  },
  {
    "name": "星城国际西苑",
    "averagePrice": 12717,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道与万三路交叉口东南角",
    "area": "建筑面积：93.12-118.77㎡"
  },
  {
    "name": "蔚蓝国际",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 中原路与西环交汇处东350米路北",
    "area": "建筑面积：30.69-154.45㎡"
  },
  {
    "name": "恒通新城",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 金水东路与康庄路交汇处",
    "area": "建筑面积：0-180㎡"
  },
  {
    "name": "新新人家二期",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 桐柏路与淮河路交汇处北100米路东",
    "area": "建筑面积：39.63-109.67㎡"
  },
  {
    "name": "正商金域世家",
    "averagePrice": 10900,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "桐柏北路 金水西路（西站路）与冉屯东路交叉口",
    "area": "建筑面积：88-173㎡"
  },
  {
    "name": "圣菲城四期银堤漫步",
    "averagePrice": 17457,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 金水花园路与渠东路交汇处向西500米",
    "area": "建筑面积：80-123㎡"
  },
  {
    "name": "郑东曙光苑",
    "averagePrice": 23946,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区兴荣街、聚源路、千宁街交汇处",
    "area": "建筑面积：35.98-145㎡"
  },
  {
    "name": "国龙绿城怡园",
    "averagePrice": 12000,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 心怡路与列里路交汇处",
    "area": "建筑面积：87.33-142.68㎡"
  },
  {
    "name": "兴达锦绣园",
    "averagePrice": 11000,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 郑密路淮河路交叉口南100米",
    "area": "建筑面积：160000㎡"
  },
  {
    "name": "豫发大运城/白鹭源",
    "averagePrice": 6300,
    "type": "住宅",
    "location": "航空港区",
    "detailedLocation": "航空港 航空港综合实验区郑港四街和郑港四路交...",
    "area": "建筑面积：91-130㎡"
  },
  {
    "name": "金印现代城",
    "averagePrice": 15113,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 金水经三路北段与徐寨路交汇处",
    "area": "建筑面积：104.19-197.71㎡"
  },
  {
    "name": "坤宇凯旋城",
    "averagePrice": 5500,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "新郑 郑新路与裴李岗路交汇处向西200米双猫...",
    "area": "建筑面积：86.84-136.27㎡"
  },
  {
    "name": "御鑫城",
    "averagePrice": 22040,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "其他 福彩路2号（中州大道与北环路交叉口路...",
    "area": "建筑面积：46.55-158.67㎡"
  },
  {
    "name": "沁园馨城",
    "averagePrice": 11472,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 商都大道与宝峰街交汇处向南500米路西",
    "area": "建筑面积：89-120㎡"
  },
  {
    "name": "麦森公馆",
    "averagePrice": 27736,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 郑东新区东风东路与熊儿河交汇处",
    "area": "建筑面积：81.02-89.36㎡"
  },
  {
    "name": "鑫苑MARK国际",
    "averagePrice": 17568,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 花园路农科路交汇处向东200米",
    "area": "建筑面积：52.22-84.74㎡"
  },
  {
    "name": "绿博半岛",
    "averagePrice": 5800,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "白沙镇 商都大道与万三路交叉口东1000米南",
    "area": "建筑面积：133.4-200.06㎡"
  },
  {
    "name": "甲天下西湖新城",
    "averagePrice": 15033,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "西流湖 农业西路（冉屯路）与秦岭路交叉口北3...",
    "area": "建筑面积：69.57-124.02㎡"
  },
  {
    "name": "正商佳仕阁",
    "averagePrice": 13763,
    "type": "店铺",
    "location": "管城",
    "detailedLocation": "管南片 航海路与城东路交叉口向北400米路东",
    "area": "建筑面积：38-43㎡"
  },
  {
    "name": "伊顿上郡",
    "averagePrice": 13885,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 郑州市经济技术开发区第三大街与经南五...",
    "area": "建筑面积：89-150㎡"
  },
  {
    "name": "铭轩国际",
    "averagePrice": 22833,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "CBD 中州大道与郑汴路交叉口向南400米路东",
    "area": "建筑面积：78.74-126.8㎡"
  },
  {
    "name": "正商铂钻",
    "averagePrice": 17875,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 金水东路与博学路交汇处向东200米路南",
    "area": "建筑面积：89-186㎡"
  },
  {
    "name": "华瑞紫桂苑",
    "averagePrice": 17188,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "东风渠 丰庆路与新柳路交叉口东南角",
    "area": "建筑面积：125-136.31㎡"
  },
  {
    "name": "绿地海珀兰轩",
    "averagePrice": 14500,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "滨河国际新城 郑州市南三环与机场快速路交汇处",
    "area": "建筑面积：89-158㎡"
  },
  {
    "name": "升龙玺园",
    "averagePrice": 16838,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "其他 未来路与货栈街交汇处向东500米",
    "area": "建筑面积：80.61-138.63㎡"
  },
  {
    "name": "永恒新旺角",
    "averagePrice": 18198,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "森林公园 中州大道与郑汴路交汇处西南角",
    "area": "建筑面积：75-75㎡"
  },
  {
    "name": "温哥华小镇",
    "averagePrice": 22833,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "龙子湖 姚桥路与博学路交汇处东北角",
    "area": "建筑面积：97.97-100㎡"
  },
  {
    "name": "新芒果和郡",
    "averagePrice": 21917,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区金水东路与明理路交叉口南200...",
    "area": "建筑面积：89.75-166.03㎡"
  },
  {
    "name": "逸品春天",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县商都大道与宝峰街交汇处",
    "area": "建筑面积：88.89-93.64㎡"
  },
  {
    "name": "盛世通达",
    "averagePrice": 11503,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 中牟县商都大道与宝峰街交叉口往南500...",
    "area": "建筑面积：94.48-132.25㎡"
  },
  {
    "name": "财富天阶",
    "averagePrice": 21108,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "未来 经开第八大街与经北二路交汇处东300米",
    "area": "建筑面积：35-85㎡"
  },
  {
    "name": "中央名邸",
    "averagePrice": 6989,
    "type": "住宅",
    "location": "上街",
    "detailedLocation": "上街 中心路与登封路交汇处（上街汽车站对面...",
    "area": "建筑面积：78.99-129.27㎡"
  },
  {
    "name": "旺田郑港花园",
    "averagePrice": 10750,
    "type": "住宅",
    "location": "新郑市",
    "detailedLocation": "龙湖 龙湖镇樱花路薛店大道",
    "area": "建筑面积：86.08-231.44㎡"
  },
  {
    "name": "鑫苑世家",
    "averagePrice": 17655,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "国贸 金水文博路59号(花园路农科路交汇处西...",
    "area": "建筑面积：132.67-190.27㎡"
  },
  {
    "name": "东方观天下",
    "averagePrice": 5300,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 商都大道和广惠街交叉口西50米",
    "area": "建筑面积：89.8-118㎡"
  },
  {
    "name": "瀚海泰苑",
    "averagePrice": 17326,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "其他 北环路与文化路交叉口向西200米路北",
    "area": "建筑面积：56-86㎡"
  },
  {
    "name": "御翠园",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "北大学城 惠济迎宾路与月季路交汇处向北400米。",
    "area": "建筑面积：90.92-249.91㎡"
  },
  {
    "name": "广厦城市之巅二期",
    "averagePrice": 17309,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "国贸 金水区红旗路30号（文化路红旗路交叉口...",
    "area": "建筑面积：49.08-119㎡"
  },
  {
    "name": "创意SOHO",
    "averagePrice": 16230,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "省体育中心 北环路与长兴路交汇处北1000米路东",
    "area": "建筑面积：50-60㎡"
  },
  {
    "name": "橡树玫瑰城",
    "averagePrice": 13763,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管南片 中州大道与航海路交汇处南500米东侧",
    "area": "建筑面积：46.91-89.4㎡"
  },
  {
    "name": "M3美立方",
    "averagePrice": 11750,
    "type": "别墅",
    "location": "高新区",
    "detailedLocation": "科学大道 科学大道与创新大道交汇处西南角",
    "area": "建筑面积：250000㎡"
  },
  {
    "name": "美域华庭",
    "averagePrice": 13750,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "陇海东路 商城路6号（商城路塔湾路交汇处，城隍...",
    "area": "建筑面积：52.54-56.91㎡"
  },
  {
    "name": "领峰",
    "averagePrice": 14300,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "万达广场 京广路与长江路交汇处",
    "area": "建筑面积：36.88-91.93㎡"
  },
  {
    "name": "海森印",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 天明路与南丰街交汇处向西100米",
    "area": "建筑面积：96-103㎡"
  },
  {
    "name": "金龙佳苑",
    "averagePrice": 13875,
    "type": "住宅",
    "location": "中原",
    "detailedLocation": "中原万达 中原区中原中路124号（中原路与华山路...",
    "area": "建筑面积：87.12-108.51㎡"
  },
  {
    "name": "恒大绿洲",
    "averagePrice": 15600,
    "type": "住宅",
    "location": "经济开发区",
    "detailedLocation": "经开区 航海路与第八大街交汇处向南100米",
    "area": "建筑面积：80.69-136.02㎡"
  },
  {
    "name": "金田数码国际广场",
    "averagePrice": 17929,
    "type": "办公楼",
    "location": "金水",
    "detailedLocation": "金水区 金水区东风路与文化路交汇处东200米路...",
    "area": "建筑面积：140000㎡"
  },
  {
    "name": "华益汽配城",
    "averagePrice": 10600,
    "type": "店铺",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县万三路与万洪路交叉口向南3公里",
    "area": "建筑面积：208504㎡"
  },
  {
    "name": "华美汽车博览园",
    "averagePrice": 10600,
    "type": "商住",
    "location": "中牟县",
    "detailedLocation": "中牟县 万洪路与文通路交汇处",
    "area": "建筑面积：300000㎡"
  },
  {
    "name": "亚新广场",
    "averagePrice": 16000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "CBD 商鼎路与心怡路口南100米",
    "area": "建筑面积：120000㎡"
  },
  {
    "name": "正弘凯宾城",
    "averagePrice": 35000,
    "type": "店铺",
    "location": "二七",
    "detailedLocation": "二七 二马路、解放路南，正兴街以北，福寿街...",
    "area": "建筑面积：150000㎡"
  },
  {
    "name": "鑫港花苑",
    "averagePrice": 8150,
    "type": "商住",
    "location": "新密市",
    "detailedLocation": "新密市 大学南路与劳动街交叉口东南角",
    "area": "建筑面积：53000㎡"
  },
  {
    "name": "隆盛时代广场",
    "averagePrice": 8700,
    "type": "商住",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 惠民路,近国泰路",
    "area": "建筑面积：44710㎡"
  },
  {
    "name": "裕华广场",
    "averagePrice": 30000,
    "type": "店铺",
    "location": "惠济",
    "detailedLocation": "惠济区 三全路与长兴路交叉口西北角",
    "area": "建筑面积：157679㎡"
  },
  {
    "name": "森大郑东1号",
    "averagePrice": 12717,
    "type": "办公楼",
    "location": "中牟县",
    "detailedLocation": "白沙镇 郑开大道与雁鸣路交叉口向南50米路西",
    "area": "建筑面积：61673㎡"
  },
  {
    "name": "嵩山国际",
    "averagePrice": 13414,
    "type": "办公楼",
    "location": "二七",
    "detailedLocation": "嵩山南路 嵩山路与汝河路交汇处",
    "area": "建筑面积：62271㎡"
  },
  {
    "name": "润凯橲岭小镇",
    "averagePrice": 8510,
    "type": "别墅",
    "location": "荥阳市",
    "detailedLocation": "荥阳市 荥阳市和二七区新密市三界交汇处",
    "area": "建筑面积：1400000㎡"
  },
  {
    "name": "国际贸易服务中心",
    "averagePrice": 11333,
    "type": "办公楼",
    "location": "航空港区",
    "detailedLocation": "航空港 郑港十路郑港四街交汇处",
    "area": "建筑面积：183000㎡"
  },
  {
    "name": "元通国际",
    "averagePrice": 42000,
    "type": "店铺",
    "location": "中原",
    "detailedLocation": "其他 中原区郑上路西四环交叉口向北200米路...",
    "area": "建筑面积：62000㎡"
  },
  {
    "name": "佳田国际广场",
    "averagePrice": 11000,
    "type": "办公楼",
    "location": "郑东新区",
    "detailedLocation": "郑东新区 商都路与东风路交叉口西300路南",
    "area": "建筑面积：45000㎡"
  },
  {
    "name": "绿城黄河锦园二期",
    "averagePrice": 16775,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "天旺广场 黄河路与东三街交汇处",
    "area": "建筑面积：140000㎡"
  },
  {
    "name": "天河龙城",
    "averagePrice": 15952,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 惠济天河路和江山路交汇处北",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "正商宇陆广场",
    "averagePrice": 27485,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区金水大道清正路交叉口东南角",
    "area": "建筑面积：104286㎡"
  },
  {
    "name": "红星蚂蚁SOHO",
    "averagePrice": 19800,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区商都路1号（中州大道与郑汴路...",
    "area": "建筑面积：75990㎡"
  },
  {
    "name": "水木清华二期",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县商都大道与宝峰街交汇处南100米...",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "城开中央铭座",
    "averagePrice": 17506,
    "type": "住宅",
    "location": "金水",
    "detailedLocation": "国贸 红旗路与东三街交汇处西北角",
    "area": ""
  },
  {
    "name": "金帝城",
    "averagePrice": 11420,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 商都大道与宝峰街交汇处",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "天河龙城",
    "averagePrice": 15952,
    "type": "住宅",
    "location": "惠济",
    "detailedLocation": "惠济区政府 惠济天河路和江山路交汇处北",
    "area": "建筑面积：100000㎡"
  },
  {
    "name": "正商宇陆广场",
    "averagePrice": 27485,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区金水大道清正路交叉口东南角",
    "area": "建筑面积：104286㎡"
  },
  {
    "name": "红星蚂蚁SOHO",
    "averagePrice": 19800,
    "type": "住宅",
    "location": "郑东新区",
    "detailedLocation": "新东站 郑东新区商都路1号（中州大道与郑汴路...",
    "area": "建筑面积：75990㎡"
  },
  {
    "name": "水木清华二期",
    "averagePrice": 10811,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "中牟县 中牟县商都大道与宝峰街交汇处南100米...",
    "area": "建筑面积：200000㎡"
  },
  {
    "name": "金帝城",
    "averagePrice": 11420,
    "type": "住宅",
    "location": "中牟县",
    "detailedLocation": "新县城 商都大道与宝峰街交汇处",
    "area": "建筑面积：500000㎡"
  },
  {
    "name": "中牟天道国际",
    "averagePrice": 13000,
    "type": "住宅",
    "location": "中牟",
    "detailedLocation": "中牟 金水路杨桥路交会处西南角",
    "area": "建筑面积：20998㎡"
  },
  {
    "name": "MAN领域",
    "averagePrice": 18157,
    "type": "住宅",
    "location": "管城",
    "detailedLocation": "管城 郑州市郑汴路与东明路交汇处西北角",
    "area": ""
  },
  {
    "name": "春江花园",
    "averagePrice": 12338,
    "type": "住宅",
    "location": "二七",
    "detailedLocation": "南三环 南三环碧云路",
    "area": "建筑面积：100000㎡"
  }
]
    return d
}
