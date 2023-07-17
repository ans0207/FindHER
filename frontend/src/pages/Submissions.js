import { useEffect,useState } from "react"

import SubmissionDetails from '../components/SubmissionDetails'
import SubmissionForm from '../components/SubmissionForm'


const Home = () => {
    const [submissions, setSubmissions]= useState(null)

    useEffect(()=> {
        const fetchSubmssion = async () => {
            const response = await fetch('/api/submissions')
            const json = await response.json()

            if(response.ok){
                setSubmissions(json)
            }
        }

        fetchSubmssion()
    }, [])

    return (
        <div className="home">
            <div className="submissions">
                {submissions && submissions.map((submission)=> (
                    <SubmissionDetails key={submission._id} submission={submission} />
                ))}
            </div>
            <SubmissionForm/>
        </div>

    )
}

export default Home
