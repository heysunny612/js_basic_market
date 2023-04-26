import { getProductList } from './module/productList.js';
import { getCartData } from './module/cartToggleButton.js';
import { makeDOMwithProperties } from './utils/dom.js';
import { CART_COOKIE_KEY } from './constants/cart.js';
import { setPayInfo } from './module/payModule.js';

const $section = document.querySelector('.section-cart');
const $cartPayCon = document.querySelector('#cart-pay-container');
const savedCartList = getCartData();
const reloadPage = () => location.reload();

if (savedCartList.length < 1) {
  const noCartDOM = makeDOMwithProperties('div', {
    className: 'product-list-con',
    innerText: '장바구니에 상품이 없습니다.',
  });
  $section.insertBefore(noCartDOM, $cartPayCon);
} else {
  const $productListCon = getProductList(savedCartList, reloadPage);
  $section.insertBefore($productListCon, $cartPayCon);
}

const $cartRemoveAllBtn = document.querySelector('#remove-all-button');
$cartRemoveAllBtn.addEventListener('click', () => {
  localStorage.removeItem(CART_COOKIE_KEY);
  reloadPage();
});

setPayInfo();
