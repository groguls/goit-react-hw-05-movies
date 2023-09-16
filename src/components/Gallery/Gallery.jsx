import GalleryItem from 'components/GalleryItem/GalleryItem';

const Gallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <GalleryItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Gallery;
