const express = require('express')
const {
    createSubmission,
    getSubmissions,
    getSubmission,
    deleteSubmission,
    updateSubmission

} = require('../controllers/submissionController')

const router = express.Router()


// GET submissions
router.get('/',getSubmissions)

// GET single submission
router.get('/:id',getSubmission)

// POST new submission
router.post('/',createSubmission)

// DELETE submission
router.delete('/:id',deleteSubmission)

//UPDATE submission
router.patch('/:id', updateSubmission)


module.exports = router 
