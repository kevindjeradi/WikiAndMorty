import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../../assets/images/logos/logo.png';
import Loader from '../../../utils/Loader';
import NavigationBar from '../../NavigationBar';
import CharacterList from '../components/CharacterList';
import ErrorDisplay from '../components/ErrorDisplay';
import useCharacters from '../hooks/useCharacters';

const HomePage = () => {
  const {
    displayedCharacters,
    error,
    loading,
    filters,
    handleFilterChange,
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    direction,
    itemsPerPage,
    setItemsPerPage,
  } = useCharacters(12);

  return (
    <motion.div
      initial={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      animate={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      exit={{ opacity: 1, backgroundColor: '#1a1a1a' }}
      className="min-h-screen flex flex-col items-center py-8 relative px-4 overflow-hidden lg:overflow-auto"
      style={{ height: '100vh' }}
    >
      <div className="relative w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-center mb-6">
        <Link to="/" className="mb-2 lg:mb-0 lg:absolute lg:left-0">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-16 mx-auto lg:mx-0"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </Link>

        <h1 className="text-3xl font-bold text-gray-200 text-center mx-auto">Browse</h1>
      </div>

      <Suspense fallback={<div>Loading Navigation...</div>}>
        <NavigationBar
          isDetailPage={false}
          onFilterChange={handleFilterChange}
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </Suspense>

      {loading ? (
        <div className="flex justify-center items-center h-128 relative">
          <Suspense fallback={<div>Loading...</div>}>
            <Loader />
          </Suspense>
        </div>
      ) : error ? (
        <ErrorDisplay errorMessage={`The character "${filters.name || 'characters'}" was not found.`} />
      ) : (
        <CharacterList displayedCharacters={displayedCharacters} direction={direction} />
      )}
    </motion.div>
  );
};

export default React.memo(HomePage);
