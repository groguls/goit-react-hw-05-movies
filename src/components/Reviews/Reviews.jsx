import { Loader } from 'components/Loader/Loader';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'tmdbServices';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getMovieReviews();

    async function getMovieReviews() {
      setIsLoading(true);
      try {
        const { results } = await fetchMovieReviews(movieId, signal);
        setReviews(results);
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

  console.log(reviews);

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <ul>
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reviews;
