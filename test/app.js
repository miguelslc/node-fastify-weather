const Fastify = require('fastify')

function buildFastify() {
    const fastify = Fastify()

    fastify.get('/', function (request, reply) {
        reply.send(JSON.parse(body))
    })

    return fastify
}

module.exports = buildFastify