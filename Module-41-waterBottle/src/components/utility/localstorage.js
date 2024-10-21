const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
};

const saveCartToLS = (cart) => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
};

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
};

export { addToLS, getStoredCart };

/**
 * localStorage.setItem('cart', [])
 * localStorage.setItem('cart', JSON.stringify([]));
 * 
 * localStorage.getItem('cart');
 * localStorage.removeItem('cart');
 */
