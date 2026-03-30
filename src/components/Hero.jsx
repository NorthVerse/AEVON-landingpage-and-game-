import { useState } from 'react';
import { motion } from 'framer-motion';




const Hero = () => {
    // const [showDemo, setShowDemo] = useState(false);

    return (
        <section id="vision" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 border-b border-aevon-white/5 bg-aevon-navy text-aevon-white overflow-hidden">
            {/* Background Grid Lines Mockup */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{ backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
            </div>

            <div className="max-w-5xl mx-auto z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter"
                >
                    Lead a future where <br />
                    <span className="text-gradient">artificial intelligence</span> is a <br />
                    universal benefit.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 text-xl text-aevon-cream/80 max-w-2xl"
                >
                    Making complex living easier through accessible tools for human development.
                </motion.p>


            </div>





        </section>
    );
};


export default Hero;
