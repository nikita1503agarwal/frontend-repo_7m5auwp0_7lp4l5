import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-xl">Dunkertons Paddlecourt</h4>
            <p className="mt-3 text-sm text-white/70">Artisan countryside meets modern leisure. Enquiries welcome.</p>
          </div>
          <div>
            <h5 className="text-sm tracking-wide text-white/60">Visit</h5>
            <p className="mt-2 text-sm">Dunkertons, Cotswolds<br/>GL54 — United Kingdom</p>
          </div>
          <div>
            <h5 className="text-sm tracking-wide text-white/60">Contact</h5>
            <p className="mt-2 text-sm">hello@dunkertons.example<br/>+44 (0) 1234 567890</p>
          </div>
        </div>
        <div className="mt-10 h-px w-full bg-white/10" />
        <div className="mt-6 text-xs text-white/60">© {new Date().getFullYear()} Dunkertons. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
