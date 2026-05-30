import api from "./common-api"

export const getPosts = ()=>{
    return api.get('/posts')
}