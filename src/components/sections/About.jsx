import Section from '../Section';

const About = () => {
    return (
        <Section id="about" className="bg-dark-800/50">
            <div className="max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white relative inline-block">
                    About Me
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
                </h2>

                <div className="prose prose-invert prose-lg text-gray-400">
                    <p className="mb-6 leading-relaxed">
                        I am a motivated Computer Science student deeply focused on cybersecurity, systems architecture, and software development. My journey in tech is driven by an intense curiosity for understanding how things work under the hood, allowing me to build robust, secure, and practical solutions.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        With strong analytical and problem-solving skills, I have completed comprehensive training in network security and vulnerability analysis. My hands-on experience extends from configuring operating systems like Kali Linux to developing AI/ML models that process data in real-time.
                    </p>
                    <p className="leading-relaxed">
                        Currently, I am seeking an internship opportunity where I can apply my theoretical knowledge to real-world infrastructure. I thrive in highly collaborative environments and am dedicated to writing clean code, researching emerging threats, and building infrastructure that scales securely.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default About;
