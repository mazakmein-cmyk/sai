'use client'

import { useState, useEffect, useRef } from 'react'
import { FaMusic, FaPause, FaHandsPraying } from 'react-icons/fa6'

export default function BackgroundMusic() {
    const [playing, setPlaying] = useState(false)
    const [muted, setMuted] = useState(true)
    const [showSplash, setShowSplash] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const onPlay = () => setPlaying(true)
        const onPause = () => setPlaying(false)

        audio.addEventListener('play', onPlay)
        audio.addEventListener('pause', onPause)

        // Auto-dismiss splash after 8 seconds if no interaction
        const timer = setTimeout(() => {
            if (showSplash) {
                handleAutoDismiss()
            }
        }, 8000)

        return () => {
            audio.removeEventListener('play', onPlay)
            audio.removeEventListener('pause', onPause)
            clearTimeout(timer)
        }
    }, [showSplash])

    const handleEnter = () => {
        const audio = audioRef.current
        if (audio) {
            setFadeOut(true)
            setTimeout(() => setShowSplash(false), 500) // Allow fade out animation

            // USER INTERACTION -> UNMUTE & PLAY
            audio.muted = false
            setMuted(false)
            audio.play().then(() => setPlaying(true)).catch(e => console.error("Enter play failed", e))
        }
    }

    const handleAutoDismiss = () => {
        setFadeOut(true)
        setTimeout(() => setShowSplash(false), 500)

        // NO INTERACTION -> PLAY MUTED (Fallback)
        const audio = audioRef.current
        if (audio && audio.paused) {
            audio.muted = true
            setMuted(true)
            audio.play().then(() => setPlaying(true)).catch(e => console.error("Auto-dismiss play failed", e))
        }
    }

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
            {/* SPLASH SCREEN OVERLAY */}
            {showSplash && (
                <div
                    className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
                >
                    <div className="text-center space-y-6 p-6 animate-in fade-in zoom-in duration-500">
                        <h1 className="text-3xl md:text-5xl font-bold text-saffron-500 drop-shadow-lg">
                            Shri Shirdi Sai Baba Temple
                        </h1>
                        <button
                            onClick={handleEnter}
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-saffron-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-saffron-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2 focus:ring-offset-black"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span>Om Sai Ram</span>
                                <FaHandsPraying className="w-4 h-4 animate-bounce" />
                            </span>
                        </button>
                        <p className="text-white/40 text-xs mt-4">
                            Click to enter
                        </p>
                    </div>
                </div>
            )}

            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
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
                    visibility: 'hidden'
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
