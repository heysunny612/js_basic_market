import { makeDOMwithProperties, appendChidrenList } from '../utils/dom.js';
import { getCartToggleBtn } from './cartToggleButton.js';

export const getProductCard = (productData, removeCartCallback) => {
  const { id, imgSrc, name, discountPercent, price, originalPrice } =
    productData;
  const $productCard = makeDOMwithProperties('div', {
    className: 'product-card',
  });
  // //---------PRODUCT IMAGE CONTAINER
  const $productImageCon = makeDOMwithProperties('div', {
    className: 'product-image-con',
  });
  const $productImage = makeDOMwithProperties('img', {
    src: imgSrc,
    alt: name,
  });

  const $cartToggleBtn = getCartToggleBtn(productData, removeCartCallback);

  // //---------PRODUCT DESCIPTION
  const $productDescription = makeDOMwithProperties('div', {
    className: 'product-description',
  });
  const $productName = makeDOMwithProperties('div', {
    className: 'product-name',
    innerText: `${id} ${name}`,
  });
  const $productPriceCon = makeDOMwithProperties('div', {
    className: 'product-price-con',
  });
  const $productDiscountPercent = makeDOMwithProperties('div', {
    className: 'product-discount-percent',
    innerText: `${discountPercent}%`,
  });
  const $productPrice = makeDOMwithProperties('div', {
    className: 'product-price',
    innerText: `${price.toLocaleString()}원`,
  });
  const $productOriginalPrice = makeDOMwithProperties('div', {
    className: 'product-original-price',
    innerText: `${originalPrice.toLocaleString()}원`,
  });

  appendChidrenList($productCard, [$productImageCon, $productDescription]);
  appendChidrenList($productImageCon, [$productImage, $cartToggleBtn]);

  appendChidrenList($productDescription, [
    $productName,
    $productPriceCon,
    $productOriginalPrice,
  ]);
  appendChidrenList($productPriceCon, [$productDiscountPercent, $productPrice]);

  return $productCard;
};
