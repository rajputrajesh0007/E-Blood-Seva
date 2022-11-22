import React, { useEffect, useState } from "react";
import Axios from "axios";

const BloodBankDashboard = () => {
    var [newUnit, setNewUnit] = useState(0)
    var [requestTable, setRequestTable] = useState([])
    var [requestHistoryTable, setRequestHistroryTable] = useState([])
    var [campaignRequestTable, setCampaignRequestTable] = useState([])
    var [campaignRequestHistoryTable, setCampaignRequestHistoryTable] = useState([])
    var [stockTable, setStockTable] = useState([])

    const handleChoosedRow = (row) => {
        Axios.post("http://localhost:8080/rest/update_request", {
            id: row.request_id,
            status: 1
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow1 = (row) => {
        Axios.post("http://localhost:8080/rest/update_request", {
            id: row.request_id,
            status: 2
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow2 = (row) => {
        Axios.post("http://localhost:8080/rest/update_stock", {
            id: row.id,
            unit: (parseInt(row.unit) + 1)
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow3 = (row) => {
        Axios.post("http://localhost:8080/rest/update_stock", {
            id: row.id,
            unit: (parseInt(row.unit) - 1)
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow4 = (row) => {
        Axios.post("http://localhost:8080/rest/update_campaign_request", {
            id: row.id,
            status: 1
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow5 = (row) => {
        Axios.post("http://localhost:8080/rest/update_campaign_request", {
            id: row.id,
            status: 2
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };


    const handleChoosedRow6 = (row) => {
        Axios.post("http://localhost:8080/rest/update_stock", {
            id: row.id,
            unit: (parseInt(row.unit) + parseInt(newUnit))
        }).then((response) => {
            window.location = "/login/bbnk/dash";
        });
    };

    const handleChoosedRow7 = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setNewUnit(event.target.value)
        }
    };

    const loadRequest = () => {
        Axios.post("http://localhost:8080/rest/get_all_request_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setRequestTable(response.data.resultDetails)
            }
        });
    }

    const loadRequestHistory = () => {
        Axios.post("http://localhost:8080/rest/get_all_request_history_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setRequestHistroryTable(response.data.resultDetails)
            }
        });
    }


    const loadCampaignRequest = () => {
        Axios.post("http://localhost:8080/rest/get_all_campaign_request_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setCampaignRequestTable(response.data.resultDetails)
            }
        });
    }

    const loadCampaignRequestHistory = () => {
        Axios.post("http://localhost:8080/rest/get_all_campaign_request_history_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setCampaignRequestHistoryTable(response.data.resultDetails)
            }
        });
    }
    const loadStock = () => {
        Axios.post("http://localhost:8080/rest/get_all_stock_list", {
            user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
        }).then((response) => {
            if (response.data.resultCode === "0") {
                setStockTable(response.data.resultDetails)
            }
        });
    }

    useEffect(() => {
        loadStock();
        loadRequest();
        loadRequestHistory();
        loadCampaignRequest();
        loadCampaignRequestHistory();
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
                                            <th scope="col">User Name</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Is recurring request</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requestTable.map((val) => {
                                            return (
                                                <tr key={val.request_id}>
                                                    <td>{val.full_name}</td>
                                                    <td>{val.blood_group}</td>
                                                    <td>{val.unit}</td>
                                                    <td>{val.user_type}</td>
                                                    <td>{val.status}</td>
                                                    <td>{val.is_recurring_request}</td>
                                                    <td><button className="btn btn-outline-danger btn-block"
                                                        color="secondary"
                                                        data-item={val}
                                                        onClick={() => handleChoosedRow(val)}
                                                    >
                                                        Approve&nbsp;<i className="fa fa-check" />
                                                    </button>&nbsp; <button className="btn btn-outline-danger btn-block"
                                                        color="secondary"
                                                        data-item={val}
                                                        onClick={() => handleChoosedRow1(val)}
                                                    >
                                                            Reject&nbsp;<i className="fa fa-close" />
                                                        </button></td>
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
                                            <th scope="col">User Name</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Is recurring request</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requestHistoryTable.map((val) => {
                                            return (
                                                <tr key={val.request_id}>
                                                    <td>{val.full_name}</td>
                                                    <td>{val.blood_group}</td>
                                                    <td>{val.unit}</td>
                                                    <td>{val.user_type}</td>
                                                    <td>{val.status}</td>
                                                    <td>{val.is_recurring_request}</td>
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
            <h5>Stocks</h5>
            <hr></hr>
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
                                            <th scope="col">Update</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stockTable.map((val) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{val.blood_group}</td>
                                                    <td>{val.unit}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-8">
                                                                <input onChange={e => setNewUnit(e.target.value)} type="number" placeholder="Unit" className="form-control" name="unit"
                                                                    required maxLength={4} />
                                                            </div>
                                                            <div className="col-4">
                                                                <button className="btn btn-outline-danger btn-block"
                                                                    color="secondary"
                                                                    data-item={val}
                                                                    onClick={() => handleChoosedRow6(val)}
                                                                >Update <i className="fa fa-save" /></button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <button className="btn btn-outline-danger btn-block"
                                                                    color="secondary"
                                                                    data-item={val}
                                                                    onClick={() => handleChoosedRow2(val)}
                                                                >
                                                                    &nbsp;<i className="fa fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-6">
                                                                <button className="btn btn-outline-danger btn-block"
                                                                    color="secondary"
                                                                    data-item={val}
                                                                    onClick={() => handleChoosedRow3(val)}
                                                                >
                                                                    &nbsp;<i className="fa fa-minus" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
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
                                            <th scope="col">Action</th>
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
                                                    <td><button className="btn btn-outline-danger btn-block"
                                                        color="secondary"
                                                        data-item={val}
                                                        onClick={() => handleChoosedRow4(val)}
                                                    >
                                                        Approve&nbsp;<i className="fa fa-check" />
                                                    </button>&nbsp; <button className="btn btn-outline-danger btn-block"
                                                        color="secondary"
                                                        data-item={val}
                                                        onClick={() => handleChoosedRow5(val)}
                                                    >
                                                            Reject&nbsp;<i className="fa fa-close" />
                                                        </button></td>
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

export default BloodBankDashboard;