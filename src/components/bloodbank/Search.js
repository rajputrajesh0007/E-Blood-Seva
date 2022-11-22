import React, { useState, useEffect } from "react";
import Axios from "axios";

const Search = () => {
  //variables
  var [district, setDistrict] = useState([]);
  var [taluka, setTaluka] = useState([]);
  var [bloodGroup, setbloodGroup] = useState([]);
  const [valueDistrict, setValueDistrict] = useState(0);
  const [valueTaluka, setValueTaluka] = useState('');
  const [value, setValue] = useState('Select Blood Group');
  const [searchList, setsearchList] = useState([]);

  const handleChangeDistrict = (event) => {
    setValueDistrict(event.target.value);
    loadTaluka(event.target.value)
  };

  const handleChangeTaluka = (event) => {
    setValueTaluka(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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

  useEffect(() => {
    localStorage.setItem("role_id", 0)
    localStorage.setItem("user_id", 0)
    loadDistrict();
    loadBloodGroup();
  }, [])

  const searchBlood = () => {
    Axios.post("http://localhost:8080/rest/search", {
      district_id: valueDistrict,
      taluka_id: valueTaluka,
      blood_group: value
    }).then((response) => {
      if (response.data.resultCode === "0") {
        setsearchList(response.data.resultDetails);
      }
    });
  };

  //returning
  return (
    <div className="container ">
      <br></br>
      <h5>Blood Stock Availability</h5>
      <hr></hr>
      <div className="card">
        <div className="card-header">
          Search Blood Stock
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-4">
                <select value={valueDistrict} onChange={handleChangeDistrict} className="form-control">
                  {district.map((option) => (
                    <option value={option.district_code}>{option.district_name}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select value={valueTaluka} onChange={handleChangeTaluka} className="form-control">
                  {taluka.map((option) => (
                    <option value={option.taluka_code}>{option.taluka_name}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <select value={value} onChange={handleChange} className="form-control">
                  {bloodGroup.map((option) => (
                    <option value={option.blood_group_name}>{option.blood_group_name}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button className="btn btn-outline-danger btn-block" onClick={searchBlood}>Search&nbsp;<i className="fa fa-search" /></button>
        </div>
      </div>
      <hr></hr>
      <div className="card">
        <div className="card-header">
          Blood Stock
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">NAME</th>
                      <th scope="col">BLOOD GROUP</th>
                      <th scope="col">UNIT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchList.map((val, i) => {
                      return (
                        <tr key={i}>
                          <td>{val.organization_name}</td>
                          <td>{val.blood_group}</td>
                          <td>{val.unit}</td>
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

export default Search;
