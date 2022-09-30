import api from "../config/api"
const authServices = {
    login(data) {
        return api.post('/login', data)
    },
    refreshToken(data) {
        return api.post('/refresh-token', data)
    }
}