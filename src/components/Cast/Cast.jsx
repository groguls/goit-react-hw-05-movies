import CastCard from 'components/CastCard/CastCard';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'tmdbServices';

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
        console.log(cast);
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
      {isLoading && <Loader />}
      <div>
        <ul>
          {casts.map(cast => (
            <CastCard key={cast.id} cast={cast} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cast;
