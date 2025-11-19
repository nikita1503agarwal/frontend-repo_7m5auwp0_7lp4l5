import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Booking from './components/Booking'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <style>{`
        .font-serif { font-family: "Playfair Display", ui-serif, Georgia, serif; }
        @keyframes pulse-slow { 0%,100%{opacity:.8} 50%{opacity:1} }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
