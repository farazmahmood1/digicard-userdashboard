import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import Baseurl from "../SourceFiles/Baseurl";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fieldStatus, setFieldStatus] = useState(false);

  const signIn = () => {
    if (!name && !password) {
      toast.warning("Please fill all fields");
      setFieldStatus(true);
    } else if (name && !password) {
      toast.warning("Please enter your password");
    } else if (!name && password) {
      toast.warn("Please enter your email");
    } else {
      const userObj = {
        email: name,
        password: password,
      };
      axios
        .post(`${Baseurl}customerlogin`, userObj)
        .then((res) => {
          console.log(res.data.customer);
          toast.success("Logging In");

          localStorage.setItem("logIN", JSON.stringify(true));
          localStorage.setItem("password", JSON.stringify(password));
          localStorage.setItem("user", JSON.stringify(res.data.customer));
          setInterval(() => {
            window.location.reload(true);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.warn("Incorrect Credentials");
        });
    }
  };

  return (
    <div>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <b>Digi</b>CARD
            </a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <div>
                <div
                  className="mb-3 form-control formStyle d-flex"
                  style={{
                    borderColor:
                      name === "" && fieldStatus === true ? "red" : "#ced4da",
                  }}
                >
                  <input
                    type="email"
                    className="placeHolderStyle"
                    name="Username"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Email"
                  />
                  <span className="fas fa-envelope" />
                </div>
                <p>
                  {name === "" && fieldStatus === true ? (
                    <span className="text-danger">Input field is empty</span>
                  ) : (
                    ""
                  )}
                </p>

                <div
                  className="mb-3 form-control formStyle d-flex"
                  style={{
                    borderColor:
                      password === "" && fieldStatus === true
                        ? "red"
                        : "#ced4da",
                  }}
                >
                  <input
                    type="password"
                    className="placeHolderStyle"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="fas fa-lock" />
                </div>
                <p>
                  {password === "" && fieldStatus === true ? (
                    <span className="text-danger">Input field is empty</span>
                  ) : (
                    ""
                  )}
                </p>

                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-secondary btn-block"
                      onClick={signIn}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              {/* <p className="mb-1 mt-2">
                            <Link to="/Forgotpassword" className='btn btn-block btn-danger'>I forgot my password</Link>
                        </p> */}
              <p className="mt-3">
                <Link
                  to="/Register"
                  className="text-center btn btn-block btn-primary"
                >
                  Register a new membership
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
