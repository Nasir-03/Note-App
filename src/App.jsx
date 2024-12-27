import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import CreateNote from '../components/CreateNote'
import Notes from '../components/Notes'

function App() {

  return (
    <>
    <div className="main">
    <Header />
     <Notes />
    </div>
    </>
  )
}

export default App
