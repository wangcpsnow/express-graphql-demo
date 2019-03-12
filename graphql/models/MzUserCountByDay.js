/**
 * @file:    mz_user_count_by_day
 * @author:  wangcpsnow@gmail.com
 * @ctime:   2019-03-12
 */
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } = require('graphql');
const { resolver } = require('graphql-sequelize');
const Sequelize = require('sequelize');

const queryType = new GraphQLObjectType({
    name: 'countByDay',
    fields: {
        id: {
            type: GraphQLInt
        },
        user_id: {
            type: GraphQLString
        },
        user_name: {
            type: GraphQLString
        }
    }
});

// query.js中使用的字段声明
let queryField = {
    type: new GraphQLList(queryType),
    args: {
        id: {
            type: GraphQLInt
        },
        user_name: {
            type: GraphQLString
        }
    },
    // resolve: resolver(CountByDay)
};

/**
 * @param: Conn Sequelize的db连接实例
 * @return: graphql中schema 中queryType的fields，其中key值是graphql中路径地址(即：/countbyday)
 */
module.exports = (Conn) => {
    let CountByDay = Conn.define('mz_user_count_by_day', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        user_id: Sequelize.STRING,
        user_name: Sequelize.STRING
    });
    queryField.resolve = resolver(CountByDay);

    return {
        countbyday: queryField
    }
};