const SubmissionDetails = ({ submission}) => {
    const handleClick = async() => {
        const response = await fetch('/api/submissions/'+ submission._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            window.location.reload()
            console.log('submission deleted')
        }
    }

    return (
        <div className="submission-details">
            <h4> {submission.title} </h4>
            <p>{submission.createdAt}</p>
            <span className="material-symbols-outlined"  onClick={handleClick}>Delete</span>
        </div>
    )
}

export default SubmissionDetails