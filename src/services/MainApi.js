import { API_URL, TOKEN } from "../constants/AppConstants"

export function signIn(data) {
    return fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status >= 400) {
            return Promise.reject(res.json())
        }
        return res.json()
    }).catch(err => {
        return Promise.reject(err)
    })
}

export function singUp(data) {
    return fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status >= 400) {
            return Promise.reject(res.json())
        }
        return res.json()
    }).catch(err => {
        return Promise.reject(err)
    })
}

export function getUser() {
    return fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
            'Accept': 'application/json'
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

export function updateUser(data) {
    return fetch(`${API_URL}/users/me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
        },
        body: JSON.stringify(data)
    })
}