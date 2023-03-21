import React from "react";
import Redirect from "../../components/Redirect/redirect";

const Landing = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Redirect
        title="Welcome to Movies Finder"
        text="To continue"
        redirectionText="tap here"
        redirectionUrl="/register"
      />
    </div>
  );
};

export default Landing;
