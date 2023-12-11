import { GET_BEATFILM_MOVIES } from '../utils/const';

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((data) => {
      throw data;
    });
  }
}

export function getMovies() {
  return fetch(`${GET_BEATFILM_MOVIES}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

