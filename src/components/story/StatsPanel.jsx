import { motion } from 'framer-motion';

const StatsPanel = ({ stats }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between px-8 py-4 bg-aevon-navy/80 backdrop-blur-md border-b border-aevon-white/10"
        >
            <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                    <span className="text-xs text-aevon-white/40 uppercase tracking-widest">Level</span>
                    <span className="text-xl font-bold text-aevon-gold">{stats.level}</span>
                </div>
                <div className="h-8 w-px bg-aevon-white/10"></div>
                <div className="flex flex-col min-w-[150px]">
                    <span className="text-xs text-aevon-white/40 uppercase tracking-widest">Experience</span>
                    <div className="w-full h-2 bg-aevon-white/10 rounded-full mt-1 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-aevon-coral to-aevon-amber"
                            initial={{ width: 0 }}
                            animate={{ width: `${stats.xp}%` }} // Simplified percentage
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <span className="text-sm text-aevon-white/60">Trail</span>
                <span className="text-aevon-white font-mono bg-aevon-white/10 px-2 py-1 rounded">
                    {stats.trail} <span className="text-aevon-white/40">/ {stats.maxTrails}</span>
                </span>
            </div>
        </motion.div>
    );
};

export default StatsPanel;
