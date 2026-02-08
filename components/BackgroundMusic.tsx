'use client'

import { useState, useEffect, useRef } from 'react'
import { FaMusic, FaPause } from 'react-icons/fa'

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        // Volume set to 50%
        audio.volume = 0.5

        // Use a small timeout to let the DOM settle before trying to manipulate play state programmatically
        // although autoPlay attribute should handle the initial start
        const attemptUnmute = async () => {
            // Try Unmuted First
            audio.muted = false
            try {
                await audio.play()
                setPlaying(true)
                setMuted(false)
                console.log("Success: Audio playing unmuted.")
            } catch (error) {
                // If blocked, fallback to Muted
                console.log("Unmuted autoplay blocked, falling back to muted.")
                audio.muted = true
                try {
                    await audio.play()
                    setPlaying(true)
                    setMuted(true)
                    console.log("Success: Audio playing muted.")
                } catch (err2) {
                    console.error("Autoplay completely blocked:", err2)
                    setPlaying(false)
                }
            }
        }

        attemptUnmute()

        // Global unlock listener
        const unlockAudio = () => {
            if (audio) {
                audio.muted = false
                audio.play().then(() => {
                    setPlaying(true)
                    setMuted(false)
                }).catch(e => console.error("Unlock failed", e))
            }
        }

        const events = ['click', 'touchstart', 'scroll', 'keydown']
        events.forEach(e => window.addEventListener(e, unlockAudio, { once: true }))

        return () => {
            events.forEach(e => window.removeEventListener(e, unlockAudio))
        }
    }, [])

    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (playing) {
            audio.pause()
            setPlaying(false)
        } else {
            audio.muted = false // Force unmute on manual play
            setMuted(false)
            audio.play().catch(e => console.error("Manual play failed:", e))
            setPlaying(true)
        }
    }

    return (
        <>
            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
                autoPlay
                muted
                playsInline
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
