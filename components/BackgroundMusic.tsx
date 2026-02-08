'use client'

import { useState } from 'react'
import { FaMusic, FaPause } from 'react-icons/fa'

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(true)

    const togglePlay = () => {
        setPlaying(!playing)
    }

    return (
        <>
            {/* 
                Forcing Unmuted Autoplay 
                Note: Most browsers will BLOCK this unless the user has interacted with the domain before.
                We use a raw iframe to try and bypass library restrictions.
            */}
            <div style={{ position: 'fixed', top: '-9999px', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                {playing && (
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/FetQQNJHngg?start=14&autoplay=1&mute=0&loop=1&playlist=FetQQNJHngg&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}
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
