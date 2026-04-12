import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [videoRef, setVideoRef] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    const handleVideoLoad = (e) => {
        if (e.target) {
            e.target.playbackRate = 0.3; // Slow down to 30% speed
            setVideoLoaded(true);
        }
    };

    const handleVideoError = () => {
        setVideoError(true);
        setVideoLoaded(false);
    };
    // const [showDemo, setShowDemo] = useState(false);

    return (
        <section id="vision" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 border-b border-aevon-white/5 bg-aevon-navy text-aevon-white overflow-hidden">
            {/* Background Video */}
            {!videoError ? (
                <video
                    ref={setVideoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-60 animate-fade-in' : 'opacity-0'
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    style={{
                        animationDelay: '0.5s',
                        animationFillMode: 'forwards',
                        objectPosition: 'center'
                    }}
                    poster="/vite.svg" // Fallback image while loading
                >
                    <source src="/WhatsApp Video 2026-04-12 at 6.18.48 PM.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    Your browser does not support the video tag.
                </video>
            ) : (
                // Fallback background when video fails to load
                <div className="absolute inset-0 bg-gradient-to-br from-aevon-navy via-aevon-navy/80 to-aevon-teal/20"></div>
            )}

            {/* Overlay - responsive opacity */}
            <div className="absolute inset-0 bg-aevon-navy/70 sm:bg-aevon-navy/65 md:bg-aevon-navy/60"></div>

            <div className="max-w-5xl mx-auto z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter"
                >
                    Lead a future where <br />
                    <span className="text-gradient">artificial intelligence</span> is a <br />
                    universal benefit
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-aevon-cream/80 max-w-xl md:max-w-2xl"
                >
                    Making complex living easier through accessible tools for human development.
                </motion.p>


            </div>





        </section>
    );
};


export default Hero;
