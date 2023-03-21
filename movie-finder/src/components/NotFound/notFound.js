import React from "react";
import useRedirectTo from "../../hooks/useRedirectTo/useRedirectTo";
import "./notFound.css";

const NotFound = () => {
  const { redirectTo } = useRedirectTo();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h2>Page not found!</h2>
      <p>
        Go to{" "}
        <span
          className={`text-primary cursorPointer`}
          onClick={() => {
            redirectTo("/");
          }}
        >
          Home
        </span>
      </p>
    </div>
  );
};

export default NotFound;
