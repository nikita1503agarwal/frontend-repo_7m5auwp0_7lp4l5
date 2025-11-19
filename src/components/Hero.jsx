import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#111] pt-24">
      {/* Subtle moving gradient overlay for energy */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-40 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(199,161,90,0.08),transparent_60%)] animate-pulse-slow" />
        <div className="absolute -inset-40 bg-[linear-gradient(120deg,transparent,rgba(199,161,90,0.06),transparent)] mix-blend-overlay" />
      </div>

      {/* Cinematic video/cover image placeholder */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1518407613690-d9fc990e795f?q=80&w=2070&auto=format&fit=crop"
          alt="Warm evening outdoors"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center">
        <p className="text-[#C7A15A] tracking-[0.35em] uppercase text-xs md:text-sm">Countryside Leisure</p>
        <h1 className="mt-6 text-4xl md:text-6xl font-serif text-white leading-tight">
          Dunkertons Paddlecourt
        </h1>
        <p className="mt-4 md:mt-6 text-[#F5F0E8]/90 text-base md:text-lg max-w-2xl mx-auto">
          A premium paddle experience set within the calm of the orchard. Crafted surfaces, warm light, and a modern rhythm.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#booking" className="inline-flex items-center rounded-full px-6 py-3 bg-[#C7A15A] text-[#1A1A1A] hover:brightness-110 transition shadow-sm">
            Book a Court
          </a>
          <a href="#about" className="inline-flex items-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-white/40 transition">
            Learn More
          </a>
        </div>
      </div>

      {/* Court grid texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-soft-light">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C7A15A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
