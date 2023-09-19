import { Link, useLocation } from 'react-router-dom';
import {
  CardTitle,
  Image,
  MovieCardWrapper,
  Paragraf,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const location = useLocation();

  const { id, poster_path, title, release_date } = movie;

  const date = new Date(release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const linkTo = location.pathname === '/' ? `movies/${id}` : `${id}`;

  return (
    <>
      <MovieCardWrapper>
        <Link to={`${linkTo}`} state={{ from: location }}>
          <Image
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={`${title} poster`}
          />
        </Link>
        <div>
          <CardTitle>{title}</CardTitle>
          <Paragraf>{date}</Paragraf>
        </div>
      </MovieCardWrapper>
    </>
  );
};

export default MovieCard;
