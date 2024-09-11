import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: i * 0.05 },
  }),
  exit: { opacity: 0, y: -20 },
};

const hoverVariants = {
  scale: 1.05,
  rotate: 1,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  transition: { duration: 0.3, ease: 'easeOut' },
};

const EpisodeCharactersList = ({ lastEpisodeCharacters }) => (
  lastEpisodeCharacters.length > 0 && (
    <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <h3 className="text-lg font-medium mb-2 text-white">Other Characters in this Episode:</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lastEpisodeCharacters.map((epCharacter, index) => (
          <motion.li
            key={epCharacter.id}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md flex relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-white/10 hover:before:to-transparent hover:before:animate-shimmer"
            variants={itemVariants}
            custom={index}
            whileHover={hoverVariants}
          >
            <Link to={`/character/${epCharacter.id}`} className="flex w-full relative group">
              <img src={epCharacter.image} alt={epCharacter.name} className="w-1/3 object-cover" loading="lazy" />
              <div className="p-6 w-2/3 flex flex-col items-center justify-center gap-4">
                <h4 className="font-semibold text-center">{epCharacter.name}</h4>
                <p className="text-sm text-center">{epCharacter.species}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
);

export default EpisodeCharactersList;
