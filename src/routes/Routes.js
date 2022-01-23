import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/common/Loading";

const StaticProductList = React.lazy(() =>
  import("components/pages/product-list-static")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<StaticProductList />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
