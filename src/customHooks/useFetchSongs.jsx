import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchSongs = (options) => {
    const { url, params = {} } = options;
    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
          setIsLoading(true);
          try {
            const response = await axios.get(url, { params });
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