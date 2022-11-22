import React, { useState } from "react";
import Axios from "axios";

const UserLogin = () => {
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false)

  const userLoginCheck = () => {
    setShowError(false)
    if (userUserName === "" || userPassword === "") {
      setShowError(true)
      setErrorMessage("Please provide user credentials")
      return false;
    } else {
      setShowError(false)
      setErrorMessage("")
      Axios.post("http://localhost:8080/user/login", {
        user_name: userUserName,
        password: userPassword,
      }).then((response) => {
        console.log(response)
        if (response.data.resultCode === "0") {
          let res = response.data.resultDetails
          let role = res[0].role_id;
          let user = res[0].user_id;
          localStorage.setItem('role_id', role);
          localStorage.setItem('user_id', user);
          if (role == 1 || role == 2) {
            window.location = "/login/usr/dash";
          } else if (role == 4) {
            window.location = "/login/bbnk/dash";
          } else if (role == 3) {
            window.location = "/login/ngo/dash";
          } else if (role == 5) {
            window.location = "/login/admin/dash";
          }
        } else {
          setShowError(true)
          setErrorMessage(response.data.resultDetails)
        }
      });
    }
  };

  return (
    <div className="container">
      <br></br>
      {showError ? <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Alert
            </div>
            <div className="card-body">
              <div className="error">
                {errorMessage}
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div> : null}
      <p></p>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Sign In
            </div>
            <div className="card-body">
              <form>
                <div>
                  <input type="text" placeholder="User Name" className="form-control" name="username" onChange={(e) => {
                    setuserUserName(e.target.value);
                  }} required></input>
                </div>
                <p></p>
                <div>
                  <input type="password" placeholder="Password" className="form-control" name="password" onChange={(e) => {
                    setuserPassword(e.target.value);
                  }} required></input>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger btn-block" onClick={userLoginCheck}>Login &nbsp;<i className="fa fa-sign-in"></i></button>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>

  );
};

export default UserLogin;
