import { Loader } from 'components/Loader/Loader';
import ReviewCard from 'components/ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchMovieReviews } from 'tmdbServices';
import { StyledReviewList } from './Reviews.styled';
import { Container } from 'components/Layout/Layout.styled';
import Message from 'components/Message/Message';
import InfiniteScroll from 'react-infinite-scroll-component';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('review_page'));
  const total = Number(searchParams.get('total_reviews'));

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (!page) {
      searchParams.set('review_page', 1);
      setSearchParams(searchParams);
    }

    getMovieReviews();

    async function getMovieReviews() {
      setError('');
      setIsLoading(true);
      try {
        const response = await fetchMovieReviews(movieId, signal, page);
        const { results, total_results } = response;

        setReviews(prevReviews => [...prevReviews, ...results]);

        searchParams.set('total_reviews', total_results);
        setSearchParams(searchParams);
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
  }, [movieId, page, searchParams, setSearchParams]);

  const handleLoadMore = () => {
    searchParams.set('review_page', page + 1);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Container>
        {error && <Message messageCode={'error'} errorCode={error} />}
        {isLoading && <Loader />}
        {reviews.length > 0 ? (
          <InfiniteScroll
            dataLength={reviews.length}
            next={handleLoadMore}
            hasMore={total > reviews.length}
            loader={<Loader />}
            endMessage={<Message messageCode={'end'} />}
            style={{ paddingBottom: '64px' }}
          >
            <StyledReviewList>
              {reviews.map(review => (
                <ReviewCard key={nanoid()} review={review} />
              ))}
            </StyledReviewList>
          </InfiniteScroll>
        ) : (
          <Message messageCode={'reviews'} />
        )}
      </Container>
    </>
  );
};

export default Reviews;
