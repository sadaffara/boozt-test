const createItems = (_pageNumber, _pageSize, data) => {
  let allData = data;
  let currentIndex = (_pageNumber - 1) * _pageSize;
  let pageData = allData.slice(currentIndex, currentIndex + _pageSize);
  let _items = [];
  pageData.map((item) =>
    _items.push({
      index: item.index,
      id: item.id,
      name: item.product_name || item.name,
      brand: item.brand_name || item.brand,
      price: item.base_price || item.price,
      image: item.filename || item.image,
    })
  );
  return _items;
};
export default createItems;
