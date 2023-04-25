import { getProductCard } from './module/productCard.js';

const $productListCon = document.querySelector('.product-list-con');

const $productCard = getProductCard({
  id: 1,
  imgSrc: '../public/assets/파프리카.jpg',
  name: '파프리카 2입',
  discountPercent: 20,
  price: 2000,
  originalPrice: 2500,
});

const $productCard2 = getProductCard({
  id: 2,
  imgSrc: '../public/assets/당근.jpg',
  name: '친환경 당근 400g',
  discountPercent: 33,
  price: 2000,
  originalPrice: 3000,
});

$productListCon.appendChild($productCard);
$productListCon.appendChild($productCard2);
