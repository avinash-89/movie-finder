import { useNavigate } from "react-router-dom";

function useRedirectTo() {
  const navigate = useNavigate();

  const redirectTo = (redirectionUrl, redirectAfterMs) => {
    if (!redirectionUrl) return;

    if (redirectAfterMs) {
      setTimeout(() => {
        navigate(redirectionUrl);
      }, redirectAfterMs);
    } else {
      navigate(redirectionUrl);
    }
  };

  return { redirectTo };
}

export default useRedirectTo;
