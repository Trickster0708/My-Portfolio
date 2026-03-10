import Section from '../Section';
import { Briefcase, CodeSquare } from 'lucide-react';

const experiences = [
    {
        title: 'Technical Practice',
        icon: <CodeSquare className="w-6 h-6 text-primary-500" />,
        description: 'Solved 200+ algorithmic problems across LeetCode, Coding Ninjas, and GeeksforGeeks to strengthen data structures and algorithmic thinking.',
        link: 'https://leetcode.com/u/KinshukSaxena/',
        linkText: 'LeetCode Profile'
    },
    {
        title: 'Cybersecurity Training',
        icon: <Briefcase className="w-6 h-6 text-primary-500" />,
        description: 'Completed practical cybersecurity training focused on network security concepts, vulnerability analysis, and hands-on experience with security tools.'
    }
];

const Experience = () => {
    return (
        <Section id="experience" className="bg-dark-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Experience & Training
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="max-w-4xl space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="glass-effect p-8 rounded-2xl flex flex-col sm:flex-row gap-6 hover:translate-x-2 transition-transform duration-300">
                        <div className="w-14 h-14 rounded-xl bg-dark-700 flex items-center justify-center shrink-0 border border-dark-600">
                            {exp.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                            {exp.link && (
                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                                >
                                    <CodeSquare size={16} className="mr-2" />
                                    {exp.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
