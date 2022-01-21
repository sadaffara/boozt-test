import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/common/Loading";

const LandingPage = React.lazy(() => import("components/pages/landing-page"));
const StaticProductList = React.lazy(() =>
  import("components/pages/product-list-static")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/static-list" element={<StaticProductList />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
