import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useCharacters = (initialItemsPerPage) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ name: '', status: '', species: '', gender: '' });
  const [direction, setDirection] = useState('next');

  const fetchAllCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    let currentPage = 1;
    const allFetchedCharacters = [];

    try {
      while (true) {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/`, {
          params: { page: currentPage },
        });
        allFetchedCharacters.push(...data.results);
        if (!data.info.next) break;
        currentPage++;
      }

      setAllCharacters(allFetchedCharacters);
      setFilteredCharacters(allFetchedCharacters);
      setTotalPages(Math.ceil(allFetchedCharacters.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      setError('Failed to load characters. Please try again.');
      setLoading(false);
      console.error(error);
    }
  }, [itemsPerPage]);

  useEffect(() => {
    fetchAllCharacters();
  }, [fetchAllCharacters]);

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (allCharacters.length > 0) {
      setLoading(true);
      const applyFilters = () => {
        const filtered = allCharacters.filter((character) => {
          const matchesName = filters.name
            ? character.name.toLowerCase().includes(filters.name.toLowerCase())
            : true;
          const matchesStatus = filters.status
            ? character.status.toLowerCase() === filters.status.toLowerCase()
            : true;
          const matchesSpecies = filters.species
            ? character.species.toLowerCase().includes(filters.species.toLowerCase())
            : true;
          const matchesGender = filters.gender
            ? character.gender.toLowerCase() === filters.gender.toLowerCase()
            : true;

          return matchesName && matchesStatus && matchesSpecies && matchesGender;
        });

        setFilteredCharacters(filtered);
        setTotalPages(Math.ceil(filtered.length / itemsPerPage));
        setLoading(false);
        setError(filtered.length === 0 ? 'No characters found. Please adjust your filters.' : null);
      };

      applyFilters();
    }
  }, [allCharacters, filters, itemsPerPage]);

  useEffect(() => {
    if (!loading && filteredCharacters.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setDisplayedCharacters(filteredCharacters.slice(startIndex, endIndex));
    }
  }, [filteredCharacters, currentPage, itemsPerPage, loading]);

  const handleNextPage = useCallback(() => {
    setDirection('next');
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setDirection('prev');
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const updateItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return {
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
    setItemsPerPage: updateItemsPerPage,
  };
};

export default useCharacters;
