import React, { useEffect, useState } from "react";
import useRedirectTo from "../../hooks/useRedirectTo/useRedirectTo";
import { debounce, hasNullOrUndefined } from "../../utilites/utils";
import "./register.css";
import { isUserIdPresentInDB, storeUserDetails } from "../../utilites/userData";

const Register = () => {
  const { redirectTo } = useRedirectTo();
  const [toastMessage, setToastMessage] = useState("");
  const [userRegisterDetails, setUserRegisterDetails] = useState({
    name: "",
    userId: "",
    email: "",
    password: "",
  });
  const [inputErrors, setInputErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    setInputErrors({ ...inputErrors, name: "" });
  }

  function validateInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newErrors = { ...inputErrors };
    if (value.trim() === "") {
      newErrors[name] = `${name} is mandatory`;
    } else {
      newErrors[name] = "";
    }
    setInputErrors(newErrors);
  }

  function handleOnRegister(event) {
    event.preventDefault();
    
    if (!hasNullOrUndefined(inputErrors)) {
      setToastMessage("Please enter valid input fields");
      setTimeout(() => setToastMessage(""), 2000);
    } else if (!isUserIdPresentInDB(userRegisterDetails.userId)) {
      const uId = userRegisterDetails.userId;
      storeUserDetails({ [uId]: userRegisterDetails });
      redirectTo(`/user/${uId}/home`);
    } else {
      setToastMessage("UserId already exits, please select a new one");
      setTimeout(() => setToastMessage(""), 2000);
    }
  }

  return (
    <section className="vh-100 bg-img">
      <div className=" d-flex align-items-center gradient-custom-3 justify-content-center h-100">
        <div className="p-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="p-3">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>

              <form>
                <div className="mb-2">
                  <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    value={userRegisterDetails.name}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    required
                  />
                  {inputErrors.name && !userRegisterDetails.name && (
                    <label className="form-label text-danger">
                      {inputErrors.name}
                    </label>
                  )}
                </div>

                <div className="mb-2">
                  <input
                    autoComplete="off"
                    type="text"
                    name="userId"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    placeholder="Unique Id"
                    value={userRegisterDetails.userId}
                    onChange={(e) =>
                      debounce(
                        setUserRegisterDetails({
                          ...userRegisterDetails,
                          userId: e.target.value,
                        })
                      )
                    }
                    onBlur={validateInput}
                    required
                  />
                  {inputErrors.userId && !userRegisterDetails.userId && (
                    <label className="form-label text-danger">
                      {inputErrors.userId}
                    </label>
                  )}
                </div>

                <div className="mb-2">
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={userRegisterDetails.email}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    required
                  />
                  {inputErrors.email && !userRegisterDetails.email && (
                    <label className="form-label text-danger">
                      {inputErrors.email}
                    </label>
                  )}
                </div>

                <div className="mb-5">
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={userRegisterDetails.password}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    required
                  />
                  {inputErrors.password && !userRegisterDetails.password && (
                    <label className="form-label text-danger">
                      {inputErrors.password}
                    </label>
                  )}
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    onClick={handleOnRegister}
                  >
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-3 mb-0">
                  Have already an account?{" "}
                  <a href="#!" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
              </form>
            </div>
            {toastMessage && (
              <p className="text-bg-warning border-radius-15 fw-bold text-center position-fixed bottom-0 p-3">
                {toastMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
