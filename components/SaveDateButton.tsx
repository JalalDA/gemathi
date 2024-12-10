import { motion } from "framer-motion";

const SaveTheDateButton: React.FC = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="px-6 py-3 mt-4 bg-primary rounded-full shadow-lg hover:bg-secondary font-DancingScript text-blue-700"
  >
    Save The Date
  </motion.button>
);

export default SaveTheDateButton;
