const addProduct = () => {
  const productName = document.getElementsByClassName('product-name')[0];
  const productQuantity =
    document.getElementsByClassName('product-quantity')[0];
  // const addToCart = document.getElementById('add-cart');
  const nameValue = productName.value;
  const quantityValue = productQuantity.value;

  productName.value = '';
  productQuantity.value = '';

  displayProduct(nameValue, quantityValue);
  saveProductsLocalStorage(nameValue, quantityValue);
};

const displayProduct = (nameValue, quantityValue) => {
  const ulContainer = document.getElementsByClassName('list-item')[0];
  const createLi = document.createElement('li');
  createLi.textContent = `${nameValue}: ${quantityValue}`;

  ulContainer.appendChild(createLi);
};

const getShoppingCart = () => {
  let cart = {};
  const storeCard = localStorage.getItem('cart');
  if (storeCard) {
    cart = JSON.parse(storeCard);
  }
  return cart;
};

const saveProductsLocalStorage = (nameValue, quantityValue) => {
  const cart = getShoppingCart();
  cart[nameValue] = quantityValue;

  const cartStringify = JSON.stringify(cart);
  // console.log(cartStringify);
  localStorage.setItem('cart', cartStringify);
};

const productFromLocalStorage = () => {
  const saveCart = getShoppingCart();
  // console.log(saveCart);
  for (const item in saveCart) {
    const quantity = saveCart[item];
    console.log(item, quantity);
    displayProduct(item, quantity);
  }
};

productFromLocalStorage();
