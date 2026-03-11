import Section from '../Section';
import { Mail, Github, Linkedin, Code, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

        // Open Gmail in a new tab instead of relying on a local email client
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=kinshuksaxena0802@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailLink, '_blank');
    };
    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block text-center w-full">
                    Let's Connect
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-500 rounded-full"></span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 bg-dark-800/50 p-8 rounded-3xl border border-dark-700">
                    <div className="md:w-1/3 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                            <p className="text-gray-400">Feel free to reach out for collaborations, opportunities, or just to say hi.</p>
                        </div>

                        <a href="mailto:kinshuksaxena0802@gmail.com" className="flex items-center text-gray-300 hover:text-primary-400 transition-colors group overflow-hidden">
                            <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary-500/20 transition-colors shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-sm md:text-base truncate">kinshuksaxena0802@gmail.com</span>
                        </a>

                        <div className="flex gap-4 pt-4 border-t border-dark-700">
                            <a href="https://www.linkedin.com/in/kinshuk-saxena-01535632a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-700 rounded-full text-gray-400 hover:text-blue-500 hover:bg-dark-600 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/Trickster0708" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-700 rounded-full text-gray-400 hover:text-white hover:bg-dark-600 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://leetcode.com/u/KinshukSaxena/" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-700 rounded-full text-gray-400 hover:text-orange-500 hover:bg-dark-600 transition-all">
                                <Code size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Your message here..."></textarea>
                            </div>
                            <button className="w-full flex items-center justify-center bg-primary-500 hover:bg-primary-400 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:-translate-y-1 group">
                                Send Message
                                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
