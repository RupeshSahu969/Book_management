import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../Component/RequireAuth'
import Books from './Books'
import EditBook from './EditBook'
import Login from './Login'
import SingleBooks from './SingleBooks'

const MainRoutes = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/books/:id" element={
        <RequireAuth>
        <SingleBooks/>
        </RequireAuth>
      }/>
        <Route path="/books/:id/edit" element={
          <RequireAuth>
        <EditBook/>
        </RequireAuth>
      }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>

      </Routes>
    </div>
  )
}

export default MainRoutes
