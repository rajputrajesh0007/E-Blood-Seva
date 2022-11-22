import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import Request from "../bloodbank/Request";

const UserDashboard = () => {
  var [requestTable, setRequestTable] = useState([])
  var [requestHistoryTable, setRequestHistroryTable] = useState([])


  const loadRequest = () => {
    Axios.post("http://localhost:8080/rest/get_request_list", {
      user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
    }).then((response) => {
      if (response.data.resultCode === "0") {
        setRequestTable(response.data.resultDetails)
      }
    });
  }

  const loadRequestHistory = () => {
    Axios.post("http://localhost:8080/rest/get_request_history_list", {
      user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
    }).then((response) => {
      if (response.data.resultCode === "0") {
        setRequestHistroryTable(response.data.resultDetails)
      }
    });
  }

  useEffect(() => {
    loadRequest();
    loadRequestHistory();
  }, [])

  return (
    <div className="container bs-dash">
      <br></br>
      <h5>User Requests</h5>
      <hr></hr>
      <div className="card">
        <div className="card-header">
          User Requests
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div class="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Blood Bank Name</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestTable.map((val) => {
                      return (
                        <tr key={val.request_id}>
                          <td>{val.organization_name}</td>
                          <td>{val.blood_group}</td>
                          <td>{val.unit}</td>
                          <td>{val.user_type}</td>
                          <td>{val.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <div className="card">
        <div className="card-header">
          User Requests History
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div class="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Blood Bank Name</th>
                      <th scope="col">Blood Group</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestHistoryTable.map((val) => {
                      return (
                        <tr key={val.request_id}>
                          <td>{val.organization_name}</td>
                          <td>{val.blood_group}</td>
                          <td>{val.unit}</td>
                          <td>{val.user_type}</td>
                          <td>{val.status}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
