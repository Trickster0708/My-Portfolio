import Section from '../Section';
import { Wrench, Monitor, Activity, Shield, Key, Database } from 'lucide-react';

const toolCategories = [
    {
        title: 'Development & Version Control',
        icon: <Database className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['Git', 'GitHub']
    },
    {
        title: 'Operating Systems',
        icon: <Monitor className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['Kali Linux', 'Windows']
    },
    {
        title: 'Network Analysis',
        icon: <Activity className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['Wireshark', 'tcpdump', 'Nmap', 'zeek']
    },
    {
        title: 'Password Auditing Tools',
        icon: <Key className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['John the Ripper', 'Hydra', 'Crunch', 'CeWL']
    },
    {
        title: 'Security & Analysis Tools',
        icon: <Shield className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['Zphisher', 'Passware Kit']
    },
    {
        title: 'Virtualization',
        icon: <Wrench className="w-6 h-6 text-primary-500 mb-4" />,
        tools: ['VirtualBox', 'VMware']
    }
];

const Tools = () => {
    return (
        <Section id="tools" className="bg-dark-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
                Technical Tools
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolCategories.map((category, idx) => (
                    <div key={idx} className="glass-effect p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                        {category.icon}
                        <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                            {category.tools.map((tool, tIdx) => (
                                <li key={tIdx} className="text-gray-400 flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Tools;
