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

        const onPlay = () => setPlaying(true)
        const onPause = () => setPlaying(false)

        audio.addEventListener('play', onPlay)
        audio.addEventListener('pause', onPause)

        // IMMEDIATE CHECK: Sync state in case autoPlay already started it
        if (!audio.paused) {
            setPlaying(true)
        } else {
            // Force play attempt if not playing
            audio.muted = true
            audio.play().catch(e => console.error("Initial play failed", e))
        }

        // Global unlock listener (Unmute on first interaction)
        const unlockAudio = () => {
            if (audio) {
                audio.muted = false
                setMuted(false)

                // If paused, try to play. This is CRITICAL if autoplay blocked.
                if (audio.paused) {
                    audio.play().then(() => {
                        setPlaying(true)
                    }).catch(e => console.error("Unlock play failed", e))
                }
            }
        }

        // We use capture: true to catch events early
        const events = ['click', 'touchstart', 'scroll', 'keydown']
        events.forEach(e => document.addEventListener(e, unlockAudio, { once: true, capture: true }))

        return () => {
            audio.removeEventListener('play', onPlay)
            audio.removeEventListener('pause', onPause)
            events.forEach(e => document.removeEventListener(e, unlockAudio, { capture: true }))
        }
    }, [])

    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (playing) {
            audio.pause()
        } else {
            audio.muted = false // Force unmute if user manually clicks play
            setMuted(false)
            audio.play().catch(e => console.error("Manual play failed:", e))
        }
    }

    return (
        <>
            {/* 
                Hidden with opacity/size instead of display:none to prevent browser throttling.
                autoPlay + muted + loop is the gold standard for background audio.
            */}
            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
                autoPlay
                muted
                playsInline
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0,0,0,0)',
                    border: 0,
                    opacity: 0.01 // Sometimes 0 opacity is treated as hidden 
                }}
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
