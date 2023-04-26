import { CART_COOKIE_KEY } from '../constants/cart.js';
import { makeDOMwithProperties } from '../utils/dom.js';

export const getCartData = () =>
  JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

const isIncart = (id) => {
  //현재 해당 상품이 장바구니에 있는지를 판단하여 결과를 반환
  const savedCartData = getCartData();
  return !!savedCartData.find((cartData) => cartData.id === id);
};

const addCartInfo = (productData) => {
  const savedCartData = getCartData();

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

const removeCartInfo = (id) => {
  const savedCartData = getCartData();
  const newCartData = savedCartData.filter((cartData) => cartData.id !== id);
  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartData));
};

export const getCartToggleBtn = (productData, removeCartCallback) => {
  let inCart = isIncart(productData.id);
  const $cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      if (inCart) {
        //장바구니빼기
        if (!confirm(`장바구니에서 ${productData.name}을 삭제할까요?`)) return;
        removeCartInfo(productData.id);
        $cartImage.src = 'public/assets/cart.png';
        removeCartCallback?.();
      } else {
        // 장바구니 넣기
        addCartInfo(productData);
        $cartImage.src = 'public/assets/cartDisabled.png';
        if (confirm('장바구니에 추가되었습니다. 장바구니로 이동할까요?')) {
          location.href = 'cart.html';
        }
      }
      inCart = !inCart;
    },
  });
  const $cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: inCart ? 'public/assets/cartDisabled.png' : 'public/assets/cart.png',
  });
  $cartToggleBtn.appendChild($cartImage);

  return $cartToggleBtn;
};
