// src/components/SectionWrapper.jsx
import { motion } from "framer-motion";

export default function SectionWrapper({ children, className }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.section>
  );
}
