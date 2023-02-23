import Nav from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/404'
import Update from './components/Update'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
        <Route path='/blogs/edit/:id' element={<Update/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
