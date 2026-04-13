import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [videoRef, setVideoRef] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        if (videoRef) {
            // Force play for mobile devices
            videoRef.play().catch(err => {
                console.log("Autoplay prevented:", err);
            });
        }
    }, [videoRef]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!videoLoaded && !videoError) {
                setVideoLoaded(true);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [videoLoaded, videoError]);

    const handleVideoLoad = (e) => {
        if (e.target) {
            try {
                e.target.playbackRate = 0.3; // Slow down to 30% speed
            } catch (err) {
                console.log("Playback rate error:", err);
            }
            setVideoLoaded(true);
        }
    };

    const handleVideoError = (e) => {
        console.error("Video error:", e);
        setVideoError(true);
        setVideoLoaded(false);
    };
    // const [showDemo, setShowDemo] = useState(false);

    return (
        <section id="vision" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 border-b border-aevon-white/5 text-aevon-white overflow-hidden">
            {/* Background Video */}
            {!videoError ? (
                <video
                    ref={setVideoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        videoLoaded ? 'opacity-60' : 'opacity-0'
                    }`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoLoad}
                    onCanPlay={handleVideoLoad}
                    onCanPlayThrough={handleVideoLoad}
                    onError={handleVideoError}
                    style={{
                        objectPosition: 'center'
                    }}
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
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
                    Building <span className="text-gradient">AI products</span> <br />
                    Changing lives
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-aevon-cream/80 max-w-xl md:max-w-2xl"
                >
                    Making complex living easier through accessible AI products for human development.
                </motion.p>


            </div>





        </section>
    );
};


export default Hero;
