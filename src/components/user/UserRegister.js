import React, { useState, useEffect } from "react";
import Axios from "axios";

const UserRegister = () => {

  var [roleList, setRoleList] = useState([]);
  var [district, setDistrict] = useState([]);
  var [taluka, setTaluka] = useState([]);
  var [bloodGroup, setbloodGroup] = useState([]);
  var [genderList, setGenderList] = useState([]);
  const [showOrgnization, setShowOrgnization] = useState(false)
  const [showAge, setShowAge] = useState(false)
  const [showGender, setShowGender] = useState(false)
  const [showBloodGroup, setShowBloodGroup] = useState(false)
  const [valueDistrict, setValueDistrict] = useState("");
  const [valueTaluka, setValueTaluka] = useState("");
  const [value, setValue] = useState("");
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userMobileNo, setUserMobileNo] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userAge, setUserAge] = useState(18);
  const [userOrgnization, setUserOrgnization] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false)

  const handleChangeAge = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setUserAge(event.target.value)
    }
  }

  const handleChangeMobile = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setUserMobileNo(event.target.value)
    }
  }

  const handleChangeDistrict = (event) => {
    setShowError(false)
    setValueDistrict(event.target.value);
    loadTaluka(event.target.value)
  };

  const handleChangeTaluka = (event) => {
    setShowError(false)
    setValueTaluka(event.target.value);
  };

  const handleChange = (event) => {
    setShowError(false)
    setValue(event.target.value);
  };

  const handleChangeRole = (event) => {
    setShowError(false)
    setUserRole(event.target.value)
    if (event.target.value === "3" || event.target.value === "4") {
      setShowOrgnization(true)
      setShowGender(false)
      setShowAge(false)
      setShowBloodGroup(false)
    } else {
      setShowOrgnization(false)
      setShowGender(true)
      setShowAge(true)
      setShowBloodGroup(true)
    }
  };

  const handleChangeGender = (event) => {
    setShowError(false)
    setUserGender(event.target.value);
  };

  const loadBloodGroup = () => {
    Axios.get("http://localhost:8080/rest/get_blood_grpup", (req, res) => { }).then(
      (response) => {
        setbloodGroup(response.data.resultDetails);
      }
    );
  }

  const loadDistrict = () => {
    Axios.get("http://localhost:8080/rest/get_district", (req, res) => { }).then(
      (response) => {
        setDistrict(response.data.resultDetails);
      }
    );
  }

  const loadTaluka = (code) => {
    Axios.get("http://localhost:8080/rest/get_taluka?id=" + code, (req, res) => { }).then(
      (response) => {
        setTaluka(response.data.resultDetails);
      }
    );
  }


  const loadRole = (code) => {
    Axios.get("http://localhost:8080/rest/get_role", (req, res) => { }).then(
      (response) => {
        setRoleList(response.data.resultDetails);
      }
    );
  }

  const loadGender = (code) => {
    Axios.get("http://localhost:8080/rest/get_gender", (req, res) => { }).then(
      (response) => {
        setGenderList(response.data.resultDetails);
      }
    );
  }

  useEffect(() => {
    loadGender();
    loadRole();
    loadDistrict();
    loadBloodGroup();
  }, [])

  const submituserRegister = () => {
    if (userRole === "" || userRole === "6") {
      setShowError(true)
      setErrorMessage("Please select user role")
    } else if (userUserName === "") {
      setShowError(true)
      setErrorMessage("Please enter user name")
    } else if (userPassword === "") {
      setShowError(true)
      setErrorMessage("Please enter password")
    } else if (userFullName === "") {
      setShowError(true)
      setErrorMessage("Please enter name")
    } else if (userMobileNo === "") {
      setShowError(true)
      setErrorMessage("Please enter mobile no")
    } else if (userEmail === "") {
      setShowError(true)
      setErrorMessage("Please enter email")
    } else if (userAddress === "") {
      setShowError(true)
      setErrorMessage("Please enter address")
    } else if ((userGender === "" || userGender === "Select Gender") && (userRole === "1" || userRole === "2")) {
      setShowError(true)
      setErrorMessage("Please select gender")
    } else if (userAge === "" && (userRole === "1" || userRole === "2")) {
      setShowError(true)
      setErrorMessage("Please enter age")
    } else if (district === "" || district === "0") {
      setShowError(true)
      setErrorMessage("Please select District")
    } else if (taluka === "") {
      setShowError(true)
      setErrorMessage("Please select Taluka")
    } else if ((value === "" || value === "Select Blood Group") && (userRole === "1" || userRole === "2")) {
      setShowError(true)
      setErrorMessage("Please select Blood group")
    } else {
      if (userPassword.length < 8) {
        setShowError(true)
        setErrorMessage("Password must be 8-15 characters in length")
        return false
      }
      if (userMobileNo.length < 10) {
        setShowError(true)
        setErrorMessage("Please enter valid mobile no.")
        return false
      }
      if (!userMobileNo.match(/^\d{10}$/)) {
        setShowError(true)
        setErrorMessage("Please enter valid mobile no.")
        return false
      }
      let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regx.test(userEmail)) {
        setShowError(true)
        setErrorMessage("Please enter valid email address.")
        return false
      }
      if (userAge < 18) {
        setShowError(true)
        setErrorMessage("Please enter valid age.")
      }
      const regurl = "http://localhost:8080/user/register";
      Axios.post(regurl, {
        user_name: userUserName,
        password: userPassword,
        full_name: userFullName,
        organization_name: userOrgnization,
        email_id: userEmail,
        mobile_no: userMobileNo,
        user_age: userAge,
        blood_group: value === "" ? "AB-Ve" : value,
        address: userAddress,
        gender: userGender === "" ? "Male" : userGender,
        district_id: valueDistrict,
        taluka_id: valueTaluka,
        role: userRole === "" ? 1 : userRole
      }).then((response) => {
        if (response.data.resultCode === "0") {
          window.location = "/login/usr";
        } else {
          setShowError(true)
          setErrorMessage(response.data.resultDetails)
        }
      });
    }
  };

  return (
    <div className="container bs-dash">
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
              Sign Up
            </div>
            <div className="card-body">
              <form>
                <div>
                  <select value={userRole} onChange={handleChangeRole} className="form-control">
                    {roleList.map((option) => (
                      <option value={option.role_id}>{option.role_name}</option>
                    ))}
                  </select>
                </div>
                <p></p>
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
                <p></p>
                <div>
                  <input type="text" placeholder="Full Name" className="form-control" name="fullname" onChange={(e) => {
                    setUserFullName(e.target.value);
                  }} required></input>
                </div>
                <p></p>
                {showOrgnization ? <div>
                  <input type="text" placeholder="Blood Bank / NGO" className="form-control" name="organization" onChange={(e) => {
                    setUserOrgnization(e.target.value);
                  }} required></input>
                </div> : null}
                <p></p>
                <div>
                  <input type="text" value={userMobileNo} onChange={handleChangeMobile} placeholder="Mobile No" className="form-control" name="moblieno" required maxLength={10}></input>
                </div>
                <p></p>
                <div>
                  <input type="text" placeholder="Email" className="form-control" name="email" onChange={(e) => {
                    setUserEmail(e.target.value);
                  }} required></input>
                </div>
                <p></p>
                {showGender ? <div>
                  <select value={userGender} onChange={handleChangeGender} className="form-control">
                    {genderList.map((option) => (
                      <option value={option.name}>{option.name}</option>
                    ))}
                  </select>
                </div> : null}
                <p></p>
                {showAge ? <div>
                  <input type="text" value={userAge} onChange={handleChangeAge} placeholder="Age" className="form-control" name="age"
                    required maxLength={3}></input>
                </div> : null}
                <p></p>
                <div>
                  <textarea type="text" placeholder="Address" className="form-control" name="address" onChange={(e) => {
                    setUserAddress(e.target.value);
                  }} required></textarea>
                </div>
                <p></p>
                <div>
                  <select value={valueDistrict} onChange={handleChangeDistrict} className="form-control">
                    {district.map((option) => (
                      <option value={option.district_code}>{option.district_name}</option>
                    ))}
                  </select>
                </div>
                <p></p>
                <div>
                  <select value={valueTaluka} onChange={handleChangeTaluka} className="form-control">
                    {taluka.map((option) => (
                      <option value={option.taluka_code}>{option.taluka_name}</option>
                    ))}
                  </select>
                </div>
                <p></p>
                {showBloodGroup ? <div>
                  <select value={value} onChange={handleChange} className="form-control">
                    {bloodGroup.map((option) => (
                      <option value={option.blood_group_name}>{option.blood_group_name}</option>
                    ))}
                  </select>
                </div> : null}
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger btn-block" onClick={submituserRegister}>Submit&nbsp; <i className="fa fa-user-plus" /></button>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div >
  );
};

export default UserRegister;
