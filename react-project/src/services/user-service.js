import api from "./common-api"

export const getUsers = ()=> {
    return api.get('/users')
}