async function v1PLugin(fastify, options) {
  fastify.register(require("./submissionRoutes"), { prefix: "/submissions" });
}

module.exports = v1PLugin;
