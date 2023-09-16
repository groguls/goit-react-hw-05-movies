import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'tmdbServices';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    getMovieDetails();

    async function getMovieDetails() {
      setIsLoading(true);
      try {
        const movieDetails = await fetchMovieDetails(movieId, signal);
        console.log(movieDetails);
        setMovieData(movieDetails);
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

  const { title, poster_path } = movieData;

  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading && <Loader />}
      <div>
        <p>{title}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="Movie poster"
        />
      </div>
      <div>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
