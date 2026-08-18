import React from 'react'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <About />
        <Services/>
        <Team/>
        {/* Why Choose Us, Philosophy, Services, Team, Contact, Footer land here next */}
      </main>
    </div>
  )
}

export default App