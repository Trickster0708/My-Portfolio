import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    'Home', 'About', 'Skills', 'Tools', 'Projects',
    'Experience', 'Education', 'Certifications', 'Contact'
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl font-heading font-bold text-white">
                    KS.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={(e) => scrollToSection(e, link)}
                            className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-dark-700">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={(e) => scrollToSection(e, link)}
                                className="text-base font-medium text-gray-300 hover:text-primary-400 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
