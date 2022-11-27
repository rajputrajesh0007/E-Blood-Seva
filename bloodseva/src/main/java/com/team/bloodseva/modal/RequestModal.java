package com.team.bloodseva.modal;

public class RequestModal {
	
	private int id;
	private int user_id;
	private int blood_bank_id;
	private int user_type;
	private int unit;
	private int status;
	private int is_recurring_request;
	private String blood_group;
	private String remark;
	private String campaign_name;
	private String campaign_date;
	private String campaign_venue;
	
	public RequestModal() {
		this.id = 0;
		this.user_id = 0;
		this.blood_bank_id = 0;
		this.user_type = 0;
		this.unit = 0;
		this.status = 0;
		this.is_recurring_request = 0;
		this.blood_group = "";
		this.remark = "";
		this.campaign_venue = "";
		this.campaign_date = "";
		this.campaign_venue = "";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getBlood_bank_id() {
		return blood_bank_id;
	}

	public void setBlood_bank_id(int blood_bank_id) {
		this.blood_bank_id = blood_bank_id;
	}

	public int getUser_type() {
		return user_type;
	}

	public void setUser_type(int user_type) {
		this.user_type = user_type;
	}

	public int getUnit() {
		return unit;
	}

	public void setUnit(int unit) {
		this.unit = unit;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getIs_recurring_request() {
		return is_recurring_request;
	}

	public void setIs_recurring_request(int is_recurring_request) {
		this.is_recurring_request = is_recurring_request;
	}

	public String getBlood_group() {
		return blood_group;
	}

	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getCampaign_name() {
		return campaign_name;
	}

	public void setCampaign_name(String campaign_name) {
		this.campaign_name = campaign_name;
	}

	public String getCampaign_date() {
		return campaign_date;
	}

	public void setCampaign_date(String campaign_date) {
		this.campaign_date = campaign_date;
	}

	public String getCampaign_venue() {
		return campaign_venue;
	}

	public void setCampaign_venue(String campaign_venue) {
		this.campaign_venue = campaign_venue;
	}

	@Override
	public String toString() {
		return "RequestModal [id=" + id + ", user_id=" + user_id + ", blood_bank_id=" + blood_bank_id + ", user_type="
				+ user_type + ", unit=" + unit + ", status=" + status + ", is_recurring_request=" + is_recurring_request
				+ ", blood_group=" + blood_group + ", remark=" + remark + ", campaign_name=" + campaign_name
				+ ", campaign_date=" + campaign_date + ", campaign_venue=" + campaign_venue + "]";
	}
	
	
}
