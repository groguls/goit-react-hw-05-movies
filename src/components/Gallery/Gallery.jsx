import MovieCard from 'components/MovieCard/MovieCard';
import { StyledGalleryList } from './Gallery.styled';
import { nanoid } from 'nanoid';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'react-pagination-bar';

const Gallery = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page'));
  const total = Number(searchParams.get('total'));

  const handleLoadMore = page => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  return (
    <>
      <StyledGalleryList>
        {movies.map(movie => (
          <MovieCard key={nanoid()} movie={movie} />
        ))}
      </StyledGalleryList>
      <Pagination
        currentPage={page}
        itemsPerPage={20}
        onPageChange={handleLoadMore}
        totalItems={total}
        customClassNames={{}}
      />
    </>
  );
};

export default Gallery;
