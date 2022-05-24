let cart = []

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct) => {
    // console.log('new product', newProduct)
    const existProduct = cart.find(item => item._id === newProduct._id)
    console.log('exist', existProduct)
    if(!existProduct){
        cart.push(newProduct)
    } else{
        existProduct.quantityProduct += +newProduct.quantityProduct
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const increaseQuantity = (id) => {
    cart.find(item => item._id === id).quantityProduct++
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const decreaseQuantity = (id) => {
    const CurrentProduct = cart.find(item => item._id === id);
    CurrentProduct.quantityProduct--;
    if(CurrentProduct.quantityProduct<1){
        if(window.confirm("Bạn muốn xóa hay không?")){
            cart = cart.filter(item => item.id != id);
        } else {
            CurrentProduct.quantityProduct = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}


export const removeProduct = (id) => {
    if(window.confirm("Bạn muốn xóa hay không?")){
        cart = cart.filter(item => item._id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}