const fastify = require('fastify')({logger: true});
require( "dotenv" ).config();

fastify.register(require('./routes/weather'), { prefix: '/v1' })

const start = async () => {
    try {
        await fastify.listen(process.env.PORT);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();