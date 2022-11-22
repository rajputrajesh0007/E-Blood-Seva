import React, { useEffect, useState } from "react";
import Axios from "axios";

const NgoDashboard = () => {
    var [campaignRequestTable, setCampaignRequestTable] = useState([])
    var [campaignRequestHistoryTable, setCampaignRequestHistoryTable] = useState([])

    const loadRequest = () => {
        Axios.post("http://localhost:8080/rest/get_campaign_request_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setCampaignRequestTable(response.data.resultDetails)
            }
        });
    }

    const loadRequestHistory = () => {
        Axios.post("http://localhost:8080/rest/get_campaign_request_history_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setCampaignRequestHistoryTable(response.data.resultDetails)
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
                                            <th scope="col">Campaign Name</th>
                                            <th scope="col">Campaign Date</th>
                                            <th scope="col">Campaign Venue</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaignRequestTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.campaign_name}</td>
                                                    <td>{val.campaign_date}</td>
                                                    <td>{val.campaign_venue}</td>
                                                    <td>{val.unit}</td>
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
                    Campaign Requests History
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
                                            <th scope="col">Unit</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {campaignRequestHistoryTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.campaign_name}</td>
                                                    <td>{val.campaign_date}</td>
                                                    <td>{val.campaign_venue}</td>
                                                    <td>{val.unit}</td>
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
export default NgoDashboard;
