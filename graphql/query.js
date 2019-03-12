/**
 * @file:    Graphql-schem 配置
 * @author:  wangcpsnow@gmail.com
 * @ctime:   2019-03-11
 */
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { resolver } = require('graphql-sequelize');

const { CountByDay } = require('./db');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...CountByDay
    }
});

exports.queryType = queryType;