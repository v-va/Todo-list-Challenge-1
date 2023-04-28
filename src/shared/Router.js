import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from '../pages/List'
import Detail from '../pages/Detail'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<List />} />
                <Route path='detail' element={<Detail />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
