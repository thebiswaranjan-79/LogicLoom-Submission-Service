const SubmissionService = require("./submissionService");

const fastifyPlugin = require("fastify-plugin");

async function servicePlugin(fastify, options) {
  fastify.decorate(
    "submissionService",
    new SubmissionService(this.submissionrepository)
  );
}

module.exports = fastifyPlugin(servicePlugin);
