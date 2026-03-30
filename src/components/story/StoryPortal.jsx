import { useState } from 'react';
import { motion } from 'framer-motion';

const StoryPortal = () => {
    const [isJourneyActive, setIsJourneyActive] = useState(false);
    const [isGameLoaded, setIsGameLoaded] = useState(false);

    return (
        <>
            <div className="w-full h-[500px] rounded-3xl relative overflow-hidden group border border-aevon-white/10 bg-aevon-charcoal/50">
                {/* Background Image / Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518155317743-a4fbf30294fc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 transform group-hover:scale-105" />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-aevon-navy via-aevon-navy/60 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-3xl lg:text-4xl font-bold text-aevon-white mb-4 drop-shadow-xl">
                            Enter Heritage
                        </h3>
                        <p className="text-aevon-cream/90 text-lg mb-8 max-w-md mx-auto leading-relaxed shadow-black drop-shadow-md">
                            Journey into the ancestral forest. Learn, choose, and shape your story in our immersive 3D experience.
                        </p>

                        <button
                            onClick={() => setIsJourneyActive(true)}
                            className="px-8 py-4 bg-gradient-to-r from-aevon-coral to-aevon-amber text-aevon-navy font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-aevon-coral/50 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
                        >
                            <span>Begin Journey</span>

                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Full-Screen Game Overlay */}
            {isJourneyActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-aevon-navy flex flex-col"
                >
                    {/* Exit Button */}
                    <button
                        onClick={() => {
                            setIsJourneyActive(false);
                            setIsGameLoaded(false);
                        }}
                        className="absolute top-6 right-6 z-[110] text-aevon-cream hover:text-aevon-coral transition-colors duration-300 text-2xl font-bold"
                    >
                        ✕
                    </button>

                    {/* Loading State */}
                    {!isGameLoaded && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isGameLoaded ? 0 : 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                className="w-16 h-16 border-4 border-aevon-teal/30 border-t-aevon-teal rounded-full mb-6"
                            />
                            <p className="text-aevon-cream text-xl font-bold">Initializing Journey...</p>
                        </motion.div>
                    )}

                    {/* The Game Iframe */}
                    <iframe
                        src={import.meta.env.VITE_GAME_URL}
                        className="w-full h-full border-none"
                        title="Culture Canvas Game"
                        onLoad={() => setIsGameLoaded(true)}
                        sandbox="allow-scripts allow-popups allow-forms allow-presentation allow-top-navigation"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
            )}
        </>
    );
};

export default StoryPortal;
