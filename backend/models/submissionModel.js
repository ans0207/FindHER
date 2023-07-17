const mongoose= require('mongoose')

const Schema = mongoose.Schema

const submissionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: true
    },
    doubts: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('Submission',submissionSchema)
