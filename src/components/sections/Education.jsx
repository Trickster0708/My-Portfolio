import Section from '../Section';

const education = [
    {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'GL Bajaj Institute of Technology and Management',
        period: '2023 – Present',
        score: 'CGPA: 8.1 / 10'
    },
    {
        degree: 'ISC Class XII',
        institution: 'Lucknow Public College',
        period: '2021 – 2022',
        score: 'Score: 92%'
    }
];

const Education = () => {
    return (
        <Section id="education">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Education
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="max-w-4xl border-l-2 border-dark-700 pl-8 space-y-12 relative">
                {education.map((edu, idx) => (
                    <div key={idx} className="relative">
                        {/* Timeline dot */}
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary-500 border-4 border-dark-900 shadow-sm"></span>

                        <div className="glass-effect p-8 rounded-2xl hover:border-primary-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                            <h4 className="text-lg text-primary-400 font-medium mb-4">{edu.institution}</h4>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm font-semibold text-gray-400">
                                <span className="bg-dark-700/50 px-3 py-1 rounded inline-block w-max">
                                    {edu.period}
                                </span>
                                <span className="bg-dark-700/50 px-3 py-1 rounded inline-block w-max font-bold text-gray-300">
                                    {edu.score}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
