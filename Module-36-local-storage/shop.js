const addProduct = () => {
  const productName = document.getElementsByClassName('product-name')[0];
  const productQuantity =
    document.getElementsByClassName('product-quantity')[0];
  const addToCart = document.getElementById('add-cart');
  const nameValue = productName.value;
  const quantityValue = productQuantity.value;

  productName.value = '';
  productQuantity.value = '';

  displayProduct(nameValue, quantityValue);
};

const displayProduct = (nameValue, quantityValue) => {
  const ulContainer = document.getElementsByClassName('list-item')[0];
  const createLi = document.createElement('li');
  createLi.textContent = `${nameValue}: ${quantityValue}`;

  ulContainer.appendChild(createLi);
};
