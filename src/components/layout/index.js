import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";

function MainLayout() {
  return (
    <div className="background--color">
      <TopNav />
      <div className="mt-0">
        <div className="content--pos mt-3">
          <div className="mr-4 ml-4">
            <AppRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
