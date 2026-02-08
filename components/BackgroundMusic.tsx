'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FaMusic, FaPause } from 'react-icons/fa'

// Dynamically import ReactPlayer to avoid hydration issues
// Using any to bypass IntrinsicAttributes error with dynamic import of library component
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as any

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(true)
    const [muted, setMuted] = useState(true) // Start muted to allow autoplay
    const [hasInteracted, setHasInteracted] = useState(false)

    // Handle user interaction to enable audio if autoplay is blocked
    useEffect(() => {
        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true)
                setMuted(false) // Unmute on first interaction
                setPlaying(true) // Ensure playing
            }
        }

        const events = ['click', 'touchstart', 'keydown', 'scroll']
        events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }))

        return () => {
            events.forEach(event => window.removeEventListener(event, handleInteraction))
        }
    }, [hasInteracted])

    const togglePlay = () => {
        setPlaying(!playing)
        if (!hasInteracted) {
            setHasInteracted(true)
            setMuted(false)
        }
    }

    return (
        <>
            {/* DEBUG MODE: Player visible to check if it loads */}
            <div style={{ position: 'fixed', bottom: '80px', right: '20px', zIndex: 40, border: '2px solid red', background: 'black' }}>
                <p className="text-white text-xs p-1">Debug: {playing ? 'Playing' : 'Paused'} | Muted: {muted ? 'Yes' : 'No'}</p>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=FetQQNJHngg"
                    playing={playing}
                    loop={true}
                    volume={0.5}
                    muted={muted}
                    width="200px"
                    height="115px"
                    onStart={() => console.log('Audio started')}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={(e: any) => console.error('Audio error:', e)}
                    controls={true}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1, autoplay: 1, playsinline: 1 }
                        }
                    }}
                />
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
