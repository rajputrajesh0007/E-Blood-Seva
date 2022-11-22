import React, { useEffect, useState } from "react";
import Axios from "axios";
import home from "../../assets/img/home.jpg";


const Dashboard = () => {
  const [bloodTable, setbloodTable] = useState([]);
  const [bloodCompatibilityTable, setbloodCompatabilityTable] = useState([])
  const [campaignRequestTable, setCampaignRequestTable] = useState([])

  const loadDataOnlyOnce = () => {
    Axios.get("http://localhost:8080/rest/get_blood_stock", (req, res) => { }).then(
      (response) => {
        setbloodTable(response.data.resultDetails);
      }
    );
  }

  const loadCampaignRequest = () => {
    Axios.get("http://localhost:8080/rest/get_all_campaign_request_status_list", (req, res) => { }).then(
      (response) => {
        let list = []
        for (const iterator of response.data.resultDetails) {
          if (iterator.status == "Approved") {
            list.push(iterator)
          }
        }
        setCampaignRequestTable(list);
      }
    );
  }

  const loadData = () => {
    let list = [
      {
        "blood_type": "A+",
        "donate_blood_to": "A+ AB+",
        "receive_blood_from": "A+ A- O+ O-",
        "id": 1
      },
      {
        "blood_type": "O+",
        "donate_blood_to": "A+ O+ B+ AB+",
        "receive_blood_from": "O+ O-",
        "id": 2
      },
      {
        "blood_type": "B+",
        "donate_blood_to": "B+ AB+",
        "receive_blood_from": "B+ B- O+ O-",
        "id": 3
      },
      {
        "blood_type": "AB+",
        "donate_blood_to": "AB+",
        "receive_blood_from": "Everyone",
        "id": 4
      },
      {
        "blood_type": "A-",
        "donate_blood_to": "A+ A- AB+ AB-",
        "receive_blood_from": "A- O-",
        "id": 5
      },
      {
        "blood_type": "O-",
        "donate_blood_to": "Everyone",
        "receive_blood_from": "O-",
        "id": 6
      },
      {
        "blood_type": "B-",
        "donate_blood_to": "B- B+ AB+ AB-",
        "receive_blood_from": "B- O-",
        "id": 7
      },
      {
        "blood_type": "AB-",
        "donate_blood_to": "AB+ AB-",
        "receive_blood_from": "AB- A- B- O-",
        "id": 8
      }
    ]
    setbloodCompatabilityTable(list)
  }

  useEffect(() => {
    loadCampaignRequest();
    loadDataOnlyOnce();
    loadData()
  }, [])


  return (
    <div className="container bs-dash">
      <br></br>
      <img src={home} alt="Home" width="100%" height="auto" />
      <hr></hr>
      <h5>Campaigns</h5>
      <hr></hr>
      <div className="card">
        <div className="card-header">
          Blood Campaigns
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <div class="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Campaign Name</th>
                      <th scope="col">Campaign Date</th>
                      <th scope="col">Campaign Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignRequestTable.map((val) => {
                      return (
                        <tr key={val.id}>
                          <td>{val.campaign_name}</td>
                          <td>{val.campaign_date}</td>
                          <td>{val.campaign_venue}</td>
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
      <hr></hr>
      <h5>Compatible bloods & Blood stocks</h5>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Compatible Blood Type Donar & Seeker
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div class="table-responsive-lg">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Blood Type</th>
                          <th scope="col">Donate Blood To</th>
                          <th scope="col">Receive Blood From</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bloodCompatibilityTable.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td>{val.blood_type}</td>
                              <td>{val.donate_blood_to}</td>
                              <td>{val.receive_blood_from}</td>
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
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              Blood Stock
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div class="table-responsive-lg">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Blood Group</th>
                          <th scope="col">Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bloodTable.map((val) => {
                          return (
                            <tr key={val.b_id}>
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
      </div>
      <hr></hr>
      <h5>About Us</h5>
      <p id="para"> The purpose of E-Blood Seva project  is to develop a blood management information system to assist in the management of blood donor records and ease/or control the distribution of blood in various parts of the country basing on the demands.
        The main objective of the study was to create electronic blood donor management information system in order to assist in the management of blood donor records, planning and share information in a more confidential, convenient and secure way using modern technology.
        The system consists of process of managing the blood requirement of needy patients with free of cost. In this system if any patient come to our website and post the his/her requirement. (The requirement can be of Single time or recurring type.) After posting requirement the patient  it shows the result of in which he/she find blood  in government/private blood bank and same Donor can donate the blood in Nearest Blood Bank Available.
        If the blood is not available in any of the blood bank then it gives result as a list containing name, contact number and address of donor matching with requirement and admin team and donors who match requirement get the text message of requirement in order to fulfil the requirement.</p>
    </div>
  );
};

export default Dashboard;
