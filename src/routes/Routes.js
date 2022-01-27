import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/common/Loading";

const StaticProductList = React.lazy(() =>
  import("components/pages/product-list-static")
);

const AppRoutes = () => {
  console.log("routes");
  return (
    <Suspense fallback={<Loading />}>
      <Routes basename="/boozt-test">
        <Route path="/boozt-test" element={<StaticProductList />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
