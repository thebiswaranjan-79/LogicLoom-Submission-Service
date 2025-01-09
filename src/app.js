const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');
const todoRoutes = require('./routes/todoRoutes');
const repositoryPlugin = require('./repositories/repositoryPlugin');

/**
 * 
 * @param {*Fastify Object} fastify 
 * @param {*} options 
 */

async function app(fastify, options){
    fastify.register(require('@fastify/cors'));

    fastify.register(repositoryPlugin );
    fastify.register(servicePlugin);
    fastify.register(todoRoutes, {prefix:'/todos'})
    // Register test routes 
    fastify.register(require('./routes/api/apiRoutes'), {prefix : '/api'});

}

module.exports = fastifyPlugin(app);