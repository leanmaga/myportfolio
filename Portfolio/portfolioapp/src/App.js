
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import AboutPage from '../src/pages/AboutPage'
import Error404Page from '../src/pages/Error404Page'
import ContactPage from '../src/pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="error" element={<Error404Page/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="proyectos" element={<ProjectsPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    </>
  )
}

export default App;
