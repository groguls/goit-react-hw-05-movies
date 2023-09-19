import CastCard from 'components/CastCard/CastCard';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'tmdbServices';
import { StyledCastList } from './Cast.styled';
import { Container } from 'components/Layout/Layout.styled';
import Message from 'components/Message/Message';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getMovieCredits();

    async function getMovieCredits() {
      setIsLoading(true);
      try {
        const { cast } = await fetchMovieCredits(movieId, signal);
        setCasts(cast);
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
  }, [movieId]);

  return (
    <>
      <Container>
        {isLoading && <Loader />}
        {casts.length > 0 ? (
          <StyledCastList>
            {casts.map(cast => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </StyledCastList>
        ) : (
          <Message messageCode={'cast'} />
        )}
      </Container>
    </>
  );
};

export default Cast;
