import React from 'react';
import { motion } from 'framer-motion';

const EpisodeDetails = ({ lastEpisode }) => (
  lastEpisode && (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-3">Last Appeared In:</h2>
      <div className="flex flex-col gap-1 text-gray-400">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <strong className="text-indigo-400">Episode:</strong> {lastEpisode.name} ({lastEpisode.episode})
        </motion.p>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <strong className="text-indigo-400">Air Date:</strong> {lastEpisode.air_date}
        </motion.p>
      </div>
    </div>
  )
);

export default EpisodeDetails;
