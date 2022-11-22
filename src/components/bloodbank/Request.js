import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import UserDashboard from "../user/UserDashboard";

const Request = () => {
  //variables
  var [bloodGroup, setbloodGroup] = useState([]);
  var [userType, setUserType] = useState([]);
  var [bloodBank, setBloodBank] = useState([]);
  var [isRecurringRequest, setIsRecurringRequest] = useState([]);
  const [bloodGroupValue, setBloodGroupValue] = useState("Select Blood Group")
  const [bloodBankValue, setBloodBankValue] = useState("")
  const [userTypeValue, setUserTypeValue] = useState(0)
  const [isRecurringRequestValue, setIsRecurringRequestValue] = useState(1)
  const [requestUnit, setRequestUnit] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false)

  const handleChangeRequestUnit = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setRequestUnit(event.target.value)
    }
  }

  const handleChangeBloodBank = (event) => {
    setBloodBankValue(event.target.value)
  }

  const handleChangeUserType = (event) => {
    setUserTypeValue(event.target.value)
  }

  const handleChangeBloodGroup = (event) => {
    setBloodGroupValue(event.target.value)
  }

  const handleChangeIsRecurringRequest = (event) => {
    setIsRecurringRequestValue(event.target.value)
  }

  const loadBloodBanks = () => {
    Axios.get("http://localhost:8080/rest/get_blood_bank_list", (req, res) => { }).then(
      (response) => {
        setBloodBank(response.data.resultDetails);
      }
    );
  }

  const loadAll = () => {
    setbloodGroup([{ "blood_group_name": "Select Blood Group", "id": "0" }, { "blood_group_name": "AB-Ve", "id": "1" }, { "blood_group_name": "AB+Ve", "id": "2" }, { "blood_group_name": "A-Ve", "id": "3" }, { "blood_group_name": "A+Ve", "id": "4" }, { "blood_group_name": "B-Ve", "id": "5" }, { "blood_group_name": "B+Ve", "id": "6" }, { "blood_group_name": "O-Ve", "id": "9" }, { "blood_group_name": "O+Ve", "id": "10" }])
    setUserType([{ "role_name": "Select Type", "role_id": "0" }, { "role_name": "Donar", "role_id": "1" }, { "role_name": "Seeker", "role_id": "2" }])
    setIsRecurringRequest([{ "id": 1, "name": "No" }, { "id": 2, "name": "Yes" }])
  }

  useEffect(() => {
    loadAll()
    loadBloodBanks();
  }, [])

  const requestBlood = () => {
    if (bloodBankValue === "") {
      setShowError(true)
      setErrorMessage("Please select blood back")
    } else if (requestUnit === "") {
      setShowError(true)
      setErrorMessage("Please enter unit")
    } else {
      Axios.post("http://localhost:8080/rest/add_request", {
        blood_bank_id: bloodBankValue,
        unit: requestUnit,
        user_type: userTypeValue,
        blood_group: bloodGroupValue,
        status: 0,
        is_recurring_request: isRecurringRequestValue,
        remark: "",
        user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
      }).then((response) => {
        if (response.data.resultCode === "0") {
          window.location = "/login/usr/dash";
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
      <h5>Request</h5>
      <hr></hr>
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
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Add Request
            </div>
            <div className="card-body">
              <form>
                <div>
                  <div className="row">
                    <div className="col-3">
                      <label>Blood Bank</label>
                    </div>
                    <div className="col-9">
                      <select value={bloodBankValue} onChange={handleChangeBloodBank} className="form-control">
                        {bloodBank.map((option) => (
                          <option value={option.user_id}>{option.organization_name}</option>
                        ))}
                      </select>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label>Request Type</label>
                  </div>
                  <div className="col-9">
                    <select value={userTypeValue} onChange={handleChangeUserType} className="form-control">
                      {userType.map((option) => (
                        <option value={option.role_id}>{option.role_name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <p></p>
                <div className="row">
                  <div className="col-3">
                    <label>Blood Group</label>
                  </div>
                  <div className="col-9">
                    <select value={bloodGroupValue} onChange={handleChangeBloodGroup} className="form-control">
                      {bloodGroup.map((option) => (
                        <option value={option.blood_group_name}>{option.blood_group_name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <p></p>
                <div className="row">
                  <div className="col-3">
                    <label>Unit</label>
                  </div>
                  <div className="col-9">
                    <input value={requestUnit} onChange={handleChangeRequestUnit} type="text" placeholder="Unit" className="form-control" name="unit"
                      required maxLength={4} ></input>
                  </div>
                </div>
                <p></p>
                <div className="row">
                  <div className="col-3">
                    <label>is Recurring Request</label>
                  </div>
                  <div className="col-9">
                    <select value={isRecurringRequestValue} onChange={handleChangeIsRecurringRequest} className="form-control">
                      {isRecurringRequest.map((option) => (
                        <option value={option.id}>{option.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger btn-block" onClick={requestBlood}>Submit&nbsp;<i className="fa fa-plus"/></button>
            </div>
          </div>
        </div >
        <div className="col-3"></div>
      </div >
    </div >
  );
};
export default Request;
