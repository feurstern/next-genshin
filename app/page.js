import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
     <div className='bg-sky-700'>
      <Navbar/>
     </div>
     <main>
       <Hero/>
     </main>
    </div>
  )
}

export default App