'use client'

import { useState, useEffect, useRef } from 'react'
import { FaMusic, FaPause } from 'react-icons/fa'

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true)
    const ऑडियोRef = useRef<HTMLAudioElement | null>(null) // Using unique var name to avoid conflicts

    // Attempt to play immediately on mount
    useEffect(() => {
        const audio = ऑडियोRef.current
        if (!audio) return

        // Volume set to 50%
        audio.volume = 0.5

        const tryPlay = async () => {
            try {
                // FIRST ATTEMPT: Play Unmuted (User preference)
                audio.muted = false
                await audio.play()

                // If successful, update state
                setPlaying(true)
                setMuted(false)
                console.log("Success: Audio playing unmuted.")
            } catch (err) {
                console.log("Autoplay unmuted blocked. Retrying muted.", err)

                // SECOND ATTEMPT: Play Muted (Browser fallback)
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

        tryPlay()

        // Interaction listener to unmute if needed
        const unMuteOnInteraction = () => {
            if (audio.muted || audio.paused) {
                audio.muted = false
                audio.play().catch(e => console.error("Interaction play failed:", e))
                setMuted(false)
                setPlaying(true)
            }
        }

        const events = ['click', 'touchstart', 'keydown', 'scroll']
        events.forEach(event => window.addEventListener(event, unMuteOnInteraction, { once: true }))

        return () => {
            events.forEach(event => window.removeEventListener(event, unMuteOnInteraction))
        }
    }, [])

    const togglePlay = () => {
        const audio = ऑडियोRef.current
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
                ref={ऑडियोRef}
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
