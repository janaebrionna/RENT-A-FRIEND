const express = require('express')
const server = express()
const router = require('./app/routes/router')
const helmet = require('helmet')
const cors = require('cors')

// const router = require('./app/routes/router')
const PORT = process.env.PORT || 3005

//security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcesPolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self","https:data"],
        "scriptSrc": ["'self", "cdn.jsdeliver.net"]
    }
}))



server.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true}))







// localhost:3005 => router.js
server.use('/', router)

// security
server.listen(PORT, ()=> console.log(`Port ${PORT} is listeninng`))