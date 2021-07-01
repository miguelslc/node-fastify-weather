const fetch = require('node-fetch');

require( "dotenv" ).config();

getCurrentLocation= async()=>{
    let url = 'https://freegeoip.app/json/';
    let {city} = await fetch(url, { 
            headers: { 'Content-Type': 'application/json' }, 
        })
        .then(res => res.json())
    return city
}

async function routes(fastify, options) {
    fastify.get("/current/:city", async (request, reply)=> {
        try {
            let city = request.params.city || await getCurrentLocation()
            
            const location = await fetch(
                `${process.env.OPENWEATHER_BASE}/weather?q=${city}&units=metric&lang=es&appid=${process.env.OPENWEATHER_KEY}`
            );
            let response = await location.json();
            return response;
        } catch(err) {
            console.log(err)
        }
    })


    fastify.get("/location", async (request, reply)=> {
        try {
            let city = await getCurrentLocation()
            
            const location = await fetch(
                `${process.env.OPENWEATHER_BASE}/weather?q=${city}&units=metric&lang=es&appid=${process.env.OPENWEATHER_KEY}`
            );
            let response = await location.json();
            return response;
        } catch(err) {
            console.log(err)
        }
        
    })

    fastify.get("/forecast/:city", async (request, reply)=> {
        try {
            let city = request.params.city || await getCurrentLocation()
            
            const location = await fetch(
                `${process.env.OPENWEATHER_BASE}/forecast?q=${city}&cnt=5&units=metric&lang=es&appid=${process.env.OPENWEATHER_KEY}`
            );
            let response = await location.json();
            return response;
        } catch(err) {
            console.log(err)
        }
        
    })    
};

module.exports = routes;