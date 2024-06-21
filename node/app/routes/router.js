const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005

router.get('/api', (req,res)=>{
    res.json({
        'All friend':`http://localhost:${PORT}/api/friend`,
        'All user':`http://localhost:${PORT}/api/user`
    })
})

router.use('/api/friend', require('./api/friendRoutes'))
router.use('/api/user', require('./api/userRoutes'))

router.get('*', (req,res) => {
    if (req.url === '/favicon.ico') {
        res.end()
        } else {
            res.send('<h1>404 ERROR: page does not exist</h1>')
    }
})


module.exports = router