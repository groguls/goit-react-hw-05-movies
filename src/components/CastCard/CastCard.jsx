import { CardTitle, Paragraf } from 'components/MovieCard/MovieCard.styled';
import { CastCardWrapper, Image } from './CastCard.styled';

const CastCard = ({ cast }) => {
  return (
    <>
      <CastCardWrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
          alt={`${cast.name} profile`}
        />
        <CardTitle>{cast.name}</CardTitle>
        <Paragraf>{cast.character}</Paragraf>
      </CastCardWrapper>
    </>
  );
};

export default CastCard;
