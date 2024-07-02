const fastifyPlugin = require('fastify-plugin');
const servicePlugin = require('./services/servicePlugin');

/**
 * 
 * @param {*Fastify Object} fastify 
 * @param {*} options 
 */

async function app(fastify, options){
    fastify.register(require('@fastify/cors'));

    fastify.register(servicePlugin);

    // Register test routes 
    fastify.register(require('./routes/api/apiRoutes'), {prefix : '/api'});

}

module.exports = fastifyPlugin(app);