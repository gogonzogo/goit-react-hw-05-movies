import css from './Movies.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useState } from 'react';
import { useTmdbData } from 'hooks/useTmdbData';
import MovieGallery from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const [userInput, setUserInput] = useState('');
  const { data, isLoading, error } = useTmdbData('search', userInput);

  const handleSubmit = userInput => {
    if (!userInput) {
      return;
    }
    setUserInput(userInput);
  };

  return (
    <div className={css.movieSearchContainer}>
      <SearchForm onSubmit={handleSubmit} />
      {!error ? (
        <>
          <MovieGallery movies={data} isLoading={isLoading} />{' '}
        </>
      ) : (
        <h1>No movies match search</h1>
      )}
    </div>
  );
};

export default Movies;