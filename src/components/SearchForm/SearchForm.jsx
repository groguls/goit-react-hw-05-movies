import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title') ?? '';

  const handleInput = evt => {
    setSearchParams(evt.target.value ? { title: evt.target.value } : {});
  };

  const handleSearchSubmit = evt => {
    evt.preventDefault();
    if (!title) {
      console.log('Empty string!!!');
      return;
    }
    onSubmit(title);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input onChange={handleInput} type="text" value={title} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
