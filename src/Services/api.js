import axios from 'axios'

const api = axios.create({
    baseURL: "http://api.facebook.com/users"
    // baseURL: "http://api.instagram.com/users"
    // baseURL: "http://api.youtube.com/users"
    
})

export default api