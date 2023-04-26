import { makeDOMwithProperties } from '../utils/dom.js';
import { getProductList } from './productList.js';

const MAX_PRICE = Number.MAX_VALUE;

const $minPriceFilter = document.querySelector('#price-min-filter');
const $maxPriceFilter = document.querySelector('#price-max-filter');
const $discountFilter = document.querySelector('#discount-filter');
const $btnFilter = document.querySelector('#filter-btn');

const convertPriceToNumber = (originalPrice) => {
  const formattedString = String(originalPrice)
    .replace('원', '')
    .replace(',', '');
  const formattedNumber = Number(formattedString);
  return isNaN(formattedNumber) ? 0 : formattedNumber;
};

const formatToPrice = (event) => {
  const value = event.target.value;
  const result = Number(value);
  if (isNaN(result)) {
    alert('숫자를 입력해주세요');
  }

  event.target.value = `${result.toLocaleString()}원`;
};

const convertPercentToNumber = (originalValue) => {
  const formattedString = String(originalValue).replace('%', '');
  const formattedNumber = Number(formattedString);
  return isNaN(formattedNumber) ? 0 : formattedNumber;
};

export const setButtonEvent = (productList) => {
  $btnFilter.onclick = () => {
    const minPrice = convertPriceToNumber($minPriceFilter.value) || 0;
    const maxPrice = convertPriceToNumber($maxPriceFilter.value) || MAX_PRICE;
    const discountRate = convertPercentToNumber($discountFilter.value) || 0;

    const newProductList = productList.filter((product) => {
      const { price, discountPercent } = product;
      return (
        price >= minPrice &&
        price <= maxPrice &&
        discountRate <= discountPercent
      );
    });

    const sectionDOM = document.querySelector('.product-list-section');
    const orginalSectionDOM = document.querySelector('.product-list-con');
    sectionDOM.removeChild(orginalSectionDOM);

    if (newProductList.length > 0) {
      const productListDOM = getProductList(newProductList);
      sectionDOM.appendChild(productListDOM);
    } else {
      const $emptyProductListDOM = makeDOMwithProperties('div', {
        className: '.product-list-section empty',
        innerText: '조건에 해당하는 상품이 없습니다 ',
      });
      sectionDOM.appendChild($emptyProductListDOM);
    }
  };
};

export const setFilterEvent = () => {
  $minPriceFilter.onfocus = (event) => {
    event.target.value = convertPriceToNumber(event.target.value);
  };
  $minPriceFilter.onblur = formatToPrice;

  $maxPriceFilter.onfocus = (event) => {
    event.target.value = convertPriceToNumber(event.target.value);
  };
  $maxPriceFilter.onblur = formatToPrice;

  $discountFilter.onfocus = (event) => {
    event.target.value = convertPercentToNumber(event.target.value);
  };
  $discountFilter.onblur = (event) => {
    const value = event.target.value;
    const result = Number(value);
    if (isNaN(result)) {
      alert('숫자를 입력해주세요');
      event.target.value = 0;
      return;
    }
    if (result > 100 || result < 0) {
      alert('0이상 100이하의 숫자를 입력해주세요');
      event.target.value = 0;
      return;
    }
    event.target.value = `${result}%`;
  };
};
