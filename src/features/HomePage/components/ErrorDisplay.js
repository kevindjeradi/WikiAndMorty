import React from 'react';
import { motion } from 'framer-motion';
import errorImage from '../../../assets/images/error.gif';

const ErrorDisplay = ({ errorMessage }) => (
  <motion.div
    className="flex flex-col items-center max-w-md mx-auto relative"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <img src={errorImage} alt="Error Icon" className="w-72 h-72 mb-[-2rem] relative z-10" />
    <div className="bg-red-500 text-white p-3 rounded-lg shadow-md mt-4 relative z-0">
      <p className="font-bold">Error</p>
      <p>{errorMessage}</p>
    </div>
  </motion.div>
);

export default ErrorDisplay;
