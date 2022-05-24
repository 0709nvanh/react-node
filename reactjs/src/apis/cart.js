import instance from "./instance";

// export const addCart = (cart) => {
//     const url = '/cart',
//     return instance.post(url, cart)
// }

export const getCarts = () => {
    const url = '/carts'
    return instance.get(url)
}

export const removeCart = (id) => {
    const url = `/cart/${id}`
    return instance.delete(url)
}

export const readCart = (id) => {
    const url = `/cart/${id}`
    return instance.get(url)
}