const mongoose = require('mongoose')
const Submission = require('../models/submissionModel')


const getSubmissions = async(req,res)=>{
    const submissions = await Submission.find({}).sort({createdAt: -1})

    res.status(200).json(submissions)
}

const createSubmission = async (req,res) => {
    const {title,input,doubts} = req.body

    let emptyfields = []
    if(!title){
        emptyfields.push('title')
    }
    if(!input){
        emptyfields.push('input')
    }
    if(emptyfields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields',emptyfields })
    }


    try{
        const submission= await Submission.create({title,input,doubts})
        res.status(200).json(submission)
    } catch (error){
        res.status(400).json({error:error.message})
    }
}

const getSubmission = async(req,res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }

    const submission = await Submission.findById(id)
    if(!submission){
        return res.status(400).json({error: 'No such submission!'})
    }
    res.status(200).json(submission)
}

const deleteSubmission = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }
    
    const submission = await Submission.findOneAndDelete({_id: id})
    if(!submission){
        return res.status(400).json({error: 'No such submission'})
    }

    res.status(200).json(submission)
}

const updateSubmission = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such id'})
    }
    
    const submission = await Submission.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!submission){
        return res.status(400).json({error: 'No such submission'})
    }

    res.status(200).json(submission)
}



module.exports = {
    createSubmission,
    getSubmissions,
    getSubmission,
    deleteSubmission,
    updateSubmission
}