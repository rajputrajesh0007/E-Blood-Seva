import React, { useState, useEffect } from "react";
import Axios from "axios";


const CampaignRequest = () => {
    //variables
    var [bloodBank, setBloodBank] = useState([]);
    const [bloodBankValue, setBloodBankValue] = useState("")
    const [requestUnit, setRequestUnit] = useState(100)
    const [campaignName, setCampaignName] = useState("")
    const [campaignDate, setCampaignDate] = useState("")
    const [campaignVenue, setCampaignVenue] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false)

    const handleChangeRequestUnit = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setRequestUnit(event.target.value)
        }
    }

    const handleChangeCampaignName = (event) => {
        setCampaignName(event.target.value)
    }

    const handleChangeCampaignDate = (event) => {
        setCampaignDate(event.target.value)
    }

    const handleChangeCampaignVenue = (event) => {
        setCampaignVenue(event.target.value)
    }

    const handleChangeBloodBank = (event) => {
        setBloodBankValue(event.target.value)
    }

    const loadBloodBanks = () => {
        Axios.get("http://localhost:8080/rest/get_blood_bank_list", (req, res) => { }).then(
            (response) => {
                setBloodBank(response.data.resultDetails);
            }
        );
    }


    useEffect(() => {
        loadBloodBanks();
    }, [])

    const requestCampaign = () => {
        if (bloodBankValue === "") {
            setShowError(true)
            setErrorMessage("Please select blood back")
        } else if (campaignName === "") {
            setShowError(true)
            setErrorMessage("Please enter Campaign Name")
        } else if (campaignDate === "") {
            setShowError(true)
            setErrorMessage("Please enter Campaign Date")
        } else if (campaignVenue === "") {
            setShowError(true)
            setErrorMessage("Please enter Campaign Venue")
        } else if (requestUnit === "") {
            setShowError(true)
            setErrorMessage("Please enter unit")
        } else {
            Axios.post("http://localhost:8080/rest/add_campaign_request", {
                blood_bank_id: bloodBankValue,
                unit: requestUnit == "" ? 100 : requestUnit,
                campaign_name: campaignName,
                campaign_date: campaignDate,
                campaign_venue: campaignVenue,
                status: 0,
                user_id: localStorage.getItem("user_id") === "" ? 0 : localStorage.getItem("user_id"),
            }).then((response) => {
                if (response.data.resultCode === "0") {
                    window.location = "/login/ngo/dash";
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
                                </div>
                                <p></p>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Campaign Name</label>
                                    </div>
                                    <div className="col-9">
                                        <input value={campaignName} onChange={handleChangeCampaignName} type="text" placeholder="Campaign Name" className="form-control" name="campaign_name"
                                            required ></input>
                                    </div>
                                </div>
                                <p></p>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Campaign Date</label>
                                    </div>
                                    <div className="col-9">
                                        <input value={campaignDate} onChange={handleChangeCampaignDate} type="date" placeholder="Campaign Date" className="form-control" name="campaign_date"
                                            required ></input>
                                    </div>
                                </div>
                                <p></p>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Campaign Venue</label>
                                    </div>
                                    <div className="col-9">
                                        <input value={campaignVenue} onChange={handleChangeCampaignVenue} type="text" placeholder="Campaign Venue" className="form-control" name="campaign_venue"
                                            required ></input>
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
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-danger btn-block" onClick={requestCampaign}>Submit&nbsp;<i className="fa fa-plus" /></button>
                        </div>
                    </div>
                </div >
                <div className="col-3"></div>
            </div >
        </div >
    );
};
export default CampaignRequest;
