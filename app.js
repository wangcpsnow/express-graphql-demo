/**
 * @file     项目入口
 * @Author   wangcpsnow@gmail.com
 * @DateTime 2019-03-12
 */

const pkg = require('./package');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

const mysql = require('mysql');
const myConnection = require('express-myconnection');

const Router = require('./router');

let app = express();
const port = process.env.PORT || 8090;

let env = process.env.NODE_ENV || 'develop';
env = env.toLowerCase();
const dbOptions = require(`./config/db/${env}`);
// console.log(dbOptions);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', ejs.__express);
app.set('view engine', 'html');
// app.use(favicon(__dirname + '/favicon.ico'));

app.use(myConnection(mysql, dbOptions, 'single'));

// 路由配置
app = Router(app);

app.listen(port, () => {
    console.log(`${pkg.name} listening on port ${port}`)
})

module.exports = app