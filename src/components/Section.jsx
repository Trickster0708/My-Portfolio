import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
    return (
        <section
            id={id}
            className={`min-h-screen py-20 flex flex-col justify-center ${className}`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
