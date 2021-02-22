import axios from 'axios';
const BASE_URL = "https://yts-proxy.now.sh/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const { data } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return data.data.movies;
};

export const getMovie = async id => {
  const { data } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return data.data.movie;
};

export const getSuggestions = async id => {
  const { data } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return data.data.movies;
};