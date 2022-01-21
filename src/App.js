import "assets/css/sass/main.scss";
import Layout from "components/layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="h-100">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div className="App">
  //     <TopNav />

  //     <div className="background--color mt-4 content--pos mt-1 container-fluid">
  //       <AppRoutes />
  //     </div>
  //   </div>
  // );
};

export default App;
