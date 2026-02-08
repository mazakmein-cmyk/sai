'use client'

import { useState, useEffect, useRef } from 'react'
import { FaMusic, FaPause } from 'react-icons/fa'

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true) // Start muted for autoplay
    const [hasInteracted, setHasInteracted] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Attempt autoplay on mount
        const audio = audioRef.current
        if (audio) {
            audio.volume = 0.5
            audio.muted = true // Start muted

            const startAudio = async () => {
                try {
                    await audio.play()
                    setPlaying(true)
                } catch (err) {
                    console.error("Autoplay failed:", err)
                    setPlaying(false)
                }
            }
            startAudio()
        }

        // Interaction listener to unmute
        const handleInteraction = () => {
            if (!hasInteracted && audio) {
                setHasInteracted(true)
                audio.muted = false
                setMuted(false)

                // If not playing, try to play again
                if (audio.paused) {
                    audio.play().catch(e => console.error("Play failed:", e))
                    setPlaying(true)
                }
            }
        }

        const events = ['click', 'touchstart', 'keydown', 'scroll']
        events.forEach(event => window.addEventListener(event, handleInteraction, { once: true }))

        return () => {
            events.forEach(event => window.removeEventListener(event, handleInteraction))
        }
    }, [hasInteracted])

    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (playing) {
            audio.pause()
            setPlaying(false)
        } else {
            audio.play().catch(e => console.error("Toggle play failed:", e))
            setPlaying(true)
            if (muted) {
                audio.muted = false
                setMuted(false)
            }
        }
    }

    return (
        <>
            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
                preload="auto"
                className="hidden"
            />

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
