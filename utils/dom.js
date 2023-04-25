export const makeDOMwithProperties = (domType, propertiyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertiyMap).map((key) => {
    dom[key] = propertiyMap[key];
  });
  return dom;
};

export const appendChidrenList = (parentNode, chidrenList) => {
  if (!Array.isArray(chidrenList)) return;
  chidrenList.forEach((chidren) => {
    parentNode.appendChild(chidren);
  });
};
