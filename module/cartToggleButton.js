import { CART_COOKIE_KEY } from '../constants/cart.js';
import { makeDOMwithProperties } from '../utils/dom.js';

const addCartInfo = (productData) => {
  const savedCartData = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

  if (
    // 같은 값이 있다면 리턴
    savedCartData.findIndex((cardData) => cardData.id === productData.id) !== -1
  )
    return;
  localStorage.setItem(
    CART_COOKIE_KEY,
    JSON.stringify([...savedCartData, productData])
  );
};

export const getCartToggleBtn = (productData) => {
  const $cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      addCartInfo(productData);
    },
  });
  const $cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: 'public/assets/cart.png',
  });
  $cartToggleBtn.appendChild($cartImage);

  return $cartToggleBtn;
};
