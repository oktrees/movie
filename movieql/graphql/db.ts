
export let movies = [
  {
    id: 0,
    name: 'Nicolas',
    score: 1,
  },
  {
    id: 1,
    name: 'oktree',
    score: 18, 
  },
  {
    id: 2,
    name: 'bom',
    score: 99,
  },
  {
    id: 3,
    name: 'cha',
    score: 2,
  }
]

export const getMovies = () => movies;

export const getById = id => {
  const fileterdPeople = movies.filter(movie => movie.id === id);
  return fileterdPeople[0];
}

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: Number(`${movies.length + 1}`),
    name,
    score,
  };
  movies.push(newMovie);

  return newMovie;
}
