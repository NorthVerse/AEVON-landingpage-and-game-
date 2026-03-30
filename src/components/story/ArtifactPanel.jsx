import { motion, AnimatePresence } from 'framer-motion';

const ArtifactPanel = ({ inventory }) => {
    return (
        <div className="h-full p-6 border-l border-aevon-white/5 bg-aevon-charcoal/30 backdrop-blur-sm">
            <h3 className="text-xs font-medium text-aevon-white/40 uppercase tracking-widest mb-6">
                Artifacts
            </h3>

            <div className="space-y-4">
                <AnimatePresence>
                    {inventory.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-aevon-white/20 italic text-center py-8"
                        >
                            No artifacts collected yet.
                        </motion.div>
                    ) : (
                        inventory.map((item, index) => (
                            <motion.div
                                key={`${item.name}-${index}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center space-x-4 p-4 bg-aevon-white/5 rounded-lg border border-aevon-white/10"
                            >
                                <div className="text-2xl">{item.icon}</div>
                                <div>
                                    <div className="text-sm font-medium text-aevon-white">{item.name}</div>
                                    <div className="text-xs text-aevon-white/50 capitalize">{item.type}</div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ArtifactPanel;
