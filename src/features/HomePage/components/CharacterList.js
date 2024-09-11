import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CharacterList = ({ displayedCharacters, direction }) => (
  <div className="flex-1 overflow-y-auto w-full p-4" style={{ height: 'calc(100vh - 200px)' }}>
    <AnimatePresence mode="wait" custom={direction}>
      <motion.ul
        key={direction}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid grid-cols-1 lg:grid-cols-4 gap-12"
        custom={direction}
        variants={itemVariants}
      >
        {displayedCharacters.map((character, index) => (
          <motion.li
            key={character.id}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md flex relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-gradient-to-r hover:before:from-transparent hover:before:via-white/10 hover:before:to-transparent hover:before:animate-shimmer"
            variants={itemVariants}
            custom={index}
            whileHover={hoverVariants}
          >
            <Link to={`/character/${character.id}`} className="flex w-full relative group">
              <img src={character.image} alt={character.name} className="w-1/3 object-cover" loading="lazy" />
              <div className="p-6 w-2/3 flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-bold text-center">{character.name}</h2>
                <p className="text-sm text-center">{character.species}</p>
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {character.status}
                  </span>
                  <span
                    className={`inline-block w-3 h-3 rounded-full align-bottom ${
                      character.status === 'Alive'
                        ? 'bg-green-500'
                        : character.status === 'Dead'
                        ? 'bg-red-500'
                        : 'bg-gray-500'
                    }`}
                  ></span>
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  </div>
);

export default CharacterList;
