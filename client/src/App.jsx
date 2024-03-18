import { Routes, Route,Outlet} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  return(
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/singup' element={<Signup />} />
        <Route path='/singin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
    </Routes>
  )
}
function Layout(){
  return(<>
    <Header />
    <Outlet />
  </>)
}
export default App
