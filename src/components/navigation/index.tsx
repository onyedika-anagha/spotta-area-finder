import { Outlet } from "react-router-dom";
import Header from "./header";

const Navigation = () => {
  return (
    <>
      <Header />
      {/*END HEADER SECTION*/}
      <Outlet />
    </>
  );
};
export default Navigation;
