import instance from "./instance";

export const getCategories = () => {
    const url = '/categories';
    return instance.get(url)
}

export const readCategory = (slug) => {
    const url = `/category/${slug}`;
    return instance.get(url)
}

export const createCategory = (category) => {
    const url = '/category';
    return instance.post(url, category)
}

export const updateCategory = (category) => {
    const url = `/category/${category.slug}`;
    return instance.put(url, category)
}

export const removeCategory = (slug) => {
    const url = `/category/${slug}`;
    return instance.delete(url)
}
