import data from "assets/data/productList.json";
import { SortModes } from "assets/constants/DefaultValues";

export const sortItems = (asc, _pageSize) => {
  let _items = [];
  data.map((item) =>
    _items.push({
      index: item.index,
      id: item.id,
      name: item.product_name,
      brand: item.brand_name,
      price: item.base_price,
      image: item.filename,
    })
  );
  _items.sort((a, b) => {
    if (asc === "Asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  // setSortedData(_items);
  // _items = _items.slice(0, _pageSize);
  // setSortMode(false);
  // console.log("sorted items", _items);
  return _items;
};

export const findSortModeName = (type) => {
  for (let i = 0; i <= SortModes.length; i++) {
    if (type === SortModes[i].type) {
      return SortModes.name;
    }
  }
};
