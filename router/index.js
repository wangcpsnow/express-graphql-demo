/**
 * @file     整合路由器
 * @Author   wangcpsnow@gmail.com
 * @DateTime 2018-06-14
 */
const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');
const qs = require('qs');

const Graphql = require('../graphql');

module.exports = mixinRouter;

function mixinRouter(app) {
    app.use('*', function (req, res, next) {

        next();
    });
    // app.get('/', function (req, res) {
    //     res.render(path.join(__dirname, '../dist/index.html'));
    // });
    // app.use(express.static('dist'));

    app = Graphql(app);

    app.use('*', function (req, res) {
        res.status(404).send('404');
    });
    return app;
}