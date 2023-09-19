import {
  Avatar,
  InfoCaption,
  InfoDiv,
  InfoTitle,
  Span,
  StyledReviewCard,
} from './ReviewCard.styled';

const ReviewCard = ({ review }) => {
  const {
    author_details: { avatar_path, name },
    author,
    created_at,
    content,
  } = review;

  const date = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <StyledReviewCard>
        <article>
          <InfoDiv>
            <Avatar
              src={`https://image.tmdb.org/t/p/w45${avatar_path}`}
              alt={`${name} profile`}
            ></Avatar>
            <div>
              <InfoTitle>A review by {author}</InfoTitle>
              <InfoCaption>
                Written by <Span>{author}</Span> on {date}
              </InfoCaption>
            </div>
          </InfoDiv>
          <p>{content}</p>
        </article>
      </StyledReviewCard>
    </>
  );
};

export default ReviewCard;
