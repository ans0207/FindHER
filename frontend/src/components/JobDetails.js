const JobDetails = ({ job }) => {
    const handleClick = () => {
        window.open(job.url, "_blank", "noreferrer");
    }

    return (
        <div className="submission-details">
            <h4> {job.company} </h4>
            <h4> {job.role} </h4>
            <p>{job.location}</p>
            <p> {job.mode} </p>
            <span> {job.yoe}</span>

            <button onClick={() => handleClick}>
                Apply
            </button>
        </div>
    )
}

export default JobDetails