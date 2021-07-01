const tap = require('tap')
const request = require('request')
const buildFastify = require('./app')

tap.test('GET `/v1/location` route', t => {
    t.plan(5)

    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    fastify.listen(0, (err) => {
        t.error(err)
        request({
            method: 'GET',
            url: 'http://localhost:3000/v1/location',
        }, (err, response, body) => {
            t.error(err)
            t.equal(response.statusCode, 200)
            t.equal(response.headers['Content-Type', 'application/json'])
            t.same((body), body)
        })
    })
})

tap.test('GET `/v1/current/:city` route', t => {
    t.plan(5)

    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    fastify.listen(0, (err) => {
        t.error(err)
        request({
            method: 'GET',
            url: 'http://localhost:3000/v1/current/',
        }, (err, response, body) => {
            t.error(err)
            t.equal(response.statusCode, 200)
            t.equal(response.headers['Content-Type', 'application/json'])
            t.same((body), body)
        })
    })
})

tap.test('GET `/v1/current/:city` route', t => {
    t.plan(5)

    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    fastify.listen(0, (err) => {
        t.error(err)

        request({
            method: 'GET',
            url: 'http://localhost:3000/v1/current/cordoba',
        }, (err, response, body) => {
            t.error(err)
            t.equal(response.statusCode, 200)
            t.equal(response.headers['Content-Type', 'application/json'])
            t.same((body), body)
        })
    })
})

tap.test('GET `/v1/forecast/` route', t => {
    t.plan(5)

    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    fastify.listen(0, (err) => {
        t.error(err)

        request({
            method: 'GET',
            url: 'http://localhost:3000/v1/forecast/',
            
        }, (err, response, body) => {
            t.error(err)
            t.equal(response.statusCode, 200)
            t.equal(response.headers['Content-Type', 'application/json'])
            t.same((body), body)
        })
    })
})

tap.test('GET `/v1/forecast/` route', t => {
    t.plan(5)

    const fastify = buildFastify()

    t.teardown(() => fastify.close())

    fastify.listen(0, (err) => {
        t.error(err)

        request({
            method: 'GET',
            url: 'http://localhost:3000/v1/forecast/mendoza',
        }, (err, response, body) => {
            t.error(err)
            t.equal(response.statusCode, 200)
            t.equal(response.headers['Content-Type', 'application/json'])
            t.same((body), body)
        })
    })
})