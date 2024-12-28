import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../contexts/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Home