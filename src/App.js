import AppRoutes from "routes/Routes";
import "assets/css/sass/main.scss";

const App = () => {
  return (
    <div className="App">
      <div className="background--color">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
