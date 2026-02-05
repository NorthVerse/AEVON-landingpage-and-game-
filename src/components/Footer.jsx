const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-aevon-white/5 text-aevon-white/40 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-aevon-white">AEVON</span> &copy; 2026
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-aevon-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-aevon-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-aevon-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
