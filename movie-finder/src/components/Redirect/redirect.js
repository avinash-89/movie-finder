import React from "react";
import useRedirectTo from "../../hooks/useRedirectTo/useRedirectTo";
import './redirect.css'

const Redirect = ({
  title,
  subTitle,
  text,
  redirectionText,
  redirectionUrl,
}) => {
  const { redirectTo } = useRedirectTo();
  const handleOnClick = () => {
    redirectTo(redirectionUrl);
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-center">
        {title && <h1 className="mb-3">{title}</h1>}
        {subTitle && <h3 className="mb-3">{subTitle}</h3>}
        {text && <p>{text}{'  '} {redirectionText && <span className="text-primary cursorPointer" onClick={handleOnClick}>{redirectionText}</span>}</p>}
      </div>
    </div>
  );
};

export default Redirect;
