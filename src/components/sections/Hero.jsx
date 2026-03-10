import { Github, Linkedin, Mail, Code } from 'lucide-react';
import Section from '../Section';

const Hero = () => {
    return (
        <Section id="home" className="pt-32 pb-20 justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl order-2 lg:order-1">
                    <p className="text-primary-500 font-medium mb-4 tracking-wide uppercase text-sm">
                        Welcome to my portfolio
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        Hi, I'm <span className="text-primary-500">Kinshuk Saxena</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6">
                        Computer Science Student | Aspiring Cybersecurity Professional
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
                        Passionate about cybersecurity, problem-solving, and building secure and practical technology solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="#projects" className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/30">
                            View Projects
                        </a>
                        <a href="/Cybersecurity_resume.pdf" download="Cybersecurity_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-dark-800 hover:bg-dark-700 border border-dark-700 text-white rounded-lg font-medium transition-colors">
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="mailto:kinshuksaxena0802@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                            <Mail size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/kinshuk-saxena-01535632a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Trickster0708" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://leetcode.com/u/KinshukSaxena/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors" title="LeetCode">
                            <Code size={24} />
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end py-8">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-700 shadow-2xl shadow-primary-500/20 group">
                        <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            src="/profile.jpg"
                            alt="Kinshuk Saxena"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
