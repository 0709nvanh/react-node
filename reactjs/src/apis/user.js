import instance from "./instance";

export const getUsers = () => {
    const url = '/users'
    return instance.get(url)
}

export const readUser = (id) => {
    const url = `/user/${id}`
    return instance.get(url)
}

export const removeUser = (id) => {
    const url = `/user/${id}`
    return instance.delete(url)
}