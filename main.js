import { getProductSection } from './module/productSection.js';

try {
  const response = await fetch('./public/mock/sectionListData.json');
  const data = await response.json();
  const sectionDataList = data.sectionDataList;

  sectionDataList.forEach((dataList) => {
    const { sectionTitle, productList } = dataList;
    const $productSection = getProductSection(sectionTitle, productList);
    document.body.appendChild($productSection);
  });
} catch (error) {
  console.log(error);
}
