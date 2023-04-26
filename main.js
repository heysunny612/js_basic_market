import { getProductSection } from './module/productSection.js';
import { fetchSectionListData } from './module/fetch.js';

try {
  const sectionDataList = await fetchSectionListData();
  console.log(sectionDataList);

  sectionDataList.forEach((dataList) => {
    const { sectionTitle, productList } = dataList;
    const $productSection = getProductSection(sectionTitle, productList);
    document.body.appendChild($productSection);
  });
} catch (error) {
  console.log(error);
}
