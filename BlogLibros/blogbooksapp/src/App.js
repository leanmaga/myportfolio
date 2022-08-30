import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../src/pages/HomePage'
import AboutPage from '../src/pages/AboutPage'
import Error404Page from '../src/pages/Error404Page'
import ContactPage from '../src/pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="error" element={<Error404Page/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="proyectos" element={<ProjectsPage/>}/>
            <Route path="/*" element={<Navigate to="/home"/>}/>
        </Routes>
    </>
  )
}

export default App;