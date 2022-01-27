const createItems = (_pageNumber, _pageSize, data) => {
  let allData = data;
  let currentIndex = (_pageNumber - 1) * _pageSize;
  let pageData = allData.slice(currentIndex, currentIndex + _pageSize);

  return pageData;
};
export default createItems;
