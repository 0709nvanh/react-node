import instance from "./instance";

export const getProduct = () => {
    const url = '/products'
    return instance.get(url)
}

export const removeProduct = (slug) => {
    const url = `/product/${slug}`;
    return instance.delete(url)
}

export const createProduct = (product) => {
    const url = '/product';
    return instance.post(url, product)
}

export const readProduct = (slug) => {
    const url = `/product/${slug}`;
    return instance.get(url)
}

export const updateProduct = (product) => {
    const url = `/product/${product.slug}`;
    return instance.put(url, product)
}

export const limitProduct = (limit) => {
    const url = `/products?limit=${limit}`
    return instance.get(url)
}

export const getRelatedCate = (cateId) => {
    const url = `/products?cateId=${cateId}`
    return instance.get(url)
}

export const sortByPrice = (sortByPrice) => {
    const url = `/product?sortByPrice=${sortByPrice}`
    return instance.get(url)
}