import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>FindHER</h1>
                </Link>
                <Link to='/submissions'>
                    Assignments
                </Link>
                <Link to='/mentors'>
                    Mentor
                </Link>
                <Link to='/jobs'>
                    Jobs
                </Link>
            </div>
        </header>
    )
}

export default Navbar