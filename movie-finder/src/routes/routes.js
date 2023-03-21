import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound/notFound";
import Home from "../screens/home/home";
import InValidUser from "../screens/inValidUser/inValidUser";
import Landing from "../screens/landing/landing";
import Register from "../screens/register/register";
import UserDetails from "../screens/userDetails/userDetails";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:uId/home" element={<Home />} />
        <Route path="/user/:uId/search" element={<></>} />
        <Route path="/invalidUser" element={<InValidUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
