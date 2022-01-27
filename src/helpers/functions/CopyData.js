import { data } from "assets/data/productList";

const copyData = () => {
  return [
    ...data.map((item) => {
      return { ...item };
    }),
  ];
};

export default copyData;
