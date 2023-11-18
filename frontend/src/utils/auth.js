const baseUrl = 'https://api.g1pno.students.nomoredomainsmonster.ru'

function getResponseData(res) {
    if (res.ok) {
      return Promise.resolve(res.json())
    }

    // Если ошибка пришла, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`)
}


export function auth(password, email) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
  .then(res => getResponseData(res))
}

export function authorization(password, email) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
  .then(res => getResponseData(res))
}

export function getUserData(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }})
    .then(res => getResponseData(res))
  }