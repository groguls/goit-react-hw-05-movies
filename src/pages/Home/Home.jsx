import Gallery from 'components/Gallery/Gallery';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'tmdbServices';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getTrendingMovies();

    async function getTrendingMovies() {
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies(signal);
        console.log(results);
        setTrendingMovies(results);
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
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {trendingMovies.length > 0 && <Gallery movies={trendingMovies} />}
    </>
  );
};

export default Home;
