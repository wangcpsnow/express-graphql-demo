/**
 * @file:    Graphql 配置
 * @author:  wangcpsnow@gmail.com
 * @ctime:   2019-03-11
 */
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const { queryType } = require('./query');

const schema = new GraphQLSchema({query: queryType});

module.exports = function (app) {
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: false
    }));

    return app;
}