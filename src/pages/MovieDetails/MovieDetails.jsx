import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'tmdbServices';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
import {
  Background,
  ButtonLink,
  GoBackWraper,
  MoreInfoWrapper,
  MovieDatailsContainer,
  MovieDetailsWrapper,
  MovieInfoInner,
  Overview,
  OverviewInner,
  ReleaseYear,
  Span,
  TagLine,
  Title,
} from './MovieDetails.styled';
import { Container, Section } from 'components/Layout/Layout.styled';
import Message from 'components/Message/Message';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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
        setMovieData(movieDetails);
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
  }, [movieId]);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    genres,
    tagline,
    overview,
    vote_average,
  } = movieData;

  const releaseYear = new Date(release_date).getFullYear();
  const duration = Math.floor(runtime / 60) + 'h ' + (runtime % 60) + 'm';
  const userScore = Math.round(vote_average * 10);

  return (
    <>
      <Section>
        <GoBackWraper>
          <ButtonLink to={backLinkRef.current}>
            <IoIosArrowDropleftCircle />
            Go back
          </ButtonLink>
          {error && <Message messageCode={'error'} errorCode={error} />}
          {isLoading && <Loader />}
        </GoBackWraper>

        {Object.keys(movieData).length > 0 && (
          <>
            <MovieDetailsWrapper
              style={{
                backgroundImage: `url(
            'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}'
          )`,
              }}
            >
              <Background>
                <MovieDatailsContainer>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt={`${title} movie poster`}
                    />
                  </div>
                  <MovieInfoInner>
                    <div>
                      <Title>
                        {title}
                        <ReleaseYear> ({releaseYear})</ReleaseYear>
                      </Title>
                      <div>
                        <Span>{release_date}</Span>
                        <Span>
                          {genres.map(genre => (
                            <span key={genre.id}>{genre.name} </span>
                          ))}
                        </Span>
                        <Span>{duration}</Span>
                      </div>
                    </div>
                    <p>User Score: {userScore}%</p>
                    <OverviewInner>
                      <TagLine>{tagline}</TagLine>
                      <Overview>Overview</Overview>
                      <p>{overview}</p>
                    </OverviewInner>
                  </MovieInfoInner>
                </MovieDatailsContainer>
              </Background>
            </MovieDetailsWrapper>
            <Container>
              <MoreInfoWrapper>
                <ButtonLink to={'cast'}>
                  <IoIosArrowDropdownCircle />
                  Cast
                </ButtonLink>
                <ButtonLink to={'reviews'}>
                  <IoIosArrowDropdownCircle />
                  Reviews
                </ButtonLink>
              </MoreInfoWrapper>
              <div>
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            </Container>
          </>
        )}
      </Section>
    </>
  );
};

export default MovieDetails;
