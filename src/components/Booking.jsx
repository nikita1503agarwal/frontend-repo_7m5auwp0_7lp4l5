import React, { useState } from 'react'

const initialSlots = [
  { time: '08:00', available: true },
  { time: '09:00', available: true },
  { time: '10:00', available: false },
  { time: '11:00', available: true },
  { time: '12:00', available: true },
  { time: '13:00', available: false },
  { time: '14:00', available: true },
  { time: '15:00', available: true },
  { time: '16:00', available: true },
  { time: '17:00', available: false },
  { time: '18:00', available: true },
]

function Booking() {
  const [slots, setSlots] = useState(initialSlots)
  const [selected, setSelected] = useState(null)
  const [confirm, setConfirm] = useState(false)

  const selectSlot = (slot) => {
    if (!slot.available) return
    setSelected(slot.time)
    setConfirm(false)
  }

  const confirmBooking = () => {
    if (!selected) return
    setConfirm(true)
  }

  return (
    <section id="booking" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-[#1A1A1A]">Book your time</h2>
          <p className="text-neutral-600 mt-2">Select a slot. Subtle indicators show availability.</p>
        </div>
        <div className="rounded-xl border border-[#C7A15A]/30 overflow-hidden">
          <div className="bg-[#F5F0E8] px-4 py-3 flex items-center justify-between">
            <span className="text-sm tracking-wide text-neutral-700">Today</span>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500/70"/>Available</span>
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500/70"/>Limited</span>
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-neutral-400"/>Booked</span>
            </div>
          </div>

          <div className="divide-y divide-[#C7A15A]/20">
            {slots.map((slot) => {
              const state = slot.available ? (Math.random() > 0.7 ? 'limited' : 'available') : 'booked'
              return (
                <button
                  key={slot.time}
                  onClick={() => selectSlot(slot)}
                  className={`w-full text-left px-5 py-4 flex items-center justify-between transition-colors ${
                    slot.available ? 'hover:bg-[#F5F0E8]/60' : 'cursor-not-allowed bg-neutral-50'
                  }`}
                >
                  <span className="font-medium text-[#1A1A1A]">{slot.time}</span>
                  {state === 'available' && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"/>}
                  {state === 'limited' && <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"/>}
                  {state === 'booked' && <span className="w-2.5 h-2.5 rounded-full bg-neutral-400"/>}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-neutral-600">
            {selected ? (
              <span>Selected: <span className="font-semibold text-[#1A1A1A]">{selected}</span></span>
            ) : (
              <span>Select a time to continue</span>
            )}
          </div>
          <button
            onClick={confirmBooking}
            className="inline-flex items-center rounded-full px-6 py-3 bg-[#C7A15A] text-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selected}
          >
            Confirm
          </button>
        </div>

        {confirm && (
          <div role="status" className="mt-4 p-4 rounded-lg border border-emerald-500/30 bg-emerald-50 text-emerald-900">
            Your slot at {selected} is reserved. We’ll send a confirmation shortly.
          </div>
        )}
      </div>
    </section>
  )
}

export default Booking
