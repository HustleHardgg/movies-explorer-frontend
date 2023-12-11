import { BASE_URL } from '../utils/const';

export default function reqResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res.status}`)
}

export function getUser() {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then(reqResponse);
}

export function setUpdateUserInfo(name, email) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      email,
    })
  })
    .then(reqResponse)
}

export function getSavedMovies() {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then(reqResponse);
}

export function saveMovie(data) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
    .then(reqResponse)
}

export function deleteMovie(movieId) {
  const token = localStorage.getItem('jwt');
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then(reqResponse);
}