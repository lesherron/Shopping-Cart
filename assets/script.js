//Products array (empty)
const products = [];
//Three product objects
products.push(
  {
  name: "cherry",
  price: 3.00,
  quantity: 0,
  productId: 108,
  image: "./images/cherry.jpg"
  },
  {
  name: "orange",
  price: 2.50,
  quantity: 0,
  productId: 219,
  image: "./images/orange.jpg"
  },
  {
  name: "strawberry",
  price: 4.00,
  quantity: 0,
  productId: 320,
  image: "./images/strawberry.jpg"
  }
);
//Empty array cart
const cart = [];
//Add products to the cart
function addProductToCart(productId) {
  const product = products.find(p => p.productId === productId);
  if(product) {
    product.quantity += 1;
    if(!cart.includes(product)) {
      cart.push(product);
    }
  }
}
//Increase quantity
function increaseQuantity(productId) {
  const product = products.find(p => p.productId === productId);
  if(product) {
    product.quantity += 1;
  }
}
//Decrease quantity
function decreaseQuantity(productId) {
  const product = products.find(p => p.productId === productId);
  if(product && product.quantity > 0) {
    product.quantity -= 1;
    if (product.quantity === 0) {
      cart.splice(cart.indexOf(product), 1);
    }
  }
}
//Remove products from the cart
function removeProductFromCart(productId) {
  const product = products.find(p => p.productId === productId);
  if(product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    if(index !== -1) {
      cart.splice(index, 1);
    }
  }
}
//Get the cart total
function cartTotal() {
  return cart.reduce((total, product) =>  total + (product.price * product.quantity), 0);
}
//Empty the cart
function emptyCart() {
  cart.forEach(product => product.quantity = 0);
  cart = [];
}
//Get remining balance
let getRemainingBalance = 0;
//Pay for items in cart
function pay(amount) {
  const total = cartTotal();
  getRemainingBalance = amount - total;
  return getRemainingBalance;
}
//Remove all items from cart
function dropCart() {
  emptyCart();
}
//Change currency
function currency() {
  currencyBuilder();
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  currency
}