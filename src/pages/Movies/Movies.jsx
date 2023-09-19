import Gallery from 'components/Gallery/Gallery';
import { Container, Section } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import Message from 'components/Message/Message';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearched } from 'tmdbServices';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pageToLoad = searchParams.get('page');

  useEffect(() => {
    if (!pageToLoad) {
      setMovies([]);
      return;
    }
    const title = searchParams.get('title') ?? '';
    const controller = new AbortController();
    const signal = controller.signal;

    getMovies();

    async function getMovies() {
      setError('');
      setIsLoading(true);

      try {
        const response = await fetchMoviesSearched(title, pageToLoad, signal);
        const { results, total_results } = response;
        setMovies(results);

        searchParams.set('total', total_results);
        setSearchParams(searchParams);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    return () => {
      controller.abort();
    };
  }, [pageToLoad, searchParams, setSearchParams]);

  return (
    <Container>
      <Section>
        <SearchForm />
      </Section>
      {error && <Message messageCode={'error'} errorCode={error} />}
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <Gallery movies={movies} />
      ) : (
        <Message messageCode={'empty'} />
      )}
    </Container>
  );
};

export default Movies;
