import Gallery from 'components/Gallery/Gallery';
import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearched } from 'tmdbServices';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    getMovies();

    async function getMovies() {
      setIsLoading(true);
      try {
        const { results } = await fetchMoviesSearched(
          searchQuery,
          page,
          signal
        );
        console.log(results);
        setMovies(results);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          return;
        }
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    return () => {
      controller.abort();
    };
  }, [page, searchQuery]);

  const handleSearch = query => {
    if (searchQuery === title) {
      return;
    }
    setPage(1);
    setMovies([]);
    setSearchQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {movies.length > 0 && <Gallery movies={movies} />}
    </>
  );
};

export default Movies;
