import { motion } from 'framer-motion';

const Mission = () => {
    const items = [
        { title: "Education", description: "Democratizing knowledge through adaptive AI models." },
        { title: "Finance", description: "Simplifying complex economic systems for everyone." },
        { title: "Culture", description: "Preserving and redesigning how culture, language and tradition is passed to the next generation using AI models." },
    ];

    return (
        <section id="mission" className="py-24 px-4 sm:px-6 border-b border-aevon-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-sm font-medium text-aevon-white/40 uppercase tracking-widest pl-1">Our Mission</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 max-w-2xl text-aevon-white leading-tight">
                        Ensuring there are <span className="text-gradient">AI products</span> for smooth <br className="hidden md:block" />
                        educational, financial and cultural transition
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 border border-white/5 hover:border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm group"
                        >
                            <h3 className="text-xl font-bold mb-2 text-aevon-gold">{item.title}</h3>
                            <p className="text-aevon-cream/70">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
