let cart = []

if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct) => {
    const existProduct = cart.find(item => item.id === newProduct.id)
    if(existProduct){
        cart.push(newProduct)
    } else{
        existProduct.quantity += +newProduct.quantity
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const increaseQuantity = (id) => {
    cart.find(item => item.id === id).quantity++
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const decreaseQuantity = (id) => {
    const CurrentProduct = cart.find(item => item.id === id);
    CurrentProduct.quantity--;
    if(CurrentProduct.quantity<1){
        if(window.confirm("Bạn muốn xóa hay không?")){
            cart = cart.filter(item => item.id != id);
        } else {
            CurrentProduct.quantity = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}


export const removeProduct = (id) => {
    if(window.confirm("Bạn muốn xóa hay không?")){
        cart = cart.filter(item => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}