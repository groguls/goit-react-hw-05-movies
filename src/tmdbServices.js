import axios from 'axios';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjY5OTM4NGMzOTlmNGZjZDNkYTVmM2E1MzNiZGMyNiIsInN1YiI6IjY0ZmY2NzYxNmEyMjI3MDExYTdhMWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TukH43MgEkbktiSxVcihiwHhw9PdiX1gSPFV4DAl77M';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const fetchTrendingMovies = async signal => {
  const fetchOptions = {
    signal,
  };
  const { data } = await axios.get('/3/trending/movie/day', fetchOptions);
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

export const fetchMovieReviews = async (movieId, signal, page) => {
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
