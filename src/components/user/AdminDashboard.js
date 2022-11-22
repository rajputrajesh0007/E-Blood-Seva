import React, { useEffect, useState } from "react";
import Axios from "axios";

const AdminDashboard = () => {
    var [requestTable, setRequestTable] = useState([])
    var [campaignRequestTable, setCampaignRequestTable] = useState([])
    var [stockTable, setStockTable] = useState([])

    const loadStock  = () => {
        Axios.get("http://localhost:8080/rest/get_all_stock_list_bank_wise", (req, res) => { }).then(
            (response) => {
                setStockTable(response.data.resultDetails);
            }
        );
    }

    const loadRequest = () => {
        Axios.get("http://localhost:8080/rest/get_all_request_status_list", (req, res) => { }).then(
            (response) => {
                setRequestTable(response.data.resultDetails);
            }
        );
    }

    const loadCampaignRequest = () => {
        Axios.get("http://localhost:8080/rest/get_all_campaign_request_status_list", (req, res) => { }).then(
            (response) => {
                setCampaignRequestTable(response.data.resultDetails);
            }
        );
    }

    useEffect(() => {
        loadStock()
        loadRequest();
        loadCampaignRequest();
    }, [])

    return (
        <div className="container bs-dash">
            <br></br>
            <h5>Requests</h5>
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
                                            <th scope="col">User Name</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Created Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requestTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.organization_name}</td>
                                                    <td>{val.full_name}</td>
                                                    <td>{val.blood_group}</td>
                                                    <td>{val.unit}</td>
                                                    <td>{val.user_type}</td>
                                                    <td>{val.status}</td>
                                                    <td>{val.created_on}</td>
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
            <h5>Campaign</h5>
            <hr></hr>
            <div className="card">
                <div className="card-header">
                    Campaign Requests
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div class="table-responsive-lg">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Blood Bank Name</th>
                                            <th scope="col">Ngo Name</th>
                                            <th scope="col">Campaign Name</th>
                                            <th scope="col">Campaign Date</th>
                                            <th scope="col">Campaign Venue</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Created Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaignRequestTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.organization_name}</td>
                                                    <td>{val.full_name}</td>
                                                    <td>{val.campaign_name}</td>
                                                    <td>{val.campaign_date}</td>
                                                    <td>{val.campaign_venue}</td>
                                                    <td>{val.unit}</td>
                                                    <td>{val.status}</td>
                                                    <td>{val.created_on}</td>
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
            <h5>Stock</h5>
            <hr></hr>
            <div className="card">
                <div className="card-header">
                    Blood stock
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div class="table-responsive-lg">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Blood Bank Name</th>
                                            <th scope="col">Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stockTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.organization_name}</td>
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

export default AdminDashboard;