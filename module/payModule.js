import { getCartData } from './cartToggleButton.js';
import { DELIVERY_FREE_PRICE, DELIVERY_PRICE } from '../constants/cart.js';

const savedCartList = getCartData();
const $originalPrice = document.querySelector('#original-price');
const $discountPrice = document.querySelector('#discount-price');
const $deliveryPrice = document.querySelector('#delivery-price');
const $totalPrice = document.querySelector('#total-price');
const $deliveryDescription = document.querySelector('#delivery-description');

export const setPayInfo = () => {
  const price = savedCartList.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  const originalPrice = savedCartList.reduce((prev, curr) => {
    return prev + curr.originalPrice;
  }, 0);

  const deliveryPrice = price >= DELIVERY_FREE_PRICE ? 0 : DELIVERY_PRICE;

  $originalPrice.innerText = `${originalPrice.toLocaleString()}`;
  $discountPrice.innerText = `${(price - originalPrice).toLocaleString()}`;
  $deliveryPrice.innerText = `${deliveryPrice.toLocaleString()}`;
  $totalPrice.innerText = `${(price + deliveryPrice).toLocaleString()}`;
  $deliveryDescription.innerText = `${DELIVERY_FREE_PRICE}원 이상 주문 시 무료배송`;

  //forEach를 사용할 경우
  // let price2 = 0;
  // let originalPrice2 = 0;
  // savedCartList.forEach((cartList) => {
  //   price2 += cartList.price;
  //   originalPrice2 += cartList.originalPrice - cartList.price;
  // });
};
