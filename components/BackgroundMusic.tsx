'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FaMusic, FaPause } from 'react-icons/fa'

// Dynamically import ReactPlayer to avoid hydration issues
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
        // If they click the button, definitely unmute
        if (muted) setMuted(false)
    }

    return (
        <>
            {/* Player hidden off-screen but active */}
            <div style={{ position: 'fixed', top: '-9999px', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <ReactPlayer
                    url="https://www.youtube.com/embed/FetQQNJHngg?si=JgDu4O1hkE8iKSDs"
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
                    controls={false} // Hide native controls
                    config={{
                        youtube: {
                            playerVars: {
                                showinfo: 0,
                                autoplay: 1,
                                playsinline: 1,
                                origin: typeof window !== 'undefined' ? window.location.origin : undefined
                            }
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
