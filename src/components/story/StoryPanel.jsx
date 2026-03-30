import { motion, AnimatePresence } from 'framer-motion';

const StoryPanel = ({ currentNode, onNext }) => {
    return (
        <div className="flex flex-col justify-between h-full max-w-2xl mx-auto relative z-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentNode.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col space-y-6"
                >
                    <h2 className="text-sm font-medium text-aevon-cream uppercase tracking-[0.2em]">
                        {currentNode.title}
                    </h2>

                    <p className="text-base md:text-xl text-aevon-cream/90 leading-relaxed font-light">
                        {currentNode.text}
                    </p>

                    {!currentNode.isChoice && !currentNode.isEnd && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            onClick={onNext}
                            className="px-8 py-3 bg-aevon-teal hover:bg-aevon-teal/80 text-aevon-navy font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-3 w-fit mt-4"
                        >
                            <span className="text-lg font-medium">{currentNode.cta || "Continue"}</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.button>
                    )}

                    {currentNode.isEnd && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={onNext} // Should close the demo
                            className="px-8 py-3 bg-gradient-to-r from-aevon-coral to-aevon-amber text-aevon-navy font-bold rounded-full hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:scale-105 w-fit mt-4"
                        >
                            {currentNode.cta}
                        </motion.button>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default StoryPanel;
