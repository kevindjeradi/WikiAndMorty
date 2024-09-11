import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import logo from '../../../assets/images/logos/logo.png';
import Loader from '../../../utils/Loader';
import CharacterInfo from '../components/CharacterInfo';
import EpisodeDetails from '../components/EpisodeDetails';
import EpisodeCharactersList from '../components/EpisodeCharactersList';
import useCharacterDetails from '../hooks/useCharacterDetails';

function DetailPage() {
  const { id } = useParams();
  const { character, lastEpisode, lastEpisodeCharacters, loading, error } = useCharacterDetails(id);

  if (loading)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Loader />
      </Suspense>
    );
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <motion.div
      initial={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      animate={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      exit={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      className="min-h-screen flex flex-col items-center py-8 relative px-4"
    >
      {/* Header */}
      <div className="relative w-full lg:flex lg:justify-between lg:items-center lg:mb-6">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between w-full lg:hidden mb-4">
          <Link
            to="/"
            className="bg-gray-800 text-white cursor-pointer hover:bg-gray-700 transition-colors duration-200 px-4 py-2 rounded-md flex items-center border border-gray-600 hover:scale-105 hover:shadow-lg transform transition-transform"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center"
            >
              <ChevronLeftIcon className="h-6 w-6 mr-2 text-gray-300 hover:text-white" />
              Back
            </motion.div>
          </Link>

          <Link to="/" className="block lg:hidden">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-16"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-200 mx-auto lg:static lg:left-1/2 lg:transform lg:-translate-x-1/2 mb-4 lg:absolute lg:top-0 text-center lg:text-left">
          {character ? `${character.name}'s Details` : 'Loading...'}
        </h1>

        <Link to="/" className="absolute left-0 lg:block hidden mt-8">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-16"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </Link>
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mt-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Character Image and Name for Large Screens */}
        <div className="relative flex-shrink-0 flex flex-col items-center lg:block">
          {/* Character Image for Mobile */}
          <img
            src={character.image}
            alt={character.name}
            className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-lg mb-4 lg:hidden"
          />

          <Link
            to="/"
            className="bg-gray-800 text-white cursor-pointer hover:bg-gray-700 transition-colors duration-200 px-4 py-2 rounded-md flex items-center border border-gray-600 hover:scale-105 hover:shadow-lg lg:block hidden mb-6"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center"
            >
              <ChevronLeftIcon className="h-6 w-6 mr-2 text-gray-300 hover:text-white" />
              Go back to the browse page
            </motion.div>
          </Link>

          {/* Character Image for Large Screens */}
          <img
            src={character.image}
            alt={character.name}
            className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-lg mb-4 hidden lg:block"
          />

          <h2 className="text-2xl font-semibold text-gray-200">{character.name}</h2>
        </div>

        <div className="flex-grow space-y-8">
          <CharacterInfo character={character} />
          <EpisodeDetails lastEpisode={lastEpisode} />
          <EpisodeCharactersList lastEpisodeCharacters={lastEpisodeCharacters} />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default React.memo(DetailPage);
