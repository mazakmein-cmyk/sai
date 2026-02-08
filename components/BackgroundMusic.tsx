'use client'

import { useState, useEffect } from 'react'
import { FaMusic, FaPause } from 'react-icons/fa'

export default function BackgroundMusic() {
    // We can't easily control the raw iframe playing state without the API, 
    // but we can toggle visibility/existence or mute state if we had access.
    // For now, let's just focus on getting it to PLAY.
    // The toggle button will just be visual for now until we confirm it plays.

    // Actually, we can use a simple state to mount/unmount or hide/show the iframe to "pause" it.
    const [playing, setPlaying] = useState(true)
    const [muted, setMuted] = useState(true) // Start muted

    const togglePlay = () => {
        setPlaying(!playing)
        // If we are un-pausing, we should also unmute
        if (!playing) setPlaying(true)
    }

    return (
        <>
            {/* DEBUG MODE: RAW IFRAME */}
            <div style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 40, border: '2px solid red', background: 'black' }}>
                <p className="text-white text-xs p-1">Debug: Raw Iframe Mode</p>
                {/* 
                    Using the exact embed URL provided by user, plus autoplay parameters.
                    We add 'controls=1' so user can manually play if needed.
                */}
                {playing && (
                    <iframe
                        width="200"
                        height="115"
                        src={`https://www.youtube.com/embed/FetQQNJHngg?autoplay=1&mute=1&loop=1&playlist=FetQQNJHngg&controls=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
                {!playing && <div className="w-[200px] h-[115px] flex items-center justify-center text-white">Paused</div>}
            </div>

            <button
                onClick={togglePlay}
                className={`fixed bottom-4 right-4 z-50 bg-saffron-600 hover:bg-saffron-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center ${!playing ? 'animate-pulse' : ''}`}
                aria-label={playing ? "Pause Music" : "Play Music"}
                title={playing ? "Pause Music" : "Play Music"}
            >
                {playing ? <FaPause className="w-5 h-5" /> : <FaMusic className="w-5 h-5" />}
            </button>
        </>
    )
}
