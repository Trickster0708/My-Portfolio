import Section from '../Section';
import { Terminal, Globe, Cpu } from 'lucide-react';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: <Terminal className="w-6 h-6 text-primary-500 mb-4" />,
        skills: ['C++', 'Python', 'SQL', 'C']
    },
    {
        title: 'Web Development',
        icon: <Globe className="w-6 h-6 text-primary-500 mb-4" />,
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Tailwind CSS', 'Node.js']
    },
    {
        title: 'Core Computer Science',
        icon: <Cpu className="w-6 h-6 text-primary-500 mb-4" />,
        skills: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Computer Networks',
            'Database Management System',
            'Machine Learning'
        ]
    }
];

const Skills = () => {
    return (
        <Section id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Technical Skills
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="glass-effect p-8 rounded-2xl hover:border-primary-500/50 transition-colors flex flex-col h-full">
                        {category.icon}
                        <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-4 py-2 bg-dark-700/50 text-gray-300 rounded-lg text-sm font-medium border border-dark-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
