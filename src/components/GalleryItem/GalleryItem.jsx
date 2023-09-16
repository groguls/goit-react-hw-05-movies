import { Link, useLocation } from 'react-router-dom';

export const GalleryItem = ({ movie }) => {
  const location = useLocation();
  const linkTo =
    location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`;

  const pathToPoster = movie.poster_path ?? movie.backdrop_path;
  return (
    <li>
      <Link to={`${linkTo}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${pathToPoster}`}
          alt={`${movie.title} poster`}
        />
      </Link>
      <div>
        <p>{movie.title}</p>
      </div>
    </li>
  );
};

export default GalleryItem;
