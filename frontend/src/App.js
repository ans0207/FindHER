
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Submissions from './pages/Submissions'
import Mentors from './pages/Mentors'
import Jobs from './pages/Jobs'

import Navbar from './components/Navbar'

function App() {
		return (
		<>
	<BrowserRouter>
      <Navbar/>
      <div className='pages'>
      <Routes>
        <Route
          path = "/submissions"
          element = {<Submissions/>}
        />
		    <Route
          path = "/mentors"
          element = {<Mentors/>}
        />
        <Route
          path = "/jobs"
          element = {<Jobs/>}
        />
      </Routes>
      </div>
      </BrowserRouter>
		</>
	)
}

export default App
