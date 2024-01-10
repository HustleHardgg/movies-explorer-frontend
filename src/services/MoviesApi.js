import { MOVIES_API_URL } from "../constants/AppConstants"

export function getMovies(data) {
    return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((res) => {
        if (res.status >= 400) {
            return Promise.reject(res.json())
        }
        return res.json()
    }).catch(err => {
        return Promise.reject(err)
    })
}