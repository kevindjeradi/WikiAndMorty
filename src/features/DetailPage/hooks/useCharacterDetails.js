import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useCharacterDetails = (id) => {
  const [character, setCharacter] = useState(null);
  const [lastEpisode, setLastEpisode] = useState(null);
  const [lastEpisodeCharacters, setLastEpisodeCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacter = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(data);
      setError(null);

      if (data.episode.length > 0) {
        const lastEpisodeUrl = data.episode[data.episode.length - 1];
        const episodeData = await axios.get(lastEpisodeUrl);
        setLastEpisode(episodeData.data);

        const characterUrls = episodeData.data.characters.filter((url) => url !== data.url);
        const characterDetails = await Promise.all(
          characterUrls.map(async (url) => {
            const response = await axios.get(url);
            return response.data;
          })
        );
        setLastEpisodeCharacters(characterDetails);
      }
    } catch (error) {
      console.error('Error fetching character:', error);
      setError('Failed to load character data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return { character, lastEpisode, lastEpisodeCharacters, loading, error };
};

export default useCharacterDetails;
