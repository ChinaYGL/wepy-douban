// 引入模块
const express = require('express'),
    request = require('superagent');

// 创建APP
const app = express();

// 豆瓣电影API
const host = 'https://api.douban.com/v2';

app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});

// 正在上映
app.get('/movie/in_theaters', function (req, res) {
    reqHttp(req, res);
});

// 电影条目搜索
app.get('/movie/search', function (req, res) {
    reqHttp(req, res);
})

// 电影条目信息
app.get('/movie/subject/:id', function (req, res) {
    reqHttp(req, res);
})

// 影人条目信息
app.get('/movie/celebrity/:id', function (req, res) {
    reqHttp(req, res);
})

// Top250
app.get('/movie/top250', function (req, res) {
    reqHttp(req, res);
})

// 北美票房榜
app.get('/movie/us_box', function (req, res) {
    reqHttp(req, res);
})

//即将上映
app.get('/movie/coming_soon', function (req, res) {
    reqHttp(req, res);
})

function reqHttp(req, res){
    let reqHttp = request.get(host + req.originalUrl);
    reqHttp.pipe(res);
    reqHttp.on('end', (err, res) => {
    });
}

// 监听
app.listen(5200);