import { StyledMessage } from './Message.styled';

const Message = ({ messageCode, errorCode }) => {
  let message = '';
  switch (messageCode) {
    case 'error':
      message = `Oops! Something went wrong! Try reloading the page!`;
      break;
    case 'end':
      message = `Woow! You have seen it all`;
      break;
    case 'reviews':
      message = `We don't have any reviews for this movie`;
      break;
    case 'cast':
      message = `Sorry, we don't have any information about the cast`;
      break;
    case 'empty':
      message = `Nothing to view. Please try to search for something or check the search options`;
      break;
    default:
      break;
  }

  return (
    <StyledMessage>
      <h3>
        {message}
        <br />
        {errorCode ?? ''}
      </h3>
    </StyledMessage>
  );
};

export default Message;
