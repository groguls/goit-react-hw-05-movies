import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjY5OTM4NGMzOTlmNGZjZDNkYTVmM2E1MzNiZGMyNiIsInN1YiI6IjY0ZmY2NzYxNmEyMjI3MDExYTdhMWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TukH43MgEkbktiSxVcihiwHhw9PdiX1gSPFV4DAl77M';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchTrendingMovies = async signal => {
  const fetchOptions = {
    signal,
  };
  const { data } = await axios.get(
    '/3/trending/movie/day?language=en-US',
    fetchOptions
  );
  return data;
};

export const fetchMoviesSearched = async (query, page, signal) => {
  const fetchOptions = {
    signal,
    params: {
      query: query,
      include_adult: false,
      language: 'en-US',
      page,
    },
  };
  const { data } = await axios.get(`/3/search/movie`, fetchOptions);
  return data;
};

export const fetchMovieDetails = async (movieId, signal) => {
  const fetchOptions = {
    signal,
    params: {
      language: 'en-US',
    },
  };
  const { data } = await axios.get(`/3/movie/${movieId}`, fetchOptions);
  return data;
};

export const fetchMovieCredits = async (movieId, signal) => {
  const fetchOptions = {
    signal,
    params: {
      language: 'en-US',
    },
  };
  const { data } = await axios.get(`/3/movie/${movieId}/credits`, fetchOptions);
  return data;
};

export const fetchMovieReviews = async (movieId, signal, page = 1) => {
  const fetchOptions = {
    signal,
    params: {
      language: 'en-US',
      page,
    },
  };
  const { data } = await axios.get(`/3/movie/${movieId}/reviews`, fetchOptions);
  return data;
};

// Trending: 'https://api.themoviedb.org/3/trending/movie/{time_window}'
// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

// Movie : 'https://api.themoviedb.org/3/search/movie'
// '/3/search/movie?query=lion%20king&include_adult=false&language=en-US&page=1'

// Details: 'https://api.themoviedb.org/3/movie/{movie_id}'
// '/3/movie/8587?language=en-US'

// Credits: 'https://api.themoviedb.org/3/movie/{movie_id}/credits'
// 'https://api.themoviedb.org/3/movie/8587/credits?language=en-US'

// Reviews: 'https://api.themoviedb.org/3/movie/{movie_id}/reviews'
// 'https://api.themoviedb.org/3/movie/8587/reviews?language=en-US&page=1'
