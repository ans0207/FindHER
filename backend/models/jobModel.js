const mongoose= require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    mode:{
        type:String,
        required:true
    },
    yoe:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Job',jobSchema)
