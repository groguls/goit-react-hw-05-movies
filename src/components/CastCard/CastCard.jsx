const CastCard = ({ cast }) => {
  return (
    <>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
          alt={`${cast.name} profile`}
        />
        <h2>{cast.name}</h2>
        <p>Character: {cast.character}</p>
      </li>
    </>
  );
};

export default CastCard;
