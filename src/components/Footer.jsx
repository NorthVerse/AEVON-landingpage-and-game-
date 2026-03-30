import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-aevon-white/5 text-aevon-white/40 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <span className="font-bold text-aevon-white">AEVON</span> &copy; 2026
                </div>
                <div className="flex space-x-6 items-center">
                    <a
                        href="https://twitter.com/Aevonai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="Contact"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
