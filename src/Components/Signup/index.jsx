import React, { useState } from "react";

export default function Signup() {
    const [signUpData, setSignUpData] = useState({});
    const [signInData, setSignInData] = useState({});

    const inputHandler = (e) => {};

    const signupHandler = (e) => {
        e.preventDefault();
        console.log("signup");
    };

    return (
        <div className="login-wrap">
            <div className="login-html">
                <input
                    id="tab-1"
                    type="radio"
                    name="tab"
                    className="sign-in"
                    checked
                />
                <label htmlFor="tab-1" className="tab">
                    Sign In
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                    Sign Up
                </label>
                <div className="login-form">
                    <form className="sign-in-htm" method="POST">
                        <input
                            type="hidden"
                            value="signin"
                            name="type"
                            onChange={inputHandler}
                        />
                        <div className="group">
                            <label htmlFor="user" className="label">
                                <b>Email</b>
                            </label>
                            <input
                                id="user"
                                type="text"
                                name="login_user_name"
                                className="input "
                                onChange={inputHandler}
                            />
                            <div
                                data-lastpass-icon-root="true"
                                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                            ></div>
                        </div>
                        <div className="group">
                            <label htmlFor="login_password" className="label">
                                <b>Password</b>
                            </label>
                            <input
                                id="login_password"
                                type="password"
                                name="login_password"
                                className="input "
                                data-type="password"
                            />
                            <div
                                data-lastpass-icon-root="true"
                                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                            ></div>
                        </div>
                        <div className="group">
                            <input
                                id="check"
                                type="checkbox"
                                className="check"
                                // checked=""
                            />
                            <label htmlFor="check">
                                <span className="icon"></span> Keep me Signed in
                            </label>
                        </div>
                        <div className="group">
                            <input
                                type="submit"
                                className="button"
                                value="Sign In"
                            />
                        </div>
                    </form>
                    <form
                        className="sign-up-htm"
                        method="POST"
                        onSubmit={signupHandler}
                    >
                        <input
                            type="hidden"
                            value="signup"
                            name="type"
                            onChange={inputHandler}
                        />
                        <div className="group">
                            <label htmlFor="user" className="label">
                                <b>FirstName</b>
                            </label>
                            <input
                                id="user"
                                type="text"
                                name="FirstName"
                                className="input "
                                value=""
                                onChange={inputHandler}
                            />
                            <div
                                data-lastpass-icon-root="true"
                                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                            ></div>
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">
                                <b>LastName</b>
                            </label>
                            <input
                                id="user"
                                type="text"
                                name="LastName"
                                className="input "
                                value=""
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="label">
                                <b>Email Address</b>
                            </label>
                            <input
                                id="email"
                                type="text"
                                name="Email"
                                className="input "
                                value=""
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">
                                <b>Password</b>
                            </label>
                            <input
                                id="pass"
                                type="password"
                                name="Password"
                                className="input "
                                data-type="password"
                            />
                            <div
                                className="passwordStrenth"
                                id="passwordStrenth"
                            ></div>
                            <div
                                data-lastpass-icon-root="true"
                                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                            ></div>
                        </div>
                        <div className="group">
                            <label htmlFor="confirm_pass" className="label">
                                <b>Confirm Password</b>
                            </label>
                            <input
                                id="confirm_pass"
                                type="password"
                                name="ConfirmPassword"
                                className="input "
                                data-type="password"
                            />
                            <div
                                data-lastpass-icon-root="true"
                                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
                            ></div>
                        </div>
                        <div className="group">
                            <label htmlFor="phone" className="label">
                                <b>Phone Number</b>
                            </label>
                            <input
                                id="phone"
                                type="phone"
                                name="PhoneNumber"
                                className="input "
                                data-type="phone"
                                value=""
                                onChange={inputHandler}
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="user-type" className="label">
                                <b>User Type</b>
                            </label>
                            <select
                                id="user-type"
                                name="UserType"
                                className="input "
                            >
                                <option value="">Select User Type</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                            </select>
                        </div>
                        <div className="group">
                            <input
                                type="submit"
                                className="button"
                                value="Sign Up"
                                onChange={inputHandler}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
