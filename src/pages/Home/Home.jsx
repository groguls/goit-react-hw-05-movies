import Gallery from 'components/Gallery/Gallery';
import { Container, Section } from 'components/Layout/Layout.styled';
import { Loader } from 'components/Loader/Loader';
import Message from 'components/Message/Message';
import { Title } from 'pages/MovieDetails/MovieDetails.styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTrendingMovies } from 'tmdbServices';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    pathname !== '/' && navigate('/');
  }, [navigate, pathname]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getTrendingMovies();

    async function getTrendingMovies() {
      setError('');
      setIsLoading(true);
      try {
        const { results } = await fetchTrendingMovies(signal);
        setTrendingMovies(prevMovies => [...prevMovies, ...results]);
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
  }, []);

  return (
    <Container>
      <Section>
        <Title>Trending today</Title>
      </Section>
      {error && <Message messageCode={'error'} errorCode={error} />}
      {isLoading && <Loader />}
      {trendingMovies.length > 0 && <Gallery movies={trendingMovies} />}
    </Container>
  );
};

export default Home;
