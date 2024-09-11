import React from 'react';
import { motion } from 'framer-motion';

const CharacterInfo = ({ character }) => (
  <div className="flex-grow space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        className={`p-4 rounded-lg shadow-md ${
          character.status === 'Alive' ? 'bg-green-700' : character.status === 'Dead' ? 'bg-red-700' : 'bg-gray-800'
        } text-white`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-xl font-bold flex items-center gap-2">
          {character.status === 'unknown' ? 'Status Unknown' : `Currently ${character.status}`}
        </h2>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-800 to-blue-600 text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-xl font-bold flex items-center gap-2">
          {character.gender === 'unknown' ? 'Unknown gender' : character.gender}
        </h2>
        <p className="text-md">{character.species}</p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg shadow-md bg-gradient-to-r from-purple-800 to-pink-700 text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-xl font-bold flex items-center gap-2">Origin</h2>
        <p className="text-md">{character.origin.name}</p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg shadow-md bg-gradient-to-r from-teal-800 to-teal-600 text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-xl font-bold flex items-center gap-2">Last Seen</h2>
        <p className="text-md">{character.location.name === 'unknown' ? 'Unknown location' : character.location.name}</p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg shadow-md bg-gradient-to-r from-blue-800 to-blue-600 text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">{character.episode.length}</h2>
        <p className="text-md">Episode Appearances</p>
      </motion.div>

      <motion.div
        className="p-4 rounded-lg shadow-md bg-gradient-to-r from-pink-800 to-pink-600 text-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          {new Date(character.created).toLocaleDateString()}
        </h2>
        <p className="text-md">Character Created</p>
      </motion.div>
    </div>
  </div>
);

export default CharacterInfo;
