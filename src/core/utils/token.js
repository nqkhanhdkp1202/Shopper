const TOKEN_NAME = 'token'
const USER_NAME = 'user'

export const setToken = (data) => {
    localStorage.setItem(TOKEN_NAME, JSON.stringify(data))
}

export const getToken = () => {
    let token = localStorage.getItem(TOKEN_NAME)
    if(token) {
        return JSON.parse(token)
    }
}

export const clearToken = () => {
    localStorage.removeItem(TOKEN_NAME)
}

export const setUser = (data) => {
localStorage.setItem(USER_NAME, JSON.stringify(data))
}

export const getUser = () => {
    let user = localStorage.getItem(USER_NAME)
    if(user) {
        return JSON.parse(user)
    }
}

export const clearUser = () => {
    localStorage.removeItem(USER_NAME)
}