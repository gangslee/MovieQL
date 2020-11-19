let movies = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 1,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 2,
    name: 'The Godfather I',
    score: 99,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
