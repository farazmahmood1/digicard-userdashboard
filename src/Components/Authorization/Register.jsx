import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Baseurl from "../SourceFiles/Baseurl";
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmPassword, setCnfrmPassword] = useState("");
    const [fieldStatus, setFieldStatus] = useState(false);

    const signUp = () => {
        if (!fname && !lname && !email && !password && !cnfrmPassword) {
            setFieldStatus(true);
            toast.warn("Please fill all fields");
        } else {
            const userObj = {
                firstname: fname,
                lastname: lname,
                email: email,
                password: password,
                password_confirmation: cnfrmPassword,
            };

            axios
                .post(`${Baseurl}createcustomer`, userObj)
                .then((res) => {
                    console.log(res);
                    toast.success("Registerred successfully");
                    setInterval(() => {
                        // window.location.reload(true)
                        navigate("/");
                    }, 2000);
                })
                .catch((err) => {
                    console.log(err);
                    toast.warn("Error while registering user");
                });
        }
    };

    return (
        <div>
            <div className="hold-transition register-page">
                <div className="register-box">
                    <div className="register-logo">
                        <a>
                            <b>Digi</b>CARD
                        </a>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <div>
                                <div
                                    className="form-control formStyle d-flex"
                                    style={{
                                        borderColor:
                                            fname === "" && fieldStatus === true ? "red" : "#ced4da",
                                        marginTop: "20px",
                                    }}
                                >
                                    <input
                                        type="text"
                                        className=" placeHolderStyle"
                                        placeholder="First name"
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                    <span className="fas fa-user" />
                                </div>
                                <p>
                                    {fname === "" && fieldStatus === true ? (
                                        <span className="text-danger">Input field is empty</span>
                                    ) : (
                                        ""
                                    )}
                                </p>

                                <div
                                    className="form-control formStyle d-flex"
                                    style={{
                                        borderColor:
                                            lname === "" && fieldStatus === true ? "red" : "#ced4da",
                                    }}
                                >
                                    <input
                                        type="text"
                                        className="placeHolderStyle"
                                        placeholder="Last Name"
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                    <span className="fa-solid fa-user" />
                                </div>
                                <p>
                                    {lname === "" && fieldStatus === true ? (
                                        <span className="text-danger">Input field is empty</span>
                                    ) : (
                                        ""
                                    )}
                                </p>

                                <div
                                    className="mt-3 form-control formStyle d-flex"
                                    style={{
                                        borderColor:
                                            email === "" && fieldStatus === true ? "red" : "#ced4da",
                                    }}
                                >
                                    <input
                                        type="email"
                                        className="placeHolderStyle "
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="fas fa-envelope" />
                                </div>
                                <p>
                                    {email === "" && fieldStatus === true ? (
                                        <span className="text-danger">Input field is empty</span>
                                    ) : (
                                        ""
                                    )}
                                </p>

                                <div
                                    className="form-control formStyle d-flex"
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

                                <div
                                    className="form-control formStyle d-flex"
                                    style={{
                                        borderColor:
                                            cnfrmPassword === "" && fieldStatus === true
                                                ? "red"
                                                : "#ced4da",
                                    }}
                                >
                                    <input
                                        type="password"
                                        className="placeHolderStyle"
                                        placeholder="Confirm Password"
                                        onChange={(e) => setCnfrmPassword(e.target.value)}
                                    />
                                    <span className="fas fa-lock" />
                                </div>
                                <p>
                                    {setCnfrmPassword === "" && fieldStatus === true ? (
                                        <span className="text-danger">Input field is empty</span>
                                    ) : (
                                        ""
                                    )}
                                </p>

                                <div className="row mt-1">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            &nbsp;
                                            <input
                                                type="checkbox"
                                                id="agreeTerms"
                                                name="terms"
                                                defaultValue="agree"
                                            />
                                            &nbsp;
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            className="btn btn-secondary btn-block"
                                            onClick={signUp}
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="/"
                                className="mt-2 btn btn-block btn-primary text-center"
                            >
                                I already have a membership
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
