export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

const requestMovies = () => ({ // action creator que retorna um objeto, que você tem feito até então
  type: REQUEST_MOVIES});

const receiveMovies = (movies) => ({ // outro action creator que retorna um objeto, que você tem feito até então
  type: RECEIVE_MOVIES,
  movies});

export function fetchMovies() { // action creator que retorna uma função, possível por conta do pacote redux-thunk
  return (dispatch) => { // thunk declarado
    dispatch(requestMovies());
    return fetch('some API endpoint irrelevant for our purposes now')
      .then((response) => response.json())
      .then((movies) => dispatch(receiveMovies(movies)));
  };
}