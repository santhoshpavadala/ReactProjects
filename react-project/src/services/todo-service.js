import api from "./common-api"

export const getTodos = ()=>{
    return api.get('/todos')
}