import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StoryPortal from './story/StoryPortal';

const ProductShowcase = () => {


    return (
        <section id="products" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-aevon-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    <div className="order-2 lg:order-1 relative w-full">
                        {/* Portal to the Game */}
                        <StoryPortal />
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-sm font-medium text-aevon-teal uppercase tracking-widest pl-1">Products</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                            HERITAGE: <br />
                            AI Gamified Cultural Learning
                        </h2>
                        <p className="text-base md:text-xl text-aevon-cream/70 mb-8 leading-relaxed max-w-xl">
                            Explore heritage through an immersive, AI-powered environment for people of all ages to learn language and culture through realistic practice, conversation and scenario-based learning
                        </p>
                        <ul className="space-y-4 mb-10">
                            {['AI Gamified Learning', 'Cultural Preservation'].map((feature, i) => (
                                <li key={i} className="flex items-center text-aevon-cream/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-aevon-teal mr-3"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default ProductShowcase;
