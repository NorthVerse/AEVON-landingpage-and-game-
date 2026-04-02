import { X, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-aevon-white/5 text-aevon-white/40 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <span className="font-bold text-aevon-white">AEVON</span> &copy; 2026
                </div>
                <div className="flex space-x-6 items-center">
                    <a
                        href="https://x.com/aevonai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="X (Twitter)"
                    >
                        <X size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/aevonai_?igsh=dXh6b3pyZGJ6ZGRi&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <circle cx="17.5" cy="6.5" r="1.5" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="text-aevon-white/60 hover:text-aevon-coral transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
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
