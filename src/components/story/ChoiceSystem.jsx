import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ChoiceCard = ({ option, index, onChoice }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -8, 0], // Float up and down
            }}
            transition={{
                opacity: { duration: 0.5, delay: index * 0.15 },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.3
                }
            }}
            whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChoice(option.id)}
            className="w-full text-left p-6 rounded-xl border border-aevon-teal/30 bg-aevon-teal/20 hover:bg-aevon-teal/30 hover:border-aevon-teal transition-colors duration-300 group relative overflow-hidden"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                boxShadow: `
                    0 10px 30px rgba(20, 184, 166, 0.2),
                    0 5px 15px rgba(20, 184, 166, 0.1),
                    inset 0 0 60px rgba(20, 184, 166, 0.05)
                `
            }}
        >
            {/* Shine effect overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
                    transform: 'translateZ(1px)' // Slight lift for 3D depth
                }}
            />

            {/* Content - Fixed layout to prevent overlap */}
            <div className="relative z-10 flex flex-col h-full min-h-[120px]" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex-1">
                    <div className="flex items-center relative overflow-hidden mb-2">
                        <h3 className="text-aevon-cream font-bold text-lg transition-opacity duration-500 group-hover:opacity-0">
                            {option.label}
                        </h3>
                        <div className="absolute right-0 top-0 bottom-0 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-aevon-teal/15 group-hover:w-[calc(100%-0rem)] group-active:scale-95 text-aevon-teal">
                            <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
                        </div>
                    </div>
                    <p className="text-sm text-aevon-white/70 group-hover:text-aevon-white/90 transition-colors leading-relaxed line-clamp-3">
                        {option.description}
                    </p>
                </div>

                {option.reward && (
                    <div className="mt-4 pt-3 border-t border-aevon-white/10">
                        <div className="flex items-center space-x-2 text-xs">
                            <span className="text-aevon-coral/80 font-medium">Reward:</span>
                            <span className="font-mono bg-aevon-coral/20 px-2 py-1 rounded border border-aevon-coral/30 text-aevon-coral">
                                🔮 {option.reward.name}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: 'radial-gradient(circle at center, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
                }}
            />
        </motion.button>
    );
};

const ChoiceSystem = ({ options, onChoice }) => {
    if (!options) return null;

    return (
        <div className="w-full max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {options.map((option, index) => (
                    <ChoiceCard
                        key={option.id}
                        option={option}
                        index={index}
                        onChoice={onChoice}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChoiceSystem;
