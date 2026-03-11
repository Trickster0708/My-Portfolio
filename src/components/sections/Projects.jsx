import { Github, ExternalLink } from 'lucide-react';
import Section from '../Section';

const projects = [
    {
        title: 'Emotion Aware Music and Environment System',
        tech: ['Python', 'Machine Learning', 'AI'],
        description: 'Developed an AI/ML-based emotion classification system achieving 85% accuracy for real-time mood detection and music recommendation. Integrated a 100+ song database with an intelligent non-repetitive playback algorithm to enhance personalization and user experience.',
        github: 'https://github.com/Trickster0708/Emotion-Aware-Music-System',
        live: null
    },
    {
        title: 'Coffee Is All You Need',
        tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
        description: 'Developed a modern coffee-themed website featuring responsive design and engaging UI sections. Optimized performance for fast loading and ensured seamless cross-device compatibility.',
        github: 'https://github.com/Trickster0708/Coffee-is-all-you-need',
        live: 'https://coffee-is-all-you-need.vercel.app/'
    }
];

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Featured Projects
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="glass-effect rounded-2xl overflow-hidden group hover:border-primary-500/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-primary-500/20 transition-all duration-300 flex flex-col h-full">
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, tIdx) => (
                                    <span key={tIdx} className="text-xs font-semibold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    <Github size={18} className="mr-2" />
                                    Code
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                                    >
                                        <ExternalLink size={18} className="mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
