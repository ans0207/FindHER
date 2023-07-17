import { useEffect,useState } from "react"

import JobDetails from '../components/JobDetails'

const Home = () => {
    const [jobs, setJobs]= useState(null)

    useEffect(()=> {
        const fetchJob = async () => {
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if(response.ok){
                setJobs(json)
            }
        }

        fetchJob()
    }, [])

    return (
        <div className="home">
            <div className="submissions">
                {jobs && jobs.map((job)=> (
                    <JobDetails key={job._id} job={job} />
                ))}
            </div>
        </div>

    )
}

export default Home
