import React from 'react'

const features = [
  {
    title: 'Premium Playing Surface',
    desc: 'Meticulously maintained court with consistent bounce and soft underfoot feel.',
  },
  {
    title: 'Warm Evening Lighting',
    desc: 'Gentle, non-harsh illumination for relaxed late sessions and calm ambience.',
  },
  {
    title: 'Courtside Comfort',
    desc: 'Sheltered seating with natural materials – canvas, timber, and greenery.',
  },
]

function Features() {
  return (
    <section id="about" className="bg-[#F5F0E8] text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl">Crafted for a better game</h2>
          <p className="mt-3 text-sm text-neutral-700">Calm, heritage, and performance in balance</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 bg-white/70 rounded-xl border border-neutral-200">
              <div className="h-0.5 w-10 bg-[#C7A15A] mb-4" />
              <h3 className="font-serif text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
