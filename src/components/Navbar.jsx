import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Gold/Ochre accent bar */}
      <div className="h-1 w-full bg-[#C7A15A]"></div>
      <nav className="bg-[#1A1A1A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1A1A1A]/80 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm border border-[#C7A15A]/40 flex items-center justify-center">
              {/* Subtle paddle motif */}
              <div className="w-3 h-3 border border-[#C7A15A]/60 rotate-45" />
            </div>
            <span className="font-serif text-xl tracking-wide">Dunkertons Paddlecourt</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-[#C7A15A] transition-colors">About</a>
            <a href="#booking" className="hover:text-[#C7A15A] transition-colors">Book</a>
            <a href="#gallery" className="hover:text-[#C7A15A] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#C7A15A] transition-colors">Contact</a>
            <a href="#booking" className="ml-2 inline-flex items-center rounded-full px-4 py-2 border border-[#C7A15A]/50 text-[#1A1A1A] bg-[#C7A15A] hover:brightness-110 transition">Book a Court</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
