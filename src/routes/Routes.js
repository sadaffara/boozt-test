import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Loading from "components/common/Loading";

const LandingPage = React.lazy(() => import("components/pages/landing-page"));
// const DynamicProductList = React.lazy(() => import("components/pages/landing-page"));
// const StaticProductList = React.lazy(() => import("components/pages/landing-page"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route path="/" element={<LandingPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
