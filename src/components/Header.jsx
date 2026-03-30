import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 bg-aevon-navy/80 backdrop-blur-md border-b border-white/5 px-6 py-6 flex justify-between items-center"
        >
            <span className="text-2xl font-bold tracking-tighter text-white">
                AEVON
            </span>

            <nav className="hidden md:flex space-x-8 text-sm font-medium text-white/70">
                <a href="#mission" className="hover:text-white transition-colors">Mission</a>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
                <a href="#team" className="hover:text-white transition-colors">Team</a>
                <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            </nav>

            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors text-sm font-medium">
                Get Started
            </button>
        </motion.header>
    );
};

export default Header;
