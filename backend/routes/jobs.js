const express = require('express')
const {
    getJobs,

} = require('../controllers/jobController')

const router = express.Router()


// GET submissions
router.get('/',getJobs)


module.exports = router 
