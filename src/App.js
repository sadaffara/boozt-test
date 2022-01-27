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
};

export default App;
