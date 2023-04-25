import { appendChidrenList, makeDOMwithProperties } from '../utils/dom.js';
import { getProductList } from './productList.js';

export const getProductSection = (sectionName, productDataList) => {
  const $productListSection = makeDOMwithProperties('section', {
    className: 'product-list-section',
  });
  const $sectionTitle = makeDOMwithProperties('div', {
    className: 'section-title',
  });
  const $sectionTitleHighlight = makeDOMwithProperties('span', {
    className: 'section-title-highlight',
  });
  const $sectionTitleName = makeDOMwithProperties('span', {
    innerText: sectionName,
  });

  appendChidrenList($sectionTitle, [$sectionTitleHighlight, $sectionTitleName]);
  const $productListContainer = getProductList(productDataList);
  appendChidrenList($productListSection, [
    $sectionTitle,
    $productListContainer,
  ]);

  return $productListSection;
};
