import 'antd/dist/antd.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/signup/signup'


const  App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
