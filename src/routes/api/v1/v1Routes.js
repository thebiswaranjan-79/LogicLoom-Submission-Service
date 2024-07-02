
async function v1PLugin(fastify, options){
    fastify.register(require('./test/testRoutes'),{prefix: '/test'});
}

module.exports = v1PLugin;