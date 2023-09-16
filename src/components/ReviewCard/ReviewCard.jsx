const ReviewCard = ({ review }) => {
  return (
    <>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`}
          alt={`${review.author_details.name} profile`}
        ></img>
        <h3>A review by {review.author}</h3>
        <h5>
          Written by {review.author} on {review.created_at}
        </h5>
        <p>{review.content}</p>
      </li>
    </>
  );
};

export default ReviewCard;
