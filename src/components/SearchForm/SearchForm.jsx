import { useSearchParams } from 'react-router-dom';
import {
  FormContainer,
  Input,
  SearchButton,
  StyledForm,
} from './SearchForm.styled';
import { useState } from 'react';
import Message from 'components/Message/Message';

const SearchForm = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') ?? '';

  const handleInput = evt => {
    searchParams.set('title', evt.target.value);
    setSearchParams(evt.target.value ? searchParams : {});
  };

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    if (!title) {
      setIsEmpty(true);
      return;
    }
    searchParams.set('page', 1);
    setSearchParams(searchParams);
    setIsEmpty(false);
  };

  return (
    <div>
      <FormContainer>
        <StyledForm onSubmit={handleSearchSubmit}>
          <Input
            onChange={handleInput}
            type="search"
            placeholder="Search for a movie"
            value={title}
          />
          <SearchButton type="submit">Search</SearchButton>
        </StyledForm>
      </FormContainer>
      {isEmpty && <Message messageCode={'empty'} />}
    </div>
  );
};

export default SearchForm;
