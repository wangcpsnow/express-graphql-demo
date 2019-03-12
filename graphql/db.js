/**
 * @file:    Graphql-db 配置
 * @author:  wangcpsnow@gmail.com
 * @ctime:   2019-03-11
 */
var Sequelize = require('sequelize');

let env = process.env.NODE_ENV || 'develop';
env = env.toLowerCase();

const dbOptions = require(`../config/db/${env}`);
const MzUserCountByDay = require('./models/MzUserCountByDay');

var Conn = new Sequelize(dbOptions.database, dbOptions.user, dbOptions.password, {
    host: dbOptions.host,
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        freezeTableName: true,  // 固定表名, 否则默认加s
        timestamps: false       // 不增加其他字段，否则默认加createdAt
    }
});

let CountByDay = MzUserCountByDay(Conn);

// exports.CountByDay = CountByDay;

module.exports = {
    CountByDay
}