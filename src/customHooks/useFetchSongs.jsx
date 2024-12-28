import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSongs = (options) => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchSongs = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get(options.url, { params: options.params });
            setSongs(response.data);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchSongs();
      }, [options.url, options.params]);
    
    return { songs, isLoading, error };
}

export default useFetchSongs;