import { getProductList } from './module/productList.js';
import { fetchSectionListData } from './module/fetch.js';
import { setButtonEvent } from './module/productFilter.js';
import { setFilterEvent } from './module/productFilter.js';

const $productListSection = document.querySelector('.product-list-section');

const sectionDataList = await fetchSectionListData();
const productList = sectionDataList.reduce(
  (prev, curr) => [...prev, ...curr.productList],
  []
);
const $productSection = getProductList(productList);
$productListSection.appendChild($productSection);

setFilterEvent();
setButtonEvent(productList);
