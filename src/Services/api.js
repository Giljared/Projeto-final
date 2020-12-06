import axios from 'axios'

const api = axios.create({
    baseURL: "http://api.facebook.com/users"
    })

export default api