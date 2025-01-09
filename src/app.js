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
    await fastify.register(require('@fastify/cors'));

   await fastify.register(repositoryPlugin );
    await fastify.register(servicePlugin);
   await  fastify.register(todoRoutes, {prefix:'/todos'})
    // Register test routes 
   await fastify.register(require('./routes/api/apiRoutes'), {prefix : '/api'});

}

module.exports = fastifyPlugin(app);