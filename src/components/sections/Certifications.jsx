import { useState } from 'react';
import Section from '../Section';
import { Award, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
    {
        title: 'Cybersecurity Academy Orientation',
        issuer: 'Palo Alto Networks Cybersecurity Academy',
        date: 'February 2026',
        file: '/Cybersecurity_Academy_Onboarding_Certificate.pdf'
    },
    {
        title: 'Cybersecurity Foundation',
        issuer: 'Palo Alto Networks Cybersecurity Academy',
        date: 'March 2026',
        file: '/Cybersecurity_Foundation_Student_Certificate.pdf'
    },
    {
        title: 'Cloud Security Fundamentals',
        issuer: 'Palo Alto Networks Cybersecurity Academy',
        date: 'March 2026',
        file: '/Cloud_Security_Fundamentals_Student_Certificate.pdf'
    },
    {
        title: 'Cloud Security Automation',
        issuer: 'Palo Alto Networks Cybersecurity Academy',
        date: 'March 2026',
        file: '/_Cloud_Security_Automation_Student_Certificate.pdf'
    },
    {
        title: 'Network Security Fundamentals',
        issuer: 'Palo Alto Networks Cybersecurity Academy',
        date: 'March 2026',
        file: '/Network_Security_Fundamentals_Student_Certificate.pdf'
    },
    {
        title: 'Developer and Technology Job Simulation',
        issuer: 'Accenture (Forage)',
        date: 'January 2025',
        file: '/Accenture.pdf'
    },
    {
        title: 'Solutions Architecture Job Simulation',
        issuer: 'AWS (Forage)',
        date: 'March 2025',
        file: '/AWS.pdf'
    },
    {
        title: 'Software Engineering Job Simulation',
        issuer: 'Goldman Sachs (Forage)',
        date: 'February 2025',
        file: '/Goldman Sachs.pdf'
    },
    {
        title: 'Data Analytics Job Simulation',
        issuer: 'Deloitte (Forage)',
        date: 'March 2025',
        file: '/Deloitte.pdf'
    }
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <Section id="certifications" className="bg-dark-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Certifications
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedCert(cert)}
                        className="glass-effect p-6 rounded-2xl cursor-pointer hover:border-primary-500/50 hover:-translate-y-1 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                            <Award className="text-primary-400 w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-xs font-semibold text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
                                {cert.date}
                            </span>
                            <span className="text-xs flex items-center text-gray-400 group-hover:text-primary-400 transition-colors">
                                <FileText size={14} className="mr-1" /> View
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark-800 rounded-2xl border border-dark-700 w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-dark-700">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                                    <p className="text-sm text-gray-400">{selectedCert.issuer}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 hover:bg-dark-700 rounded-full text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 bg-dark-900 p-2">
                                <iframe
                                    src={selectedCert.file}
                                    className="w-full h-full rounded-lg border-0"
                                    title={selectedCert.title}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Certifications;
