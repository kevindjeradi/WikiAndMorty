import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const NavigationBar = ({
  onFilterChange,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const handleItemsPerPageChange = useCallback((e) => {
    setItemsPerPage(Number(e.target.value));
  }, [setItemsPerPage]);

  return (
    <>
      <motion.div
        className="flex flex-col items-center gap-2 mb-4 p-2 rounded-lg shadow-md bg-gray-800 w-full max-w-4xl lg:flex-row lg:justify-between lg:items-center lg:gap-4 lg:mb-8 lg:p-4 z-50 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.input
          type="text"
          placeholder="Search by name"
          className="input input-bordered bg-gray-800 text-gray-200 border-gray-700 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 px-3 py-1.5 h-10 w-full lg:flex-1 lg:px-4 lg:py-2"
          onChange={(e) => onFilterChange('name', e.target.value)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.select
          className="select select-bordered bg-gray-800 text-gray-200 border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 px-3 py-1.5 h-10 w-full lg:flex-1 lg:px-4 lg:py-2"
          onChange={(e) => onFilterChange('status', e.target.value)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <option value="">Any status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </motion.select>
        <motion.select
          className="select select-bordered bg-gray-800 text-gray-200 border-gray-700 focus:border-indigo-500 focus:ring-indigo-500 px-3 py-1.5 h-10 w-full lg:flex-1 lg:px-4 lg:py-2"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <option value={12}>12 per page</option>
          <option value={24}>24 per page</option>
          <option value={36}>36 per page</option>
          <option value={48}>48 per page</option>
        </motion.select>

        {/* Pagination Controls for Large Screens */}
        <div className="hidden lg:flex items-center gap-4 mt-4 lg:mt-0">
          <motion.button
            onClick={onPrevPage}
            disabled={currentPage === 1}
            className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </motion.button>
          <span className="text-lg text-gray-400 mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* Pagination Controls for Mobile */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 flex items-center justify-center py-2 shadow-md lg:hidden z-50"
        initial={{ opacity: 0, backgroundColor: '#1a1a1a' }}
        animate={{ opacity: 1, backgroundColor: '#1a1a1a' }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </motion.button>
        <span className="text-lg text-gray-400 mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <motion.button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          <ChevronRightIcon className="h-7 w-7" />
        </motion.button>
      </motion.div>
    </>
  );
};

export default React.memo(NavigationBar);