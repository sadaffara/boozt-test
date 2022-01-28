import { TotalItemCount } from "assets/constants/DefaultValues";

const handlePaging = (_pageNumber, _pageSize, data) => {
  let allData = data;
  let currentIndex = (_pageNumber - 1) * _pageSize;
  let endIndex = currentIndex + _pageSize;
  let pageData = allData.slice(currentIndex, endIndex);
  let paginationData = {
    pageData,
    startIndex: currentIndex,
    endIndex,
    totalPage: Math.trunc(TotalItemCount / _pageSize),
  };
  return paginationData;
};
export default handlePaging;
