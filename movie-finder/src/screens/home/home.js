import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FlushList from "../../components/FlushList/FlushList";
import NavBar from "../../components/NavBar/NavBar";
import useRedirectTo from "../../hooks/useRedirectTo/useRedirectTo";
import { isUserIdPresentInDB } from "../../utilites/userData";

const Home = () => {
  const { uId } = useParams();
  const { redirectTo } = useRedirectTo();
  const menuList = [
    {
      name: "Search",
      redirectUrl: `/user/${uId}/search`,
    },
    { name: "Favourties", redirectUrl: `/user/${uId}/favourites` },
    { name: "My Account", redirectUrl: `/user/${uId}/account` },
  ];
  useEffect(() => {
    if (!isUserIdPresentInDB(uId)) {
      redirectTo("/invalidUser");
    }
  }, []);

  const Menu = () => {
    return (
      <div className="justify-content-center d-flex text-center">
        <FlushList lists={menuList} />
      </div>
    );
  };

  return (
    <>
      <NavBar brandName={"Movies Finder"} />
      <Menu />
    </>
  );
};

export default Home;
