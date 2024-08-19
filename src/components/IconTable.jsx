import { motion } from "framer-motion";
import "../components/CSS/IconTable.css";

const IconTable = ({ sections }) => {
  // Duplicate the sections array to create a seamless loop
  const duplicatedSections = [...sections, ...sections];

  return (
    <div className="icon-table-container">
      <motion.div
        className="icon-column"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10 }}
      >
        {duplicatedSections.map((section, index) => (
          <motion.div key={index} className="icon-category" style={{ filter: "grayscale(100%)" }}>
            {/* Bedingte Anzeige des Icons */}
            {section.icon && (
              <motion.img
                src={section.icon}
                alt={`${section.title} Icon`}
                className="icon-image"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            )}
            <p>{section.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IconTable;