import { TotalItemCount } from "assets/constants/DefaultValues";

const handlePaging = (_pageNumber, _pageSize, data) => {
  let allData = data;
  let currentIndex = (_pageNumber - 1) * _pageSize;
  let endIndex = currentIndex + _pageSize;
  let pageData = allData.slice(currentIndex, endIndex);
  let totalPage = 0;
  if (TotalItemCount % _pageSize === 0) {
    totalPage = TotalItemCount / _pageSize;
  } else {
    totalPage = 1 + Math.trunc(TotalItemCount / _pageSize);
  }
  if (endIndex > TotalItemCount) {
    endIndex = TotalItemCount;
  }
  let paginationData = {
    pageData,
    startIndex: currentIndex,
    endIndex,
    totalPage,
  };
  return paginationData;
};
export default handlePaging;
