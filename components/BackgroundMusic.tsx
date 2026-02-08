'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { FaMusic, FaPause } from 'react-icons/fa'

// Dynamically import ReactPlayer to avoid hydration issues
// Using any to bypass IntrinsicAttributes error with dynamic import of library component
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) as any

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(true)
    const [muted] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    // Handle user interaction to enable audio if autoplay is blocked
    useEffect(() => {
        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true)
                // If it was paused purely due to lack of interaction, try to play
                if (!playing) setPlaying(true)
            }
        }

        const events = ['click', 'touchstart', 'keydown', 'scroll']
        events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }))

        return () => {
            events.forEach(event => window.removeEventListener(event, handleInteraction))
        }
    }, [hasInteracted, playing])

    const togglePlay = () => {
        setPlaying(!playing)
    }

    return (
        <>
            {/* YouTube player must not be display: none or it will stop playing. We position it off-screen. */}
            <div style={{ position: 'fixed', top: '-9999px', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <ReactPlayer
                    url="https://youtu.be/QKf_JPbN6Lw?si=O-4-_YhzwMMkczR0"
                    playing={playing}
                    loop={true}
                    volume={0.5}
                    muted={muted}
                    width="1px"
                    height="1px"
                    onStart={() => console.log('Audio started')}
                    onPlay={() => setPlaying(true)}
                    onPause={() => setPlaying(false)}
                    onError={(e: any) => console.error('Audio error:', e)}
                />
            </div>

            <button
                onClick={togglePlay}
                className="fixed bottom-4 right-4 z-50 bg-saffron-600 hover:bg-saffron-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
                aria-label={playing ? "Pause Music" : "Play Music"}
                title={playing ? "Pause Music" : "Play Music"}
            >
                {playing ? <FaPause className="w-5 h-5" /> : <FaMusic className="w-5 h-5" />}
            </button>
        </>
    )
}
