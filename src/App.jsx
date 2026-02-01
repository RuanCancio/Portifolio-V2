import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from './Layouts/Layout.jsx'
import Home from './Pages/Home.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Home/> } />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
