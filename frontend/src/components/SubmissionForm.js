import { useState } from "react"

const SubmissionForm  = () => {

    const [title,setTitle]  = useState('')
    const [input,setInput]  = useState('')
    const [doubts,setDoubts]  = useState('')
    const [error,setError]  = useState(null)
    const [emptyfields, setEmptyFields] = useState([])
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        const submission = {title,input,doubts}

        const response = await fetch('api/submissions',{
            method:'POST',
            body: JSON.stringify(submission),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyfields)
        }
        if(response.ok){
            setTitle('')
            setInput('')
            setDoubts('')
            setError(null)
            setEmptyFields([])
            window.location.reload()
            console.log('new submission added')
        }

    }



    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3> New Submission </h3>

            <label> Assignment Title: </label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyfields.includes('title') ? 'error':''}
            />

            <label> Assignment Text: </label>
            <textarea
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className={emptyfields.includes('input') ? 'error':''}
            />

            <label> Doubts: </label>
            <input 
                type="text"
                onChange={(e) => setDoubts(e.target.value)}
                value={doubts}
            />

            <button> Add Assignment </button>
            {error && <div className="error">{error}</div>  }
        </form>
    )
}

export default SubmissionForm