import { makeDOMwithProperties } from '../utils/dom.js';
import { getProductCard } from './productCard.js';

export const getProductList = (productDataList) => {
  if (productDataList == null || !Array.isArray(productDataList)) return;

  const $prodictListCon = makeDOMwithProperties('div', {
    className: 'product-list-con',
  });

  productDataList.forEach((productData) => {
    const { id, imgSrc, name, discountPercent, price, originalPrice } =
      productData;
    $prodictListCon.appendChild(
      getProductCard({
        id,
        imgSrc,
        name,
        discountPercent,
        price,
        originalPrice,
      })
    );
  });

  return $prodictListCon;
};
